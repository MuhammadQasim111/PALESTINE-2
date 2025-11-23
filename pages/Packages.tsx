import React from 'react';
import { PACKAGES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Packages: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Expedition Tiers</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Choose your comfort level for the 7-hour hyperlight transit and your accommodation on Palestine-2.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 ${pkg.isPopular ? 'border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border border-slate-800 bg-slate-900/40'}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 w-full bg-cyan-500 text-slate-950 text-center py-1 font-bold text-xs tracking-widest uppercase z-10">
                  Most Popular
                </div>
              )}
              
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                 <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-cyan-400">{pkg.price}</span>
                  <span className="text-slate-500 text-sm">/ person</span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="font-bold text-white">Duration:</span> {pkg.duration}
                  </div>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <Check className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/booking?package=${pkg.id}`}
                  className={`w-full py-3 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2 ${pkg.isPopular ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                  Select Package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};