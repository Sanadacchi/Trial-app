import React, { useState, useEffect, useRef } from 'react';
import LightbulbToggle from './LightbulbToggle';
import FuturisticCards from './FuturisticCards';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) return true;
    return savedTheme === 'dark';
  });
  
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    if (titleRef.current) {
      const chars = "!@#$%^&*()_+"; // Characters to use for scrambling
      const finalText = "WELCOME TO THE FUTURE";
      const tl = gsap.timeline();
      
      // Set initial scrambled text
      const scrambledText = finalText.split('').map(() =>
        chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      titleRef.current.textContent = scrambledText;

      // Create scramble effect
      const duration = 2;
      const steps = 20;
      const stepDuration = duration / steps;

      for (let i = 0; i < steps; i++) {
        tl.add(() => {
          const progress = i / steps;
          const currentText = finalText.split('').map((char) => {
            if (Math.random() < progress) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('');
          titleRef.current!.textContent = currentText;
        }, i * stepDuration);
      }

      // Set final text
      tl.add(() => {
        titleRef.current!.textContent = finalText;
      }, duration);
    }
  }, []);

  return (
    <div className="relative">
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-black' : 'bg-gray-100'} flex items-center justify-center transition-colors duration-300 px-4`}>
        <h1
          ref={titleRef}
          className={`text-[60px] md:text-[50px] sm:text-[40px] xs:text-[30px] font-sans font-extrabold ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} text-center whitespace-pre-line`}
        >
          WELCOME TO THE
          FUTURE
        </h1>
      </div>
      <FuturisticCards isDarkMode={isDarkMode} />
      <LightbulbToggle isDarkMode={isDarkMode} onThemeChange={setIsDarkMode} />
    </div>
  );
};

export default Home;
