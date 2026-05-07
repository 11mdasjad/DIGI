import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LuxuryBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Liquid Mesh Background */}
      <div className="liquid-mesh" />

      {/* Mouse Follow Glow */}
      <motion.div
        className="mouse-glow hidden md:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      />

      {/* Aurora Blobs */}
      <div className="aurora">
        <motion.div
          className="aurora-blob absolute w-96 h-96 bg-gold-200"
          style={{ top: '10%', left: '10%' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="aurora-blob absolute w-[500px] h-[500px] bg-peach-200"
          style={{ top: '50%', right: '10%' }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="aurora-blob absolute w-[400px] h-[400px] bg-mint-200"
          style={{ bottom: '10%', left: '30%' }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="aurora-blob absolute w-[350px] h-[350px] bg-cream-300"
          style={{ top: '30%', left: '50%' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 70, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle-luxury"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Chemical Molecules */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`molecule-${i}`}
            className="absolute"
            style={{
              left: `${(i * 20) + 10}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="8" fill="rgba(255, 222, 91, 0.2)" />
              <circle cx="15" cy="20" r="6" fill="rgba(255, 195, 151, 0.2)" />
              <circle cx="45" cy="25" r="6" fill="rgba(175, 255, 230, 0.2)" />
              <circle cx="20" cy="45" r="5" fill="rgba(255, 222, 91, 0.15)" />
              <circle cx="40" cy="45" r="5" fill="rgba(255, 195, 151, 0.15)" />
              <line x1="30" y1="30" x2="15" y2="20" stroke="rgba(255, 222, 91, 0.3)" strokeWidth="2" />
              <line x1="30" y1="30" x2="45" y2="25" stroke="rgba(255, 195, 151, 0.3)" strokeWidth="2" />
              <line x1="30" y1="30" x2="20" y2="45" stroke="rgba(175, 255, 230, 0.3)" strokeWidth="2" />
              <line x1="30" y1="30" x2="40" y2="45" stroke="rgba(255, 222, 91, 0.3)" strokeWidth="2" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Smooth Animated Waves */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full">
          <motion.path
            fill="url(#wave-gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffde5b" />
              <stop offset="50%" stopColor="#ffc397" />
              <stop offset="100%" stopColor="#afffe6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default LuxuryBackground;
