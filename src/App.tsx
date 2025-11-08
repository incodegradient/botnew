import React from 'react';
import Header from './components/landing/Header';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import Pricing from './components/landing/Pricing';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
import CTA from './components/landing/CTA';
import Footer from './components/landing/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
