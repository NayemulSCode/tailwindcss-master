import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white font-custom-serif">
          MySite (আমার সাইট)
        </div>
        <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
