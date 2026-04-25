import React, { useState } from 'react';
import { Brain, Activity, Eye, Zap, Users, Cog } from 'lucide-react';

const MultiDisciplinaryFramework = () => {
  const [activeField, setActiveField] = useState(null);
  const [activeRole, setActiveRole] = useState(null);

  const fields = {
    ecology: {
      name: "Ecological Awareness",
      color: "from-green-500 to-emerald-600",
      icon: Eye,
      core: "Perception & Context",
      description: "Understanding organism-environment relationships, affordances, and emergent possibilities",
      keyAspects: [
        "Affordance perception",
        "Systems thinking",
        "Context sensitivity",
        "Temporal awareness",
        "Design philosophy"
      ]
    },
    biomechanics: {
      name: "Applied Biomechanics",
      color: "from-blue-500 to-cyan-600",
      icon: Activity,
      core: "Structure & Movement",
      description: "Physical principles governing body mechanics, load distribution, and functional movement",
      keyAspects: [
        "Biotensegrity",
        "Movement patterns",
        "Structural integration",
        "Physical therapy",
        "Performance optimization"
      ]
    },
    neuromechanics: {
      name: "Cognitive Neuromechanics",
      color: "from-purple-500 to-pink-600",
      icon: Brain,
      core: "Control & Coordination",
      description: "Neural mechanisms coordinating motor function, cognition, and consciousness",
      keyAspects: [
        "Neural coordination",
        "Motor control",
        "Cognitive processing",
        "Learning systems",
        "Consciousness models"
      ]
    }
  };

  const roles = {
    systemsEngineer: {
      name: "Systems Engineer / Designer",
      icon: Cog,
      color: "bg-amber-500",
      integration: {
        ecology: "Design for emergent affordances and context-aware systems",
        biomechanics: "Understand physical constraints and structural requirements",
        neuromechanics: "Model cognitive load, learning curves, and user coordination"
      }
    },
    philosopher: {
      name: "Philosopher",
      icon: Brain,
      color: "bg-indigo-500",
      integration: {
        ecology: "Explore perception, reality, and organism-environment unity",
        biomechanics: "Investigate embodied cognition and physical grounding of thought",
        neuromechanics: "Examine consciousness, qualia, and mind-body problem"
      }
    },
    complexityScientist: {
      name: "Complexity Scientist",
      icon: Zap,
      color: "bg-rose-500",
      integration: {
        ecology: "Study scale-invariant patterns and multi-agent coordination",
        biomechanics: "Analyze distributed load, redundancy, and adaptive architecture",
        neuromechanics: "Model neural networks, plasticity, and emergent intelligence"
      }
    },
    personalTrainer: {
      name: "Personal Trainer",
      icon: Users,
      color: "bg-teal-500",
      integration: {
        ecology: "Create supportive environments and perceive individual affordances",
        biomechanics: "Optimize movement patterns and prevent compensatory dysfunction",
        neuromechanics: "Facilitate motor learning and build neuromuscular coordination"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Multidisciplinary Integration Framework
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            How three interconnected domains create comprehensive understanding of human behavior and systems
          </p>
        </div>

        {/* Three Fields Triangle */}
        <div className="relative mb-16">
          <svg viewBox="0 0 800 700" className="w-full max-w-4xl mx-auto">
            {/* Connection Lines */}
            <line x1="400" y1="100" x2="200" y2="500" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
            <line x1="400" y1="100" x2="600" y2="500" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
            <line x1="200" y1="500" x2="600" y2="500" stroke="#475569" strokeWidth="2" strokeDasharray="5,5" opacity="0.3"/>
            
            {/* Center Integration Point */}
            <circle cx="400" cy="370" r="80" fill="#1e293b" stroke="#94a3b8" strokeWidth="2"/>
            <text x="400" y="360" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="bold">
              INTEGRATED
            </text>
            <text x="400" y="385" textAnchor="middle" fill="#cbd5e1" fontSize="14">
              HUMAN
            </text>
            <text x="400" y="405" textAnchor="middle" fill="#cbd5e1" fontSize="14">
              UNDERSTANDING
            </text>

            {/* Field Nodes */}
            {/* Neuromechanics - Top */}
            <circle 
              cx="400" cy="100" r="90" 
              className={`cursor-pointer transition-all ${activeField === 'neuromechanics' ? 'fill-purple-500' : 'fill-slate-700'}`}
              onClick={() => setActiveField(activeField === 'neuromechanics' ? null : 'neuromechanics')}
            />
            <text x="400" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Cognitive
            </text>
            <text x="400" y="115" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Neuromechanics
            </text>

            {/* Biomechanics - Bottom Left */}
            <circle 
              cx="200" cy="500" r="90" 
              className={`cursor-pointer transition-all ${activeField === 'biomechanics' ? 'fill-blue-500' : 'fill-slate-700'}`}
              onClick={() => setActiveField(activeField === 'biomechanics' ? null : 'biomechanics')}
            />
            <text x="200" y="495" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Applied
            </text>
            <text x="200" y="515" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Biomechanics
            </text>

            {/* Ecology - Bottom Right */}
            <circle 
              cx="600" cy="500" r="90" 
              className={`cursor-pointer transition-all ${activeField === 'ecology' ? 'fill-green-500' : 'fill-slate-700'}`}
              onClick={() => setActiveField(activeField === 'ecology' ? null : 'ecology')}
            />
            <text x="600" y="495" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Ecological
            </text>
            <text x="600" y="515" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
              Awareness
            </text>

            {/* Edge Labels - Bridges */}
            <text x="300" y="300" textAnchor="middle" fill="#94a3b8" fontSize="12" fontStyle="italic">
              Motor Control
            </text>
            <text x="500" y="300" textAnchor="middle" fill="#94a3b8" fontSize="12" fontStyle="italic">
              Perception-Action
            </text>
            <text x="400" y="540" textAnchor="middle" fill="#94a3b8" fontSize="12" fontStyle="italic">
              Movement-Environment
            </text>
          </svg>
        </div>

        {/* Field Details */}
        {activeField && (
          <div className={`bg-gradient-to-r ${fields[activeField].color} rounded-2xl p-8 mb-8 animate-fadeIn`}>
            <div className="flex items-start gap-6">
              {React.createElement(fields[activeField].icon, { className: "w-16 h-16 text-white" })}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{fields[activeField].name}</h2>
                <p className="text-xl text-white/90 mb-4 font-semibold">{fields[activeField].core}</p>
                <p className="text-white/80 text-lg mb-6">{fields[activeField].description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {fields[activeField].keyAspects.map((aspect, i) => (
                    <div key={i} className="bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <span className="text-white font-medium">• {aspect}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Professional Roles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Professional Applications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setActiveRole(activeRole === key ? null : key)}
                className={`${role.color} ${activeRole === key ? 'ring-4 ring-white scale-105' : ''} 
                  rounded-xl p-6 text-white transition-all hover:scale-105 hover:shadow-xl`}
              >
                {React.createElement(role.icon, { className: "w-10 h-10 mx-auto mb-3" })}
                <div className="font-bold text-center text-sm leading-tight">{role.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Role Integration Details */}
        {activeRole && (
          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              {React.createElement(roles[activeRole].icon, { 
                className: `w-12 h-12 ${roles[activeRole].color} rounded-lg p-2 text-white` 
              })}
              <h3 className="text-2xl font-bold text-white">{roles[activeRole].name}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(roles[activeRole].integration).map(([field, description]) => (
                <div key={field} className={`bg-gradient-to-br ${fields[field].color} rounded-xl p-6`}>
                  <h4 className="text-white font-bold mb-3 text-lg">{fields[field].name}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic text-lg">
            "The same design principles appear across wildly different domains"
          </p>
          <p className="text-slate-500 mt-2">
            Click fields and roles to explore integration patterns
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiDisciplinaryFramework;