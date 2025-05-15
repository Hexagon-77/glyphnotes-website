
import React from 'react';
import { Button } from '@/components/ui/button';
import InteractiveNotebook from '@/components/InteractiveNotebook';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] bg-turquoise/20 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/3 right-[5%] w-[30%] h-[30%] bg-lightblue/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[15%] left-[20%] w-[25%] h-[25%] bg-lavender/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-2 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-1">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="/media/logo.svg" alt="Glyph Notes Logo" className="w-10 h-10" />
                <div className="flex items-center">
                  <span className="text-white text-2xl md:text-3xl font-raleway font-thin">glyph</span>
                  <span className="text-white text-2xl md:text-3xl font-montserrat font-semibold ml-1">notes</span>
                </div>
              </div>
            </div>
            <hr style={{ borderColor: '#FFFFFF40', borderWidth: '1px', width: '45%' }} className="mx-auto lg:mx-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6">
              <span className="block mb-2">Making</span>
              <span className="text-gradient1 font-extrabold">digital</span> &
              <br />
              <span className="text-gradient2 font-extrabold">interactive</span>
              <span className="block mt-2">notes easy.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8 font-raleway font-thin max-w-xl mx-auto lg:mx-0">
              An ultra-specialized STEM note-taking app built for universities, professors, students, and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-turquoise to-lightblue hover:opacity-90 text-black font-medium text-lg px-8 py-6"
                  onClick={() => {
                    const encodedEmail = 'Y29udGFjdEB6ZXhzb2Z0LmV1';
                    const decodedEmail = atob(encodedEmail);
                    window.location.href = `mailto:${decodedEmail}?subject=Glyph Notes - University collaboration`;
                  }}>
                For universities
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white text-lg px-8 py-6"
                  onClick={() => {
                    const encodedEmail = 'Y29udGFjdEB6ZXhzb2Z0LmV1';
                    const decodedEmail = atob(encodedEmail);
                    window.location.href = `mailto:${decodedEmail}?subject=Glyph Notes - For students`;
                  }}>
                For students
              </Button>
            </div>
            <div className="mt-8 text-white/50 text-sm">
              Aligned with Babeș-Bolyai University's research & innovation strategy
            </div>
          </div>
          
          <div className="flex-1 relative w-full">
            <div className="w-full relative" style={{ height: '65vh' }}>
              <div className="absolute inset-0 w-full h-full">
                <InteractiveNotebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
