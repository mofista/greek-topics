import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TopicPage from './pages/TopicPage'
import './App.css'

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [topicId, setTopicId] = useState<string | null>(null)

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)

    return () => {
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])

  useEffect(() => {
    const match = currentPath.match(/\/topic\/(.+)/)
    if (match && match[1]) {
      setTopicId(match[1])
    } else {
      setTopicId(null)
    }
  }, [currentPath])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {currentPath === '/' && <HomePage />}
        {topicId && <TopicPage topicId={topicId} />}
      </main>
      <Footer />
    </div>
  )
}
