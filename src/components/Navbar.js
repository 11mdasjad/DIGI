import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-luxury shadow-luxury' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-gold-400 to-peach-400 rounded-2xl flex items-center justify-center gold-glow"
            >
              <span className="text-2xl font-bold text-white luxury-title">D</span>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-luxury luxury-title">DIGI</h1>
              <p className="text-xs text-gray-600">Chemicals & Electronics</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-peach-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+917840000893" className="text-gray-600 hover:text-gold-600 transition-colors">
              <FiPhone className="w-5 h-5" />
            </a>
            <a href="mailto:Degi20035@gmail.com" className="text-gray-600 hover:text-gold-600 transition-colors">
              <FiMail className="w-5 h-5" />
            </a>
            <CartIcon />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <CartIcon />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass-luxury"
            >
              {isOpen ? <FiX className="w-6 h-6 text-gray-700" /> : <FiMenu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden glass-luxury"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-gold-600 transition-colors py-2 font-medium"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-gold-200/30">
            <a href="tel:+917840000893" className="text-gray-600 hover:text-gold-600">
              <FiPhone className="w-5 h-5" />
            </a>
            <a href="mailto:Degi20035@gmail.com" className="text-gray-600 hover:text-gold-600">
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            className="block btn-luxury text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
