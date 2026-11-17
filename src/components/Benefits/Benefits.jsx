import { Zap, Bell, Scale, ShieldCheck } from 'lucide-react';
import './Benefits.css';
const items=[[Zap,'Fast Deal Updates','Get the latest deals every day'],[Bell,'Wishlist','Save products you love'],[Scale,'Compare Prices','Find the best price instantly'],[ShieldCheck,'Trusted Deals','Clear links to marketplaces']];
export default function Benefits(){return <section className="benefits">{items.map(([Icon,title,desc])=><div className="benefit" key={title}><Icon size={27}/><span><b>{title}</b><small>{desc}</small></span></div>)}</section>}
