import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import BooksPage from './pages/BooksPage'
import BookDetailPage from './pages/BookDetailPage'
import ModulesPage from './pages/ModulesPage'
import ModuleDetailPage from './pages/ModuleDetailPage'
import { 
  AdventureIcon, 
  FairyTaleIcon, 
  ScienceIcon,
  ReadingPersonIllustration 
} from './components/Illustrations'
import bookImage from './assets/imgs/book.png'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedBook, setSelectedBook] = useState(null)
  const [selectedModule, setSelectedModule] = useState(null)
  const [favorites, setFavorites] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Add your search logic here
  }

  const toggleFavorite = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    )
  }

  const storyBooks = [
    {
      id: 1,
      title: "Si Langgam at Si Tipaklong",
      author: "Virgilio S. Almario",
      description: "Grasshopper enjoys his lazy life and doesn't understand why Ant has to look for food all day. When the rains come, Grasshopper realizes the wisdom in Ant's industry and foresight.",
      fullDescription: "Inuubos ni Tipaklong ang maghapon sa paglalaro at pagkain habang si Langgam ay naghahanap at nag-iimbak ng pagkain. Naunawaan naman ni Tipaklong ang kaniyang pagkakamali nang dumating ang tag-ulan at siya'y nalagay sa alanganin. A timeless Filipino fable about hard work and preparation.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Picture Book", "Grade 2"],
      rating: 4.5,
      price: "₱180",
      pages: 24
    },
    {
      id: 2,
      title: "Ang Alamat ng Pinya",
      author: "Traditional Filipino",
      description: "A classic Filipino legend about a lazy girl who became the pineapple fruit.",
      fullDescription: "The story of Pina, a young girl who was so lazy she wouldn't do any chores. One day, her mother wished that she would have a hundred eyes to find things. This Filipino legend teaches children about diligence and respect.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Legend", "Classic"],
      rating: 4.8,
      price: "₱180",
      pages: 28
    },
    {
      id: 3,
      title: "Ang Kuneho at ang Pagong",
      author: "Traditional Filipino",
      description: "The timeless tale of the rabbit and the turtle race, teaching the value of perseverance.",
      fullDescription: "A beloved Filipino adaptation of the classic fable. The slow but steady turtle teaches us that determination and consistency can overcome natural talent when combined with hard work.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Fable", "Classic"],
      rating: 4.3,
      price: "₱180",
      pages: 24
    },
    {
      id: 4,
      title: "Ang Mahiwagang Singsing",
      author: "Traditional Filipino",
      description: "A magical ring brings adventure and wisdom to a kind-hearted boy in this enchanting Filipino tale.",
      fullDescription: "Join Miguel as he discovers a magical ring that grants wishes. Through his journey, he learns that true happiness comes not from magic, but from kindness and helping others. A wonderful story that captures Filipino values and imagination.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Fantasy", "Adventure"],
      rating: 4.7,
      price: "₱200",
      pages: 32
    },
    {
      id: 5,
      title: "Ang Alamat ng Ampalaya",
      author: "Traditional Filipino",
      description: "Discover why the bitter gourd became bitter in this charming Filipino legend.",
      fullDescription: "A beautiful prince's pride and vanity transform him into the bitter ampalaya. This Filipino legend teaches children about humility and the consequences of being boastful. A must-read for young learners.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Legend", "Moral"],
      rating: 4.1,
      price: "₱180",
      pages: 24
    },
    {
      id: 6,
      title: "Ang Manok at ang Agila",
      author: "Traditional Filipino",
      description: "Why chickens stay on the ground while eagles soar in the sky - a Filipino origin story.",
      fullDescription: "Long ago, chickens and eagles were friends. But a broken promise changed everything. This Filipino story explains why chickens can't fly high and teaches the importance of keeping one's word.",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      category: "Filipino Stories",
      tags: ["Filipino", "Origin Story", "Classic"],
      rating: 4.6,
      price: "₱180",
      pages: 28
    }
  ]
  return (
    <>
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20 pb-24 md:pb-0 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          
          {/* Home Page */}
          {currentPage === 'home' && (
            <>
              {/* Hero Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="text-center md:text-left order-2 md:order-1">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    SHIVES E-Library
                  </h1>
                  <p className="text-md md:text-lg text-gray-600 mb-8">
                    Your gateway to knowledge - Access story books, modules, and learning materials anytime, anywhere
                  </p>
                  
                  {/* Search Bar */}
                  <form onSubmit={handleSearch} className="mb-6">
                    <div className="relative max-w-2xl">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for Filipino story books, modules, learning materials..."
                        className="w-full pl-12 pr-32 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 shadow-sm hover:border-gray-300"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
                      >
                        <span>Search</span>
                      </button>
                    </div>
                  </form>
                  
                </div>
                
                {/* Floating Book Image */}
                <div className="order-1 md:order-2 flex justify-center">
                  <motion.img
                    src={bookImage}
                    alt="Book"
                    className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              {/* Featured Collections Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div 
                  onClick={() => setCurrentPage('storybooks')}
                  className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer"
                >
                  <AdventureIcon />
                  <h3 className="text-gray-900 text-xl font-semibold text-center mt-4">
                    Filipino Story Books
                  </h3>
                </div>
                <div 
                  onClick={() => setCurrentPage('modules')}
                  className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer"
                >
                  <FairyTaleIcon />
                  <h3 className="text-gray-900 text-xl font-semibold text-center mt-4">
                    Learning Modules
                  </h3>
                </div>
                <div 
                  onClick={() => setCurrentPage('materials')}
                  className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer"
                >
                  <ScienceIcon />
                  <h3 className="text-gray-900 text-xl font-semibold text-center mt-4">
                    Educational Materials
                  </h3>
                </div>
              </div>
            </>
          )}

          {/* Story Books Page */}
          {currentPage === 'storybooks' && !selectedBook && (
            <BooksPage 
              storyBooks={storyBooks}
              onSelectBook={setSelectedBook}
              onBack={() => setCurrentPage('home')}
            />
          )}

          {/* Book Detail Page */}
          {currentPage === 'storybooks' && selectedBook && (
            <BookDetailPage 
              book={selectedBook}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onBack={() => setSelectedBook(null)}
            />
          )}

          {/* Learning Modules Page */}
          {currentPage === 'modules' && !selectedModule && (
            <ModulesPage 
              onSelectModule={setSelectedModule}
              onBack={() => setCurrentPage('home')}
            />
          )}

          {/* Module Detail Page */}
          {currentPage === 'modules' && selectedModule && (
            <ModuleDetailPage 
              module={selectedModule}
              onBack={() => setSelectedModule(null)}
            />
          )}

          {/* Educational Materials Page */}
          {currentPage === 'materials' && (
            <div>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </button>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Educational Materials</h1>
              <p className="text-gray-600 mb-8">Coming soon...</p>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default App
