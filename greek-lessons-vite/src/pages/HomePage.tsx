import { topics } from '../data/topics';

export default function HomePage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Изучайте греческий язык <span className="text-blue-600">эффективно</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Тренируйтесь писать эссе на популярные темы экзамена уровня A2 
          с помощью словарных карточек, примеров и полезных фраз
        </p>
      </div>
      
      {/* Topics Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
          Выберите тему для изучения
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <a 
              key={topic.id}
              href={`/topic/${topic.id}`} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Практикуйте словарный запас и полезные выражения на тему
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                    {topic.vocabulary.length} слов
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                    {topic.phrases.length} фраз
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                    1 пример
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-blue-50 rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Особенности приложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2 text-blue-700">Словарные карточки</h3>
            <p className="text-gray-600">Изучайте ключевые слова с примерами использования и переводом</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2 text-blue-700">Полезные фразы</h3>
            <p className="text-gray-600">Используйте готовые конструкции для написания текста на греческом</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2 text-blue-700">Практика письма</h3>
            <p className="text-gray-600">Тренируйтесь писать эссе, сравнивайте с примерами</p>
          </div>
        </div>
      </div>
    </div>
  );
} 