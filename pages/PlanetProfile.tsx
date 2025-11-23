import React from 'react';
import { Cloud, Wind, Sun, Mountain } from 'lucide-react';

export const PlanetProfile: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
             <h2 className="text-cyan-400 font-tech tracking-widest uppercase mb-2">Destination Profile</h2>
             <h1 className="text-6xl md:text-8xl font-display font-black mb-6">PALESTINE-2</h1>
             <p className="text-2xl text-white font-light mb-6">"Where light is alive."</p>
             <p className="text-slate-400 text-lg leading-relaxed">
               Orbiting a binary star system, Palestine-2 is a world of perpetual twilight. 
               Its unique magnetic core allows massive landmasses to float effortlessly in the violet sky, 
               creating a vertical ecosystem unlike anything in the Milky Way.
             </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-800 group">
             <img src="https://picsum.photos/id/1002/800/800" alt="Planet Surface" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
             <div className="absolute bottom-6 left-6">
                <p className="font-tech text-xs uppercase tracking-widest text-cyan-400">Sector 4</p>
                <p className="font-display font-bold text-2xl">The Luminasea</p>
             </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: 'Gravity', value: '0.86 G', icon: <Mountain /> },
            { label: 'Day Cycle', value: '32 Hours', icon: <Sun /> },
            { label: 'Atmosphere', value: 'N2/O2 Rich', icon: <Wind /> },
            { label: 'Avg Temp', value: '18°C', icon: <Cloud /> },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center hover:bg-slate-800/30 transition-colors">
              <div className="text-cyan-400 mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold font-display mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mb-24">
          <h2 className="text-4xl font-display font-bold mb-10">Surface Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
             <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/id/10/1200/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                   <h3 className="text-2xl font-bold">Floating Archipelagos</h3>
                </div>
             </div>
             <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/id/1018/600/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                   <h3 className="text-lg font-bold">Crystal Forests</h3>
                </div>
             </div>
             <div className="relative rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/id/1019/600/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                   <h3 className="text-lg font-bold">Seraphi Ruins</h3>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};