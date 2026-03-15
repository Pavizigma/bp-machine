import { useState } from 'react';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'MSW Plant Equipment',
    tag: 'Complete Solutions',
    image: '/images/product-plant-2.jpg',
    description: 'Designed for heavy-duty, high-efficiency operations. Ideal for handling a wide range of waste types and volumes with durable construction.',
    features: ['Heavy-duty high-efficiency operations', 'Wide range of waste types & volumes', 'Advanced seamless processing features', 'Durable, long-lasting construction'],
    color: '#1a6b3a',
  },
  {
    id: 2,
    name: 'Trommels',
    tag: 'Waste Separation',
    image: '/images/product-trommel.png',
    description: 'Available in various sizes and volumes to suit different processing needs. Long product life with reduced maintenance requirements.',
    features: ['Various sizes & volumes', 'Long product life', 'Reduced maintenance requirements', 'Customizable for different waste types'],
    color: '#2563eb',
  },
  {
    id: 3,
    name: 'Conveyors',
    tag: 'Material Handling',
    image: '/images/product-plant-1.jpg',
    description: 'Ranges from 500mm to 2400mm wide for maximum material throughput. Customizable idlers and frames for versatile material handling.',
    features: ['500mm to 2400mm width range', 'Customizable idlers & frames', 'Energy-efficient systems', 'Reduces operational costs'],
    color: '#7c3aed',
  },
  {
    id: 4,
    name: 'Disc Screen Separator',
    tag: 'High-Volume Screening',
    image: '/images/product-machinery.jpg',
    description: 'Ideal for high-volume screening of all material types including Inserts and RDF. Simple arrangement with minimal maintenance.',
    features: ['High-volume screening capacity', 'All material types (Inserts, RDF)', 'Minimal maintenance requirements', 'Energy-efficient, low operational costs'],
    color: '#dc2626',
  },
  {
    id: 5,
    name: 'Air Density Separator',
    tag: 'Safety-First Design',
    image: '/images/product-ads.jpg',
    description: 'Explosion-proof and shock-resistant design for enhanced safety. High wear protection with excellent separation and contaminant removal.',
    features: ['Explosion-proof & shock-resistant', 'High wear protection', 'Excellent separation performance', 'Superior contaminant removal'],
    color: '#ea580c',
  },
  {
    id: 6,
    name: 'Over Band Magnetic Separator',
    tag: 'Metal Recovery',
    image: '/images/product-magnetic.jpg',
    description: 'Self-cleaning and energy-efficient magnetic separators. No electrical power required for operation, with customizable belt configurations.',
    features: ['Self-cleaning design', 'No electrical power for operation', 'Customizable belt widths', 'Continuous metal recovery'],
    color: '#0891b2',
  },
];

export default function Products({ onEnquiry, isPreview = false, hideEnquiry = false }) {
  const [activeProduct, setActiveProduct] = useState(null);

  const displayedProducts = isPreview ? products.slice(0, 3) : products;

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
              className={`product-card ${activeProduct === product.id ? 'expanded' : ''}`}
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
                <ul className="product-features">
                  {product.features.map((f) => (
                    <li key={f}>
                      <CheckCircle size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {!hideEnquiry && (
                  <div className="product-actions">
                    <button
                      className="btn-enquire-product"
                      onClick={() => onEnquiry(product.name)}
                    >
                      Enquire <ArrowRight size={14} />
                    </button>
                  </div>
                )}
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
