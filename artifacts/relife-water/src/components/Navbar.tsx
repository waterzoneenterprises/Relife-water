import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Why Relife', href: '#why-relife' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`glass-panel rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-500 ${
          isScrolled ? 'shadow-lg border-white/40' : 'shadow-sm border-white/20 bg-white/40'
        }`}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-md group-hover:scale-105 transition-transform">
              <Droplet size={18} fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-primary">
              Relife
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <a 
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-full font-medium text-sm transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 origin-top"
            >
              <div className="glass-panel rounded-2xl p-4 flex flex-col gap-2 border border-white/50 shadow-xl">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-foreground/5 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 mt-2 border-t border-foreground/10">
                  <a 
                    href="#products"
                    onClick={(e) => scrollTo(e, '#products')}
                    className="flex justify-center bg-primary text-white px-5 py-3 rounded-xl font-medium shadow-md shadow-primary/20"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
