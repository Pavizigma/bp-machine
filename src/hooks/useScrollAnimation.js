import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * @param {object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Animate only once
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * Hook for animating multiple child elements with stagger effect.
 */
export function useStaggerAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.05,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

/**
 * Hook for animated number counter.
 */
export function useCountUp(target, duration = 1800, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Parse numeric value from strings like "500+", "15+"
    const numericTarget = parseInt(target.toString().replace(/\D/g, ''), 10);
    if (isNaN(numericTarget)) return;

    const suffix = target.toString().replace(/[0-9]/g, '');
    let start = 0;
    const step = numericTarget / (duration / 16);
    let raf;

    const animate = () => {
      start += step;
      if (start < numericTarget) {
        setCount(Math.floor(start) + suffix);
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target); // Final value with any special chars
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isActive, target, duration]);

  return count || '0';
}
