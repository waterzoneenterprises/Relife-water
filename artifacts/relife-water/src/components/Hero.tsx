import { motion } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A2F5C] via-[#0A4F8C] to-[#0e6eb8]" />

      {/* Subtle radial highlight */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(0,180,228,0.18),transparent)]" />

      {/* Animated wave layers */}
      {/* Wave layer 1 — slow float */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none animate-[waveFloat_7s_ease-in-out_infinite]">
        <svg viewBox="0 0 1440 220" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path
            d="M0,120 C240,170 480,70 720,120 C960,170 1200,70 1440,120 L1440,220 L0,220 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>
      {/* Wave layer 2 — slightly faster */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none animate-[waveFloat_9s_ease-in-out_1.5s_infinite]">
        <svg viewBox="0 0 1440 160" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path
            d="M0,100 C360,60 720,140 1080,90 C1260,65 1380,110 1440,100 L1440,160 L0,160 Z"
            fill="rgba(255,255,255,0.09)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,60 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative water drop SVG */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none opacity-10">
        <svg viewBox="0 0 200 260" width="320" height="420" fill="white">
          <path d="M100 10 C100 10 20 110 20 165 C20 215 56 250 100 250 C144 250 180 215 180 165 C180 110 100 10 100 10Z" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 font-medium text-sm mb-8 shadow-lg">
              <Droplet size={14} className="fill-cyan-300 text-cyan-300" />
              <span>Sourced from nature, refined for you</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Pure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Drinking Water
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Experience the crisp, refreshing taste of premium purification.
            Delivering health and hydration directly to your family in Sambalpur, Odisha.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A4F8C] hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-black/20 hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight size={20} />
            </a>

            <a
              href="https://wa.me/917008678136"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Order via WhatsApp
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-10 mt-14 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[['100%', 'Pure & Safe'], ['RO+UV', 'Filtered'], ['7-Stage', 'Purification']].map(([val, label]) => (
              <div key={val} className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-cyan-300">{val}</div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
