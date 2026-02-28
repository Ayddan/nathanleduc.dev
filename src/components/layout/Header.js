import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import BurgerMenu from '../ui/BurgerMenu';

const NAV_LINKS = [
  { label: 'A propos', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Parcours', href: '#experiences' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <div className="header-inner container">
        <a href="#" className="site-title">Nathan Leduc</a>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        <BurgerMenu isOpen={menuOpen} onToggle={() => setMenuOpen(prev => !prev)} />
      </div>
    </header>
  );
}
