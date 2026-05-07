import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      rating: 5,
      text: 'Excellent quality products! We use DIGI floor cleaners in our restaurant daily. The cleaning power is amazing and the fragrance is pleasant. Highly recommended!',
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Homemaker',
      rating: 5,
      text: 'Best cleaning products I have ever used. The toilet cleaner works like magic and the glass cleaner leaves no streaks. Very satisfied with the quality!',
      avatar: '👩',
    },
    {
      name: 'Amit Patel',
      role: 'Hotel Manager',
      rating: 5,
      text: 'We order in bulk for our hotel. The products are professional grade and the prices are very competitive. Fast delivery and excellent customer service!',
      avatar: '👨',
    },
    {
      name: 'Sunita Verma',
      role: 'Office Manager',
      rating: 5,
      text: 'Using DIGI products for our office cleaning. The multipurpose cleaner is fantastic and works on all surfaces. Great value for money!',
      avatar: '👩‍💼',
    },
    {
      name: 'Vikram Singh',
      role: 'Shop Owner',
      rating: 5,
      text: 'Reliable supplier with quality products. The hand wash is gentle on skin and the bathroom cleaner removes tough stains easily. Will continue ordering!',
      avatar: '👨‍🦱',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 luxury-title">
            What Our <span className="gradient-luxury">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-800 font-semibold max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-luxury"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FiStar className="w-6 h-6 text-gold-500 fill-gold-500 mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-800 font-bold text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-5xl">{testimonials[currentIndex].avatar}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-700 font-semibold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="glass-card p-4 rounded-full hover:shadow-luxury transition-all"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-gold-500 to-peach-500 w-8'
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="glass-card p-4 rounded-full hover:shadow-luxury transition-all"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '1000+', label: 'Happy Customers' },
            { value: '5.0', label: 'Average Rating' },
            { value: '500+', label: 'Reviews' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-luxury mb-2">
                {stat.value}
              </div>
              <div className="text-gray-800 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
