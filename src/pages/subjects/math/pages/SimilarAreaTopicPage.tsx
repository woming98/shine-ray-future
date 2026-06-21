import similarAreaHtml from '../content/similar-area.html?raw';

export default function SimilarAreaTopicPage() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-blue-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-blue-600 mb-1">幾何專題一</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-950">相似和等高做面積</h1>
      </div>
      <iframe
        title="專題一：相似和等高做面積"
        srcDoc={similarAreaHtml}
        className="w-full h-[calc(100vh-220px)] min-h-[720px] rounded-2xl border border-blue-200 bg-white shadow-sm"
      />
    </div>
  );
}
