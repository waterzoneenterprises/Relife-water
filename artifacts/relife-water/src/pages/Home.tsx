import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ManufacturerBanner from '@/components/ManufacturerBanner';
import Products from '@/components/Products';
import QualityPromise from '@/components/QualityPromise';
import WhyChoose from '@/components/WhyChoose';
import Distributor from '@/components/Distributor';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <QualityPromise />
      <WhyChoose />
      <Distributor />
      <Testimonials />
      <Gallery />
      <ManufacturerBanner />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
