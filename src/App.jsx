import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import './App.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultProduct, setDefaultProduct] = useState('');

  const openEnquiry = (product = '') => {
    setDefaultProduct(typeof product === 'string' ? product : '');
    setModalOpen(true);
  };

  const closeEnquiry = () => {
    setModalOpen(false);
    setDefaultProduct('');
  };

  return (
    <>
      <Navbar onEnquiry={openEnquiry} />
      <main>
        <Routes>
          <Route path="/" element={<Home onEnquiry={openEnquiry} />} />
          <Route path="/products" element={<ProductsPage onEnquiry={openEnquiry} />} />
        </Routes>
      </main>
      <Footer onEnquiry={openEnquiry} />
      <WhatsAppButton />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={closeEnquiry}
        defaultProduct={defaultProduct}
      />
    </>
  );
}
