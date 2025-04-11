import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FuturisticCardsProps {
  isDarkMode: boolean;
}

const FuturisticCards: React.FC<FuturisticCardsProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial states
    gsap.set(cardsRef.current, {
      scale: 0,
      opacity: 0,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
        once: true
      }
    });

    // First card expand animation with improved timing
    tl.to(cardsRef.current[0], {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Staggered pop-in animation for remaining cards with smoother timing
    tl.to(cardsRef.current.slice(1), {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    }, '-=0.3');
  }, []);

  const cardBgClass = isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-[#D9D9D9] text-black';

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full ${isDarkMode ? 'bg-black' : 'bg-gray-100'} p-4 sm:p-6 md:p-8 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 transition-colors duration-300`}
    >
      {/* WHY NOT STEP RIGHT INTO TOMORROW? */}
      <div
        ref={el => { cardsRef.current[0] = el }}
        className={`col-span-4 sm:col-span-8 md:col-span-12 w-full h-[60px] sm:h-[70px] md:h-[82px] ${cardBgClass} rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 p-2 sm:p-3 md:p-4`}
      >
        WHY NOT STEP RIGHT INTO TOMORROW?
      </div>

      {/* Your future is waiting for you */}
      <div className="col-span-4 sm:col-span-8 md:col-span-12 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 items-start">
        <div
          ref={el => { cardsRef.current[1] = el }}
          className={`col-span-4 sm:col-span-4 md:col-span-5 h-[200px] sm:h-[220px] md:h-[249px] ${cardBgClass} rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold p-3 sm:p-4 text-center transition-colors duration-300`}
        >
          Your future is waiting for you
        </div>

        {/* READY? */}
        <div
          ref={el => { cardsRef.current[2] = el }}
          className={`col-span-4 sm:col-span-4 md:col-span-3 h-[200px] sm:h-[220px] md:h-[249px] ${cardBgClass} rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300`}
        >
          READY?
        </div>

        {/* The power to mould destiny */}
        <div
          ref={el => { cardsRef.current[3] = el }}
          className={`col-span-4 sm:col-span-8 md:col-span-4 h-[250px] sm:h-[300px] md:h-[345px] ${cardBgClass} rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold p-3 sm:p-4 text-center transition-colors duration-300 mb-[-30px] sm:mb-[-45px] md:mb-[-60px]`}
        >
          The power to mould destiny right at your fingertips
        </div>
      </div>

      <div className="col-span-4 sm:col-span-8 md:col-span-12 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 items-end">
        {/* Come aboard */}
        <div
          ref={el => { cardsRef.current[4] = el }}
          className={`col-span-4 sm:col-span-4 md:col-span-4 h-[120px] sm:h-[135px] md:h-[155px] ${cardBgClass} rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 sm:mb-[150px] md:mb-[200px]`}
        >
          Come aboard
        </div>

        {/* The way to utopia */}
        <div
          ref={el => { cardsRef.current[5] = el }}
          className={`col-span-4 sm:col-span-4 md:col-span-4 h-[120px] sm:h-[135px] md:h-[155px] ${cardBgClass} rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 sm:mb-[150px] md:mb-[200px]`}
        >
          The way to utopia
        </div>

        {/* All are welcome */}
        <div
          ref={el => { cardsRef.current[6] = el }}
          className={`col-span-4 sm:col-span-4 md:col-span-4 h-[50px] sm:h-[55px] md:h-[63px] ${cardBgClass} rounded-xl flex items-center justify-center text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 sm:mb-[150px] md:mb-[200px]`}
        >
          All are welcome.
        </div>
      </div>
    </div>
    
  );
};

export default FuturisticCards;