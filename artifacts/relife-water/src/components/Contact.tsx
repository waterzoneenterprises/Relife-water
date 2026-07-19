import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number').max(15),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: "We'll get back to you as soon as possible.",
    });
    
    reset();
    setIsSubmitting(false);
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
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
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
