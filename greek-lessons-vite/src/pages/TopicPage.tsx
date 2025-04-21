import { useState, useEffect } from 'react';
import { Topic } from '../types';
import { topics } from '../data/topics';
import VocabularyCard from '../components/VocabularyCard';
import TopicExample from '../components/TopicExample';
import EssayEditor from '../components/EssayEditor';

interface TopicPageProps {
  topicId: string;
}

export default function TopicPage({ topicId }: TopicPageProps) {
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundTopic = topics.find(t => t.id === topicId);
    setTopic(foundTopic || null);
    setLoading(false);
  }, [topicId]);

  if (loading) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Загрузка данных...</p>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Тема не найдена</h1>
          <p className="text-lg text-gray-600 mb-6">К сожалению, запрашиваемая вами тема не существует</p>
          <a 
            href="/" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Breadcrumb and Title */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <a href="/" className="hover:text-blue-600 transition-colors">Главная</a>
          <span className="mx-2">›</span>
          <span>Тема</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к списку тем
          </a>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Vocabulary Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-blue-50 p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Словарь по теме</h2>
              <p className="text-sm text-gray-600 mt-1">Изучите ключевые слова и выражения</p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topic.vocabulary.map((item, index) => (
                  <VocabularyCard 
                    key={index}
                    word={item.word}
                    translation={item.translation}
                    example={item.example}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phrases Section */}
        <div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-green-50 p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Полезные фразы</h2>
              <p className="text-sm text-gray-600 mt-1">Используйте в своем эссе</p>
            </div>
            <div className="p-5">
              <ul className="space-y-3">
                {topic.phrases.map((phrase, index) => (
                  <li 
                    key={index} 
                    className="pb-2 border-b border-gray-100 last:border-b-0 text-gray-700"
                  >
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Example Essay Section */}
      <div className="mb-8">
        <TopicExample example={topic.example} />
      </div>

      {/* Essay Editor */}
      <div className="mb-8">
        <EssayEditor />
      </div>
    </div>
  );
} 