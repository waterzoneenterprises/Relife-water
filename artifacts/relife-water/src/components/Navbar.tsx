import { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Quality', href: '#quality' },
  { name: 'Why Relife', href: '#why-relife' },
  { name: 'Distributor', href: '#distributor' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to be higher on screen
          if (rect.top <= 200) {
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
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`rounded-full flex items-center justify-between px-6 py-3 transition-all duration-500 border ${
          isScrolled 
            ? 'glass-light shadow-xl border-white/50' 
            : 'glass-dark bg-white/10 shadow-lg border-white/20'
        }`}>
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className={`relative w-10 h-10 flex items-center justify-center rounded-full shadow-md group-hover:scale-105 transition-transform ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Droplet size={20} fill="currentColor" />
            </div>
            <span className={`font-heading font-extrabold text-2xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Relife
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors relative ${
                    isActive 
                      ? (isScrolled ? 'text-primary' : 'text-white') 
                      : (isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full -z-10 ${isScrolled ? 'bg-muted' : 'bg-white/20'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-secondary' 
                  : 'bg-white text-primary hover:bg-muted'
              }`}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              className="absolute top-full left-4 right-4 mt-2 origin-top z-50"
            >
              <div className="glass-light rounded-3xl p-4 flex flex-col gap-1 border border-white/50 shadow-2xl bg-white/90">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-5 py-4 rounded-2xl font-bold transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <a 
                    href="#products"
                    onClick={(e) => scrollTo(e, '#products')}
                    className="flex justify-center bg-primary text-white px-5 py-4 rounded-2xl font-bold shadow-md"
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
