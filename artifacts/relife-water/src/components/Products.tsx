import { motion } from 'framer-motion';
import { MessageCircle, Droplets } from 'lucide-react';
import img250ml from '@assets/generated_images/relife-250ml.png';
import img1l from '@assets/file_000000004d88720bb04e3f7c9e7af1f3_1784443054220.png';
import img20l from '@assets/generated_images/relife-20l.png';
import imgCamper from '@assets/Screenshot_2026-06-15-14-32-11-66_c4b2fae5edd267b2847f1b32e9bc_1784442864615.jpg';

const PRODUCTS = [
  {
    id: '250ml',
    label: '250 ml Bottle',
    tagline: 'Perfect for on-the-go hydration and events.',
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
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/60 to-white pointer-events-none" />
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#0A4F8C] font-semibold text-sm mb-4">
              <Droplets size={14} />
              Our Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2F5C] mb-4">
              Hydration for <span className="text-[#0A4F8C]">every need.</span>
            </h2>
            <p className="text-gray-500 text-lg">
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
              className="group relative flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-400 border border-blue-100/80 overflow-hidden"
            >
              {product.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-[#0A4F8C]" />
              )}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-cyan-500 to-[#0A4F8C] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Product image */}
              <div className="relative w-full rounded-t-3xl overflow-hidden bg-gradient-to-b from-blue-50/60 to-white flex items-center justify-center" style={{ minHeight: 260 }}>
                <img
                  src={product.image}
                  alt={product.label}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={product.id === 'camper' ? {
                    filter: 'brightness(1.08) contrast(1.12) saturate(1.15) drop-shadow(0 4px 16px rgba(10,79,140,0.18))',
                    objectPosition: 'center 10%',
                  } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 text-center">
                <h3 className="text-xl font-extrabold text-[#0A2F5C] mb-1">{product.label}</h3>
                <p className="text-gray-500 text-sm mb-5 flex-1">{product.tagline}</p>

                <button
                  onClick={() => openWhatsApp(product.label)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-blue-50 hover:bg-gradient-to-r hover:from-[#0A4F8C] hover:to-cyan-500 hover:text-white text-[#0A4F8C] font-semibold transition-all duration-300 border border-blue-100 hover:border-transparent group/btn"
                >
                  <MessageCircle size={17} className="transition-colors" />
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
