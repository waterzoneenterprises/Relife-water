import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Wallet, Heart, Award, Truck } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '100% Pure & Safe',
    description: 'Every drop undergoes rigorous testing to guarantee absolute safety and purity for consumption.'
  },
  {
    icon: Zap,
    title: 'Advanced Purification',
    description: 'Utilizing state-of-the-art multi-stage RO and UV technology to remove all impurities.'
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Premium quality drinking water that doesn\'t strain your household or business budget.'
  },
  {
    icon: Heart,
    title: 'Trusted by Families',
    description: 'The preferred choice for thousands of homes prioritizing health and well-being.'
  },
  {
    icon: Award,
    title: 'Strict Quality Standards',
    description: 'Every batch is tested and meets strict national quality standards for safe drinking water.'
  },
  {
    icon: Truck,
    title: 'Delivered to Your Door',
    description: 'Prompt and reliable delivery service across Sambalpur, bringing hydration directly to you.'
  }
];

export default function WhyChoose() {
  return (
    <section id="why-relife" className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/50 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Choose Relife?
            </h2>
            <p className="text-white/80 text-lg">
              We don't compromise on quality because we know it's about your family's health.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300 border border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-sm">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
