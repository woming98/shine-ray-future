#!/usr/bin/env python3
"""
M2 Trigonometry PDF 内容提取工具
从 PDF 中提取问题、子题、公式、图表等信息，并输出为结构化 JSON
"""

import pdfplumber
import json
import re
import os
from pathlib import Path
from typing import List, Dict, Optional
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class ProblemPart:
    """问题子题"""
    part: str  # a, b, c等
    content: str  # 子题内容
    latex_formulas: List[str]  # 提取的 LaTeX 公式
    figure_refs: List[str]  # 图表引用（如"图1"）
    marks: Optional[int] = None  # 分数

@dataclass
class Problem:
    """问题"""
    id: str  # 0.1, 0.2等
    year: str  # 2012, 2013等
    question: str  # Q9, Q10等
    parts: List[ProblemPart]  # 子题列表
    theme: Optional[str] = None  # 主题标签（integration, identity等）
    difficulty: Optional[str] = None  # 难度（easy, medium, hard）
    figure_paths: List[str] = None  # 图表文件路径

def extract_latex_formulas(text: str) -> List[str]:
    """提取 LaTeX 公式（$...$ 格式）"""
    # 匹配 $...$ 格式的公式
    pattern = r'\$([^$]+)\$'
    formulas = re.findall(pattern, text)
    return formulas

def extract_figure_refs(text: str) -> List[str]:
    """提取图表引用（如"图1"、"Figure 4"）"""
    # 匹配中文和英文的图表引用
    patterns = [
        r'图(\d+)',
        r'Figure\s+(\d+)',
        r'圖(\d+)',
    ]
    refs = []
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        refs.extend([f"图{m}" if '图' in pattern or '圖' in pattern else f"Figure {m}" for m in matches])
    return list(set(refs))  # 去重

def extract_marks(text: str) -> Optional[int]:
    """提取分数（如"(4 marks)"）"""
    pattern = r'\((\d+)\s*marks?\)'
    match = re.search(pattern, text, re.IGNORECASE)
    if match:
        return int(match.group(1))
    return None

def extract_problem_id(text: str) -> Optional[tuple]:
    """提取问题编号，返回 (id, year, question)"""
    # 匹配 "问题 0.1 2012Q9" 或 "问题0.1 2012Q9"
    patterns = [
        r'问题\s*(\d+\.\d+)\s*(\d{4})Q(\d+)',
        r'問題\s*(\d+\.\d+)\s*(\d{4})Q(\d+)',
        r'问题\s*(\d+\.\d+)\s*(\d{4})\s*Q(\d+)',
    ]
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            return (match.group(1), match.group(2), match.group(3))
    return None

def extract_parts(text: str) -> List[tuple]:
    """提取子题部分（a, b, c等）"""
    parts = []
    # 匹配 (a), (b), (i), (ii) 等格式
    # 使用更精确的模式，避免匹配到公式中的括号
    pattern = r'\(([a-z]+)\)\s+([^(]+?)(?=\([a-z]+\)|$)'
    matches = re.finditer(pattern, text, re.DOTALL | re.IGNORECASE)
    
    for match in matches:
        part_label = match.group(1).lower()
        part_content = match.group(2).strip()
        # 清理内容：移除多余的空白和换行
        part_content = re.sub(r'\s+', ' ', part_content).strip()
        if part_content:
            parts.append((part_label, part_content))
    
    return parts

def classify_theme(text: str) -> str:
    """根据内容分类主题"""
    text_lower = text.lower()
    if 'prove' in text_lower or 'identity' in text_lower or '恒等式' in text:
        return 'identity'
    elif 'integrate' in text_lower or '积分' in text_lower or '∫' in text:
        return 'integration'
    elif 'differentiate' in text_lower or 'derivative' in text_lower or '导数' in text_lower:
        return 'differentiation'
    elif 'rate' in text_lower or 'change' in text_lower or '变化率' in text_lower:
        return 'rate-of-change'
    elif 'solve' in text_lower or 'equation' in text_lower or '方程' in text_lower:
        return 'equation'
    else:
        return 'general'

