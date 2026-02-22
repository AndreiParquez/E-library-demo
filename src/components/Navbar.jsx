import { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Books', href: '#services' },
    { name: 'About', href: '#contact' },
    { name: 'Contact us', href: '#projects' },
  ];

  const mobileNavItems = [
    { 
      name: 'Home', 
      href: '#home',
      icon: (isActive) => (
        <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Modules', 
      href: '#modules',
      icon: (isActive) => (
        <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: 'Profile', 
      href: '#profile',
      icon: (isActive) => (
        <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="shadow-sm fixed w-full top-0 z-50" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 rounded-lg p-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-sm">SHIVES</span>
                  <span className="font-bold text-sm">E-LIBRARY</span>
                </div>
              </div>
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                  }}
                  className={`font-medium transition-colors duration-200 ${
                    activeTab === item.name
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Sign In Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                Sign in
              </button>
            </div>

            {/* Mobile Menu - Logo Only */}
            <div className="md:hidden">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2" style={{ background: 'linear-gradient(to top, rgba(245, 241, 234, 1) 0%, rgba(245, 241, 234, 0.95) 70%, transparent 100%)' }}>
        <div className="rounded-3xl shadow-lg px-4 py-3 max-w-md mx-auto" style={{ backgroundColor: '#faf8f3' }}>
          <div className="flex items-center justify-around">
            {mobileNavItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                  }}
                  className="flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-200 min-w-[80px]"
                >
                  <div className={`flex flex-col items-center gap-1 ${
                    isActive ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    <div className={`transition-all duration-200 ${isActive ? 'scale-110' : ''}`}>
                      {item.icon(isActive)}
                    </div>
                    <span className={`text-xs font-medium ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute -top-2 w-10 h-10 bg-blue-100 rounded-full -z-10 opacity-50"></div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
