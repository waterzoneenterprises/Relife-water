import { motion } from 'framer-motion';
import { MessageCircle, Droplets } from 'lucide-react';

const PRODUCTS = [
  {
    id: '250ml',
    name: '250 ml',
    label: '250 ml Bottle',
    tagline: 'Perfect for on-the-go hydration and events.',
    popular: false,
    accentFrom: 'from-sky-400',
    accentTo: 'to-blue-600',
    bottleHeight: 'h-32',
    bottleWidth: 'w-14',
  },
  {
    id: '1l',
    name: '1 Litre',
    label: '1 Litre Bottle',
    tagline: 'Your daily companion for complete hydration.',
    popular: true,
    accentFrom: 'from-cyan-400',
    accentTo: 'to-[#0A4F8C]',
    bottleHeight: 'h-44',
    bottleWidth: 'w-16',
  },
  {
    id: '20l',
    name: '20 Litre Jar',
    label: '20 Litre Jar',
    tagline: 'Ideal for homes, offices, and regular supply.',
    popular: false,
    accentFrom: 'from-blue-500',
    accentTo: 'to-[#0A2F5C]',
    bottleHeight: 'h-40',
    bottleWidth: 'w-28',
  },
  {
    id: 'camper',
    name: 'Camper',
    label: 'Camper Pack',
    tagline: 'Rugged container for outdoor adventures.',
    popular: false,
    accentFrom: 'from-teal-400',
    accentTo: 'to-blue-700',
    bottleHeight: 'h-36',
    bottleWidth: 'w-20',
  }
];

function ProductPlaceholder({ product }: { product: typeof PRODUCTS[0] }) {
  const isJar = product.id === '20l';
  const isCamper = product.id === 'camper';

  return (
    <div className={`relative flex flex-col items-center justify-center gap-3 ${isJar ? 'py-2' : 'py-4'}`}>
      {/* SVG bottle / jar silhouette */}
      <div className="relative flex items-end justify-center" style={{ height: 180 }}>
        {isJar ? (
          /* 20L Jar shape */
          <svg width="110" height="155" viewBox="0 0 110 155" fill="none" className="drop-shadow-xl">
            <defs>
              <linearGradient id={`jarGrad-${product.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0A2F5C" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {/* Handle */}
            <path d="M78,40 Q105,40 105,65 Q105,90 78,90" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Cap */}
            <rect x="35" y="10" width="40" height="16" rx="6" fill="white" fillOpacity="0.9" />
            {/* Body */}
            <rect x="18" y="25" width="74" height="118" rx="18" fill={`url(#jarGrad-${product.id})`} />
            {/* Sheen */}
            <rect x="28" y="38" width="18" height="70" rx="9" fill="white" fillOpacity="0.15" />
            {/* Water level */}
            <rect x="18" y="90" width="74" height="53" rx="12" fill="white" fillOpacity="0.08" />
            <path d="M18,90 Q55,80 92,90" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
          </svg>
        ) : isCamper ? (
          /* Camper wide-mouth jug */
          <svg width="100" height="150" viewBox="0 0 100 150" fill="none" className="drop-shadow-xl">
            <defs>
              <linearGradient id={`camperGrad`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {/* Handle */}
            <path d="M72,35 Q92,35 92,58 Q92,80 72,80" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Cap */}
            <rect x="28" y="8" width="44" height="18" rx="8" fill="white" fillOpacity="0.95" />
            {/* Spout */}
            <rect x="38" y="2" width="24" height="10" rx="5" fill="white" fillOpacity="0.8" />
            {/* Body — trapezoidal for camper */}
            <path d="M14,26 L86,26 L80,140 Q50,148 20,140 Z" fill="url(#camperGrad)" />
            {/* Sheen */}
            <rect x="24" y="38" width="16" height="65" rx="8" fill="white" fillOpacity="0.15" />
            {/* Water */}
            <path d="M16,90 Q50,80 84,90 L80,140 Q50,148 20,140 Z" fill="white" fillOpacity="0.07" />
            <path d="M16,90 Q50,82 84,90" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
          </svg>
        ) : (
          /* Standard bottle */
          <svg width={product.id === '1l' ? 70 : 58} height={product.id === '1l' ? 170 : 148} viewBox="0 0 70 170" fill="none" className="drop-shadow-xl">
            <defs>
              <linearGradient id={`bottleGrad-${product.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0A4F8C" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {/* Cap */}
            <rect x="22" y="4" width="26" height="18" rx="6" fill="white" fillOpacity="0.95" />
            {/* Neck */}
            <rect x="26" y="20" width="18" height="20" rx="4" fill={`url(#bottleGrad-${product.id})`} fillOpacity="0.7" />
            {/* Shoulder taper */}
            <path d="M26,38 Q14,50 14,62 L14,65 L56,65 L56,62 Q56,50 44,38 Z" fill={`url(#bottleGrad-${product.id})`} />
            {/* Body */}
            <rect x="12" y="64" width="46" height={product.id === '250ml' ? 78 : 90} rx="12" fill={`url(#bottleGrad-${product.id})`} />
            {/* Bottom cap */}
            <rect x="12" y={product.id === '250ml' ? 130 : 142} width="46" height="14" rx="12" fill={`url(#bottleGrad-${product.id})`} fillOpacity="0.8" />
            {/* Sheen */}
            <rect x="22" y="68" width="10" height={product.id === '250ml' ? 68 : 80} rx="5" fill="white" fillOpacity="0.18" />
            {/* Water level */}
            <path d="M14,110 Q35,103 56,110" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
          </svg>
        )}

        {/* Reflection */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/15 rounded-full blur-sm" />
      </div>

      {/* Coming soon label */}
      <div className="flex flex-col items-center gap-1 mt-1">
        <span className="text-xs font-semibold text-[#0A4F8C]/60 uppercase tracking-widest">Relife Product</span>
        <span className="text-xs text-gray-400 font-medium">Image Coming Soon</span>
      </div>
    </div>
  );
}

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

              {/* Image area — elegant gradient placeholder */}
              <div className={`relative w-full rounded-t-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/60 flex items-center justify-center`} style={{ minHeight: 230 }}>
                {/* Subtle wave inside card */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                  <svg viewBox="0 0 300 50" className="w-full" preserveAspectRatio="none">
                    <path d="M0,25 C75,50 150,0 225,25 C262,37 287,15 300,25 L300,50 L0,50 Z" fill="rgba(10,79,140,0.07)" />
                    <path d="M0,35 C75,15 150,50 225,35 C262,25 287,45 300,35 L300,50 L0,50 Z" fill="rgba(10,79,140,0.05)" />
                  </svg>
                </div>
                {/* Animated glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <ProductPlaceholder product={product} />
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
