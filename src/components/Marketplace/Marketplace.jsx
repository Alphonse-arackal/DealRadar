import { ShoppingBag } from 'lucide-react';
import './Marketplace.css';

const marketplaces = [{name:'Flipkart',mark:'f',className:'flipkart'},{name:'Amazon',mark:'a',className:'amazon'},{name:'Meesho',mark:'m',className:'meesho'}];

export default function Marketplace() {
  return <section className="marketplaces"><strong>Shop from<br/>Top Platforms</strong>{marketplaces.map(item=><div className="marketplace" key={item.name}><span className={`marketplace__logo ${item.className}`}>{item.mark}</span><b>{item.name}</b></div>)}</section>;
}
