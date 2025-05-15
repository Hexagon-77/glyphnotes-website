
import React from 'react';

const CodeBlock = () => {
  return (
    <div className="bg-black/30 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-white/70">Python Code</div>
        <div className="flex gap-2">
          <button className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/70">Run</button>
          <button className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/70">Copy</button>
        </div>
      </div>
      <pre className="bg-black/50 p-3 rounded text-xs sm:text-sm overflow-x-auto">
        <code className="text-lightblue font-mono">
          <span className="text-lavender">import</span> numpy <span className="text-lavender">as</span> np{'\n'}
          <span className="text-lavender">from</span> scipy.integrate <span className="text-lavender">import</span> odeint{'\n'}
          <span className="text-lavender">import</span> matplotlib.pyplot <span className="text-lavender">as</span> plt{'\n\n'}
          <span className="text-turquoise">def</span> <span className="text-lightblue">quantum_well</span>(psi, x, V0, E):{'\n'}
          {'    '}k = np.sqrt(2.0*(E-V0)){'\n'}
          {'    '}d2psi = -k*k*psi{'\n'}
          {'    '}<span className="text-lavender">return</span> [psi[1], d2psi]{'\n\n'}
          <span className="text-lavender"># Initial conditions</span>{'\n'}
          psi0 = [0, 1]{'\n'}
          x = np.linspace(0, 10, 100){'\n'}
          V0 = 0.0{'\n'}
          E = 1.0{'\n\n'}
          <span className="text-lavender"># Solve equation</span>{'\n'}
          sol = odeint(quantum_well, psi0, x, args=(V0, E)){'\n'}
          psi = sol[:,0]{'\n\n'}
          <span className="text-lavender"># Plot results</span>{'\n'}
          plt.figure(figsize=(10, 6)){'\n'}
          plt.plot(x, psi, <span className="text-yellow-200">'b'</span>, label=<span className="text-yellow-200">'Wave function'</span>){'\n'}
          plt.title(<span className="text-yellow-200">'Quantum Particle in a Box'</span>){'\n'}
          plt.xlabel(<span className="text-yellow-200">'Position'</span>){'\n'}
          plt.ylabel(<span className="text-yellow-200">'Ψ(x)'</span>){'\n'}
          plt.legend(){'\n'}
          plt.grid(True){'\n'}
          plt.show()
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
