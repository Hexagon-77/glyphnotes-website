
import React, { useEffect, useRef } from 'react';
import { Atom, Box } from 'lucide-react';

const PhysicsModel = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/20 rounded-lg border border-white/5 p-4">
      <div className="flex justify-center items-center h-full">
        <div className="relative w-4/5 h-4/5">
          {/* Potential barrier visualization */}
          <div className="absolute inset-0 flex items-center">
            <div className="h-1/3 w-full bg-gradient-to-r from-transparent via-lavender/30 to-transparent"></div>
          </div>
          
          {/* Wave function animation */}
          <div className="absolute inset-0 flex items-center">
            <div className="relative h-full w-full">
              <div className="absolute h-1/2 w-full flex items-center">
                <div className="h-px w-full bg-turquoise animate-pulse"></div>
              </div>
              
              <div className="absolute h-1/2 w-full flex items-center">
                <svg className="w-full" height="40" viewBox="0 0 200 40">
                  <path
                    d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20"
                    fill="none"
                    stroke="#24DBB3"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,20 Q10,35 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20"
                    fill="none"
                    stroke="#24DBB3"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              
              {/* Particle */}
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-lightblue rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute bottom-0 left-0 text-xs text-white/60">Incident wave</div>
          <div className="absolute bottom-0 right-0 text-xs text-white/60">Transmitted wave</div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-white/60">Potential barrier</div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 justify-center">
        <button className="text-xs px-2 py-1 rounded bg-turquoise/20 text-turquoise border border-turquoise/30">
          Start
        </button>
        <button className="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10">
          Reset
        </button>
      </div>
    </div>
  );
};

const ChemistryAtom = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg border border-white/5">
      <div className="relative w-4/5 h-4/5 flex items-center justify-center">
        <Atom className="text-lightblue w-20 h-20 opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-lavender rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin [animation-duration:8s]">
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-turquoise/50 to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin [animation-duration:12s]" style={{ animationDelay: '-3s' }}>
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-lightblue/50 to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full rotate-45"></div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full animate-spin [animation-duration:10s]" style={{ animationDelay: '-5s' }}>
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-lavender/50 to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full rotate-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Graph3D = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/20 rounded-lg border border-white/5">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Removed ChartLineUp component */}
        
        <div className="relative w-4/5 h-4/5">
          {/* 3D Wave Function Visualization */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-full border-t border-dashed border-white/10"
                style={{ top: `${i * 10}%` }}
              ></div>
            ))}
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute h-full border-l border-dashed border-white/10"
                style={{ left: `${i * 10}%` }}
              ></div>
            ))}
          </div>
          
          {/* Wave function heat map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4/5 h-4/5 rounded-full bg-gradient-radial from-turquoise/50 via-lightblue/20 to-transparent"></div>
            <div className="absolute w-3/5 h-3/5 rounded-full bg-gradient-radial from-lavender/40 via-lavender/10 to-transparent"></div>
            <div className="absolute w-2/5 h-2/5 rounded-full bg-gradient-radial from-turquoise/30 via-turquoise/5 to-transparent animate-pulse"></div>
          </div>
          
          {/* Coordinate system */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/50 to-white/10"></div>
            <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-white/50 to-white/10"></div>
            <div 
              className="absolute bottom-0 left-0 h-[70%] border-l border-dashed border-white/20"
              style={{ transform: 'translateX(0) rotate3d(1, 1, 0, 45deg)', transformOrigin: 'bottom' }}
            ></div>
          </div>
          
          {/* Axis labels */}
          <div className="absolute bottom-0 right-0 text-xs text-white/60">x</div>
          <div className="absolute top-0 left-0 text-xs text-white/60">y</div>
          <div className="absolute bottom-0 left-[15%] text-xs text-white/60 transform -rotate-45">z</div>
        </div>
      </div>
    </div>
  );
};

export { PhysicsModel, ChemistryAtom, Graph3D };
