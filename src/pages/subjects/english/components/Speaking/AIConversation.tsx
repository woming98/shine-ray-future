/**
 * AI 对话界面组件（占位）
 * 后续集成语音识别和合成
 */

import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Card, Button } from '../UI';

interface AIConversationProps {
  prompt: string;
  onResponse?: (response: string) => void;
}

export function AIConversation({ prompt, onResponse }: AIConversationProps) {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    { role: 'ai', content: prompt },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // 模拟 AI 回复（实际应用中调用语音识别和 AI API）
    setTimeout(() => {
      const aiResponse = {
        role: 'ai' as const,
        content: 'This is a placeholder response. In the future, this will use speech recognition and AI to generate real-time responses.',
      };
      setMessages(prev => [...prev, aiResponse]);
      onResponse?.(aiResponse.content);
    }, 1000);
  };

  return (
    <Card className="p-6">
      <h3 className="font-bold text-gray-900 mb-4">AI 对话</h3>
      
      <div className="space-y-4 mb-4 h-64 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-emerald-600" />
              </div>
            )}
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="输入回复..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none"
        />
        <Button onClick={handleSend} icon={<Send className="w-4 h-4" />}>
          发送
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        注意：当前为占位实现，后续将集成语音识别和 AI 对话功能
      </p>
    </Card>
  );
}
