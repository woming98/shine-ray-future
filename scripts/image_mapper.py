#!/usr/bin/env python3
"""
图片映射工具
根据题目 ID 和 tex 引用，匹配图片文件
"""

import os
import re
import json
from pathlib import Path
from typing import List, Dict, Set, Optional


class ImageMapper:
    """图片映射器"""

    def __init__(self, images_dir: str, aliases_file: Optional[str] = None):
        self.images_dir = Path(images_dir)
        self.aliases: Dict[str, str] = {}
        
        # 加载别名映射
        if aliases_file and Path(aliases_file).exists():
            with open(aliases_file, 'r', encoding='utf-8') as f:
                self.aliases = json.load(f)

        # 扫描所有图片文件
        self.available_images: Set[str] = set()
        if self.images_dir.exists():
            for ext in ['*.png', '*.jpg', '*.jpeg']:
                self.available_images.update(
                    f.name for f in self.images_dir.glob(ext)
                )

    def map_problem_images(self, problem_id: str, explicit_refs: List[str]) -> Dict[str, List[str]]:
        """
        映射题目的图片
        
        Returns:
            {
                "matched": [...],  # 成功匹配的图片
                "missing": [...],   # tex 引用但文件不存在
                "candidates": [...] # 文件系统候选（未在 tex 中显式引用）
            }
        """
        matched = []
        missing = []
        candidates = []

        # 1. 处理显式引用（优先）
        for ref in explicit_refs:
            # 应用别名映射
            actual_filename = self.aliases.get(ref, ref)
            
            if actual_filename in self.available_images:
                matched.append(actual_filename)
            else:
                missing.append(ref)

        # 2. 文件系统 fallback（查找可能的候选）
        # 匹配模式：ID*.png, ID_*.png, IDa.png, IDb.png 等
        base_patterns = [
            f"{problem_id}.png",
            f"{problem_id}_*.png",
            f"{problem_id}*.png",
            f"{problem_id}a.png",
            f"{problem_id}b.png",
            f"{problem_id}c.png",
        ]

        for pattern in base_patterns:
            for img_file in self.available_images:
                # 简单匹配（支持通配符）
                if self._match_pattern(pattern, img_file):
                    if img_file not in matched and img_file not in explicit_refs:
                        candidates.append(img_file)

        return {
            "matched": matched,
            "missing": missing,
            "candidates": candidates
        }

    def _match_pattern(self, pattern: str, filename: str) -> bool:
        """简单模式匹配（支持 * 通配符）"""
        # 将模式转换为正则表达式
        regex_pattern = pattern.replace('*', '.*').replace('.', r'\.')
        return bool(re.match(regex_pattern, filename))

    def audit_all_problems(self, problems: List[Dict]) -> Dict:
        """
        审计所有题目的图片映射
        
        Returns:
            {
                "missing": [...],      # tex 引用但文件不存在
                "orphans": [...],      # 文件存在但 tex 未引用
                "weirdNames": [...]    # 异常命名
            }
        """
        missing = []
        orphans = []
        weird_names = []

        # 收集所有 tex 引用的图片
        all_referenced: Set[str] = set()
        for problem in problems:
            problem_id = problem.get("id", "")
            explicit_refs = problem.get("assets", {}).get("images", [])
            for ref in explicit_refs:
                all_referenced.add(ref)
                all_referenced.add(self.aliases.get(ref, ref))

        # 检查 missing
        for ref in all_referenced:
            actual = self.aliases.get(ref, ref)
            if actual not in self.available_images:
                missing.append({
                    "referencedBy": "unknown",  # 可以后续补充
                    "file": ref
                })

        # 检查 orphans（文件存在但未引用）
        for img_file in self.available_images:
            # 检查是否是题目图片（匹配 YYYYQn 模式）
            if re.match(r'\d{4}Q\d+', img_file[:7]):  # 简单检查前7个字符
                if img_file not in all_referenced:
                    # 尝试推断题目 ID
                    match = re.match(r'(\d{4}Q\d+)', img_file)
                    suggested_id = match.group(1) if match else "unknown"
                    orphans.append({
                        "file": img_file,
                        "suggestedId": suggested_id,
                        "reason": "prefix match"
                    })

        # 检查异常命名
        for img_file in self.available_images:
            if not img_file.endswith(('.png', '.jpg', '.jpeg')):
                weird_names.append({
                    "file": img_file,
                    "reason": "no extension or non-standard naming",
                    "suggestedFix": "alias mapping"
                })
            elif ' ' in img_file or img_file != img_file.strip():
                weird_names.append({
                    "file": img_file,
                    "reason": "contains spaces or leading/trailing whitespace",
                    "suggestedFix": "rename file"
                })

        return {
            "missing": missing,
            "orphans": orphans,
            "weirdNames": weird_names
        }


def main():
    """命令行工具"""
    import argparse

    parser = argparse.ArgumentParser(description='Map problem images')
    parser.add_argument('--images-dir', type=str, required=True,
                       help='Directory containing problem images')
    parser.add_argument('--aliases', type=str, default=None,
                       help='Path to aliases JSON file')
    parser.add_argument('--problem-id', type=str, default=None,
                       help='Test mapping for a specific problem ID')
    parser.add_argument('--explicit-refs', type=str, nargs='*', default=[],
                       help='Explicit image references from tex')

    args = parser.parse_args()

    mapper = ImageMapper(args.images_dir, args.aliases)

    if args.problem_id:
        # 测试单个题目
        result = mapper.map_problem_images(args.problem_id, args.explicit_refs)
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print(f"Scanned {len(mapper.available_images)} images in {args.images_dir}")
        print(f"Available aliases: {len(mapper.aliases)}")


if __name__ == '__main__':
    main()
