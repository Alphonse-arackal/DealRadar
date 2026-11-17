import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { products } from '../../data/products.js';
import './DealSection.css';

export default function DealSection({title="Today's Best Deals",subtitle='Handpicked deals with the biggest savings today.',variant='best'}) {
 const items=variant==='discount'?products.slice(5,10):products.slice(0,5);
 return <section className="content-section deal-section"><div className="section-title"><div><h2>{title}</h2><p>{subtitle}</p></div><Link to="/deals">View All Deals <ArrowRight size={14}/></Link></div><div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
}
