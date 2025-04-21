import { VocabularyItem } from '../types';

interface VocabularyCardProps extends VocabularyItem {}

export default function VocabularyCard({ word, translation, example }: VocabularyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg text-blue-700">{word}</h3>
        <span className="text-gray-600 text-sm py-1 px-2 bg-gray-100 rounded-md">{translation}</span>
      </div>
      <div className="pt-2 border-t border-gray-100">
        <p className="text-sm text-gray-600 italic">{example}</p>
      </div>
    </div>
  );
} 