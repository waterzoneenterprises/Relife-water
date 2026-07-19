import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number').max(15),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl">
              Have questions about our products, want to become a distributor, or need to schedule a bulk delivery? We're here to help.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Left: Contact Form */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name <span className="text-destructive">*</span></label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.name ? 'border-destructive focus:ring-destructive' : 'border-gray-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">Phone Number <span className="text-destructive">*</span></label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.phone ? 'border-destructive focus:ring-destructive' : 'border-gray-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address <span className="text-foreground/50 font-normal">(Optional)</span></label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.email ? 'border-destructive focus:ring-destructive' : 'border-gray-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message <span className="text-destructive">*</span></label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${errors.message ? 'border-destructive focus:ring-destructive' : 'border-gray-200 focus:border-primary focus:ring-primary'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all resize-none`}
                    placeholder="How can we help you today?"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div 
            className="flex-1 w-full flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <a href="tel:+917008678136" className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors group">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-foreground/70 font-medium">+91 70086 78136</p>
                  <p className="text-foreground/70 font-medium">+91 81178 87461</p>
                </div>
              </a>
              
              <a href="mailto:water.zone.enterprises@gmail.com" className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors group">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-foreground/70 font-medium text-sm break-all">water.zone.enterprises@<br/>gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex-1 w-full min-h-[300px] rounded-3xl overflow-hidden relative shadow-md border border-gray-100 group">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center">
                {/* Visual map abstract representation */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #0A4F8C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg mb-4 animate-bounce">
                    <MapPin size={32} />
                  </div>
                  <div className="bg-white px-6 py-4 rounded-xl shadow-lg text-center max-w-xs">
                    <h4 className="font-bold text-lg mb-1">Relife Water Zone</h4>
                    <p className="text-sm text-foreground/70">Sonapali, Near Deer Park, Sambalpur, Odisha</p>
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
