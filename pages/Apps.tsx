import React from 'react';
import { APP_IDEAS } from '../constants';

export const Apps: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Digital Ecosystem</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Innovating the travel experience with Google-Trends inspired technology. Bridging the gap between Earth and Palestine-2.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_IDEAS.map((app) => (
            <div key={app.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800 transition-all group">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-slate-950 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                    {app.icon}
                 </div>
                 <span className="text-xs font-tech uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-1 rounded">{app.trend}</span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-3">{app.name}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{app.description}</p>
              
              <div className="border-t border-slate-800 pt-6">
                <p className="text-sm font-bold text-white mb-3">Key Features:</p>
                <ul className="space-y-2">
                  {app.features.map((feat, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};