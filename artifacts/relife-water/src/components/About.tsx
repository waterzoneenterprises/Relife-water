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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/60 to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-100/40 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Visual Panel */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main decorative card — wave + brand panel */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A2F5C] to-[#0A4F8C] aspect-[4/5] relative flex flex-col justify-between">
                {/* Animated wave SVGs inside card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <svg viewBox="0 0 400 500" className="absolute bottom-0 w-full" preserveAspectRatio="none">
                    <motion.path
                      d="M0,350 C100,300 200,400 300,340 C370,300 400,360 400,360 L400,500 L0,500 Z"
                      fill="rgba(0,180,228,0.18)"
                      animate={{
                        d: [
                          "M0,350 C100,300 200,400 300,340 C370,300 400,360 400,360 L400,500 L0,500 Z",
                          "M0,320 C100,380 200,280 300,360 C370,420 400,300 400,320 L400,500 L0,500 Z",
                          "M0,350 C100,300 200,400 300,340 C370,300 400,360 400,360 L400,500 L0,500 Z",
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0,400 C80,360 180,430 280,390 C350,365 400,400 400,400 L400,500 L0,500 Z"
                      fill="rgba(255,255,255,0.07)"
                      animate={{
                        d: [
                          "M0,400 C80,360 180,430 280,390 C350,365 400,400 400,400 L400,500 L0,500 Z",
                          "M0,370 C80,420 180,370 280,430 C350,460 400,380 400,380 L400,500 L0,500 Z",
                          "M0,400 C80,360 180,430 280,390 C350,365 400,400 400,400 L400,500 L0,500 Z",
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                  {/* Radial glow */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400/10 blur-[60px]" />
                </div>

                {/* Top: brand text */}
                <div className="relative z-10 p-10 pt-12 text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block mb-6"
                  >
                    <Droplets size={56} className="text-cyan-300 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Relife</h3>
                  <p className="text-cyan-200 font-medium text-base tracking-widest uppercase">Pure Drinking Water</p>
                </div>

                {/* Bottom: stats */}
                <div className="relative z-10 m-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold text-white">100%</div>
                      <div className="text-cyan-200 text-xs mt-1">Pure</div>
                    </div>
                    <div className="border-x border-white/20">
                      <div className="text-2xl font-extrabold text-white">RO+UV</div>
                      <div className="text-cyan-200 text-xs mt-1">Filtered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-white">7×</div>
                      <div className="text-cyan-200 text-xs mt-1">Stage Filter</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-5 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-blue-50"
              >
                <Shield className="text-[#0A4F8C]" size={22} />
                <div>
                  <div className="text-xs text-gray-400 font-medium">Purity</div>
                  <div className="text-sm font-bold text-[#0A4F8C]">100% Safe</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-5 bottom-28 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-blue-50"
              >
                <Award className="text-cyan-500" size={22} />
                <div>
                  <div className="text-xs text-gray-400 font-medium">Filtration</div>
                  <div className="text-sm font-bold text-[#0A4F8C]">RO + UV + UF</div>
                </div>
              </motion.div>
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A4F8C] font-semibold text-sm mb-6">
              Who We Are
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2F5C] mb-6 leading-tight">
              The essence of life, <br />
              <span className="text-[#0A4F8C]">bottled with trust.</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Based in the heart of Sambalpur, Odisha, <strong className="text-[#0A2F5C]">Relife</strong> was born from a simple belief: everyone deserves access to water that is not just safe, but genuinely refreshing.
              We don't just filter water — we meticulously craft a hydration experience that restores and revitalises.
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
                  <CheckCircle2 className="text-cyan-500 shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Quality Assured</p>
                <p className="font-bold text-xl text-[#0A2F5C]">100% Tested</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Customer Support</p>
                <p className="font-bold text-xl text-[#0A4F8C]">+91 70086 78136</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
