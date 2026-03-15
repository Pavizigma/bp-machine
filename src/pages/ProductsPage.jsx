import { useEffect } from 'react';
import Products from '../components/Products';
import SupportBanner from '../components/SupportBanner';

export default function ProductsPage({ onEnquiry }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-page" style={{ paddingTop: '80px' }}>
      <Products onEnquiry={onEnquiry} isPreview={false} />
      <SupportBanner />
    </div>
  );
}
