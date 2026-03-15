import { Headset, Phone } from 'lucide-react';
import './SupportBanner.css';

export default function SupportBanner() {
  return (
    <section className="support-banner">
      <div className="container">
        <div className="support-card">
          <div className="support-image">
            <img src="/indian-support.png" alt="Zigma Support Specialist" />
            <div className="support-icon-badge">
              <Headset size={20} />
            </div>
          </div>
          <div className="support-content">
            <div className="support-header">
              <span className="support-tag">GET SUPPORT</span>
              <Headset size={16} className="support-tag-icon" />
            </div>
            <h2 className="support-title">Need help finding the right equipment?</h2>
            <p className="support-text">
              <Phone size={18} className="phone-inline-icon" />
              Call us at <a href="tel:+919876543210" className="phone-link">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
