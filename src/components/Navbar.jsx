import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ onEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link
          to="/"
          className="nav-logo flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/images/logo-wide.png"
            alt="Zigma Logo"
            className="logo-img h-10 w-auto"
          />

          {/* Brand Name */}
          <div className="brand-text-group">
            <span className="brand-slogan">WasteTech</span>
            <span className="brand-subtitle">equipment sales</span>
          </div>
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Products
            </NavLink>
          </li>
          <li>
            <button className="nav-enquiry-btn" onClick={() => { onEnquiry(); setMobileOpen(false); }}>
              Enquire Now
            </button>
          </li>
        </ul>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
