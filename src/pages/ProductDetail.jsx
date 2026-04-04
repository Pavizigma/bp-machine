import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, Settings, Send, Layout, FileText, ChevronRight } from 'lucide-react';
import { products } from '../data/productData';
import SupportBanner from '../components/SupportBanner';
import './ProductDetail.css';

export default function ProductDetail({ onEnquiry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
      window.scrollTo(0, 0);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return null;

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="product-detail-page">
      {/* Vedanta-Style Hero Section */}
      <section className="product-hero" style={{ '--hero-bg': `url(${product.image})` }}>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <nav className="hero-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={14} />
              <Link to="/products">Our Businesses</Link>
              <ChevronRight size={14} />
              <span className="current">{product.name}</span>
            </nav>
            <h1 className="hero-title">{product.name}</h1>
            <p className="hero-subtitle">{product.tag}</p>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Bar */}
      <div className="sub-nav-bar sticky-sub-nav">
        <div className="container">
          <div className="sub-nav-inner">
            <a href="#overview" className="sub-nav-link">Overview</a>
            <a href="#specs" className="sub-nav-link">Specifications</a>
            <button className="sub-nav-enquiry" onClick={() => onEnquiry(product.name)}>
              Enquire Now <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="container" id="overview">
        <div className="product-layout">
          {/* Left Side: Images */}
          <div className="product-visuals">
            <div className="main-image-container">
              <img src={activeImage} alt={product.name} className="main-image" />
              <div className="image-overlay-v" />
            </div>
            
            {product.gallery && product.gallery.length > 1 && (
              <div className="image-thumbnails">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`thumb-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Primary Info */}
          <div className="product-info-panel">
            <span className="product-tag-v" style={{ color: product.color }}>{product.tag}</span>
            <h2 className="product-display-name">{product.name}</h2>
            <p className="product-tagline">{product.description}</p>
            
            <div className="action-buttons-group">
              <button 
                className="btn-primary-large" 
                onClick={() => onEnquiry(product.name)}
              >
                Request Quote <Send size={20} />
              </button>
            </div>

            <div className="info-summary-cards">
              <div className="info-card">
                <Info size={24} />
                <div>
                  <h4>Industrial Grade</h4>
                  <p>Built for 24/7 heavy-duty operations.</p>
                </div>
              </div>
              <div className="info-card">
                <Settings size={24} />
                <div>
                  <h4>Precision Tech</h4>
                  <p>Advanced control and separation logic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="product-content-sections">
          <section className="detail-section">
            <h2 className="section-label">Detailed Description</h2>
            <div className="description-text">
              <p>{product.longDescription}</p>
              <ul className="core-features-list">
                {product.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle size={20} style={{ color: product.color }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="detail-section" id="specs">
            <div className="specs-header">
              <Layout size={24} />
              <h2 className="section-label no-margin">Technical Specifications</h2>
            </div>
            <div className="specs-table-container">
              <table className="specs-table">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i}>
                      <td className="spec-label">{spec.label}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Related Products */}
        <section className="related-products-section">
          <h2 className="related-title">Other Solutions</h2>
          <div className="related-grid">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="related-card">
                <div className="related-img-wrap">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="related-body">
                  <h4>{p.name}</h4>
                  <span className="related-tag">{p.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <SupportBanner />
    </div>
  );
}
