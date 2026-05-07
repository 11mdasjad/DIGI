import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiTruck, FiAward, FiHeadphones, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Premium Quality',
      description: 'All products are tested and certified for highest quality standards',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTruck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Delhi and nearby areas',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiAward,
      title: 'GST Registered',
      description: 'Fully registered business with GST number 070GVPS6503K1ZB',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiHeadphones,
      title: '24/7 Support',
      description: 'Round the clock customer support via phone and WhatsApp',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiDollarSign,
      title: 'Best Prices',
      description: 'Competitive pricing with bulk order discounts available',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FiCheckCircle,
      title: 'Trusted Brand',
      description: 'Serving 1000+ satisfied customers with premium products',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
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
            className="inline-block text-gold-600 font-bold mb-4 uppercase tracking-wider"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 luxury-title">
            Our <span className="gradient-luxury">Premium Features</span>
          </h2>
          <p className="text-xl text-gray-800 font-bold max-w-2xl mx-auto">
            Experience excellence with our commitment to quality and service
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 hover-lift-luxury h-full shadow-luxury">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-luxury`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 font-bold leading-relaxed">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden shadow-luxury-lg">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 luxury-title">
                Ready to Experience Premium Quality?
              </h3>
              <p className="text-xl text-gray-800 font-bold mb-8 max-w-2xl mx-auto">
                Contact us today for bulk orders and special discounts
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="tel:+917840000893"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury text-lg"
                >
                  Call Now: +91 7840000893
                </motion.a>
                <motion.a
                  href="mailto:Degi20035@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury-outline text-lg"
                >
                  Email Us
                </motion.a>
              </div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-gold-400 to-peach-400"
                  style={{
                    left: `${i * 40}%`,
                    top: `${i * 30}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
