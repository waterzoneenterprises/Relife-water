import { motion } from 'framer-motion';
import { CheckCircle2, Droplets, Shield, Award } from 'lucide-react';

export default function About() {
  const points = [
    "Locally sourced, globally certified purification process",
    "7-stage advanced RO + UV filtration system",
    "Untouched by human hands during bottling",
    "Proudly serving Sambalpur, Odisha community"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Visual Panel */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main decorative card */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(10,47,92,0.3)] bg-gradient-to-br from-primary to-secondary aspect-[4/5] relative flex flex-col justify-between border border-border">
                {/* Animated wave SVGs inside card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                  <div className="absolute bottom-0 w-full animate-[waveFloat_8s_ease-in-out_infinite]">
                    <svg viewBox="0 0 400 160" className="w-full" preserveAspectRatio="none">
                      <path d="M0,60 C100,10 200,110 300,50 C370,10 400,70 400,70 L400,160 L0,160 Z" fill="rgba(0,180,228,0.2)" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 w-full animate-[waveFloat_6s_ease-in-out_1s_infinite_reverse]">
                    <svg viewBox="0 0 400 120" className="w-full" preserveAspectRatio="none">
                      <path d="M0,80 C80,40 180,100 280,70 C350,50 400,85 400,85 L400,120 L0,120 Z" fill="rgba(255,255,255,0.1)" />
                    </svg>
                  </div>
                  {/* Radial glow */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/20 blur-[60px]" />
                </div>

                {/* Top: brand text */}
                <div className="relative z-10 p-10 pt-16 text-center">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mx-auto shadow-xl">
                      <Droplets size={40} className="text-accent fill-accent" />
                    </div>
                  </motion.div>
                  <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Relife</h3>
                  <p className="text-accent font-semibold text-sm tracking-widest uppercase">Pure Drinking Water</p>
                </div>

                {/* Bottom: stats */}
                <div className="relative z-10 m-6 rounded-3xl glass-dark p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold text-white">100%</div>
                      <div className="text-accent text-xs mt-1 font-medium">Pure</div>
                    </div>
                    <div className="border-x border-white/10">
                      <div className="text-2xl font-extrabold text-white">RO+UV</div>
                      <div className="text-accent text-xs mt-1 font-medium">Filtered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-white">7×</div>
                      <div className="text-accent text-xs mt-1 font-medium">Stage Filter</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden md:flex absolute -right-6 lg:-right-12 top-24 bg-white rounded-2xl shadow-xl px-5 py-4 items-center gap-4 border border-border"
              >
                <div className="p-2 rounded-full bg-muted">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Purity</div>
                  <div className="text-sm font-bold text-primary">100% Safe</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="hidden md:flex absolute -left-6 lg:-left-12 bottom-32 bg-white rounded-2xl shadow-xl px-5 py-4 items-center gap-4 border border-border"
              >
                <div className="p-2 rounded-full bg-accent/10">
                  <Award className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Filtration</div>
                  <div className="text-sm font-bold text-primary">RO + UV + UF</div>
                </div>
              </motion.div>

              {/* Mobile badges — shown below the card */}
              <div className="md:hidden flex justify-center gap-4 mt-6">
                <div className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border">
                  <div className="p-2 rounded-full bg-muted">
                    <Shield className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Purity</div>
                    <div className="text-sm font-bold text-primary">100% Safe</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Award className="text-accent" size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Filtration</div>
                    <div className="text-sm font-bold text-primary">RO + UV + UF</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-muted text-secondary font-semibold text-sm mb-6 border border-border">
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              The essence of life, <br />
              <span className="text-gradient">bottled with trust.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based in the heart of Sambalpur, Odisha, <strong className="text-primary">Relife</strong> was born from a simple belief: everyone deserves access to water that is not just safe, but genuinely refreshing.
              We don't just filter water — we meticulously craft a hydration experience that restores and revitalises.
            </p>

            <ul className="space-y-4 mb-12">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="mt-1 bg-accent/10 rounded-full p-1">
                    <CheckCircle2 className="text-accent shrink-0" size={18} />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-8 border-t border-border flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Quality Assured</p>
                  <p className="font-extrabold text-2xl text-primary">100% Tested</p>
                </div>
                <div className="w-px h-12 bg-border hidden sm:block" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Customer Support</p>
                  <p className="font-extrabold text-xl text-secondary">+91 70086 78136</p>
                  <p className="font-extrabold text-xl text-secondary">+91 81178 87461</p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-muted border border-border p-6 mt-2">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">Manufactured &amp; Packed by</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-inner">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">Water Zone Enterprises</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Sonapali, Near Deer Park, Sambalpur, Odisha</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
