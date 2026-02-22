import { motion } from 'framer-motion';

const BooksPage = ({ storyBooks, onSelectBook, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Popular Books Section */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Popular Books</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900">View all →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {storyBooks.slice(0, 4).map((book, index) => (
            <motion.div 
              key={book.id}
              onClick={() => onSelectBook(book)}
              className="cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3 aspect-[2/3] hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* For Elementary Students Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">For Elementary Students</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900">See more →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {storyBooks.map((book, index) => (
            <motion.div 
              key={book.id}
              onClick={() => onSelectBook(book)}
              className="cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-3 aspect-[2/3] hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BooksPage;
