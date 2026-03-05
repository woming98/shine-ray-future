/**
 * 答案输入组件
 */

interface AnswerInputProps {
  type: 'mc' | 'traditional' | 'explanation';
  options?: string[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function AnswerInput({ type, options, value, onChange, disabled }: AnswerInputProps) {
  if (type === 'mc' && options) {
    return (
      <div className="space-y-2">
        {options.map((option, index) => {
          const optionLabel = String.fromCharCode(65 + index);
          const isSelected = value === optionLabel;
          
          return (
            <button
              key={index}
              onClick={() => !disabled && onChange(optionLabel)}
              disabled={disabled}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              <span className="font-medium text-blue-600 mr-3">{optionLabel}.</span>
              <span className="text-gray-900">{option}</span>
            </button>
          );
        })}
      </div>
    );
  }
  
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder="请输入你的答案..."
      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
      rows={4}
    />
  );
}
