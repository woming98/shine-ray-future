/**
 * 文本编辑器组件
 * 支持字数统计和实时保存
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Save, FileText } from 'lucide-react';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  wordLimit?: { min: number; max: number };
  placeholder?: string;
  autoSave?: boolean;
}

export function TextEditor({
  value,
  onChange,
  wordLimit,
  placeholder = '开始写作...',
  autoSave = true,
}: TextEditorProps) {
  const [wordCount, setWordCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const words = value.trim().split(/\s+/).filter(w => w.length > 0);
    setWordCount(words.length);
  }, [value]);

  useEffect(() => {
    if (autoSave && value) {
      const timer = setTimeout(() => {
        setIsSaving(true);
        // 实际应用中这里可以调用保存 API
        setTimeout(() => setIsSaving(false), 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [value, autoSave]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const getWordCountColor = () => {
    if (!wordLimit) return 'text-gray-600';
    if (wordCount < wordLimit.min) return 'text-orange-600';
    if (wordCount > wordLimit.max) return 'text-red-600';
    return 'text-emerald-600';
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border-2 border-emerald-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-emerald-50 border-b border-emerald-200">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">写作编辑器</span>
          </div>
          {isSaving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm text-emerald-600"
            >
              <Save className="w-4 h-4" />
              <span>保存中...</span>
            </motion.div>
          )}
        </div>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-96 p-4 resize-none focus:outline-none text-gray-900 placeholder-gray-400"
          style={{ fontFamily: 'inherit' }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <span className={`text-sm font-medium ${getWordCountColor()}`}>
              字数：{wordCount}
            </span>
            {wordLimit && (
              <span className="text-sm text-gray-500 ml-2">
                ({wordLimit.min} - {wordLimit.max} 字)
              </span>
            )}
          </div>
        </div>
        {wordLimit && (
          <div className="flex-1 max-w-xs">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  wordCount < wordLimit.min
                    ? 'bg-orange-500'
                    : wordCount > wordLimit.max
                    ? 'bg-red-500'
                    : 'bg-emerald-500'
                }`}
                style={{
                  width: `${Math.min(100, (wordCount / wordLimit.max) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
