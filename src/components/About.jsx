import { Star, Cog, FlaskConical, Leaf, HeartHandshake, DollarSign, ArrowRight, ShieldCheck, Zap, Headset } from 'lucide-react';
import './About.css';

const stats = [
  { value: '500+', label: 'Plants Worldwide' },
  { value: '15+', label: 'Years Experience' },
  { value: '25+', label: 'Global Presence' },
  { value: '24/7', label: 'Support Available' },
];

const advantages = [
  { icon: <Star size={20} />, title: 'High-Quality Engineering', desc: 'Precision-built machinery for heavy-duty MSW operations at our in-house facility.' },
  // { icon: <ShieldCheck size={20} />, title: 'Proven Reliability', desc: 'Durable construction backed by decades of experience in the global industry.' },
  { icon: <DollarSign size={20} />, title: 'Reduced Operational Costs', desc: 'Energy-efficient designs that dramatically lower your total cost of ownership.' },
  // { icon: <Zap size={20} />, title: 'Advanced Efficiency', desc: 'Optimized performance for maximum throughput in waste processing workflows.' },
  { icon: <Leaf size={20} />, title: 'Global Service', desc: 'Expert maintenance and commissioning support provided to plants across the globe.' },
  { icon: <Headset size={20} />, title: 'After-Sales Support', desc: 'Comprehensive technical assistance and spare parts availability for all our global installations.' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Stats Banner */}
      {/* <div className="about-stats-banner">
        <div className="container">
          <div className="stats-row">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-number">{s.value}</span>
                <span className="stat-text">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="about-merged-layout">
          {/* Left Content */}
          <div className="about-content-left">
            <span className="section-tag">Who We Are</span>
            <h2 className="about-heading">
              Alchemists of  <span className="highlight-text">the MSW</span>
            </h2>
            <p className="about-lead">
              At Zigma Global Environ Solutions, we engineer advanced machinery designed to optimize waste management processes. As part of the <strong>Blue Planet Group</strong>, we manufacture high-performance waste processing machinery for MSW plants worldwide.
            </p>
            <div className="about-actions">
              <a href="#products" className="about-cta">
                Explore Our Products <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Content - Advantage Grid */}
          <div className="about-advantage-right">
            <div className="advantage-inner-grid">
              {advantages.map((adv) => (
                <div className="advantage-card" key={adv.title}>
                  <div className="adv-icon-box">{adv.icon}</div>
                  <div className="adv-text-box">
                    <h4 className="adv-title">{adv.title}</h4>
                    <p className="adv-desc">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
