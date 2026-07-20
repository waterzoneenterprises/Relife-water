import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  message: z.string().min(5, 'Message is required'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `Hello Relife! 👋`,
      ``,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      data.email ? `*Email:* ${data.email}` : null,
      ``,
      `*Message:*`,
      data.message,
    ].filter(l => l !== null).join('\n');

    const url = `https://wa.me/917008678136?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Get in <span className="text-gradient">Touch.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Have questions about our products, want to become a distributor, or need to schedule a bulk delivery? We're here to help.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Contact Form */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-light rounded-[2rem] p-8 md:p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Full Name</label>
                  <input
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl bg-muted border ${errors.name ? 'border-red-500' : 'border-border focus:border-accent focus:ring-1 focus:ring-accent'} outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={`w-full px-4 py-3 rounded-xl bg-muted border ${errors.phone ? 'border-red-500' : 'border-border focus:border-accent focus:ring-1 focus:ring-accent'} outline-none transition-all`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email <span className="text-muted-foreground font-normal">(Optional)</span></label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-xl bg-muted border ${errors.email ? 'border-red-500' : 'border-border focus:border-accent focus:ring-1 focus:ring-accent'} outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-muted border ${errors.message ? 'border-red-500' : 'border-border focus:border-accent focus:ring-1 focus:ring-accent'} outline-none transition-all resize-none`}
                    placeholder="How can we help you today?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg mt-4"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span>Or call us directly:</span>
                  <a href="tel:+917008678136" className="font-semibold text-primary hover:text-accent transition-colors">+91 70086 78136</a>
                  <a href="tel:+918117887461" className="font-semibold text-primary hover:text-accent transition-colors">+91 81178 87461</a>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div 
            className="flex-1 w-full flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="tel:+917008678136" className="flex flex-col p-6 rounded-[2rem] bg-muted hover:bg-[#E0EFFF] transition-colors border border-border group">
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-accent transition-all shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Call Us</h4>
                  <p className="text-muted-foreground font-medium">+91 70086 78136</p>
                  <p className="text-muted-foreground font-medium">+91 81178 87461</p>
                </div>
              </a>
              
              <a href="mailto:water.zone.enterprises@gmail.com" className="flex flex-col p-6 rounded-[2rem] bg-muted hover:bg-[#E0EFFF] transition-colors border border-border group">
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-accent transition-all shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Email Us</h4>
                  <p className="text-muted-foreground font-medium text-sm break-all">water.zone.enterprises<br/>@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex-1 w-full min-h-[250px] rounded-[2rem] overflow-hidden relative shadow-md border border-border group mt-2">
              {/* Premium Map Placeholder */}
              <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #0A4F8C 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl mb-4 animate-[bounce_3s_infinite]">
                    <MapPin size={32} />
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl text-center max-w-xs border border-white/50">
                    <h4 className="font-bold text-lg text-primary mb-1">Water Zone Enterprises</h4>
                    <p className="text-sm text-muted-foreground font-medium">Sonapali, Near Deer Park, Sambalpur, Odisha</p>
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
