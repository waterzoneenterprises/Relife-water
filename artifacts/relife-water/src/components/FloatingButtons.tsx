import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button 1 */}
      <motion.a
        href="tel:+917008678136"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl border border-white/20 group relative"
        aria-label="Call +91 7008678136"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <Phone size={24} className="group-hover:animate-pulse" />
      </motion.a>

      {/* Call Button 2 */}
      <motion.a
        href="tel:+918117887461"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.05 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#0A4F8C] text-white rounded-full flex items-center justify-center shadow-xl border border-white/20 group relative"
        aria-label="Call +91 8117887461"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <Phone size={24} className="group-hover:animate-pulse" />
      </motion.a>

      {/* WhatsApp Button 1 */}
      <motion.a
        href="https://wa.me/917008678136"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl border border-white/20 group relative overflow-hidden"
        aria-label="WhatsApp +91 7008678136"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <MessageCircle size={26} className="relative z-10" />
      </motion.a>

      {/* WhatsApp Button 2 */}
      <motion.a
        href="https://wa.me/918117887461"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-xl border border-white/20 group relative overflow-hidden"
        aria-label="WhatsApp +91 8117887461"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <MessageCircle size={26} className="relative z-10" />
      </motion.a>
    </div>
  );
}
