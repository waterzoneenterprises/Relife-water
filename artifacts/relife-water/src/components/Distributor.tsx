import { motion } from 'framer-motion';
import { Truck, TrendingUp, Handshake, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Valid phone required"),
  location: z.string().min(3, "Location required")
});

type FormValues = z.infer<typeof schema>;

export default function Distributor() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormValues) => {
    const text = `Hi Relife! I am interested in becoming a distributor.%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Location:* ${data.location}%0A%0APlease share more details.`;
    window.open(`https://wa.me/917008678136?text=${text}`, '_blank');
    reset();
  };

  const benefits = [
    { icon: TrendingUp, title: "High Margins", desc: "Attractive wholesale pricing for maximum profitability." },
    { icon: Truck, title: "Priority Delivery", desc: "Dedicated logistics support to keep your stock full." },
    { icon: Handshake, title: "Marketing Support", desc: "Banners, posters, and brand materials provided." }
  ];

  return (
    <section id="distributor" className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background imagery */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,228,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Abstract wave inside card */}
          <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
            <svg viewBox="0 0 400 400" className="absolute right-0 bottom-0 w-[600px] h-[600px] translate-x-1/4 translate-y-1/4 animate-[pulse-glow_8s_ease-in-out_infinite]">
              <path fill="currentColor" className="text-accent" d="M43.5,-73.4C56.6,-66.6,67.6,-53.4,74.7,-38.7C81.8,-24,84.9,-7.8,81.4,7C77.9,21.8,67.8,35.2,56.2,46.5C44.6,57.8,31.5,67.1,16.5,73.1C1.5,79.1,-15.4,81.8,-30.1,76.8C-44.8,71.8,-57.3,59.1,-67.2,45.1C-77.1,31,-84.5,15.5,-85.4,-0.5C-86.3,-16.5,-80.7,-33,-70.7,-46C-60.7,-59,-46.3,-68.5,-31.8,-74.6C-17.3,-80.7,-2.7,-81.4,12.1,-78.9C26.9,-76.4,41.7,-70.7,43.5,-73.4Z" transform="translate(200 200) scale(2.2)" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            {/* Left: Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Relife</span>
                </h2>
                <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto lg:mx-0">
                  Join our expanding network across Odisha. Partner with a premium hydration brand that customers trust and demand.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-4 text-left"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl glass-dark border border-white/20 flex items-center justify-center shrink-0">
                        <b.icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{b.title}</h4>
                        <p className="text-white/60 text-sm">{b.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div 
              className="w-full lg:w-[450px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-foreground">
                <h3 className="text-2xl font-bold text-primary mb-2">Become a Distributor</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form to instantly reach our team via WhatsApp.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Full Name</label>
                    <input 
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="e.g. Rahul Sharma"
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Phone Number</label>
                    <input 
                      {...register('phone')}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">Shop / Business Location</label>
                    <input 
                      {...register('location')}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="e.g. Ainthapali, Sambalpur"
                    />
                    {errors.location && <span className="text-xs text-red-500 mt-1">{errors.location.message}</span>}
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl mt-2"
                  >
                    Connect on WhatsApp
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
