import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiInfo } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartNotification = () => {
  const { notification } = useCart();

  const icons = {
    success: FiCheck,
    error: FiX,
    info: FiInfo,
  };

  const colors = {
    success: 'from-green-400 to-emerald-400',
    error: 'from-red-400 to-pink-400',
    info: 'from-blue-400 to-cyan-400',
  };

  if (!notification) return null;

  const Icon = icons[notification.type] || FiInfo;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.8 }}
        className="fixed top-24 right-6 z-[9999] max-w-md"
      >
        <div className="notification-luxury flex items-start space-x-4">
          {notification.product && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-6xl"
            >
              {notification.product.image}
            </motion.div>
          )}
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors[notification.type]} flex items-center justify-center`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="font-semibold text-gray-800">{notification.message}</p>
            </div>
            {notification.product && (
              <p className="text-sm text-gray-600 ml-10">
                ₹{notification.product.price} • Added to cart
              </p>
            )}
          </div>

          {/* Animated Checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-gold-400 to-peach-400 flex items-center justify-center"
          >
            <FiCheck className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="h-1 bg-gradient-to-r from-gold-400 to-peach-400 rounded-full mt-2"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 3, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default CartNotification;
