import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import LuxuryBackground from './components/LuxuryBackground';
import CartSidebar from './components/CartSidebar';
import CartNotification from './components/CartNotification';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen relative">
          <LuxuryBackground />
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
            <CartSidebar />
            <CartNotification />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
