import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.css';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    // tag: 'Innovation',
    title: 'Engineering the Future of Waste Management',
    subtitle: 'Optimizing waste management for a greener tomorrow.',
    // badge: 'Zigma Global',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    // tag: 'Excellence',
    title: 'Industrial Solutions',
    subtitle: 'High-efficiency machinery for every scale.',
    // badge: 'Reliability',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    // tag: 'Sustainability',
    title: 'Circular Economy',
    subtitle: 'Driving technology towards zero waste.',
    // badge: 'Blue Planet',
  },
];

export default function HeroCarousel({ onEnquiry }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  return (
    <section
      className="hero-carousel"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay" />
            <div className="slide-content container">
              <div className={`slide-inner ${i === current ? 'slide-visible' : ''}`}>
                {/* <span className="slide-badge">{slide.badge}</span> */}
                <p className="slide-tag">{slide.tag}</p>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                {/* <div className="slide-actions">
                  <button className="btn-accent" onClick={onEnquiry}>
                    Enquire Now
                  </button>
                  <a href="#products" className="btn-outline">
                    View Products
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-btn carousel-btn-prev" onClick={prev}>
        <ChevronLeft size={22} />
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next}>
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="carousel-progress">
        <div
          key={current}
          className="carousel-progress-bar"
        />
      </div>
    </section>
  );
}
