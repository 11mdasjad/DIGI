import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiPackage, FiTruck, FiAward } from 'react-icons/fi';

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    {
      icon: FiUsers,
      value: 1000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FiPackage,
      value: 50,
      suffix: '+',
      label: 'Premium Products',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiTruck,
      value: 100,
      suffix: '%',
      label: 'Fast Delivery',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiAward,
      value: 5,
      suffix: '★',
      label: 'Quality Rating',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover-lift-luxury shadow-luxury">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-luxury`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Value */}
                <div className="text-4xl font-bold gradient-luxury mb-2">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="text-gray-900 font-bold text-sm">{stat.label}</p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
