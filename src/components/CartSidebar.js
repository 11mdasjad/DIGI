import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    const message = `Hi! I'd like to order:\n\n${cart.map(item => 
      `${item.name} ${item.selectedSize ? `(${item.selectedSize})` : ''} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n')}\n\nTotal: ₹${getCartTotal()}`;
    
    window.open(`https://wa.me/917840000893?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[480px] glass-luxury shadow-luxury-lg z-[9999] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold-200/30">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold gradient-luxury">Shopping Cart</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsCartOpen(false)}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-luxury"
                >
                  <FiX className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>
              <p className="text-sm text-gray-600">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-8xl mb-4">🛍️</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some products to get started!</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="btn-luxury"
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.selectedSize}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-4 rounded-2xl"
                    >
                      <div className="flex space-x-4">
                        {/* Product Image */}
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-white/50 flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="text-4xl hidden items-center justify-center">{item.imageEmoji || '🧴'}</div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-semibold text-gray-800 hover:text-gold-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                          {item.selectedSize && (
                            <p className="text-sm text-gray-500 mt-1">Size: {item.selectedSize}</p>
                          )}
                          <p className="text-lg font-bold gradient-gold mt-2">₹{item.price}</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3 mt-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="w-8 h-8 rounded-full glass-card flex items-center justify-center hover:shadow-luxury"
                            >
                              <FiMinus className="w-4 h-4 text-gray-700" />
                            </motion.button>
                            
                            <span className="font-semibold text-gray-800 w-8 text-center">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="w-8 h-8 rounded-full glass-card flex items-center justify-center hover:shadow-luxury"
                            >
                              <FiPlus className="w-4 h-4 text-gray-700" />
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="ml-auto w-8 h-8 rounded-full glass-card flex items-center justify-center hover:shadow-luxury text-red-500"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="mt-3 pt-3 border-t border-gold-200/30 flex justify-between items-center">
                        <span className="text-sm text-gray-600">Subtotal:</span>
                        <span className="font-bold text-gray-800">₹{item.price * item.quantity}</span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {cart.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearCart}
                      className="w-full glass-card py-3 rounded-xl text-red-500 font-semibold hover:shadow-luxury transition-all"
                    >
                      Clear Cart
                    </motion.button>
                  )}
                </>
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gold-200/30 space-y-4">
                {/* Total */}
                <div className="glass-card p-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-800">₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="border-t border-gold-200/30 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total:</span>
                      <span className="text-2xl font-bold gradient-luxury">₹{getCartTotal()}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Buttons */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-luxury hover:shadow-luxury-lg transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Checkout via WhatsApp</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsCartOpen(false)}
                  className="w-full btn-luxury-outline"
                >
                  Continue Shopping
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
