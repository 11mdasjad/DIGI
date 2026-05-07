import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiShoppingCart, FiStar, FiCheck, FiPackage, FiTruck, FiShield } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Link to="/" className="btn-luxury">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gold-600 transition-colors font-medium"
          >
            <FiArrowLeft />
            <span>Back to Products</span>
          </Link>
        </motion.div>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-3xl p-12 flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md mx-auto object-contain max-h-96"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.emoji-fallback').style.display = 'flex';
                }}
              />
              <div className="emoji-fallback text-[200px] text-center hidden items-center justify-center">{product.imageEmoji}</div>
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category */}
            <div className="text-sm text-gold-600 font-semibold mb-4 uppercase tracking-wider">
              {product.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-title">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-5xl font-bold gradient-luxury">₹{product.price}</span>
              <span className="text-2xl text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="bg-gradient-to-r from-gold-500 to-peach-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-luxury">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="mb-8">
                <label className="block text-gray-800 font-semibold mb-4">Select Size:</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-gold-500 to-peach-500 text-white shadow-luxury'
                          : 'glass-luxury text-gray-700 hover:text-gold-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-gray-800 font-semibold mb-4">Quantity:</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="glass-luxury w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-gray-700 hover:shadow-luxury"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-800 w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="glass-luxury w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-gray-700 hover:shadow-luxury"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-gold-500 to-peach-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-luxury hover:shadow-luxury-lg"
              >
                <FiShoppingCart />
                <span>Add to Cart</span>
              </motion.button>

              <motion.a
                href={`https://wa.me/917840000893?text=Hi, I want to order ${quantity} ${product.name} (${selectedSize})`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-luxury hover:shadow-luxury-lg"
              >
                <FaWhatsapp />
                <span>Order on WhatsApp</span>
              </motion.a>
            </div>

            {/* Features */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-700">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card rounded-2xl p-6 text-center">
            <FiPackage className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Tested and certified products</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <FiTruck className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick delivery across Delhi</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <FiShield className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-gray-600">Safe and secure transactions</p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 luxury-title">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="glass-card rounded-2xl p-6 hover-lift-luxury"
                >
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="text-6xl text-center hidden items-center justify-center">{relatedProduct.imageEmoji}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold gradient-luxury">
                      ₹{relatedProduct.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{relatedProduct.originalPrice}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
