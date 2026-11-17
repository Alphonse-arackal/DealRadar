import { Headphones, Smartphone, Laptop, Gamepad2, Shirt, Microwave, Watch, Grid2X2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories=[['Electronics',Headphones],['Mobiles',Smartphone],['Laptops',Laptop],['Gaming',Gamepad2],['Fashion',Shirt],['Home Appliances',Microwave],['Accessories',Watch],['More',Grid2X2]];

export default function Categories(){return <section className="content-section category-section"><div className="section-title"><h2>Browse Categories</h2><Link to="/categories">View All Categories <ArrowRight size={14}/></Link></div><div className="category-grid">{categories.map(([name,Icon],i)=><Link to="/categories" className={`category-tile ${i===0?'selected':''}`} key={name}><Icon size={32} strokeWidth={1.7}/><b>{name}</b></Link>)}</div></section>}
