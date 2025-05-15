
import React from 'react';

const MathEquation = () => {
  return (
    <div className="bg-black/30 p-4 rounded-lg">
      <div className="text-xs text-white/70 mb-2">Schrödinger Equation</div>
      <div className="flex items-center justify-center py-3 overflow-x-auto">
        <div className="text-white text-center text-lg sm:text-xl">
          <span className="text-turquoise">i</span>ħ 
          <span className="inline-block mx-1">∂/∂t</span> 
          Ψ(r,t) = [
          <span className="inline-block mx-1">-ħ²/2m</span> 
          ∇² + V(r,t)] Ψ(r,t)
        </div>
      </div>
      <div className="mt-3 text-xs text-white/60">
        <p>Where:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Ψ(r,t) is the wave function</li>
          <li>ħ is the reduced Planck constant</li>
          <li>m is the mass of the particle</li>
          <li>V(r,t) is the potential energy</li>
          <li>∇² is the Laplacian operator</li>
        </ul>
      </div>
    </div>
  );
};

export default MathEquation;
