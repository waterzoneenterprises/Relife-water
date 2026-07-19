import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '@assets/generated_images/about-purity.jpg';

export default function About() {
  const points = [
    "Locally sourced, globally certified purification process",
    "7-stage advanced RO + UV filtration system",
    "Untouched by human hands during bottling",
    "Proudly serving Sambalpur, Odisha community"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Relife Water Purification Concept" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-5 border-white/20">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-white">100%</div>
                  <div className="text-white/90 text-sm font-medium leading-tight">
                    Pure & Safe<br/>Drinking Water
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-[60px]" />
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-6">
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              The essence of life, <br />
              <span className="text-primary">bottled with trust.</span>
            </h2>
            
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Based in the heart of Sambalpur, Odisha, <strong className="text-foreground">Relife</strong> was born from a simple belief: everyone deserves access to water that is not just safe, but genuinely refreshing. 
              We don't just filter water; we meticulously craft a hydration experience that restores and revitalizes.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
              <div>
                <p className="text-sm text-foreground/50 font-medium uppercase tracking-wider mb-1">Quality Assured</p>
                <p className="font-bold text-xl text-foreground">BIS Certified</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div>
                <p className="text-sm text-foreground/50 font-medium uppercase tracking-wider mb-1">Customer Support</p>
                <p className="font-bold text-xl text-primary">+91 70086 78136</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
