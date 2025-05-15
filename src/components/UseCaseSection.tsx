
import React from 'react';
import { Button } from '@/components/ui/button';

const useCases = [
  {
    title: "For Students",
    description: "Take interactive notes during lectures, organize study materials, and collaborate with classmates on group projects. Convert handwritten notes to digital format instantly.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "turquoise"
  },
  {
    title: "For Professors",
    description: "Create interactive learning materials and lecture notes, grade assignments with detailed feedback, and collaborate with other educators in real-time.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "lightblue"
  },
  {
    title: "For Researchers",
    description: "Document research findings with interactive models, organize complex data sets, and collaborate across institutions on breakthrough research projects.",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "lavender"
  }
];

const UseCaseSection = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        <div className="absolute top-[15%] left-[15%] w-[20%] h-[20%] bg-lavender/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[25%] bg-turquoise/10 rounded-full filter blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl text-gradient font-lufga uppercase tracking-wider mb-4">Use Cases</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-extrabold max-w-2xl mx-auto">
            Designed for <span className="text-gradient">everyone</span> in STEM
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass overflow-hidden rounded-xl group">
              <div className="h-40 bg-gradient-to-r from-black/40 to-black/10 overflow-hidden relative">
                <div className={`absolute inset-0 bg-${useCase.color}/20 mix-blend-overlay`}></div>
                <img 
                  src={useCase.image} 
                  alt={useCase.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h4 className={`text-xl font-lufga mb-3 text-${useCase.color}`}>{useCase.title}</h4>
                <p className="text-white/70 font-raleway text-sm">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-turquoise to-lightblue hover:opacity-90 text-black font-medium text-lg px-8 py-6">
            Start using Glyph Notes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
