
import React, { useState } from 'react';
import { PhysicsModel, ChemistryAtom, Graph3D } from '@/components/notebook/Models';
import MathEquation from '@/components/notebook/MathEquation';
import LineChart from '@/components/notebook/LineChart';
import BarChart from '@/components/notebook/BarChart';
import CodeBlock from '@/components/notebook/CodeBlock';

const InteractiveNotebook = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="relative w-full h-full">
      {/* Notebook container with glassmorphic effect */}
      <div className="glass-dark relative w-full h-full rounded-xl overflow-hidden border border-white/10">
        {/* Notebook header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
          <div className="text-sm text-white/70">quantum_mechanics.gln</div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#9266FF' }}></div>
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#0095FF' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00FB83' }}></div>
          </div>
        </div>

        {/* Notebook tabs */}
        <div className="flex border-b border-white/10">
          {['Quantum Mechanics'].map((tab, index) => (
            <button 
              key={index}
              className={`px-4 py-2 text-xs ${activeTab === index ? 'bg-white/10 text-white' : 'text-white/50'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notebook content */}
        <div className="p-4 overflow-auto h-[calc(100%-80px)]">
          {/* Title block */}
          <div className="mb-4 border-l-2 border-turquoise pl-2">
            <h2 className="text-xl font-montserrat">Quantum Wave Functions</h2>
          </div>

          {/* Text block */}
          <div className="bg-white/5 p-3 rounded mb-4 text-sm text-white/80">
            <p>The Schrödinger equation is a linear partial differential equation that describes how the quantum state of a physical system changes with time. The general form for a single particle moving in an electric field is:</p>
          </div>

          {/* Math equation */}
          <div className="mb-4">
            <MathEquation />
          </div>

          {/* Data visualization blocks */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 bg-black/30 rounded-lg p-4">
              <div className="text-xs text-white/70 mb-2">Energy Levels</div>
              <BarChart />
            </div>
            <div className="flex-1 bg-black/30 rounded-lg p-4">
              <div className="text-xs text-white/70 mb-2">Probability Distribution</div>
              <LineChart />
            </div>
          </div>

          {/* Code block */}
          <div className="mb-4">
            <CodeBlock />
          </div>

          {/* 3D model block */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 bg-black/30 rounded-lg p-4">
              <div className="text-xs text-white/70 mb-2">Hydrogen Wave Function</div>
              <div className="aspect-square">
                <Graph3D />
              </div>
            </div>
            <div className="flex-1 bg-black/30 rounded-lg p-4">
              <div className="text-xs text-white/70 mb-2">Molecular Structure</div>
              <div className="aspect-square">
                <ChemistryAtom />
              </div>
            </div>
          </div>

          {/* Physics simulation */}
          <div className="bg-black/30 rounded-lg p-4 mb-4">
            <div className="text-xs text-white/70 mb-2">Quantum Tunneling Simulation</div>
            <div className="aspect-video">
              <PhysicsModel />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-1/3 h-40 glass-dark rounded-xl z-[-1]"></div>
      <div className="absolute -top-4 -left-4 w-1/4 h-32 glass-dark rounded-xl z-[-1]"></div>
    </div>
  );
};

export default InteractiveNotebook;
