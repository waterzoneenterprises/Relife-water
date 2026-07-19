import { motion } from 'framer-motion';
import wzeImg from '@assets/file_00000000492c72099f36013042e8248a_1784441917442.png';

export default function ManufacturerBanner() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section label */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#0A4F8C] font-semibold text-sm mb-3">
            Our Manufacturer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2F5C]">
            Backed by <span className="text-[#0A4F8C]">Water Zone Enterprises</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Relife drinking water is manufactured and packed by Water Zone Enterprises — a trusted name in water purification and packaging in Sambalpur, Odisha.
          </p>
        </motion.div>

        {/* Banner image */}
        <motion.div
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={wzeImg}
            alt="Water Zone Enterprises — Manufacturer of Relife Drinking Water"
            className="w-full h-auto object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#062c4f]/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* Manufacturer details row */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { label: 'Manufacturer', value: 'Water Zone Enterprises' },
            { label: 'Location', value: 'Sonapali, Sambalpur, Odisha' },
            { label: 'Brand', value: 'Relife Pure Drinking Water' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-2xl px-6 py-4 shadow-md border border-blue-50 text-left min-w-[200px]"
            >
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{label}</p>
              <p className="font-bold text-[#0A2F5C] text-sm">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
