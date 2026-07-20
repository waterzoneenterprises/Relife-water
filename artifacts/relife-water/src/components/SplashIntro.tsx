import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-hidden bg-primary"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Rising water wave */}
          <motion.div
            className="absolute inset-x-0 bottom-0 w-full"
            initial={{ y: '100%' }}
            animate={{ y: '-40%' }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              viewBox="0 0 1440 320"
              className="absolute -top-[1px] left-0 w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="url(#waveGradient)"
                d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,224C672,224,768,192,864,176C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,180,228,0.9)" />
                  <stop offset="100%" stopColor="#0A4F8C" />
                </linearGradient>
              </defs>
            </svg>

            <div className="h-[120vh] w-full bg-gradient-to-b from-[rgba(0,180,228,0.9)] to-[#0A2F5C]" />
          </motion.div>

          {/* Brand reveal */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3">Relife</div>
            <div className="text-accent font-semibold tracking-[0.25em] uppercase text-sm md:text-base">
              Pure Drinking Water
            </div>
          </motion.div>

          {/* Droplet ripple */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="w-3 h-3 rounded-full bg-white/80 mx-auto mb-2" />
            <div className="w-24 h-1 rounded-full bg-white/30 mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
