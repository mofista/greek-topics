import { useState } from 'react';

export default function EssayEditor() {
  const [essay, setEssay] = useState('');
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-green-50 p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Напишите своё эссе</h2>
        <p className="text-sm text-gray-600 mt-1">Используйте словарь и фразы для составления текста</p>
      </div>
      
      <div className="p-5">
        <textarea
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          className="w-full h-48 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-serif"
          placeholder="Γεια σας! Με λένε..."
        />
        
        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-md">
            <span className="font-medium">{essay.length}</span> символов / примерно <span className="font-medium">{Math.ceil(essay.length / 5)}</span> слов
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setEssay('')}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Очистить
            </button>
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
            >
              Сравнить с примером
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 