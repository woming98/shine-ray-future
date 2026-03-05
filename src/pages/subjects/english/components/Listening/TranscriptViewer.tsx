/**
 * 文本稿查看组件
 */

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Card, Button } from '../UI';

interface TranscriptViewerProps {
  transcript: string;
}

export function TranscriptViewer({ transcript }: TranscriptViewerProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">文本稿</h3>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
          icon={isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        >
          {isVisible ? '隐藏' : '显示'}
        </Button>
      </div>

      {isVisible && (
        <div className="prose prose-emerald max-w-none">
          <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{transcript}</p>
        </div>
      )}
    </Card>
  );
}
