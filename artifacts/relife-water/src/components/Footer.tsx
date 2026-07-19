import { Droplet } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#062c4f] text-white/80 py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a 
              href="#home" 
              onClick={(e) => scrollTo(e, '#home')}
              className="flex items-center gap-2 mb-6 inline-flex"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-white text-primary rounded-lg shadow-md">
                <Droplet size={18} fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Relife
              </span>
            </a>
            <p className="text-white/60 mb-6 max-w-xs leading-relaxed">
              Premium drinking water committed to purity, health, and refreshing the community of Sambalpur, Odisha.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-relife" onClick={(e) => scrollTo(e, '#why-relife')} className="hover:text-white transition-colors">Why Relife</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-5">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-white transition-colors">250 ml Bottle</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-white transition-colors">1 Litre Bottle</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-white transition-colors">20 Litre Jar</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-white transition-colors">Camper Jug</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-5">Contact</h4>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex flex-col">
                <span className="text-white/50 mb-1">Address</span>
                Sonapali, Near Deer Park,<br />Sambalpur, Odisha
              </p>
              <p className="flex flex-col">
                <span className="text-white/50 mb-1">Phone</span>
                <a href="tel:+917008678136" className="hover:text-white transition-colors">+91 70086 78136</a>
              </p>
              <p className="flex flex-col">
                <span className="text-white/50 mb-1">Email</span>
                <a href="mailto:water.zone.enterprises@gmail.com" className="hover:text-white transition-colors break-all">water.zone.enterprises@gmail.com</a>
              </p>
            </address>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Relife. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> in Odisha
          </p>
        </div>
      </div>
    </footer>
  );
}
