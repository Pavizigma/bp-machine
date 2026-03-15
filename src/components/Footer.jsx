import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import './Footer.css';

const productLinks = [
  { name: 'MSW Plant Equipment', href: '/products' },
  { name: 'Trommels', href: '/products' },
  { name: 'Conveyors', href: '/products' },
  { name: 'Disc Screen Separator', href: '/products' },
  { name: 'Air Density Separator', href: '/products' },
  { name: 'Magnetic Separator', href: '/products' },
];

const serviceLinks = [
  { name: 'Machine Sales', href: '#contact' },
  { name: 'Machine Rental', href: '#contact' },
  { name: 'Maintenance & Support', href: '#contact' },
  { name: 'Plant Consulting', href: '#contact' },
];

export default function Footer({ onEnquiry }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Branding Column */}
            <div className="footer-col branding-col">
              <div className="footer-logo">
                <img src="/images/logo-wide.png" alt="Zigma Global" />

              </div>
              <p className="footer-brand-desc">
                Engineering advanced waste processing solutions for a cleaner planet. Proud member of the Blue Planet Group.
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
              </div>
            </div>

            {/* Products Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Products</h4>
              <ul className="footer-links">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => {
                      if (link.href === '#contact') {
                        e.preventDefault();
                        onEnquiry();
                      }
                    }}>{link.name}</a>
                  </li>
                ))}
            
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col contact-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={18} className="contact-icon" />
                  <span>
                    Zigma Global Environ Solutions Pvt Ltd,<br />
                    Tamil Nadu, India.
                  </span>
                </li>
                <li>
                  <Phone size={18} className="contact-icon" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <Mail size={18} className="contact-icon" />
                  <a href="mailto:info@zigma.in">info@zigma.in</a>
                </li>
              </ul>
              <button className="footer-enquiry-btn" onClick={() => onEnquiry()}>
                Enquire Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>© {year} Zigma Global Environ Solutions. All rights reserved.</p>
            <div className="footer-bottom-links">
              Designed for a greener planet
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
