import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Target, 
  Layers, 
  Globe, 
  Brain, 
  Activity, 
  Infinity as InfinityIcon, 
  Compass,
  ArrowDown,
  ExternalLink,
  Cpu,
  Microscope,
  Info,
  ChevronRight,
  Atom
} from 'lucide-react';

// --- Animated Components ---

const FadeInSection = ({ children, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

// --- Data Constants ---

const TAME_LEVELS = [
  {
    id: 'cell',
    name: 'The Cellular Horizon',
    radius: 'Micro-meters',
    time: 'Seconds',
    goal: 'Metabolic Balance',
    desc: 'Individual cells care about local sugar, pH, and survival. Their light cone is bounded by the membrane.',
    icon: Activity,
    color: 'text-green-400',
    glow: 'bg-green-500/20'
  },
  {
    id: 'tissue',
    name: 'Morphogenetic Collective',
    radius: 'Centi-meters',
    time: 'Weeks',
    goal: 'Anatomical Homeostasis',
    desc: 'Groups of cells merge their "Self" via gap junctions to remember a limb or a face. The collective is the agent.',
    icon: Layers,
    color: 'text-blue-400',
    glow: 'bg-blue-500/20'
  },
  {
    id: 'human',
    name: 'Traditional Mind',
    radius: 'Kilometers',
    time: 'Decades',
    goal: 'Social & Abstract Goals',
    desc: 'Neural bioelectricity scales our concerns to legacy, finance, and global survival.',
    icon: Brain,
    color: 'text-purple-400',
    glow: 'bg-purple-500/20'
  },
  {
    id: 'planet',
    name: 'Planetary Agent',
    radius: 'Planetary',
    time: 'Millennia',
    goal: 'Global Homeostasis',
    desc: 'A hyper-agent formed by the integration of information across the entire biosphere.',
    icon: Globe,
    color: 'text-orange-400',
    glow: 'bg-orange-500/20'
  }
];

// --- Main App ---

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeLevel, setActiveLevel] = useState(TAME_LEVELS[2]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02050a] text-gray-200 font-sans selection:bg-blue-500/30">
      {/* 0. HUD & Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="relative">
            <Zap className="w-8 h-8 text-blue-400 fill-blue-400/20" />
            <div className="absolute inset-0 animate-ping bg-blue-400/20 rounded-full" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter text-white uppercase leading-none">Bioelectric</h1>
            <p className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Post-Genomic Paradigm</p>
          </div>
        </div>
        <div className="hidden md:flex gap-1 pointer-events-auto bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/5">
           {[1, 2, 3, 4, 5].map(i => (
             <div key={i} className={`w-2 h-2 rounded-full ${scrollY > (i-1)*800 ? 'bg-blue-500' : 'bg-white/10'}`} />
           ))}
        </div>
      </div>

      {/* 1. Hero: The Ingress Point */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <FadeInSection className="relative z-10 flex flex-col items-center">
          <div className="mb-6 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
            A Field Guide to Dr. Michael Levin
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
            Morphogenetic<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">Mind.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 leading-relaxed font-medium mb-12">
            The transition from viewing biology as a mechanical "Machine" to an agential "Self" that ingresses intelligence from the Platonic space.
          </p>
          <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-400 transition-all">
            Begin Journey <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </FadeInSection>

        <div className="absolute bottom-10 animate-bounce text-blue-500/30">
          <ArrowDown />
        </div>
      </section>

      {/* 2. The Lab: The Evidence of Agency */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3 sticky top-32 h-fit">
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Phase 01</h2>
              <h3 className="text-5xl font-bold text-white tracking-tighter mb-6">Reprogrammable Hardware.</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "The genome provides the parts list, but the bioelectric network provides the anatomical memory. We can rewrite the body without touching a single gene."
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] bg-gray-900/30 border border-white/5 hover:border-blue-500/30 transition-all group">
                   <div className="p-4 bg-blue-500/10 rounded-2xl w-fit mb-6 text-blue-400"><Microscope size={28}/></div>
                   <h4 className="text-xl font-bold text-white mb-2">The Electric Face</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">Prior to physical formation, a tadpole displays an electrical "blueprint" for its face. Even scrambled organs navigate back to this goal-state.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-gray-900/30 border border-white/5 hover:border-purple-500/30 transition-all group">
                   <div className="p-4 bg-purple-500/10 rounded-2xl w-fit mb-6 text-purple-400"><Activity size={28}/></div>
                   <h4 className="text-xl font-bold text-white mb-2">The Two-Headed Worm</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">By shifting electrical potentials, Levin created flatworms that regenerate with two heads—a memory stored in the bioelectric circuit, not the DNA.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-gray-900/30 border border-white/5 hover:border-green-500/30 transition-all group">
                   <div className="p-4 bg-green-500/10 rounded-2xl w-fit mb-6 text-green-400"><Layers size={28}/></div>
                   <h4 className="text-xl font-bold text-white mb-2">Xenobots</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">Cluster of skin cells repurposed into "living robots." They show movement and collective behavior with no evolutionary precedent.</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-gray-900/30 border border-white/5 hover:border-red-500/30 transition-all group">
                   <div className="p-4 bg-red-500/10 rounded-2xl w-fit mb-6 text-red-400"><Target size={28}/></div>
                   <h4 className="text-xl font-bold text-white mb-2">Cancer Suppression</h4>
                   <p className="text-sm text-gray-500 leading-relaxed">Cancer is an "identity crisis" where cells disconnect from the tissue-scale goal. Re-establishing connection normalizes growth.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* 3. TAME: Scaling the Self (Interactive Section) */}
      <section className="relative py-32 px-6 bg-blue-600/5 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Phase 02: Diverse Intelligence</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">The Cognitive Light Cone.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Level Selector from Tabbed Interface */}
              <div className="space-y-4">
                {TAME_LEVELS.map((level) => (
                  <button 
                    key={level.id}
                    onClick={() => setActiveLevel(level)}
                    className={`w-full p-6 rounded-2xl text-left transition-all border ${
                      activeLevel.id === level.id 
                        ? 'bg-blue-600/20 border-blue-500/50 scale-[1.02] shadow-xl' 
                        : 'bg-black/20 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-3 rounded-xl bg-black/40 ${activeLevel.id === level.id ? level.color : 'text-gray-600'}`}>
                        <level.icon size={24} />
                      </div>
                      <div>
                        <div className="font-black uppercase tracking-widest text-[10px] text-blue-500 mb-1">Scale Dimension</div>
                        <div className="text-lg font-bold text-white">{level.name}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* The "Wonderful Graphics" Display */}
              <div className="relative aspect-square flex items-center justify-center">
                 {/* Ring Orbits */}
                 <div className="absolute inset-0 border border-white/5 rounded-full" />
                 <div className="absolute inset-[10%] border border-white/5 rounded-full" />
                 <div className="absolute inset-[25%] border border-white/5 rounded-full" />
                 
                 {/* Visual Light Cone Representation */}
                 <div className="relative z-10 text-center flex flex-col items-center">
                   <div className={`p-10 rounded-full ${activeLevel.glow} border border-white/10 mb-8 animate-pulse`}>
                      <activeLevel.icon size={64} className={activeLevel.color} />
                   </div>
                   <h4 className="text-3xl font-black text-white mb-2">{activeLevel.name}</h4>
                   <div className="flex gap-3 mb-6">
                      <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 uppercase">Range: {activeLevel.radius}</span>
                      <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 uppercase">Horizon: {activeLevel.time}</span>
                   </div>
                   <p className="max-w-xs text-gray-400 text-sm leading-relaxed mb-6 italic">"{activeLevel.desc}"</p>
                   <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold px-4 py-2 bg-blue-400/10 rounded-lg">
                      <Target size={14} /> PRIMARY GOAL: {activeLevel.goal.toUpperCase()}
                   </div>
                 </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 4. Polycomputing: Side Quests */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto overflow-hidden">
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="p-8 bg-black/60 border border-white/5 rounded-[2.5rem] relative z-10 shadow-2xl">
                 <div className="flex items-center gap-3 mb-8">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   <span className="ml-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">morph_kernel_v2.0</span>
                 </div>
                 <pre className="text-xs font-mono text-blue-400/70 leading-relaxed mb-8">
                   {`// Observer A: Sees Sorting
function integrate(tissue) {
  tissue.setPotential(-40mV);
  // HIDDEN SIDE QUESTS:
  // 1. Cluster discovery
  // 2. Pattern maintenance
  // 3. Intrinsic goal-seeking
  return tissue.stabilize();
}`}
                 </pre>
                 <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex gap-4 items-center">
                    <Info className="text-blue-500 shrink-0" size={20} />
                    <p className="text-[11px] text-gray-500 uppercase font-black leading-tight">
                      Polycomputing: The eyes of the beholder define the computation.
                    </p>
                 </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />
            </div>

            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Phase 03: Polycomputing</h2>
              <h3 className="text-5xl font-bold text-white tracking-tighter mb-8 leading-none">Side Quests <br />of Matter.</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Levin discovered that physical systems don't just do what they are programmed to do. While executing a "Main Quest" (like sorting or metabolic balance), they simultaneously perform side-quests of intrinsic motivation.
              </p>
              <div className="flex flex-col gap-4">
                 <div className="flex gap-4 items-start">
                   <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1"><Cpu size={18}/></div>
                   <p className="text-sm text-gray-300 font-medium">Matter is overloaded with latent competencies.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1"><Atom size={18}/></div>
                   <p className="text-sm text-gray-300 font-medium">Biology is the art of black-boxing low-level details.</p>
                 </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* 5. The Platonic Leap: Ingressing Minds */}
      <section className="relative py-48 px-6 bg-black">
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        <FadeInSection className="max-w-4xl mx-auto text-center">
          <InfinityIcon className="w-16 h-16 text-blue-500/50 mx-auto mb-10 animate-pulse" />
          <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.6em] mb-6">The Final Perspective</h2>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12">Ingressing Minds.</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-16">
            <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem]">
               <h4 className="text-white font-bold mb-4">The Thin Client</h4>
               <p className="text-gray-400 leading-relaxed text-sm">
                 Bodies and brains are not "creators" of thought. They are physical interfaces that ingress pre-existing patterns of agency from a non-physical space. We are browsers for the Math Department.
               </p>
            </div>
            <div className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem]">
               <h4 className="text-white font-bold mb-4">Platonic Pointers</h4>
               <p className="text-gray-400 leading-relaxed text-sm">
                 The bioelectric network acts as a "pointer" to specific configurations of agency. Evolution doesn't invent minds; it discovers hardware capable of manifesting them.
               </p>
            </div>
          </div>

          <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
            "The truth of biology is constrained by the truths of mathematics."
          </p>
        </FadeInSection>
      </section>

      {/* 6. Footer */}
      <footer className="py-32 px-6 border-t border-white/5 bg-[#010205] text-center">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center gap-1 mb-10">
            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-blue-500 rounded-full" />)}
          </div>
          <p className="text-xl font-bold text-white mb-4 italic">"Biology is the hardware. Mind is the software. Bioelectricity is the code."</p>
          <p className="text-gray-500 text-sm mb-12">Synthesized from Dr. Michael Levin's frameworks on Morphogenesis and Diverse Intelligence.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://drmichaellevin.org" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all text-xs uppercase tracking-widest">The Levin Lab</a>
             <a href="https://thoughtforms.life" className="px-8 py-4 bg-white/5 text-gray-400 font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-xs uppercase tracking-widest">Read Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add these custom animations to your global CSS or Tailwind config if possible, 
// otherwise they work as standard CSS in modern browsers
const style = document.createElement('style');
style.innerHTML = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

