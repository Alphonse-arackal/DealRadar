import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products.js';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import './Deals.css';

export default function Deals() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="deals-page">

      <div className="deals-header">
        <div>
          <span className="deals-eyebrow">DEALRADAR / EXPLORE</span>
          <h1>Discover the Best Deals</h1>
          <p>Find great products at prices worth grabbing.</p>
        </div>
      </div>

      <div className="deals-toolbar">

        <div className="deals-search">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="deals-filter-button">
          <SlidersHorizontal size={17} />
          Filters
        </button>

      </div>

      <div className="deals-results">
        <div>
          <h2>All Deals</h2>
          <p>{filteredProducts.length} products found</p>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="deals-product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="deals-empty">
          <h3>No products found</h3>
          <p>Try searching with another product name.</p>
        </div>
      )}

    </section>
  );
}