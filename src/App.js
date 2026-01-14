// src/App.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import CertificateSection from './components/CertificateSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    // Menggunakan font-poppins yang sudah didefinisikan [cite: 112]
    <div className="font-poppins bg-gray-50 min-h-screen"> 
      <Navbar /> 
      
      <main className="max-w-6xl mx-auto px-6"> 
        <HeroSection /> 
        <AboutSection /> 
        <SkillsSection /> 
        <PortfolioSection />
        <CertificateSection />
        <ContactSection /> 
        
      </main>
      
      {/* Footer dipanggil di luar <main> [cite: 92] */}
      <Footer /> 
    </div>
  );
}

export default App;