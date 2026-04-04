import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const info = [
  { icon: <MapPin size={20} />, label: 'Address', value: 'Blue Planet Group, Industrial Area, Mumbai, Maharashtra, India' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 82202 55980' },
  { icon: <Mail size={20} />, label: 'Email', value: 'connect@zigma.in' },
  { icon: <Clock size={20} />, label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM IST' },
];

export default function Contact({ onEnquiry }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a question about our machinery or want to discuss your requirements? We're here to help.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-col">
            <h3 className="contact-info-title">Reach Out to Our Team</h3>
            <p className="contact-info-desc">
              Our expert team is ready to help you find the perfect waste processing solution for your facility.
            </p>
            <div className="contact-items">
              {info.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-accent" onClick={onEnquiry} style={{ marginTop: '32px' }}>
              Send Enquiry Now
            </button>
          </div>

          <div className="contact-map-col">
            <div className="map-placeholder">
              <div className="map-overlay-content">
                <div className="map-pin">📍</div>
                <h4>Zigma Global Environ Solutions</h4>
                <p>Blue Planet Group, Mumbai, India</p>
              </div>
              <iframe
                title="Zigma Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160987928!2d72.74109876249999!3d19.08199965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
