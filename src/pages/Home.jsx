import HeroCarousel from '../components/HeroCarousel';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import SupportBanner from '../components/SupportBanner';

export default function Home({ onEnquiry }) {
  return (
    <>
      <HeroCarousel onEnquiry={onEnquiry} />
      <About />
      <Products onEnquiry={onEnquiry} isPreview={false} hideEnquiry={false} />
      <Services onEnquiry={onEnquiry} />
      <SupportBanner />
    </>
  );
}
