import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="glass-luxury px-4 py-2 rounded-full text-sm font-bold text-gold-600 border border-gold-300">
                Premium Quality Products
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight luxury-title"
            >
              <span className="gradient-luxury">DIGI</span>
              <br />
              <span className="text-gray-900">Chemicals &</span>
              <br />
              <span className="text-gray-900">Electronics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-800 font-bold mb-8 leading-relaxed"
            >
              Premium Cleaning & Chemical Solutions for Your Business and Home
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury flex items-center space-x-2"
              >
                <FiShoppingCart />
                <span>View Products</span>
                <FiArrowRight />
              </motion.a>

              <motion.a
                href="https://wa.me/917840000893"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold shadow-luxury hover:shadow-luxury-lg transition-all flex items-center space-x-2"
              >
                <FaWhatsapp className="text-white" />
                <span>WhatsApp Order</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-bold">GST Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-bold">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-bold">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Center Product */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div className="w-64 h-80 glass-card rounded-3xl p-8 gold-glow shadow-luxury-lg">
                  <div className="w-full h-full bg-gradient-to-br from-gold-400/20 to-peach-400/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="/images/hero-product.png"
                        alt="Premium Floor Cleaner"
                        className="w-40 h-40 object-contain mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
                      <p className="text-gray-700 font-bold">Floor Cleaner</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Products */}
              {[
                { emoji: '🧼', angle: 0, delay: 0 },
                { emoji: '🚿', angle: 120, delay: 2 },
                { emoji: '✨', angle: 240, delay: 4 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    rotate: [item.angle, item.angle + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: item.delay,
                  }}
                  style={{
                    width: '300px',
                    height: '300px',
                  }}
                >
                  <motion.div
                    className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-3xl shadow-luxury"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
