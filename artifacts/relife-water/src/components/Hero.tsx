import { motion } from 'framer-motion';
import { ArrowRight, Droplet, ShieldCheck, Activity } from 'lucide-react';
import bottleImg from '@assets/file_000000004d88720bb04e3f7c9e7af1f3_1784443054220.png';

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
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-primary">
      {/* Deep blue to teal premium gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#041E42] via-[#0A2F5C] to-[#0A4F8C]" />

      {/* Subtle radial highlights for depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,180,228,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      {/* Animated wave layers */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-40 animate-[waveFloat_10s_ease-in-out_infinite]">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.05)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none opacity-60 animate-[waveFloat_8s_ease-in-out_infinite_reverse]">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 font-medium text-sm mb-8">
                <Droplet size={14} className="text-accent fill-accent" />
                <span className="tracking-wide uppercase text-xs font-bold">Premium Hydration</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Pure.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] animate-[pulse-glow_4s_ease-in-out_infinite]">
                Untouched.
              </span><br />
              Refreshing.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Experience the crisp taste of 7-stage advanced purification. Sourced from nature, refined for you. Proudly crafted in Sambalpur.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <a
                href="#products"
                onClick={(e) => scrollTo(e, '#products')}
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/917008678136"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                Order via WhatsApp
              </a>
            </motion.div>

            <motion.div
              className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="tel:+917008678136" className="hover:text-white transition-colors">+91 70086 78136</a>
              <span className="hidden sm:inline">|</span>
              <a href="tel:+918117887461" className="hover:text-white transition-colors">+91 81178 87461</a>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none h-[500px] lg:h-[700px] flex items-center justify-center">
            
            {/* The Bottle */}
            <motion.div
              className="relative z-20 h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.img
                src={bottleImg}
                alt="Relife 1L Premium Packaged Drinking Water"
                className="h-[80%] lg:h-[90%] w-auto object-contain drop-shadow-2xl"
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating Glass Stats Cards */}
            <motion.div
              className="absolute left-0 lg:-left-10 top-1/4 z-30 glass-dark rounded-2xl p-4 pr-6 flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              animate={{ y: [-10, 10, -10] }}
              style={{ animationDuration: '7s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none">100%</div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-medium mt-1">Pure & Safe</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-0 lg:-right-4 bottom-1/4 z-30 glass-dark rounded-2xl p-4 pr-6 flex items-center gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              animate={{ y: [10, -10, 10] }}
              style={{ animationDuration: '8s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center border border-blue-400/30">
                <Activity className="text-blue-300" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-none">7-Stage</div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-medium mt-1">RO+UV Filtered</div>
              </div>
            </motion.div>

            {/* Background Glow behind bottle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-accent/20 blur-[100px] rounded-full pointer-events-none z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-white/10 blur-[80px] rounded-full pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
