import React from 'react';
import { TrendingUp, Shield, Globe, Cpu } from 'lucide-react';

export const Investor: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 border-b border-slate-800 pb-12">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Investor Relations</h1>
          <p className="text-2xl text-cyan-400 font-tech">CELESTIA HOLDINGS [CLST]</p>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">Pioneering the $300B interplanetary hospitality market. We are building the infrastructure for humanity's multi-planetary future.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
           {[
             { label: 'Projected TAM (2040)', value: '$300B', color: 'text-emerald-400' },
             { label: 'Current Valuation', value: '$4.2B', color: 'text-white' },
             { label: 'Annual Growth', value: '+145%', color: 'text-cyan-400' },
             { label: 'Flights/Year', value: '52', color: 'text-purple-400' },
           ].map((stat, i) => (
             <div key={i} className="glass-panel p-6 rounded-xl text-center">
               <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">{stat.label}</p>
               <p className={`text-4xl font-display font-bold ${stat.color}`}>{stat.value}</p>
             </div>
           ))}
        </div>

        {/* Business Model */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">Revenue Streams</h2>
            <ul className="space-y-6">
              {[
                { title: 'Direct Voyage Sales', desc: 'High-margin luxury tourism packages ranging from $28k to $210k per seat.' },
                { title: 'Orbital Real Estate', desc: 'Leasing of floating island estates for long-term ultra-high-net-worth residents.' },
                { title: 'Research Grants', desc: 'Partnerships with universities and biotech firms for exoplanet flora analysis.' },
                { title: 'Media & VR Licensing', desc: 'Exclusive rights to immersive planetary content for Earth-based entertainment.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700 text-cyan-400 font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tech Stack */}
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-3xl font-display font-bold mb-8">Proprietary Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <ZapIcon />
                <h3 className="font-bold mt-4 mb-2">Hyperlight Drive</h3>
                <p className="text-sm text-slate-400">Reduced LEO-to-Orbit transit time by 94% using gravimetric folding.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <ShieldIcon />
                <h3 className="font-bold mt-4 mb-2">AstraNav AI</h3>
                <p className="text-sm text-slate-400">Autonomous navigation system capable of micro-debris avoidance at 0.8c.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <GlobeIcon />
                <h3 className="font-bold mt-4 mb-2">Bio-Habitats</h3>
                <p className="text-sm text-slate-400">Self-repairing organic hull structures grown from native silicate.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CpuIcon />
                <h3 className="font-bold mt-4 mb-2">Gravity Stabilizers</h3>
                <p className="text-sm text-slate-400">Proprietary inertial dampeners allowing for 1g environments anywhere.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
           <h2 className="text-3xl font-display font-bold mb-10 text-center">Strategic Roadmap</h2>
           <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex justify-between pt-8 space-y-8 md:space-y-0">
              {[
                { year: '2038', title: 'Seed Phase', desc: 'Orbital Gate construction completed.' },
                { year: '2040', title: 'First Launch', desc: 'Maiden voyage of CSS Aurora.' },
                { year: '2045', title: 'Expansion', desc: 'Opening of Seraphi Cloudport Resort.' },
                { year: '2050', title: 'Colonization', desc: 'Permanent settlement of 10,000 residents.' }
              ].map((phase, i) => (
                <div key={i} className="relative pl-8 md:pl-0 md:w-1/4 md:pr-4 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600 group-hover:bg-cyan-400 md:-top-[9px] md:left-0 transition-colors" />
                  <span className="text-cyan-500 font-tech font-bold block mb-1">{phase.year}</span>
                  <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-slate-400 text-sm">{phase.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// Simple icon wrappers for this file
const ZapIcon = () => <TrendingUp className="w-8 h-8 text-purple-400" />;
const ShieldIcon = () => <Shield className="w-8 h-8 text-cyan-400" />;
const GlobeIcon = () => <Globe className="w-8 h-8 text-emerald-400" />;
const CpuIcon = () => <Cpu className="w-8 h-8 text-orange-400" />;
