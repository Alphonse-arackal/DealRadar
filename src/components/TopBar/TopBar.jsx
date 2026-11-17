import { RefreshCw, Truck, Zap } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <span><Truck size={14} /> Free Deal Discovery &amp; Alerts</span>
      <span><Zap size={14} /> Compare Prices Across Top Platforms</span>
      <span><RefreshCw size={14} /> Daily Updated Deals</span>
    </div>
  );
}
