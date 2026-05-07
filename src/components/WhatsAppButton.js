import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917840000893?text=Hi, I'm interested in your products"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
      style={{
        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)',
      }}
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
      
      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-dark-800 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-sm font-semibold">Chat with us on WhatsApp</span>
        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-dark-800"></div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
