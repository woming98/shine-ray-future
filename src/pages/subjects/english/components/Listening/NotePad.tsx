/**
 * 笔记功能组件
 */

import { useState, useEffect } from 'react';
import { Save, FileText } from 'lucide-react';
import { Card, Button } from '../UI';

interface NotePadProps {
  initialNotes?: string;
  onSave?: (notes: string) => void;
  autoSave?: boolean;
}

export function NotePad({ initialNotes = '', onSave, autoSave = true }: NotePadProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (autoSave && notes !== initialNotes) {
      const timer = setTimeout(() => {
        setIsSaving(true);
        onSave?.(notes);
        setTimeout(() => setIsSaving(false), 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [notes, autoSave, onSave, initialNotes]);

  const handleSave = () => {
    setIsSaving(true);
    onSave?.(notes);
    setTimeout(() => setIsSaving(false), 500);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <h3 className="font-bold text-gray-900">笔记</h3>
        </div>
        {!autoSave && (
          <Button
            size="sm"
            onClick={handleSave}
            disabled={isSaving}
            icon={<Save className="w-4 h-4" />}
          >
            {isSaving ? '保存中...' : '保存'}
          </Button>
        )}
        {autoSave && isSaving && (
          <span className="text-sm text-emerald-600 flex items-center gap-1">
            <Save className="w-4 h-4" />
            自动保存中...
          </span>
        )}
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="在这里记录你的笔记..."
        className="w-full h-48 p-4 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none resize-none text-gray-900 placeholder-gray-400"
      />
    </Card>
  );
}
