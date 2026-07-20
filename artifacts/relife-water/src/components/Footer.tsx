import { Droplet, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email("Please enter a valid email")
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { register, handleSubmit, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    // Just a UI demo for newsletter
    alert(`Subscribed with ${data.email}! (Demo)`);
    reset();
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#041E42] text-white pt-20 pb-10 border-t-4 border-accent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Newsletter Row */}
        <div className="glass-dark rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Stay Refreshed</h3>
            <p className="text-white/60 text-sm">Subscribe to get updates on new products, distribution opportunities, and company news.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-auto flex gap-2">
            <input 
              {...register('email')}
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent w-full md:w-72"
            />
            <button type="submit" className="bg-accent hover:bg-cyan-400 text-primary px-6 py-3 rounded-full font-bold transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a 
              href="#home" 
              onClick={(e) => scrollTo(e, '#home')}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-accent to-blue-400 text-white rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <Droplet size={22} fill="currentColor" />
              </div>
              <span className="font-heading font-extrabold text-3xl tracking-tight text-white">
                Relife
              </span>
            </a>
            <p className="text-white/60 mb-6 text-sm leading-relaxed pr-4">
              Premium packaged drinking water committed to purity, health, and refreshing the community of Sambalpur, Odisha.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" /> Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Products</a></li>
              <li><a href="#distributor" onClick={(e) => scrollTo(e, '#distributor')} className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} /> Partner With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" /> Our Products
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-accent transition-colors">250 ml Bottle</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-accent transition-colors">1 Litre Bottle</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-accent transition-colors">20 Litre Jar</a></li>
              <li><a href="#products" onClick={(e) => scrollTo(e, '#products')} className="hover:text-accent transition-colors">Camper Pack</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" /> Contact
            </h4>
            <address className="not-italic space-y-4 text-sm text-white/70">
              <p className="flex flex-col">
                <strong className="text-white mb-1 font-medium">Headquarters</strong>
                Sonapali, Near Deer Park,<br />Sambalpur, Odisha
              </p>
              <p className="flex flex-col">
                <strong className="text-white mb-1 font-medium">Phone Support</strong>
                <a href="tel:+917008678136" className="hover:text-accent transition-colors">+91 70086 78136</a>
                <a href="tel:+918117887461" className="hover:text-accent transition-colors">+91 81178 87461</a>
              </p>
              <p className="flex flex-col">
                <strong className="text-white mb-1 font-medium">Email</strong>
                <a href="mailto:water.zone.enterprises@gmail.com" className="hover:text-accent transition-colors break-all">water.zone.enterprises@gmail.com</a>
              </p>
            </address>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {currentYear} Relife. Manufactured by Water Zone Enterprises. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
