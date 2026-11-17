import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer-logo">
            <Tag size={26} fill="currentColor" />
            <b>Deal<span>Radar</span></b>
          </Link>
          <small>BEST DEALS. SMARTER SHOPPING.</small>
          <div className="socials" aria-label="Social links">
            <a href="#youtube" aria-label="YouTube">▶</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#github" aria-label="GitHub">&lt;/&gt;</a>
          </div>
        </div>
        <div>
          <b>Shop</b>
          <Link to="/deals">Deals</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/compare">Compare Prices</Link>
        </div>
        <div>
          <b>Company</b>
          <Link to="/about">About Us</Link>
          <Link to="/about">How It Works</Link>
          <Link to="/about">Contact</Link>
        </div>
        <div>
          <b>Support</b>
          <a href="#faq">FAQs</a>
          <a href="#help">Help Center</a>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer__app">
          <b>Get the DealRadar App</b>
          <span>Track deals on the go.</span>
          <div>
            <button type="button">▶ Google Play</button>
            <button type="button">App Store</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
