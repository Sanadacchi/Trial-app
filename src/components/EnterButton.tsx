import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import enterSound from '../assets/enter.mp3';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap'; // Import GSAP

const StyledButton = styled.button`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: black;
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 10px 40px 0 rgba(31, 38, 135, 0.3);

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateX(-50%) translateY(1px);
  }
`;

const EnterButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    audioRef.current = new Audio(enterSound);
  }, []);

  const handleClick = (): void => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // Fade out animation
    gsap.to('video', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    });

    gsap.to('button', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.inOut'
    });

    // Navigate after animation
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return <StyledButton onClick={handleClick}>Enter</StyledButton>;
};

export default EnterButton;