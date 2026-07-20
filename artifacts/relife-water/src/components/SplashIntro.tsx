import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-primary"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#041E42] via-[#0A2F5C] to-[#0A4F8C]" />

          {/* Rising water container */}
          <motion.div
            className="absolute inset-x-0 bottom-0 w-full h-full"
            initial={{ y: '100%' }}
            animate={{ y: '-55%' }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Deep water body */}
            <div className="absolute inset-0 top-[140px] bg-gradient-to-b from-[#00B4E4] via-[#0A4F8C] to-[#041E42]" />

            {/* Wave layer 1 (back) */}
            <div className="absolute -top-[60px] left-0 w-[200%] h-[140px] animate-[waveSurge1_2.2s_ease-in-out_infinite] opacity-70">
              <svg
                viewBox="0 0 1440 160"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  fill="#0A4F8C"
                  d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
                />
              </svg>
            </div>

            {/* Wave layer 2 (middle) */}
            <div className="absolute -top-[40px] left-0 w-[200%] h-[120px] animate-[waveSurge2_2s_ease-in-out_infinite_reverse] opacity-85">
              <svg
                viewBox="0 0 1440 140"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  fill="#00B4E4"
                  d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,74.7C672,64,768,64,864,74.7C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,140L1392,140C1344,140,1248,140,1152,140C1056,140,960,140,864,140C768,140,672,140,576,140C480,140,384,140,288,140C192,140,96,140,48,140L0,140Z"
                />
              </svg>
            </div>

            {/* Wave layer 3 (front, foam) */}
            <div className="absolute -top-[20px] left-0 w-[200%] h-[100px] animate-[waveSurge3_1.8s_ease-in-out_infinite] opacity-95">
              <svg
                viewBox="0 0 1440 120"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  fill="rgba(255,255,255,0.55)"
                  d="M0,48L48,58.7C96,69,192,91,288,85.3C384,80,480,48,576,42.7C672,37,768,59,864,69.3C960,80,1056,80,1152,74.7C1248,69,1344,59,1392,53.3L1440,48L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                />
              </svg>
            </div>

            {/* Surface shimmer line */}
            <div className="absolute top-[125px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
          </motion.div>

          {/* Brand reveal */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white"
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
          >
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 drop-shadow-[0_4px_20px_rgba(0,180,228,0.5)]">
              Relife
            </div>
            <div className="text-accent font-semibold tracking-[0.25em] uppercase text-sm md:text-base">
              Pure Drinking Water
            </div>
          </motion.div>

          {/* Droplets / bubbles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-sm"
              style={{
                left: `${15 + i * 14}%`,
                bottom: `${10 + (i % 3) * 8}%`,
                width: `${8 + (i % 4) * 6}px`,
                height: `${8 + (i % 4) * 6}px`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [0, -120 - i * 30, -240 - i * 60],
                x: [0, (i % 2 === 0 ? 20 : -20), 0],
              }}
              transition={{
                duration: 2 + i * 0.2,
                delay: 0.4 + i * 0.15,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
