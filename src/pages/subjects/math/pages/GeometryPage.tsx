/**
 * 几何可视化页面
 */

import { Card } from '../components/UI';
import { Button } from '../components/UI/Button';
import { InteractiveShape } from '../components/Geometry/InteractiveShape';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GeometryPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">几何可视化</h1>
          <Button variant="ghost" onClick={() => navigate('/subjects/math')}>
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </div>
      </Card>
      
      <InteractiveShape />
    </div>
  );
}
