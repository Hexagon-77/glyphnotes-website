
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import UseCaseSection from '@/components/UseCaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-darkbg text-white relative overflow-hidden">
      {/* Main background effect */}
      <div className="fixed inset-0 z-0">
        {/* Background image with blend mode */}
        <img 
          src="/media/background.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkbg via-darkbg/90 to-darkbg" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <UseCaseSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
