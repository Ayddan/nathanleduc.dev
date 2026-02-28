import { useTheme } from '../../context/ThemeContext';

import githubDark from '../../assets/svg/github-dark.svg';
import githubLight from '../../assets/svg/github-light.svg';
import linkedinDark from '../../assets/svg/linkedin-dark.svg';
import linkedinLight from '../../assets/svg/linkedin-light.svg';

const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ayddan',
    darkIcon: githubDark,
    lightIcon: githubLight,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nathan-leduc/',
    darkIcon: linkedinDark,
    lightIcon: linkedinLight,
  },
];

export default function SocialLinks({ className = '' }) {
  const { theme } = useTheme();

  return (
    <ul className={`social-list ${className}`}>
      {SOCIALS.map(social => (
        <li key={social.name}>
          <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.name}>
            <img
              src={(theme === 'dark' ? social.darkIcon : social.lightIcon).src}
              alt={social.name}
              width={28}
              height={28}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
