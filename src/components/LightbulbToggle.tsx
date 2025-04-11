import React from 'react';

interface LightbulbToggleProps {
  isDarkMode: boolean;
  onThemeChange: (isDark: boolean) => void;
}

const LightbulbToggle: React.FC<LightbulbToggleProps> = ({ isDarkMode, onThemeChange }) => {
  const toggleLight = () => {
    onThemeChange(!isDarkMode);
  };

  return (
    <button
      onClick={toggleLight}
      className="fixed right-8 top-8 p-4 transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDarkMode ? '#FFF' : '#000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    </button>
  );
};

export default LightbulbToggle;