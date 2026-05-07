import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
  const { getCartCount, setIsCartOpen } = useCart();
  const count = getCartCount();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsCartOpen(true)}
      className="relative glass-luxury p-3 rounded-2xl hover:shadow-luxury transition-all"
    >
      <FiShoppingBag className="w-6 h-6 text-gray-700" />
      
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="cart-badge"
          >
            <motion.span
              key={count}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
            >
              {count}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Effect when items added */}
      {count > 0 && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-400 to-peach-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </motion.button>
  );
};

export default CartIcon;
