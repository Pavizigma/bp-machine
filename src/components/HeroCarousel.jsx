import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';
import hero1 from '../assets/images/MSW-equipment.png';
import hero2 from '../assets/images/hero22.jpg';
import hero3 from '../assets/images/hero23.jpg';

const slides = [
  {
    id: 1,
    image: hero1,
    eyebrow: 'Waste Management Innovation',
    title: 'Engineering the Future of Waste Management',
    subtitle: 'Optimizing municipal solid waste operations for a cleaner, greener tomorrow.',
    cta: { label: 'Explore Products', href: '#products' },
  },
  {
    id: 2,
    image: hero2,
    eyebrow: 'Industrial Machinery',
    title: 'High-Performance Industrial Solutions',
    subtitle: 'Heavy-duty machinery engineered for maximum efficiency at every scale.',
    cta: { label: 'View Solutions', href: '#products' },
  },
  {
    id: 3,
    image: hero3,
    eyebrow: 'Circular Economy',
    title: 'Driving the Circular Economy Forward',
    subtitle: 'Advanced technology and expert engineering towards zero-waste operations.',
    cta: { label: 'Our Story', href: '#about' },
  },
];

export default function HeroCarousel({ onEnquiry }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setAnimating(true);
      setPrev(current);
      setCurrent(index);
      setTextKey((k) => k + 1);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 900);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goToPrev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const pad = (n) => String(n + 1).padStart(2, '0');

  return (
    <section
      className="hero-carousel"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide layers */}
      <div className="carousel-track">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-slide ${i === current ? 'slide-active' : ''} ${i === prev ? 'slide-exit' : ''
              }`}
          >
            <img src={slide.image} alt={slide.title} className="carousel-img" />
            {/* <div className="slide-overlay" /> */}
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="slide-content container" key={textKey}>
        {/* <div className="slide-inner">
          <span className="slide-eyebrow">{slides[current].eyebrow}</span>
          <h1 className="slide-title">{slides[current].title}</h1>
          <p className="slide-subtitle">{slides[current].subtitle}</p>
          <div className="slide-actions">
            <a href={slides[current].cta.href} className="hero-btn-primary">
              {slides[current].cta.label}
              <ArrowRight size={16} />
            </a>
            <button className="hero-btn-ghost" onClick={onEnquiry}>
              Enquire Now
            </button>
          </div>
        </div> */}
      </div>

      {/* Bottom control bar — Hitachi-style */}
      <div className="hero-control-bar">
        <div className="container hero-control-inner">
          {/* Slide counter */}
          <div className="slide-counter">
            <span className="counter-current">{pad(current)}</span>
            <span className="counter-sep">
              <span
                className="counter-line-fill"
                key={`progress-${current}`}
              />
            </span>
            <span className="counter-total">{pad(slides.length - 1)}</span>
          </div>

          {/* Dot nav */}
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="carousel-arrows">
            <button className="carousel-btn" onClick={goToPrev} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-btn" onClick={next} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
