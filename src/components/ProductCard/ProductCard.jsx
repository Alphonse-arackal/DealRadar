import { Heart, ExternalLink, Star } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({product}) {
 const discount=product.originalPrice?Math.round((1-product.price/product.originalPrice)*100):0;
 return <article className="product-card">
  <div className="product-card__top"><span className={`store-mark ${product.storeClass||'flipkart'}`}>{product.storeMark||'f'}</span><b>{product.store}</b><button aria-label="Add to wishlist"><Heart size={18}/></button></div>
  <div className="product-card__visual"><span className="discount-pill">{discount}% OFF</span><div className={`product-art ${product.artClass||''}`}>{product.art||'PRODUCT'}</div></div>
  <div className="product-card__info"><h3>{product.name}</h3><div className="product-card__prices"><strong>₹{product.price.toLocaleString('en-IN')}</strong><del>₹{product.originalPrice.toLocaleString('en-IN')}</del></div><div className="product-card__bottom"><span><Star size={15} fill="#ffb000" stroke="#ffb000"/> {product.rating} ({product.reviews})</span><button aria-label="Open product"><ExternalLink size={15}/></button></div></div>
 </article>
}
