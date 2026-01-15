/**
 * 听力训练页面
 * 实现音频播放、Data File 互动、文本稿、笔记功能
 */

import { useState } from 'react';
import { Headphones } from 'lucide-react';
import { listeningMaterials, listeningQuestions } from '../data';
import { AudioPlayer } from '../components/Listening/AudioPlayer';
import { DataFileViewer } from '../components/Listening/DataFileViewer';
import { TranscriptViewer } from '../components/Listening/TranscriptViewer';
import { NotePad } from '../components/Listening/NotePad';
import { Card, Button } from '../components/UI';
import { useEnglishStore } from '../store/useStore';
import { ListeningMaterial } from '../types';

export default function ListeningPage() {
  const [selectedMaterial, setSelectedMaterial] = useState<ListeningMaterial | null>(null);
  const [notes, setNotes] = useState('');
  const { recordDailyStudy } = useEnglishStore();

  const handleSelectMaterial = (material: ListeningMaterial) => {
    setSelectedMaterial(material);
    setNotes('');
  };

  const handleSaveNotes = (savedNotes: string) => {
    setNotes(savedNotes);
    recordDailyStudy({
      minutes: 10,
      exercisesCompleted: 0,
      skillsStudied: ['listening'],
    });
  };

  if (!selectedMaterial) {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Headphones className="w-6 h-6 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">听力训练</h1>
          </div>
          <p className="text-gray-600 mb-6">
            选择一个听力材料开始练习。支持音频播放、Data File 处理、文本稿查看和笔记功能。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listeningMaterials.map((material) => (
              <Card
                key={material.id}
                onClick={() => handleSelectMaterial(material)}
                className="cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{material.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>难度：{material.difficulty}</span>
                  <span>时长：{Math.floor(material.duration / 60)} 分钟</span>
                </div>
                {material.dataFile && (
                  <div className="mt-2 text-sm text-emerald-600">
                    包含 Data File
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  const materialQuestions = listeningQuestions.filter(q => q.materialId === selectedMaterial.id);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{selectedMaterial.title}</h1>
          <Button variant="secondary" onClick={() => setSelectedMaterial(null)}>
            返回列表
          </Button>
        </div>

        {/* 音频播放器 */}
        <div className="mb-6">
          <AudioPlayer
            audioUrl={selectedMaterial.audioUrl}
          />
        </div>

        {/* Data File */}
        {selectedMaterial.dataFile && (
          <div className="mb-6">
            <DataFileViewer dataFile={selectedMaterial.dataFile} />
          </div>
        )}

        {/* 文本稿 */}
        <div className="mb-6">
          <TranscriptViewer transcript={selectedMaterial.transcript} />
        </div>

        {/* 笔记 */}
        <div className="mb-6">
          <NotePad initialNotes={notes} onSave={handleSaveNotes} autoSave={true} />
        </div>

        {/* 题目 */}
        {materialQuestions.length > 0 && (
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">听力题目</h2>
            <div className="space-y-4">
              {materialQuestions.map((question) => (
                <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-3">{question.question}</p>
                  {question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, index) => {
                        const optionKey = String.fromCharCode(65 + index);
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <span className="font-medium text-gray-700">{optionKey}.</span>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {question.timestamp && (
                    <p className="text-sm text-gray-500 mt-2">
                      音频时间：{Math.floor(question.timestamp / 60)}:{Math.floor(question.timestamp % 60).toString().padStart(2, '0')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}
      </Card>
    </div>
  );
}
