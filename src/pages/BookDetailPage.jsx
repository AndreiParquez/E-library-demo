import { motion } from 'framer-motion';

const BookDetailPage = ({ book, favorites, onToggleFavorite, onBack }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-3">
          <button 
            onClick={() => onToggleFavorite(book.id)}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
          >
            <svg 
              className={`w-5 h-5 ${favorites.includes(book.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} 
              fill={favorites.includes(book.id) ? 'currentColor' : 'none'}
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Book Cover */}
      <motion.div 
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-56 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '2/3' }}>
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Book Info */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-4">by {book.author}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, index) => (
            <svg 
              key={index}
              className={`w-5 h-5 ${index < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </motion.div>

      {/* Description */}
      <motion.div 
        className="bg-white border border-gray-200 rounded-3xl p-6 shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">Description</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {book.fullDescription}
        </p>
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {book.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Read Button */}
      <motion.button 
        className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Read this book
      </motion.button>
    </div>
  );
};

export default BookDetailPage;
