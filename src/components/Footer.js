import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative glass-card border-t border-gold-200/30 overflow-hidden mt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-peach-500 rounded-xl flex items-center justify-center gold-glow">
                <span className="text-2xl font-bold text-white luxury-title">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-luxury luxury-title">DIGI</h3>
                <p className="text-xs font-bold text-gray-800">Chemicals & Electronics</p>
              </div>
            </div>
            <p className="text-gray-800 font-semibold mb-6 leading-relaxed">
              Premium cleaning and chemical solutions for your business and home. Quality products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-luxury rounded-lg flex items-center justify-center hover:bg-blue-50 transition-all"
              >
                <FiFacebook className="w-5 h-5 text-blue-600" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-luxury rounded-lg flex items-center justify-center hover:bg-pink-50 transition-all"
              >
                <FiInstagram className="w-5 h-5 text-pink-600" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-luxury rounded-lg flex items-center justify-center hover:bg-blue-50 transition-all"
              >
                <FiTwitter className="w-5 h-5 text-blue-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-luxury rounded-lg flex items-center justify-center hover:bg-blue-50 transition-all"
              >
                <FiLinkedin className="w-5 h-5 text-blue-700" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Features', 'Testimonials', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-800 font-semibold hover:text-gold-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 transition-all mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                'Floor Cleaners',
                'Toilet Cleaners',
                'Bathroom Products',
                'Hand Wash',
                'Glass Cleaners',
                'Surface Cleaners',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-800 font-semibold hover:text-gold-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold-500 group-hover:w-4 transition-all mr-2"></span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917840000893"
                  className="flex items-start space-x-3 text-gray-800 font-bold hover:text-gold-600 transition-colors group"
                >
                  <FiPhone className="w-5 h-5 mt-1 flex-shrink-0 group-hover:animate-pulse text-gold-600" />
                  <span>+91 7840000893</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Degi20035@gmail.com"
                  className="flex items-start space-x-3 text-gray-800 font-bold hover:text-gold-600 transition-colors group"
                >
                  <FiMail className="w-5 h-5 mt-1 flex-shrink-0 group-hover:animate-pulse text-gold-600" />
                  <span>Degi20035@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-800 font-semibold">
                  <FiMapPin className="w-5 h-5 mt-1 flex-shrink-0 text-gold-600" />
                  <span>3366-3700 1st Floor, Sita Ram Bazar, Delhi - 110006</span>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <span className="text-sm font-bold text-gold-600">GST:</span>
                  <span className="text-sm font-bold text-gray-800">070GVPS6503K1ZB</span>
                </div>
              </li>
            </ul>

            <motion.a
              href="https://wa.me/917840000893"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold shadow-luxury hover:shadow-luxury-lg transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-200/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-800 font-bold text-sm text-center md:text-left">
              © {currentYear} DIGI Chemicals & Electronics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-800 font-semibold hover:text-gold-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-800 font-semibold hover:text-gold-600 transition-colors">
                Terms of Service
              </a>
              <a href="#refund" className="text-gray-800 font-semibold hover:text-gold-600 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
