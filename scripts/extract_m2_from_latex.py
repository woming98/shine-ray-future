#!/usr/bin/env python3
"""
M2 Trigonometry LaTeX 源文件解析工具
从 elegantbook-cn.tex 提取结构化题目数据，支持按年份过滤
"""

import re
import json
import os
import argparse
from pathlib import Path
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime
from enum import Enum


class ParseState(Enum):
    """解析状态"""
    OUTSIDE = "outside"
    IN_PROBLEM = "in_problem"
    IN_CONTINUATION = "in_continuation"


@dataclass
class ProblemPart:
    """问题子题"""
    part: str  # a, b, a.i, a.ii 等
    promptLatex: str  # 题干 LaTeX
    marks: Optional[int] = None
    answerLatex: Optional[str] = None
    hints: List[str] = None
    solutionSteps: List[Dict] = None
    usedKnowledge: List[str] = None
    usedDerivations: List[str] = None

    def __post_init__(self):
        if self.hints is None:
            self.hints = []
        if self.solutionSteps is None:
            self.solutionSteps = []
        if self.usedKnowledge is None:
            self.usedKnowledge = []
        if self.usedDerivations is None:
            self.usedDerivations = []


@dataclass
class Problem:
    """问题"""
    id: str  # 2012Q9
    year: str  # 2012
    paper: str  # DSE
    qno: str  # 9
    title: str  # 2012 DSE M2 Q9
    tags: List[str] = None
    difficulty: Optional[int] = None
    assets: Dict[str, List[str]] = None
    parts: List[ProblemPart] = None
    knowledgePointIds: List[str] = None
    derivationIds: List[str] = None
    source: Dict[str, any] = None
    has_continue_marker: bool = False

    def __post_init__(self):
        if self.tags is None:
            self.tags = []
        if self.assets is None:
            self.assets = {"images": [], "figures": []}
        if self.parts is None:
            self.parts = []
        if self.knowledgePointIds is None:
            self.knowledgePointIds = []
        if self.derivationIds is None:
            self.derivationIds = []


