/**
 * 语音录制和播放组件
 */

import { useState, useRef } from 'react';
import { Mic, Play, Pause, Square, Download } from 'lucide-react';
import { Card, Button } from '../UI';

interface RecordingPanelProps {
  onRecordingComplete?: (audioBlob: Blob) => void;
  maxDuration?: number; // 秒
}

export function RecordingPanel({ onRecordingComplete, maxDuration = 120 }: RecordingPanelProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        onRecordingComplete?.(audioBlob);
        
        // 停止所有音频轨道
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);

      // 计时器
      timerRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev >= maxDuration) {
            stopRecording();
            return maxDuration;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (error) {
      console.error('无法访问麦克风:', error);
      alert('无法访问麦克风，请检查权限设置');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const togglePlayback = () => {
    if (!audioRef.current || !recordedAudio) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleDownload = () => {
    if (!recordedAudio) return;
    const a = document.createElement('a');
    a.href = recordedAudio;
    a.download = `recording-${Date.now()}.wav`;
    a.click();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-6">
      <h3 className="font-bold text-gray-900 mb-4">录音控制</h3>

      <div className="space-y-4">
        {/* 录音按钮 */}
        <div className="flex items-center justify-center gap-4">
          {!isRecording ? (
            <Button
              size="lg"
              onClick={startRecording}
              icon={<Mic className="w-5 h-5" />}
              className="bg-red-500 hover:bg-red-600"
            >
              开始录音
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={stopRecording}
              icon={<Square className="w-5 h-5" />}
              variant="danger"
            >
              停止录音
            </Button>
          )}
        </div>

        {/* 录音时长 */}
        {isRecording && (
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{formatTime(duration)}</div>
            <div className="text-sm text-gray-600">录音中...</div>
          </div>
        )}

        {/* 播放控制 */}
        {recordedAudio && !isRecording && (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={togglePlayback}
                icon={isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              >
                {isPlaying ? '暂停' : '播放'}
              </Button>
              <Button
                variant="secondary"
                onClick={handleDownload}
                icon={<Download className="w-5 h-5" />}
              >
                下载
              </Button>
            </div>
            <audio
              ref={audioRef}
              src={recordedAudio}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        )}
      </div>
    </Card>
  );
}
