import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner container">
        <SocialLinks className="footer-social" />
        <p className="footer-text">&copy; {new Date().getFullYear()} Nathan Leduc</p>
      </div>
    </footer>
  );
}
