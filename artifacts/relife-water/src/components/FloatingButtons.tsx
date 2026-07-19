import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        href="tel:+917008678136"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group"
        aria-label="Call Us"
      >
        <Phone size={24} className="group-hover:animate-pulse" />
      </motion.a>

      {/* WhatsApp Button 1 */}
      <motion.a
        href="https://wa.me/917008678136"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 group"
        aria-label="WhatsApp +91 7008678136"
      >
        <MessageCircle size={26} className="group-hover:animate-pulse" />
      </motion.a>

      {/* WhatsApp Button 2 */}
      <motion.a
        href="https://wa.me/918117887461"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#128C7E]/30 group"
        aria-label="WhatsApp +91 8117887461"
      >
        <MessageCircle size={26} className="group-hover:animate-pulse" />
      </motion.a>
    </div>
  );
}
