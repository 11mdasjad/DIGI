import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of products do you offer?',
      answer: 'We offer a wide range of cleaning and chemical products including floor cleaners, toilet cleaners, bathroom cleaners, hand wash, glass cleaners, and multipurpose surface cleaners. All our products are premium quality and suitable for both residential and commercial use.',
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! We offer attractive discounts on bulk orders. For commercial clients and large quantity orders, please contact us directly at +91 7840000893 or email us at Degi20035@gmail.com for special pricing.',
    },
    {
      question: 'What is your delivery area?',
      answer: 'We primarily serve Delhi and nearby areas. We offer fast and reliable delivery services. For specific delivery locations and timelines, please contact our customer support team.',
    },
    {
      question: 'Are your products safe to use?',
      answer: 'Absolutely! All our products are tested and certified for safety. They are formulated with high-quality ingredients and are safe for use in homes, offices, restaurants, and other commercial establishments. Always follow the usage instructions on the product labels.',
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place orders through multiple channels: Call us at +91 7840000893, WhatsApp us for quick orders, email us at Degi20035@gmail.com, or use the Add to Cart buttons on our website. We make ordering easy and convenient!',
    },
    {
      question: 'Do you provide GST invoices?',
      answer: 'Yes, we are a GST registered company (GST Number: 070GVPS6503K1ZB). We provide proper GST invoices for all orders, making it convenient for businesses to claim input tax credit.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We stand behind the quality of our products. If you receive a damaged or defective product, please contact us within 48 hours of delivery. We will arrange for a replacement or refund as per the situation.',
    },
    {
      question: 'Can I get product samples before bulk ordering?',
      answer: 'Yes, we can provide samples for commercial clients interested in bulk orders. Please contact us with your requirements, and we will arrange sample products for you to test.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 luxury-title">
            Frequently Asked <span className="gradient-luxury">Questions</span>
          </h2>
          <p className="text-xl text-gray-800 font-semibold">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden shadow-luxury"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gold-50 transition-all"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <FiMinus className="w-6 h-6 text-gold-600" />
                  ) : (
                    <FiPlus className="w-6 h-6 text-gold-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-800 font-semibold leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center glass-card rounded-2xl p-8 shadow-luxury"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-800 font-semibold mb-6">
            Our team is here to help you. Contact us anytime!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="tel:+917840000893"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury"
            >
              Call Us
            </motion.a>
            <motion.a
              href="https://wa.me/917840000893"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury-outline"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