def extract_problems(pdf_path: str, output_json: str = 'm2_trigonometry_problems.json', output_images_dir: str = 'data/m2_images'):
    """提取 PDF 中的所有问题"""
    problems = []
    current_problem: Optional[Problem] = None
    
    # 创建输出目录
    images_dir = Path(output_images_dir)
    images_dir.mkdir(parents=True, exist_ok=True)
    
    with pdfplumber.open(pdf_path) as pdf:
        print(f"开始处理 PDF，共 {len(pdf.pages)} 页...")
        
        for page_num, page in enumerate(pdf.pages, 1):
            try:
                text = page.extract_text()
                if not text:
                    continue
                
                # 检查是否是新的问题
                problem_info = extract_problem_id(text)
                if problem_info:
                    # 保存之前的问题
                    if current_problem:
                        problems.append(current_problem)
                    
                    # 创建新问题
                    problem_id, year, question = problem_info
                    current_problem = Problem(
                        id=problem_id,
                        year=year,
                        question=question,
                        parts=[],
                        figure_paths=[]
                    )
                    print(f"找到问题 {problem_id}: {year}Q{question}")
                
                # 如果当前有问题，提取子题
                if current_problem:
                    # 提取子题部分
                    parts = extract_parts(text)
                    for part_label, part_content in parts:
                        # 检查是否已存在该子题
                        existing_part = next((p for p in current_problem.parts if p.part == part_label), None)
                        if existing_part:
                            # 合并内容（处理跨页情况）
                            existing_part.content += '\n\n' + part_content
                        else:
                            # 创建新子题
                            latex_formulas = extract_latex_formulas(part_content)
                            figure_refs = extract_figure_refs(part_content)
                            marks = extract_marks(part_content)
                            
                            problem_part = ProblemPart(
                                part=part_label,
                                content=part_content,
                                latex_formulas=latex_formulas,
                                figure_refs=figure_refs,
                                marks=marks
                            )
                            current_problem.parts.append(problem_part)
                    
                    # 更新主题分类
                    if not current_problem.theme:
                        full_text = ' '.join([p.content for p in current_problem.parts])
                        current_problem.theme = classify_theme(full_text)
                    
                    # 提取图表引用
                    figure_refs = extract_figure_refs(text)
                    for ref in figure_refs:
                        if ref not in [f for p in current_problem.parts for f in p.figure_refs]:
                            # 添加到第一个子题
                            if current_problem.parts:
                                current_problem.parts[0].figure_refs.append(ref)
                    
            except Exception as e:
                print(f"处理第 {page_num} 页时出错: {e}")
                continue
        
        # 保存最后一个问题
        if current_problem:
            problems.append(current_problem)
    
    # 转换为字典格式
    problems_dict = {
        "metadata": {
            "source": "M2_by_topic__Trigonometry-2.pdf",
            "extracted_at": datetime.now().isoformat(),
            "total_problems": len(problems),
            "version": "1.0"
        },
        "problems": [asdict(p) for p in problems]
    }
    
    # 保存 JSON
    output_path = Path(output_json)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(problems_dict, f, ensure_ascii=False, indent=2)
    
    print(f"\n提取完成！")
    print(f"- 共提取 {len(problems)} 个问题")
    print(f"- JSON 文件已保存到: {output_path}")
    print(f"- 图像目录: {images_dir}")
    
    # 打印统计信息
    themes = {}
    for p in problems:
        theme = p.theme or 'unknown'
        themes[theme] = themes.get(theme, 0) + 1
    
    print(f"\n主题分布:")
    for theme, count in sorted(themes.items()):
        print(f"  {theme}: {count} 个问题")
    
    return problems_dict

if __name__ == '__main__':
    # 获取脚本所在目录的父目录（项目根目录）
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    pdf_path = project_root / 'M2_by_topic__Trigonometry-2.pdf'
    output_json = project_root / 'data' / 'm2_trigonometry_problems.json'
    output_images = project_root / 'data' / 'm2_images'
    
    if not pdf_path.exists():
        print(f"错误: 找不到 PDF 文件: {pdf_path}")
        print("请确保 PDF 文件在项目根目录")
        exit(1)
    
    print(f"PDF 路径: {pdf_path}")
    print(f"输出 JSON: {output_json}")
    print(f"输出图像目录: {output_images}\n")
    
    extract_problems(str(pdf_path), str(output_json), str(output_images))
