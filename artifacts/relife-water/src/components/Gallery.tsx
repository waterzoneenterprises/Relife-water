import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Gallery() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-secondary font-semibold text-sm mb-6">
              <Sparkles size={16} />
              <span>Moments of Purity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Our <span className="text-gradient">Gallery.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-muted aspect-square flex items-center justify-center group ${
                idx === 0 || idx === 3 ? 'lg:col-span-2 aspect-[2/1] sm:aspect-auto' : ''
              }`}
            >
              {/* Premium abstract placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-[#E0EFFF] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[40px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-3 text-secondary/40 group-hover:text-secondary/60 transition-colors">
                <ImageIcon size={48} strokeWidth={1} />
                <span className="font-heading font-medium tracking-wide">Relife Images Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
