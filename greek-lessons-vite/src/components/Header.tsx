export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-yellow-300">Μάθε</span>
            <span className="text-white">Ελληνικά</span>
          </div>
        </a>
        <div className="flex items-center space-x-4">
          <p className="text-blue-100 text-sm hidden sm:block">Изучение греческого языка А2</p>
          <a href="https://www.greek-language.gr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 text-sm transition-colors">
            Ресурсы
          </a>
        </div>
      </div>
    </header>
  );
} 