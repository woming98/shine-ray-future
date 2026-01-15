/**
 * Data File 互动界面组件
 * 支持標註、篩選、整合信息
 */

import { useState } from 'react';
import { Highlighter, FileText } from 'lucide-react';
import { DataFile } from '../../types';
import { Card, Button } from '../UI';

interface DataFileViewerProps {
  dataFile: DataFile;
  onSelect?: (data: any) => void;
}

export function DataFileViewer({ dataFile, onSelect }: DataFileViewerProps) {
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const key = `${rowIndex}-${colIndex}`;
    const newSelected = new Set(selectedCells);
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    setSelectedCells(newSelected);
  };

  const renderContent = () => {
    if (dataFile.type === 'table' && dataFile.content.headers && dataFile.content.rows) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-50">
                {dataFile.content.headers.map((header: string, index: number) => (
                  <th
                    key={index}
                    className="border border-emerald-200 px-4 py-2 text-left font-medium text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataFile.content.rows.map((row: any[], rowIndex: number) => (
                <tr key={rowIndex} className="hover:bg-emerald-50/50">
                  {row.map((cell: any, colIndex: number) => {
                    const key = `${rowIndex}-${colIndex}`;
                    const isSelected = selectedCells.has(key);
                    return (
                      <td
                        key={colIndex}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        className={`border border-emerald-200 px-4 py-2 cursor-pointer transition-colors ${
                          isSelected ? 'bg-yellow-200' : ''
                        }`}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (dataFile.type === 'text') {
      return (
        <div className="prose prose-emerald max-w-none">
          <p className="text-gray-800 whitespace-pre-wrap">{dataFile.content}</p>
        </div>
      );
    }

    return (
      <div className="text-gray-600">
        <p>数据格式：{dataFile.type}</p>
        <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
          {JSON.stringify(dataFile.content, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-gray-900">{dataFile.title}</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            icon={<Highlighter className="w-4 h-4" />}
            onClick={() => {
              // 导出选中的数据
              const selectedData = Array.from(selectedCells).map(key => {
                const [row, col] = key.split('-').map(Number);
                if (dataFile.content.rows) {
                  return dataFile.content.rows[row]?.[col];
                }
                return null;
              });
              onSelect?.(selectedData);
            }}
          >
            导出选中 ({selectedCells.size})
          </Button>
        </div>
      </div>

      {dataFile.description && (
        <p className="text-sm text-gray-600 mb-4">{dataFile.description}</p>
      )}

      {renderContent()}
    </Card>
  );
}
