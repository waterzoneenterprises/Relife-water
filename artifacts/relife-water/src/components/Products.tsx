import { motion } from 'framer-motion';
import { MessageCircle, Droplet } from 'lucide-react';
import img250ml from '@assets/generated_images/relife-250ml.png';
import img1l from '@assets/file_000000004d88720bb04e3f7c9e7af1f3_1784443054220.png';
import img20l from '@assets/generated_images/relife-20l.png';
import imgCamper from '@assets/Screenshot_2026-06-15-14-32-11-66_c4b2fae5edd267b2847f1b32e9bc_1784442864615.jpg';

const PRODUCTS = [
  {
    id: '250ml',
    label: '250 ml Bottle',
    tagline: 'Perfect for events and on-the-go hydration.',
    popular: false,
    image: img250ml,
  },
  {
    id: '1l',
    label: '1 Litre Bottle',
    tagline: 'Your daily companion for complete hydration.',
    popular: true,
    image: img1l,
  },
  {
    id: '20l',
    label: '20 Litre Jar',
    tagline: 'Ideal for homes, offices, and regular supply.',
    popular: false,
    image: img20l,
  },
  {
    id: 'camper',
    label: 'Camper Pack',
    tagline: 'Rugged container for outdoor adventures.',
    popular: false,
    image: imgCamper,
  },
];

export default function Products() {
  const openWhatsApp = (productName: string) => {
    const text = encodeURIComponent(`Hi Relife, I'm interested in ordering the ${productName}. Could you provide details?`);
    window.open(`https://wa.me/917008678136?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-secondary font-semibold text-sm mb-4 shadow-sm border border-border">
              <Droplet size={14} className="text-accent" />
              Our Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Hydration for <span className="text-gradient">every need.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From personal bottles to family-sized jars, we package purity in sizes that fit your lifestyle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-border overflow-hidden"
              >
                {product.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-primary z-20" />
                )}
                {product.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-gradient-to-b from-white to-muted/50 p-4">
                  <img
                    src={product.image}
                    alt={product.label}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    style={product.id === 'camper' ? { filter: 'brightness(1.08) contrast(1.12) saturate(1.15) drop-shadow(0 4px 16px rgba(10,79,140,0.18))' } : undefined}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8 text-center bg-white relative z-20">
                  <h3 className="text-2xl font-extrabold text-primary mb-2">{product.label}</h3>
                  <p className="text-muted-foreground text-sm mb-8 flex-1">{product.tagline}</p>

                  <button
                    onClick={() => openWhatsApp(product.label)}
                    className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-muted hover:bg-primary hover:text-white text-primary font-bold transition-all duration-300 group/btn"
                  >
                    <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
                    Enquire on WhatsApp
                  </button>

                  <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <a href="tel:+917008678136" className="hover:text-primary transition-colors">+91 70086 78136</a>
                    <span>|</span>
                    <a href="tel:+918117887461" className="hover:text-primary transition-colors">+91 81178 87461</a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
