import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import bottle250Img from '@assets/generated_images/bottle-250ml.png';
import bottle1LImg from '@assets/generated_images/bottle-1l.png';
import jar20LImg from '@assets/generated_images/jar-20l.png';
import camperImg from '@assets/generated_images/camper.png';

const PRODUCTS = [
  {
    id: '250ml',
    name: '250 ml Bottle',
    tagline: 'Perfect for on-the-go hydration and events.',
    image: bottle250Img,
    popular: false,
    color: 'from-blue-50 to-white'
  },
  {
    id: '1l',
    name: '1 Litre Bottle',
    tagline: 'Your daily companion for complete hydration.',
    image: bottle1LImg,
    popular: true,
    color: 'from-blue-100/80 to-blue-50/50'
  },
  {
    id: '20l',
    name: '20 Litre Jar',
    tagline: 'Ideal for homes, offices, and regular supply.',
    image: jar20LImg,
    popular: false,
    color: 'from-blue-50 to-white'
  },
  {
    id: 'camper',
    name: 'Camper Jug',
    tagline: 'Rugged insulated container for outdoor travels.',
    image: camperImg,
    popular: false,
    color: 'from-blue-50 to-white'
  }
];

export default function Products() {
  const openWhatsApp = (productName: string) => {
    const text = encodeURIComponent(`Hi Relife, I'm interested in ordering the ${productName}. Could you provide details?`);
    window.open(`https://wa.me/917008678136?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 block">
              Our Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Hydration for <span className="text-primary">every need.</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              From personal bottles to family-sized jars, we package purity in sizes that fit your lifestyle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-3xl p-1 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className={`relative aspect-square w-full rounded-[20px] mb-6 overflow-hidden bg-gradient-to-b ${product.color} flex items-center justify-center p-6`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/5 transition-opacity duration-300" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex flex-col flex-1 px-5 pb-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-foreground/60 text-sm mb-6 flex-1">{product.tagline}</p>
                
                <button
                  onClick={() => openWhatsApp(product.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 hover:bg-primary hover:text-white text-foreground font-semibold transition-colors duration-300 border border-gray-200 hover:border-primary group/btn"
                >
                  <ShoppingCart size={18} className="text-primary group-hover/btn:text-white transition-colors" />
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
