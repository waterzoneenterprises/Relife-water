import { motion } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-water.jpg';

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Pure crystal clear water" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-black/90 dark:via-black/50" />
      </div>

      {/* Abstract floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 max-w-2xl pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-primary font-medium text-sm mb-6 shadow-sm">
              <Droplet size={14} className="fill-primary" />
              <span>Sourced from nature, refined for you</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Pure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Drinking Water
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-lg leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Experience the crisp, refreshing taste of premium purification. 
            Delivering health and hydration directly to your family in Sambalpur, Odisha.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <a 
              href="#products" 
              onClick={(e) => scrollTo(e, '#products')}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight size={20} />
            </a>
            
            <a 
              href="https://wa.me/917008678136" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 glass-panel hover:bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
        
        {/* Decorative elements for the right side on desktop */}
        <div className="flex-1 hidden md:block">
           {/* Leaving empty to let the background image shine through on the right */}
        </div>
      </div>
    </section>
  );
}
