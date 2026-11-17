import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, Bell, UserRound, Tag, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="DealRadar home">
        <span className="brand__mark"><Tag size={25} fill="currentColor" /></span>
        <span className="brand__word">Deal<span>Radar</span><small>BEST DEALS. SMARTER SHOPPING.</small></span>
      </Link>
      <nav className="navlinks" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/deals">Deals</NavLink>
        <NavLink to="/categories">Categories <ChevronDown size={13}/></NavLink>
        <NavLink to="/compare">Compare</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <form className="nav-search" onSubmit={e=>e.preventDefault()}>
        <input type="search" placeholder="Search for products, brands..." aria-label="Search products"/>
        <button aria-label="Search"><Search size={19}/></button>
      </form>
      <div className="nav-actions">
        <button aria-label="Wishlist"><Heart/></button>
        <button aria-label="Notifications" className="notification"><Bell/><i>0</i></button>
        <button aria-label="Profile"><UserRound/></button>
      </div>
    </header>
  );
}
