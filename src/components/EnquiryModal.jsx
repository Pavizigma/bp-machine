import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, User, Mail, Building, Phone, Clock } from 'lucide-react';
import './EnquiryModal.css';

const initialForm = {
  type: 'buy',
  name: '',
  company: '',
  email: '',
  phone: '',
  selectedProducts: [],
  rentalDuration: '',
  message: '',
};

const products = [
  'MSW Plant Equipment',
  'Trommels',
  'Conveyors',
  'Disc Screen Separator',
  'Air Density Separator',
  'Over Band Magnetic Separator',
];

export default function EnquiryModal({ isOpen, onClose, defaultProduct }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (defaultProduct) {
        setForm((f) => ({ ...f, selectedProducts: [defaultProduct] }));
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, defaultProduct]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setForm(initialForm);
        setSubmitted(false);
        setErrors({});
      }, 400);
    }
  }, [isOpen]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (form.selectedProducts.length === 0) e.products = 'Select at least one product';
    if (form.type === 'rent' && !form.rentalDuration) e.rentalDuration = 'Please select a duration';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleProductToggle = (product) => {
    setForm((f) => {
      const isSelected = f.selectedProducts.includes(product);
      const newSelected = isSelected
        ? f.selectedProducts.filter((p) => p !== product)
        : [...f.selectedProducts, product];
      return { ...f, selectedProducts: newSelected };
    });
    if (errors.products) setErrors((er) => ({ ...er, products: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal"><X size={20} /></button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon"><CheckCircle size={48} strokeWidth={1.5} /></div>
            <h3>Enquiry Submitted!</h3>
            <p>Thank you, <strong>{form.name}</strong>! Our team will reach out to you shortly at <strong>{form.email}</strong> to discuss your requirements.</p>
            <button className="btn-primary" onClick={onClose}>Back to Home</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-header-icon"><Send size={24} /></div>
              <div className="modal-header-text">
                <h4 className="modal-title">Get a Custom Quote</h4>
                <p className="modal-sub">We'll help you find the right solution for your waste processing needs.</p>
              </div>
            </div>



            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <div className={`input-wrapper ${errors.name ? 'error' : ''}`}>
                    <User size={18} className="input-icon" />
                    <input name="name" value={form.name} onChange={handleChange} placeholder="" />
                  </div>
                  {errors.name && <span className="err-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                    <Mail size={18} className="input-icon" />
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="" />
                  </div>
                  {errors.email && <span className="err-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <div className="input-wrapper">
                    <Building size={18} className="input-icon" />
                    <input name="company" value={form.company} onChange={handleChange} placeholder="" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <div className={`input-wrapper ${errors.phone ? 'error' : ''}`}>
                    <Phone size={18} className="input-icon" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="" />
                  </div>
                  {errors.phone && <span className="err-msg">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="group-label">Machines of Interest *</label>
                <div className={`products-chips ${errors.products ? 'error' : ''}`}>
                  {products.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`product-chip ${form.selectedProducts.includes(p) ? 'selected' : ''}`}
                      onClick={() => handleProductToggle(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                {errors.products && <span className="err-msg">{errors.products}</span>}
              </div>

              {form.type === 'rent' && (
                <div className="form-group rental-group animate-in">
                  <div className="rental-header">
                    <Clock size={16} />
                    <label>Rental Duration *</label>
                  </div>
                  <div className="duration-options">
                    {['1–3 Months', '3–6 Months', '6–12 Months', '1+ Year'].map((d) => (
                      <label key={d} className={`duration-chip ${form.rentalDuration === d ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="rentalDuration"
                          value={d}
                          checked={form.rentalDuration === d}
                          onChange={handleChange}
                        />
                        {d}
                      </label>
                    ))}
                  </div>
                  {errors.rentalDuration && <span className="err-msg">{errors.rentalDuration}</span>}
                </div>
              )}

              <div className="form-group">
                <label>Message / Specific Requirements</label>
                <div className="input-wrapper textarea-wrapper">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=""
                    rows={2}
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit-premium">
                <span>Submit Enquiry</span>
                <div className="btn-icon"><Send size={18} /></div>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
