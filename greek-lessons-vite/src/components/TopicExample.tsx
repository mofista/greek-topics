interface TopicExampleProps {
  example: string;
}

export default function TopicExample({ example }: TopicExampleProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-blue-50 p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Пример эссе</h2>
        <p className="text-sm text-gray-600 mt-1">Образец правильного текста на греческом языке</p>
      </div>
      <div className="p-5 bg-white">
        <div className="bg-gray-50 p-5 rounded-md whitespace-pre-wrap border border-gray-200 text-gray-700 font-serif">
          {example}
        </div>
      </div>
    </div>
  );
} 