import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="loading-screen-luxury">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 222, 91, 0.3)',
                '0 0 40px rgba(255, 222, 91, 0.6)',
                '0 0 20px rgba(255, 222, 91, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gold-400 to-peach-400 flex items-center justify-center"
          >
            <span className="text-5xl font-bold text-white luxury-title">D</span>
          </motion.div>
          <h1 className="text-5xl font-bold gradient-luxury mb-3 luxury-title">DIGI</h1>
          <p className="text-xl text-gray-600">Chemicals & Electronics</p>
          <p className="text-sm text-gray-400 mt-2">Premium Quality Products</p>
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-gold-400 to-peach-400"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-gray-500"
        >
          Loading luxury experience...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
