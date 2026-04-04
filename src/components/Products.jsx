import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/productData';
import './Products.css';

export default function Products({ isPreview = false }) {
  // Only display non-hidden products. If it's a preview on the homepage, show only the first 3.
  const visibleProducts = products.filter(p => !p.hidden);
  const displayedProducts = isPreview ? visibleProducts.slice(0, 3) : visibleProducts;

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">
            {isPreview ? 'Featured Equipment' : 'Advanced Waste Processing Machinery'}
          </h2>
          <p className="section-subtitle">
            High-performance equipment engineered for efficiency, durability, and sustainability in MSW operations worldwide.
          </p>
        </div>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div
              className={`product-card object-fit-cover`}
              key={product.id}
              style={{ '--card-color': product.color }}
            >
              <div className="product-image-wrap">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="product-image-overlay" />
                </div>
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-actions" style={{ marginTop: 'auto', paddingTop: '15px' }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn-details-product"
                    style={{ width: '100%', textAlign: 'center', display: 'inline-block', boxSizing: 'border-box' }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="view-more-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/products" className="btn-primary">
              View All Products <ExternalLink size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
