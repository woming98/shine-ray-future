/**
 * 计算器模拟器组件
 * 展示常用计算器程序的使用方法
 */

import { useState } from 'react';
import { Card } from '../UI';
import { Calculator, Play, Copy } from 'lucide-react';
import { Button } from '../UI/Button';

interface CalculatorProgram {
  name: string;
  description: string;
  program: string;
  example: {
    inputs: Record<string, number>;
    output: string;
  };
}

const programs: CalculatorProgram[] = [
  {
    name: '二次方程求解',
    description: '求解 ax² + bx + c = 0',
    program: `PROGRAM: QUAD
:Input "A=",A
:Input "B=",B
:Input "C=",C
:Disp (-B+√(B²-4AC))/(2A)
:Disp (-B-√(B²-4AC))/(2A)`,
    example: {
      inputs: { A: 1, B: -5, C: 6 },
      output: 'x₁ = 3, x₂ = 2',
    },
  },
  {
    name: '联立方程组求解',
    description: '求解 ax + by = c, dx + ey = f',
    program: `PROGRAM: SYSTEM
:Input "A=",A
:Input "B=",B
:Input "C=",C
:Input "D=",D
:Input "E=",E
:Input "F=",F
:Disp (C*E-B*F)/(A*E-B*D)
:Disp (A*F-C*D)/(A*E-B*D)`,
    example: {
      inputs: { A: 1, B: 1, C: 5, D: 1, E: -1, F: 1 },
      output: 'x = 3, y = 2',
    },
  },
];

export function CalculatorSim() {
  const [selectedProgram, setSelectedProgram] = useState<CalculatorProgram | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">计算器程序</h2>
        </div>
        <p className="text-gray-600 mb-6">
          以下是一些常用的计算器程序，可以帮助你快速解决 MC 题目。
        </p>

        <div className="space-y-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-4 cursor-pointer hover:border-blue-300 transition-colors"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{program.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{program.description}</p>
                </div>
                <Play className="w-5 h-5 text-blue-600" />
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {selectedProgram && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">{selectedProgram.name}</h3>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => handleCopy(selectedProgram.program)}
              icon={copied ? <Copy className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            >
              {copied ? '已复制' : '复制程序'}
            </Button>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">程序代码：</h4>
            <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-900 overflow-x-auto">
              {selectedProgram.program}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">使用示例：</h4>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="mb-2">
                <span className="text-sm text-gray-600">输入：</span>
                <div className="mt-1">
                  {Object.entries(selectedProgram.example.inputs).map(([key, value]) => (
                    <span key={key} className="inline-block mr-4 text-sm">
                      {key} = {value}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-600">输出：</span>
                <span className="ml-2 font-medium text-blue-700">
                  {selectedProgram.example.output}
                </span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
