/**
 * 口语对练页面
 * 实现语音录制、AI 对话界面（占位）、评估结果展示
 */

import { useState } from 'react';
import { Mic } from 'lucide-react';
import { speakingPrompts } from '../data';
import { RecordingPanel } from '../components/Speaking/RecordingPanel';
import { AIConversation } from '../components/Speaking/AIConversation';
import { EvaluationPanel } from '../components/Speaking/EvaluationPanel';
import { Card, Button } from '../components/UI';
import { useEnglishStore } from '../store/useStore';
import { SpeakingPrompt, SpeakingEvaluation } from '../types';

export default function SpeakingPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<SpeakingPrompt | null>(null);
  const [evaluation, setEvaluation] = useState<SpeakingEvaluation | null>(null);
  const { addSpeakingRecording, updateRecordingEvaluation, recordDailyStudy } = useEnglishStore();

  const handleSelectPrompt = (prompt: SpeakingPrompt) => {
    setSelectedPrompt(prompt);
    setEvaluation(null);
  };

  const handleRecordingComplete = async (audioBlob: Blob) => {
    // 创建录音 URL
    const audioUrl = URL.createObjectURL(audioBlob);
    
    // 保存录音记录
    const duration = Math.floor(audioBlob.size / 1000); // 简化计算
    addSpeakingRecording({
      promptId: selectedPrompt!.id,
      audioUrl,
      duration: duration > 0 ? duration : 1, // 确保 duration 大于 0
    });

    // 模拟 AI 评估（实际应用中调用评估 API）
    setTimeout(() => {
      const mockEvaluation: SpeakingEvaluation = {
        pronunciation: 5,
        fluency: 6,
        vocabulary: 5,
        grammar: 6,
        interaction: selectedPrompt?.type === 'group-discussion' ? 5 : 0,
        total: selectedPrompt?.type === 'group-discussion' ? 27 : 22,
        feedback: {
          strengths: [
            '发音清晰，能够正确表达意思',
            '使用了适当的连接词',
          ],
          improvements: [
            '可以增加更多高级词汇',
            '注意语法准确性',
          ],
          pronunciationTips: [
            '注意单词重音',
            '练习连读技巧',
          ],
        },
        overallComment: '整体表现良好，发音清晰，但在词汇使用和语法准确性方面还有提升空间。',
      };
      setEvaluation(mockEvaluation);
      
      // 更新录音评估（延迟获取最新录音）
      setTimeout(() => {
        const recordings = useEnglishStore.getState().speakingRecordings;
        const lastRecording = recordings[recordings.length - 1];
        if (lastRecording) {
          updateRecordingEvaluation(lastRecording.id, mockEvaluation);
        }
      }, 100);
    }, 2000);

    const timeLimit = selectedPrompt?.timeLimit;
    if (timeLimit) {
      recordDailyStudy({
        minutes: Math.floor(timeLimit / 60),
        exercisesCompleted: 1,
        skillsStudied: ['speaking'],
      });
    }
  };

  if (!selectedPrompt) {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Mic className="w-6 h-6 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">口语对练</h1>
          </div>
          <p className="text-gray-600 mb-6">
            选择一个口语题目开始练习。支持语音录制、AI 对话和评估反馈。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {speakingPrompts.map((prompt) => (
              <Card
                key={prompt.id}
                onClick={() => handleSelectPrompt(prompt)}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{prompt.topic}</h3>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">
                    {prompt.type === 'group-discussion' ? '小组讨论' :
                     prompt.type === 'individual-response' ? '个人回应' : '演讲'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{prompt.prompt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>时长：{Math.floor(prompt.timeLimit / 60)} 分钟</span>
                  <span>难度：{prompt.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedPrompt.topic}</h1>
            <p className="text-gray-700">{selectedPrompt.prompt}</p>
          </div>
          <Button variant="secondary" onClick={() => setSelectedPrompt(null)}>
            返回列表
          </Button>
        </div>

        {selectedPrompt.tips && selectedPrompt.tips.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">提示：</h3>
            <ul className="space-y-1">
              {selectedPrompt.tips.map((tip, index) => (
                <li key={index} className="text-sm text-blue-800">• {tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 录音面板 */}
        <div className="mb-6">
          <RecordingPanel
            onRecordingComplete={handleRecordingComplete}
            maxDuration={selectedPrompt.timeLimit}
          />
        </div>

        {/* AI 对话（仅用于小组讨论） */}
        {selectedPrompt.type === 'group-discussion' && (
          <div className="mb-6">
            <AIConversation prompt={selectedPrompt.prompt} />
          </div>
        )}

        {/* 评估结果 */}
        {evaluation && (
          <EvaluationPanel evaluation={evaluation} />
        )}
      </Card>
    </div>
  );
}
