import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '../../context/ThemeContext';
import * as burgerData from '../../assets/lottie/burger-button.json';
import * as burgerDarkData from '../../assets/lottie/burger-button-dark.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function BurgerMenu({ isOpen, onToggle }) {
  const { theme } = useTheme();
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    onToggle();
    setPlay(true);
  };

  return (
    <button className="burger-button" onClick={handleClick} aria-label="Menu">
      <Lottie
        loop={false}
        play={play}
        speed={2}
        direction={isOpen ? 1 : -1}
        segments={[0, 25]}
        onComplete={() => setPlay(false)}
        animationData={theme === 'light' ? burgerDarkData : burgerData}
      />
    </button>
  );
}
