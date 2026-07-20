import { motion } from 'framer-motion';
import { Droplet, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export default function QualityPromise() {
  const promises = [
    {
      icon: Droplet,
      title: "Pristine Source",
      desc: "Water sourced from verified, pure origins before undergoing rigorous treatment."
    },
    {
      icon: ShieldCheck,
      title: "7-Stage RO+UV",
      desc: "Advanced multi-stage filtration guarantees removal of all impurities and contaminants."
    },
    {
      icon: HeartPulse,
      title: "Mineral Enriched",
      desc: "Essential minerals are retained to give you healthy, revitalizing hydration."
    },
    {
      icon: Award,
      title: "Untouched by Hands",
      desc: "Fully automated bottling process ensures zero contamination from start to finish."
    }
  ];

  return (
    <section id="quality" className="py-24 bg-white relative">
      {/* Abstract wave top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 transform translate-y-[-1px]">
        <svg viewBox="0 0 1440 60" className="w-full h-12 md:h-16" preserveAspectRatio="none">
          <path fill="#F0F8FF" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-secondary font-semibold text-sm mb-6">
                <Award size={16} />
                <span>Our Guarantee</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                The Relife <span className="text-gradient">Quality Promise.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                We believe that water is the foundation of health. That's why we've invested in world-class purification technology to ensure every drop of Relife water exceeds safety standards.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-muted flex items-center justify-center text-primary font-bold text-sm shadow-sm z-10" style={{ zIndex: 10 - i }}>
                      <ShieldCheck size={20} />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-primary">
                  100% Lab Tested <br/><span className="text-muted-foreground font-normal">Daily quality checks</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 w-full relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {promises.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className={`glass-light p-6 rounded-3xl ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center mb-5">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
