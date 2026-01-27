#!/usr/bin/env python3
"""
年度验收报告生成器
生成包含 counts/problems/globalImageAudit/parseWarnings 的验收报告
"""

import json
import argparse
from pathlib import Path
from typing import List, Dict, Optional
from datetime import datetime

from extract_m2_from_latex import LatexProblemParser
from image_mapper import ImageMapper


def generate_year_report(
    tex_file: str,
    images_dir: str,
    year: str,
    aliases_file: Optional[str] = None,
    output_dir: str = "data/m2/trig/reports"
) -> Dict:
    """生成年度验收报告"""
    
    # 1. 解析 LaTeX
    parser = LatexProblemParser(tex_file, images_dir)
    problems = parser.parse(year_filter=year)
    
    # 2. 图片映射
    mapper = ImageMapper(images_dir, aliases_file)
    
    # 3. 为每个题目映射图片
    problems_with_images = []
    for problem in problems:
        problem_dict = {
            "id": problem.id,
            "qno": problem.qno,
            "tex": {
                "startLine": problem.source["startLine"],
                "endLine": problem.source["endLine"],
                "hasContinueMarker": getattr(problem, 'has_continue_marker', False)
            },
            "parts": {
                "detected": [p.part for p in problem.parts],
                "missingExpectedPartsHint": None
            },
            "marks": {
                "totalMarksDetected": sum(p.marks for p in problem.parts if p.marks),
                "byPart": {p.part: p.marks for p in problem.parts if p.marks},
                "warnings": []
            },
            "images": {
                "explicitInTex": problem.assets["images"],
                "filesystemCandidates": [],
                "finalSelected": [],
                "missingFilesReferencedByTex": [],
                "orphansForThisId": []
            },
            "parseWarnings": []
        }
        
        # 映射图片
        image_result = mapper.map_problem_images(
            problem.id,
            problem.assets["images"]
        )
        
        problem_dict["images"]["filesystemCandidates"] = image_result["candidates"]
        problem_dict["images"]["finalSelected"] = image_result["matched"]
        problem_dict["images"]["missingFilesReferencedByTex"] = image_result["missing"]
        
        # 更新 problem 的 assets（使用匹配的图片）
        problem.assets["images"] = image_result["matched"]
        
        problems_with_images.append(problem_dict)
    
    # 4. 全局图片审计
    problem_dicts = [{
        "id": p.id,
        "assets": p.assets
    } for p in problems]
    global_audit = mapper.audit_all_problems(problem_dicts)
    
    # 5. 统计
    counts = {
        "problemsInTex": len(problems),
        "problemsInJson": len(problems),
        "withAnyImages": sum(1 for p in problems if p.assets["images"]),
        "withMarks": sum(1 for p in problems if any(part.marks for part in p.parts)),
        "withPartsDetected": sum(1 for p in problems if p.parts),
        "withAnswer": sum(1 for p in problems if any(part.answerLatex for part in p.parts)),
        "withSolution": sum(1 for p in problems if any(part.solutionSteps for part in p.parts))
    }
    
    # 6. 构建报告
    report = {
        "metadata": {
            "subject": "M2",
            "topic": "Trigonometry",
            "year": year,
            "sourceTex": str(tex_file),
            "generatedAt": datetime.now().isoformat(),
            "version": "v1"
        },
        "counts": counts,
        "problems": problems_with_images,
        "globalImageAudit": global_audit,
        "parseWarnings": parser.parse_warnings
    }
    
    return report


def main():
    parser = argparse.ArgumentParser(description='Generate year validation report')
    parser.add_argument('--tex', type=str,
                       default='M2_by_topic__Trigonometry/elegantbook-cn.tex',
                       help='Path to LaTeX source file')
    parser.add_argument('--images-dir', type=str,
                       default='M2_by_topic__Trigonometry',
                       help='Directory containing problem images')
    parser.add_argument('--year', type=str, required=True,
                       help='Year to generate report for (e.g., 2012)')
    parser.add_argument('--aliases', type=str, default=None,
                       help='Path to aliases JSON file')
    parser.add_argument('--output-dir', type=str,
                       default='data/m2/trig/reports',
                       help='Output directory for reports')

    args = parser.parse_args()

    # 创建输出目录
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    # 生成报告
    report = generate_year_report(
        args.tex,
        args.images_dir,
        args.year,
        args.aliases,
        str(output_dir)
    )

    # 保存报告
    report_file = output_dir / f"{args.year}_report.json"
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    print(f"Generated report for {args.year}")
    print(f"Output: {report_file}")
    print(f"\nSummary:")
    print(f"  Problems: {report['counts']['problemsInJson']}")
    print(f"  With images: {report['counts']['withAnyImages']}")
    print(f"  With parts: {report['counts']['withPartsDetected']}")
    print(f"  Missing images: {len(report['globalImageAudit']['missing'])}")
    print(f"  Orphan images: {len(report['globalImageAudit']['orphans'])}")
    print(f"  Parse warnings: {len(report['parseWarnings'])}")


if __name__ == '__main__':
    main()
