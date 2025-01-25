'use client';

import Header from './_components/Header';
import Hero from './_components/Hero';
import Testimonials from './_components/Testimonials';
import Footer from './_components/Footer';
import WhatsAppButton from './_components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100">
      <Header />
      <main>
        <Hero />
        <Testimonials/>
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}