import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '../../context/ThemeContext';
import * as toggleThemeData from '../../assets/lottie/toogle-theme.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  const [play, setPlay] = useState(false);
  const [direction, setDirection] = useState(-1);

  const handleClick = () => {
    toggleTheme();
    setPlay(true);
    setDirection(prev => (prev === 1 ? -1 : 1));
  };

  return (
    <button className="toggle-theme" onClick={handleClick} aria-label="Changer de thème">
      <Lottie
        loop={false}
        play={play}
        speed={2}
        direction={direction}
        onComplete={() => setPlay(false)}
        animationData={toggleThemeData}
      />
    </button>
  );
}
