import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Users, HandHeart, User, Menu, X } from 'lucide-react';
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/prayer-wall', icon: Heart, label: 'Prayer Wall' },
    { path: '/opportunities', icon: HandHeart, label: 'Opportunities' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md shadow-lg z-50 border-b 
      ${darkMode ? 'bg-black/90 border-gray-800 text-white' : 'bg-white/95 border-blue-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-amber-600 bg-clip-text text-transparent">
              FaithConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(path)
                    ? darkMode
                      ? 'bg-gray-800 text-gold shadow-sm'
                      : 'bg-blue-100 text-blue-700 shadow-sm'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}

            {/* Auth Links */}
            <div className="flex items-center space-x-2 ml-4">
              <Link
                to="/login"
                className={`px-4 py-2 font-medium transition-colors ${
                  darkMode ? 'text-gold hover:text-yellow-300' : 'text-blue-700 hover:text-blue-800'
                }`}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  darkMode
                    ? 'bg-gold text-black hover:bg-yellow-400'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                }`}
              >
                Join Us
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-3 py-1 rounded font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-gold hover:bg-gray-600'
                    : 'bg-gold text-black hover:bg-yellow-400'
                }`}
              >
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`${darkMode ? 'bg-black border-gray-800' : 'bg-white border-blue-100'} md:hidden border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(path)
                    ? darkMode
                      ? 'bg-gray-800 text-gold'
                      : 'bg-blue-100 text-blue-700'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}

            <div className="pt-4 border-t space-y-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-medium ${
                  darkMode ? 'text-gold' : 'text-blue-700'
                }`}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg font-medium text-center ${
                  darkMode
                    ? 'bg-gold text-black hover:bg-yellow-400'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                }`}
              >
                Join Us
              </Link>

              {/* Dark Mode Toggle in mobile */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 rounded-lg font-medium ${
                  darkMode
                    ? 'bg-gray-700 text-gold hover:bg-gray-600'
                    : 'bg-gold text-black hover:bg-yellow-400'
                }`}
              >
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
