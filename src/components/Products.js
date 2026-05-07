import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiStar, FiSearch, FiFilter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, 1, product.sizes[0]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="product-card-luxury shimmer group"
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gold-500 to-peach-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-luxury">
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 10 }}
          className="text-8xl mb-6 text-center cursor-pointer"
        >
          {product.image}
        </motion.div>
      </Link>

      {/* Category */}
      <div className="text-xs text-gold-600 font-semibold mb-2 uppercase tracking-wider">
        {product.category}
      </div>

      {/* Product Name */}
      <Link to={`/product/${product.id}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gold-600 transition-colors cursor-pointer">
          {product.name}
        </h3>
      </Link>

      {/* Rating */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating} ({product.reviews})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-2xl font-bold gradient-luxury">₹{product.price}</span>
        <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="flex-1 bg-gradient-to-r from-gold-500 to-peach-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-luxury hover:shadow-luxury-lg transition-all"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </motion.button>

        <motion.a
          href={`https://wa.me/917840000893?text=Hi, I'm interested in ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-luxury p-3 rounded-xl hover:bg-green-50 transition-all"
        >
          <FaWhatsapp className="w-6 h-6 text-green-500" />
        </motion.a>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/0 to-peach-400/0 group-hover:from-gold-400/10 group-hover:to-peach-400/10 transition-all duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-gold-600 font-semibold mb-4 uppercase tracking-wider"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 luxury-title">
            Premium <span className="gradient-luxury">Chemical Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of high-quality cleaning and chemical products
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full input-luxury pl-12 text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden glass-luxury px-6 py-4 rounded-xl flex items-center space-x-2 text-gray-700"
            >
              <FiFilter />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-3 mt-6"
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-gold-500 to-peach-500 text-white shadow-luxury'
                        : 'glass-luxury text-gray-700 hover:text-gold-600'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Products;
