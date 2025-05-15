
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="university" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-lavender/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-dark p-8 md:p-12 rounded-2xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-turquoise via-lightblue to-lavender" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-xl text-gradient font-lufga uppercase tracking-wider mb-4">University Partnership</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-extrabold mb-6">
                Aligned with <span className="text-gradient">Babeș-Bolyai University's</span> research & innovation strategy
              </h3>
              <p className="text-white/70 font-raleway mb-8">
                Glyph Notes is developed in collaboration with Babeș-Bolyai University, aligning with their research, development and innovation strategy for 2025-2029. This partnership ensures our tools meet the highest academic standards and real educational needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-turquoise to-lightblue hover:opacity-90 text-black font-medium">
                  Enroll your university
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="glass h-48 w-48 rounded-full flex items-center justify-center">
                <img
                  src="/media/logo.png"
                  alt="Glyph Notes Logo"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
