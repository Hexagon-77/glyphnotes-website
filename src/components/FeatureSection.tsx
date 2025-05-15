
import React from 'react';
import { BookText, Code, PencilRuler, Link, Search, GitGraph } from 'lucide-react';

const features = [
  {
    icon: <BookText className="h-8 w-8 text-turquoise" />,
    title: "Model Anything",
    description: "Create and manipulate any type of content - from code and math to animations, 3D models, and interactive maps.",
    highlight: "turquoise"
  },
  {
    icon: <Code className="h-8 w-8 text-lightblue" />,
    title: "Interactive Blocks",
    description: "Modular blocks that interact with you and each other, enabling dynamic data visualization and real-time updates.",
    highlight: "lightblue"
  },
  {
    icon: <PencilRuler className="h-8 w-8 text-lavender" />,
    title: "Effortless Input",
    description: "Advanced AI-powered handwriting recognition and instant digitalization of whiteboards and notebooks through scanning.",
    highlight: "lavender"
  },
  {
    icon: <Link className="h-8 w-8 text-turquoise" />,
    title: "Real-time Collaboration",
    description: "Enable interactive teaching and cross-border research through seamless real-time collaboration tools.",
    highlight: "turquoise"
  },
  {
    icon: <Search className="h-8 w-8 text-lightblue" />,
    title: "Smart Knowledge Graph",
    description: "Use natural language to find, reference, and cite content from your personal or institutional knowledge base.",
    highlight: "lightblue"
  },
  {
    icon: <GitGraph className="h-8 w-8 text-lavender" />,
    title: "Hierarchical Organization",
    description: "Create perfect organization through indented and nested blocks that maintain clear structure and relationships.",
    highlight: "lavender"
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
        <div className="absolute top-[5%] right-[5%] w-[30%] h-[30%] bg-turquoise/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[25%] h-[25%] bg-lightblue/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl text-gradient font-lufga uppercase tracking-wider mb-4">Features</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-extrabold max-w-2xl mx-auto">
            Model & interact with <span className="text-gradient font-extrabold">anything</span>
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`mb-4 p-3 inline-block rounded-lg bg-${feature.highlight}/10`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-lufga mb-3 text-white">{feature.title}</h4>
              <p className="text-white/70 font-raleway">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-dark inline-block px-6 py-3 rounded-full">
            <p className="font-raleway text-sm text-white/70">
              <span className="text-gradient font-medium">Specialized for STEM</span> — Built for universities, professors, students and researchers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
