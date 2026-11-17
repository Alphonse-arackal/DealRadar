import { ArrowRight, GitCompareArrows } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CompareBanner.css';

export default function CompareBanner(){return <section className="promo-grid"><article className="promo promo--compare"><div className="promo__copy"><h2>Compare Prices<br/>Across Platforms</h2><p>Find the lowest price for<br/>products you love.</p><Link to="/compare">Compare Now <ArrowRight size={14}/></Link></div><div className="promo__badges"><span>amazon</span><span>f</span><span>m</span></div></article><article className="promo promo--trust"><div className="promo__copy"><h2>Shop Smarter<br/>&amp; Save More</h2><p>Discover great offers from<br/>supported marketplaces.</p><Link to="/deals">Explore Deals <ArrowRight size={14}/></Link></div><div className="promo__chart"><GitCompareArrows size={74}/></div></article></section>}
