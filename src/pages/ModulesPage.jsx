import { motion } from 'framer-motion';
import { useState } from 'react';

const ModulesPage = ({ onSelectModule, onBack }) => {
  const [selectedGrade, setSelectedGrade] = useState('all');

  const modules = [
    {
      id: 1,
      title: "Filipino - Pagbasa at Pagsulat",
      grade: 1,
      subject: "Filipino",
      description: "Basic reading and writing skills for Grade 1 students",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      lessons: 12,
      duration: "3 months"
    },
    {
      id: 2,
      title: "Mathematics - Numbers and Operations",
      grade: 1,
      subject: "Mathematics",
      description: "Introduction to numbers, counting, and basic operations",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      lessons: 15,
      duration: "3 months"
    },
    {
      id: 3,
      title: "Filipino - Gramatika at Pagsulat",
      grade: 2,
      subject: "Filipino",
      description: "Grammar rules and writing exercises for Grade 2",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      lessons: 14,
      duration: "3 months"
    },
    {
      id: 4,
      title: "Science - Living Things",
      grade: 2,
      subject: "Science",
      description: "Introduction to plants, animals, and their habitats",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      lessons: 10,
      duration: "2 months"
    },
    {
      id: 5,
      title: "English - Reading Comprehension",
      grade: 3,
      subject: "English",
      description: "Developing reading skills and understanding texts",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      lessons: 16,
      duration: "4 months"
    },
    {
      id: 6,
      title: "Mathematics - Fractions and Decimals",
      grade: 4,
      subject: "Mathematics",
      description: "Understanding fractions, decimals, and basic geometry",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      lessons: 18,
      duration: "4 months"
    },
    {
      id: 7,
      title: "Araling Panlipunan - Kasaysayan ng Pilipinas",
      grade: 5,
      subject: "Araling Panlipunan",
      description: "Philippine history and culture for Grade 5 students",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.17.50-PM.png",
      lessons: 20,
      duration: "5 months"
    },
    {
      id: 8,
      title: "Science - Earth and Space",
      grade: 6,
      subject: "Science",
      description: "Understanding Earth's systems and space exploration",
      cover: "https://feastbooks.ph/wp-content/uploads/2025/06/Screen-Shot-2025-06-11-at-4.18.02-PM.png",
      lessons: 22,
      duration: "5 months"
    }
  ];

  const grades = [
    { value: 'all', label: 'All Grades' },
    { value: 1, label: 'Grade 1' },
    { value: 2, label: 'Grade 2' },
    { value: 3, label: 'Grade 3' },
    { value: 4, label: 'Grade 4' },
    { value: 5, label: 'Grade 5' },
    { value: 6, label: 'Grade 6' }
  ];

  const filteredModules = selectedGrade === 'all' 
    ? modules 
    : modules.filter(module => module.grade === selectedGrade);

  return (
    <div className="max-w-6xl mx-auto">
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
          <h1 className="text-3xl font-bold text-gray-900">Learning Modules</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Grade Filter Tabs */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex gap-2 overflow-x-auto pb-2">
          {grades.map((grade) => (
            <button
              key={grade.value}
              onClick={() => setSelectedGrade(grade.value)}
              className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedGrade === grade.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Modules Grid */}
      <motion.div
        key={selectedGrade}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredModules.length} {filteredModules.length === 1 ? 'module' : 'modules'} available
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredModules.map((module, index) => (
            <motion.div
              key={module.id}
              onClick={() => onSelectModule(module)}
              className="cursor-pointer group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={module.cover} 
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Grade {module.grade}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                    {module.subject}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {module.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {module.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {module.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No modules found for this grade level.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ModulesPage;