class LatexProblemParser:
    """LaTeX 题目解析器"""

    def __init__(self, tex_file: str, images_dir: str = None):
        self.tex_file = Path(tex_file)
        self.images_dir = Path(images_dir) if images_dir else self.tex_file.parent
        self.problems: List[Problem] = []
        self.parse_warnings: List[str] = []
        self.current_problem: Optional[Problem] = None
        self.current_problem_lines: List[Tuple[int, str]] = []
        self.state = ParseState.OUTSIDE
        self.continuation_target_id: Optional[str] = None

    def parse(self, year_filter: Optional[str] = None) -> List[Problem]:
        """解析 LaTeX 文件"""
        if not self.tex_file.exists():
            raise FileNotFoundError(f"LaTeX file not found: {self.tex_file}")

        with open(self.tex_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        for line_num, line in enumerate(lines, 1):
            self._process_line(line_num, line, year_filter)

        # 处理最后一个题目
        if self.current_problem:
            self._finalize_problem()

        return self.problems

    def _process_line(self, line_num: int, line: str, year_filter: Optional[str]):
        """处理单行"""
        # 检查是否开始新题目
        problem_match = re.search(r'\\begin\{problem\}\{(\d{4}Q\d+)\}', line)
        if problem_match:
            problem_id = problem_match.group(1)
            year = problem_id[:4]

            # 年份过滤
            if year_filter and year != year_filter:
                self.state = ParseState.OUTSIDE
                return

            # 完成上一个题目
            if self.current_problem:
                self._finalize_problem()

            # 开始新题目
            self._start_problem(line_num, problem_id, year)
            return

        # 检查是否结束题目
        if re.search(r'\\end\{problem\}', line):
            if self.state == ParseState.IN_PROBLEM:
                self._finalize_problem()
            self.state = ParseState.OUTSIDE
            return

        # 检查 continue 标记
        continue_match = re.search(r'continue\s+(\d{4}Q\d+)', line, re.IGNORECASE)
        if continue_match:
            target_id = continue_match.group(1)
            target_year = target_id[:4]
            
            # 年份过滤
            if year_filter and target_year != year_filter:
                return
            
            # 查找已存在的题目并标记（continue 标记通常在题目结束后出现）
            found_problem = False
            for problem in self.problems:
                if problem.id == target_id:
                    problem.has_continue_marker = True
                    found_problem = True
                    break
            
            if not found_problem:
                # 题目还未创建（可能是跨行或顺序问题），记录警告
                self.parse_warnings.append(
                    f"Line {line_num}: Found 'continue {target_id}' but problem not found yet"
                )
            # 注意：找到题目时不记录警告，因为这是正常的 LaTeX 结构
            
            self.continuation_target_id = target_id
            self.state = ParseState.IN_CONTINUATION
            return

        # 如果在题目内，收集内容
        if self.state == ParseState.IN_PROBLEM:
            self.current_problem_lines.append((line_num, line))
        elif self.state == ParseState.IN_CONTINUATION:
            # 合并到对应题目（暂时忽略，因为 continue 标记通常只是分页）
            pass

    def _start_problem(self, start_line: int, problem_id: str, year: str):
        """开始新题目"""
        # 解析题号
        qno_match = re.search(r'Q(\d+)', problem_id)
        qno = qno_match.group(1) if qno_match else ""

        self.current_problem = Problem(
            id=problem_id,
            year=year,
            paper="DSE",
            qno=qno,
            title=f"{year} DSE M2 Q{qno}",
            source={"texFile": str(self.tex_file.name), "startLine": start_line, "endLine": start_line}
        )
        # 初始化 continue 标记
        self.current_problem.has_continue_marker = False
        self.current_problem_lines = [(start_line, "")]
        self.state = ParseState.IN_PROBLEM

    def _finalize_problem(self):
        """完成当前题目解析"""
        if not self.current_problem:
            return

        # 合并所有行
        body_lines = [line for _, line in self.current_problem_lines]
        body_text = "".join(body_lines)

        # 更新结束行号
        if self.current_problem_lines:
            self.current_problem.source["endLine"] = self.current_problem_lines[-1][0]

        # 提取 parts
        self._extract_parts(body_text)

        # 提取图片
        self._extract_images(body_text)

        # 提取 marks（题目级别）
        self._extract_marks(body_text)

        # 提取元信息（如果存在）
        self._extract_metadata(body_text)

        self.problems.append(self.current_problem)
        self.current_problem = None
        self.current_problem_lines = []

    def _extract_parts(self, body_text: str):
        """提取子题"""
        # 匹配 (a), (b), (c) 等，但要排除子子题 (i), (ii), (iii)
        # 方法：先找到所有 (a-z)，然后过滤掉子子题
        all_letter_matches = list(re.finditer(r'\(([a-z])\)', body_text))
        part_matches = []
        
        for match in all_letter_matches:
            letter = match.group(1)
            pos = match.start()
            # 检查前面是否有另一个字母 part（排除子子题）
            # 子子题通常是紧跟在 part 后面的 (i), (ii) 等
            # 如果前面有 (a-z) part，且当前是 (i)，那可能是子子题
            # 更简单的方法：如果字母是 'i'，检查前面是否有其他 part
            if letter == 'i':
                # 检查前面是否有其他 part（在合理范围内，比如前 50 个字符）
                prev_text = body_text[max(0, pos-50):pos]
                # 如果前面有 (a-z) part（不是 i），且距离很近，那可能是子子题
                prev_part = re.search(r'\(([a-z])\)', prev_text)
                if prev_part and prev_part.group(1) != 'i':
                    # 可能是子子题，跳过
                    continue
            # 否则，这是一个真正的 part
            part_matches.append(match)

        if not part_matches:
            # 尝试匹配 \part{a} 格式
            part_pattern = r'\\part\{([a-z])\}\s*'
            part_matches = list(re.finditer(part_pattern, body_text))

        # 提取 stem（第一个 part 之前的内容）
        if part_matches:
            first_part_start = part_matches[0].start()
            stem_raw = body_text[:first_part_start].strip()
            
            # 清理 stem：移除 figure 环境、flushright、图片命令等
            stem_clean = re.sub(r'\\begin\{figure\}[\s\S]*?\\end\{figure\}', '', stem_raw)
            stem_clean = re.sub(r'\\includegraphics(\[[^\]]*\])?\{[^}]*\}', '', stem_clean)
            stem_clean = re.sub(r'\\caption\{[^}]*\}', '', stem_clean)
            stem_clean = re.sub(r'\\label\{[^}]*\}', '', stem_clean)
            stem_clean = re.sub(r'\\begin\{flushright\}.*?\\end\{flushright\}', '', stem_clean, flags=re.DOTALL)
            stem_clean = re.sub(r'\\newline\s*', '\n', stem_clean)
            stem_clean = re.sub(r'\\\\\s*', '\n', stem_clean)  # 将 \\ 转换为换行
            stem_clean = re.sub(r'\n{3,}', '\n\n', stem_clean)  # 清理多余空行
            stem_clean = stem_clean.strip()
            
            # 如果 stem 有内容，添加为特殊的 part
            if stem_clean:
                self.current_problem.parts.append(
                    ProblemPart(
                        part="stem",
                        promptLatex=stem_clean,
                        marks=None
                    )
                )

        # 找到所有 flushright 环境的位置
        flushright_pattern = r'\\begin\{flushright\}(.*?)\\end\{flushright\}'
        flushright_matches = list(re.finditer(flushright_pattern, body_text, re.DOTALL))

        for idx, part_match in enumerate(part_matches):
            part_letter = part_match.group(1)
            part_start = part_match.start()
            
            # 确定 part 的结束位置（下一个 part 的开始位置，或 problem 结束）
            if idx + 1 < len(part_matches):
                part_end = part_matches[idx + 1].start()
            else:
                # 最后一个 part，找到 \end{problem}
                end_match = re.search(r'\\end\{problem\}', body_text[part_start:])
                part_end = part_start + end_match.start() if end_match else len(body_text)

            # 提取 part 的完整内容（包括子子题和 flushright）
            part_section = body_text[part_start:part_end]
            
            # 查找该 part 后面最近的 flushright 环境中的 marks
            marks = None
            for flush_match in flushright_matches:
                flush_start = flush_match.start()
                # 如果 flushright 在当前 part 范围内
                if part_start <= flush_start < part_end:
                    marks_text = flush_match.group(1)
                    marks = self._extract_marks_from_text(marks_text)
                    if marks:
                        break  # 找到第一个 marks 就停止
            
            # 提取 part 内容（排除 flushright，但包括子子题）
            # 先移除 flushright 环境，再提取内容
            part_section_clean = re.sub(r'\\begin\{flushright\}.*?\\end\{flushright\}', '', part_section, flags=re.DOTALL)
            # 匹配 part 标记后的所有内容
            content_match = re.search(
                r'\([a-z]\)\s*(.*)',
                part_section_clean,
                re.DOTALL
            )
            
            if not content_match:
                continue
                
            part_content_raw = content_match.group(1).strip()
            
            # 移除下一个 part 的内容（如果有）
            # 由于我们已经过滤了 part_matches，现在 part_content_raw 中不应该包含下一个真正的 part
            # 但为了安全，我们还是检查一下
            # 查找下一个真正的 part（不是子子题）
            # 下一个 part 应该是字母在当前 part_letter 之后的
            next_part_match = None
            for next_idx in range(idx + 1, len(part_matches)):
                next_part = part_matches[next_idx]
                # 检查这个 part 是否在当前 part_content_raw 的范围内
                next_part_pos_in_raw = next_part.start() - part_start - (part_match.end() - part_match.start())
                if 0 <= next_part_pos_in_raw < len(part_content_raw):
                    next_part_match = type('Match', (), {
                        'start': lambda: next_part_pos_in_raw,
                        'group': lambda x: next_part.group(x)
                    })()
                    break
            
            if next_part_match:
                # 找到下一个 part，截断内容
                part_content = part_content_raw[:next_part_match.start()].strip()
            else:
                # 没有下一个 part，使用全部内容
                part_content = part_content_raw.strip()
            
            # 清理内容（但保留子子题结构）
            # 不要过度清理，因为子子题需要保持结构
            part_content = re.sub(r'\\newline\s*', '\n', part_content)
            # 只清理多余的连续空格，但保留换行
            part_content = re.sub(r'[ \t]+', ' ', part_content)  # 将多个空格/制表符合并为一个空格
            part_content = part_content.strip()

            # 检查是否有子子题 (i), (ii)
            # 匹配 (i) 或 (ii) 或 (iii) 等
            # 注意：需要匹配完整的罗马数字，如 (i), (ii), (iii)
            subpart_pattern = r'\((i{1,3})\)\s*'  # 匹配 (i), (ii), (iii)
            subpart_matches = list(re.finditer(subpart_pattern, part_content))
            
            if subpart_matches and len(subpart_matches) > 0:
                # 有子子题，创建层级结构
                # 提取每个子子题的内容
                for subpart_idx, subpart_match in enumerate(subpart_matches):
                    subpart_letter = subpart_match.group(1)  # 例如 "i" 或 "ii"
                    subpart_start_in_content = subpart_match.start()
                    
                    # 确定子子题的结束位置（在 part_content 中的位置）
                    if subpart_idx + 1 < len(subpart_matches):
                        subpart_end_in_content = subpart_matches[subpart_idx + 1].start()
                    else:
                        # 最后一个子子题
                        subpart_end_in_content = len(part_content)
                    
                    # 提取子子题内容
                    subpart_section = part_content[subpart_start_in_content:subpart_end_in_content]
                    # 移除子子题标记本身
                    subpart_content = re.sub(r'^\([i]+\)\s*', '', subpart_section).strip()
                    
                    # 清理内容
                    subpart_content = re.sub(r'\s+', ' ', subpart_content)
                    subpart_content = re.sub(r'\\newline\s*', '\n', subpart_content)
                    subpart_content = subpart_content.strip()
                    
                    if subpart_content:  # 确保内容不为空
                        # 正确构建 part_id: "a.i", "a.ii" 等
                        part_id = f"{part_letter}.{subpart_letter}"
                        
                        # marks 属于整个 part，只在最后一个子子题时关联
                        subpart_marks = marks if subpart_idx == len(subpart_matches) - 1 else None
                        
                        self.current_problem.parts.append(
                            ProblemPart(
                                part=part_id,
                                promptLatex=subpart_content,
                                marks=subpart_marks
                            )
                        )
            else:
                # 普通子题（没有子子题）
                if part_content:  # 确保内容不为空
                    self.current_problem.parts.append(
                        ProblemPart(
                            part=part_letter,
                            promptLatex=part_content,
                            marks=marks
                        )
                    )

    def _extract_marks_from_text(self, text: str) -> Optional[int]:
        """从文本中提取分数"""
        marks_pattern = r'\((\d+)\s+marks?\)'
        match = re.search(marks_pattern, text, re.IGNORECASE)
        if match:
            return int(match.group(1))
        return None

    def _extract_marks(self, body_text: str):
        """提取题目级别的分数（在 flushright 中）"""
        flushright_pattern = r'\\begin\{flushright\}(.*?)\\end\{flushright\}'
        matches = re.finditer(flushright_pattern, body_text, re.DOTALL)
        for match in matches:
            marks_text = match.group(1)
            marks = self._extract_marks_from_text(marks_text)
            # 如果题目没有 parts，marks 已经在 part 级别提取了
            # 这里暂时不处理题目级别的 marks

    def _extract_images(self, body_text: str):
        """提取图片引用"""
        # 匹配 \includegraphics{filename}
        image_pattern = r'\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}'
        matches = re.finditer(image_pattern, body_text)
        
        for match in matches:
            filename = match.group(1)
            # 移除可能的路径前缀
            filename = os.path.basename(filename)
            
            if filename not in self.current_problem.assets["images"]:
                self.current_problem.assets["images"].append(filename)

    def _extract_metadata(self, body_text: str):
        """提取元信息（tags, difficulty, knowledge, derivation）"""
        # 提取 \tags{...}
        tags_match = re.search(r'\\tags\{([^}]+)\}', body_text)
        if tags_match:
            tags_str = tags_match.group(1)
            self.current_problem.tags = [t.strip() for t in tags_str.split(',')]

        # 提取 \difficulty{...}
        difficulty_match = re.search(r'\\difficulty\{(\d+)\}', body_text)
        if difficulty_match:
            self.current_problem.difficulty = int(difficulty_match.group(1))

        # 提取 \knowledge{...}
        knowledge_match = re.search(r'\\knowledge\{([^}]+)\}', body_text)
        if knowledge_match:
            knowledge_str = knowledge_match.group(1)
            self.current_problem.knowledgePointIds = [k.strip() for k in knowledge_str.split(',')]

        # 提取 \derivation{...}
        derivation_match = re.search(r'\\derivation\{([^}]+)\}', body_text)
        if derivation_match:
            derivation_str = derivation_match.group(1)
            self.current_problem.derivationIds = [d.strip() for d in derivation_str.split(',')]


def main():
    parser = argparse.ArgumentParser(description='Extract M2 problems from LaTeX source')
    parser.add_argument('--tex', type=str, 
                       default='M2_by_topic__Trigonometry/elegantbook-cn.tex',
                       help='Path to LaTeX source file')
    parser.add_argument('--year', type=str, default=None,
                       help='Filter by year (e.g., 2012)')
    parser.add_argument('--output-dir', type=str,
                       default='data/m2/trig',
                       help='Output directory for JSON files')
    parser.add_argument('--images-dir', type=str, default=None,
                       help='Directory containing problem images')

    args = parser.parse_args()

    # 创建输出目录
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    # 解析
    parser_obj = LatexProblemParser(args.tex, args.images_dir)
    problems = parser_obj.parse(year_filter=args.year)

    # 生成输出文件名
    if args.year:
        output_file = output_dir / f"problems_{args.year}.json"
    else:
        output_file = output_dir / "problems_all.json"

    # 构建输出结构
    output_data = {
        "metadata": {
            "subject": "M2",
            "topic": "Trigonometry",
            "year": args.year if args.year else "all",
            "sourceTex": str(args.tex),
            "generatedAt": datetime.now().isoformat(),
            "version": "v1"
        },
        "problems": [asdict(p) for p in problems]
    }

    # 保存 JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print(f"Extracted {len(problems)} problems")
    print(f"Output: {output_file}")
    if parser_obj.parse_warnings:
        print(f"\nWarnings ({len(parser_obj.parse_warnings)}):")
        for warning in parser_obj.parse_warnings[:10]:  # 只显示前10个
            print(f"  - {warning}")
        if len(parser_obj.parse_warnings) > 10:
            print(f"  ... and {len(parser_obj.parse_warnings) - 10} more")


if __name__ == '__main__':
    main()
