import { ShoppingCart, PackageCheck, Wrench, HeadphonesIcon, Truck, BarChart3 } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <ShoppingCart size={28} />,
    title: 'Machine Sales',
    desc: 'Purchase high-performance waste processing machinery built for durability and efficiency. Full range from individual units to complete MSW plant setups.',
    tags: ['New Equipment', 'Custom Builds', 'Full Plants'],
    color: '#1a6b3a',
  },
  {
    icon: <PackageCheck size={28} />,
    title: 'Machine Rental',
    desc: 'Flexible rental solutions for short or long-term needs. Access our full range of equipment without the upfront capital investment.',
    tags: ['Short-Term', 'Long-Term', 'Flexible Plans'],
    color: '#2563eb',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Maintenance & Support',
    desc: 'Expert maintenance services to keep your machinery running at peak performance. Scheduled and emergency support available.',
    tags: ['Scheduled Service', 'Emergency Repair', 'Spare Parts'],
    color: '#ea580c',
  },
  {
    icon: <Truck size={28} />,
    title: 'Installation & Commissioning',
    desc: 'End-to-end installation, commissioning, and operator training for all equipment. Our team ensures smooth go-live operations.',
    tags: ['On-Site Setup', 'Operator Training', 'Go-Live Support'],
    color: '#7c3aed',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Plant Consulting',
    desc: 'Strategic consulting for MSW plant design and optimization. We help you choose the right machinery mix for your waste volumes.',
    tags: ['Plant Design', 'Optimization', 'ROI Analysis'],
    color: '#0891b2',
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: 'After-Sales Support',
    desc: 'Round-the-clock support from our expert team. Remote diagnostics, on-site visits, and spare parts delivery available globally.',
    tags: ['Remote Diagnostics', 'On-Site Visits', 'Global Coverage'],
    color: '#dc2626',
  },
];

export default function Services({ onEnquiry }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Sales & Rental Services</h2>
          <p className="section-subtitle">
            From purchasing to renting, installation to ongoing support — we provide comprehensive solutions for all your waste processing needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.title} style={{ '--svc-color': svc.color }}>
              <div className="svc-icon-wrap">
                <div className="svc-icon">{svc.icon}</div>
                <div className="svc-icon-glow" />
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-tags">
                {svc.tags.map((t) => (
                  <span className="svc-tag" key={t}>{t}</span>
                ))}
              </div>
              <button className="svc-enquire-btn" onClick={() => onEnquiry(svc.title)}>
                Get Quote →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
