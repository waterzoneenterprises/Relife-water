import { motion } from 'framer-motion';
import { Shield, MapPin, Factory, Droplets, Phone, Mail } from 'lucide-react';

export default function ManufacturerBanner() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-white relative overflow-hidden">
      {/* Decorative water orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main manufacturer card */}
        <motion.div
          className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-gradient-to-br from-primary to-[#062c4f]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,100 C100,60 200,140 400,80 L400,200 L0,200 Z" fill="white" />
              <path d="M0,140 C100,100 200,180 400,120 L400,200 L0,200 Z" fill="white" fillOpacity="0.5" />
            </svg>
          </div>

          <div className="relative p-10 md:p-16 text-center text-white">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-bold text-xs uppercase tracking-wider mb-6">
              <Factory size={14} /> Manufacturer
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Water Zone Enterprises</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base font-medium mb-8">
              The proud parent company behind Relife Pure Drinking Water, operating a state-of-the-art purification facility in Sambalpur, Odisha.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="tel:+917008678136" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors">
                <Phone size={16} className="text-accent" />
                +91 70086 78136
              </a>
              <a href="mailto:water.zone.enterprises@gmail.com" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors">
                <Mail size={16} className="text-accent" />
                water.zone.enterprises@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { icon: Factory, label: 'Parent Company', value: 'Water Zone Enterprises' },
            { icon: MapPin, label: 'Facility Location', value: 'Sonapali, Sambalpur' },
            { icon: Shield, label: 'Brand Portfolio', value: 'Relife Pure Water' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-light rounded-3xl p-6 shadow-sm border border-border flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="font-extrabold text-primary text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
