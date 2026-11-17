import { ArrowRight, Tag, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <span className="hero__eyebrow">MORE THAN JUST SHOPPING</span>
        <h1>Discover the<br/><em>Best Deals Today</em></h1>
        <p>Find the highest discounts, compare prices across<br className="desktop-break"/> Amazon, Flipkart, Meesho and more.</p>
        <div className="hero__buttons">
          <Link className="hero-button hero-button--green" to="/deals"><Tag size={16}/> Explore Deals <ArrowRight size={16}/></Link>
          <Link className="hero-button hero-button--outline" to="/about"><Play size={15}/> How It Works</Link>
        </div>
      </div>
      <div className="hero__art" aria-label="Headphones and discount tag illustration">
        <div className="hero__sun"></div><div className="hero__mountain"></div>
        <div className="hero__headphones"><span className="ear ear--left"></span><span className="ear ear--right"></span><span className="band"></span></div>
        <div className="hero__tag">Up to<br/><b>70%</b><br/>OFF</div>
      </div>
      <div className="hero__dots"><i className="active"></i><i></i><i></i></div>
    </section>
  );
}
