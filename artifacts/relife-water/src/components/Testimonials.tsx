import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sanjay Mishra",
    role: "Restaurant Owner",
    content: "We switched to Relife for our restaurant 6 months ago. The 20L jars arrive consistently on time, and customers often comment on the crisp taste. The premium quality is evident.",
    initials: "SM"
  },
  {
    id: 2,
    name: "Priyanka Dash",
    role: "Local Resident",
    content: "Finding reliable, safe drinking water for my family was a priority. Relife's 7-stage purification gives us complete peace of mind. Excellent service in the Sambalpur area.",
    initials: "PD"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Event Organizer",
    content: "The 250ml bottles are perfect for our corporate events. They look premium and professional compared to other local brands. Highly recommend Water Zone Enterprises.",
    initials: "AP"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-muted">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#ffffff_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Trusted by <span className="text-gradient">Sambalpur.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Hear from the families and businesses who trust Relife for their daily hydration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-light p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-8 right-8 text-accent/20 rotate-180" size={60} />
              
              <div className="flex gap-1 mb-6 text-[#FFB800]">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-primary/80 font-medium leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
