import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import PersonalBranding from '@/components/sections/PersonalBranding';
import Gallery from '@/components/sections/Gallery';
import About from '@/components/sections/About';
import GrowthStrategy from '@/components/sections/GrowthStrategy';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import agencyData from '@/data/agencyData';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero data={agencyData} />
        <Gallery />
        {/* <Services data={agencyData} /> */}
        <GrowthStrategy data={agencyData} />
        <PersonalBranding data={agencyData} />
        <About data={agencyData} />
        <Contact data={agencyData} />
      </main>
      <Footer data={agencyData} />
      <WhatsAppButton number={agencyData.contact.whatsapp} />
    </>
  );
}
