import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Planet3DWrapper } from '../components/Planet3D';
import { Timeline } from '../components/Timeline';
import { TESTIMONIALS } from '../constants';
import { Star, ArrowRight, MapPin } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Planet3DWrapper />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-cyan-400 font-tech tracking-[0.5em] uppercase text-sm md:text-base mb-4">
              Interplanetary Voyages
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 neon-text mb-6">
              PALESTINE-2
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-light mb-10">
              Where light is alive. Explore floating islands and crystal oceans in perpetual twilight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/booking"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Begin Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/packages"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
              >
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
             <div className="w-1 h-2 bg-cyan-400 rounded-full" />
           </div>
        </div>
      </section>

      {/* HIGHLIGHTS / WHY VISIT */}
      <section className="py-24 px-4 bg-slate-950 relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Seraphi Experience</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Discover a world where gravity is a suggestion and nature glows with ancient energy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Floating Islands', desc: 'Hike across magnetic landmasses suspended in the violet sky.', icon: '🏝️' },
                { title: 'Luminasea Oceans', desc: 'Swim in semi-liquid light that responds to your touch.', icon: '🌊' },
                { title: 'Binary Sunsets', desc: 'Witness the dance of two stars painting the horizon in gold and purple.', icon: '☀️' },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold font-display mb-2 text-cyan-300">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-indigo-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-cyan-400 font-tech uppercase tracking-widest">Travel Logistics</span>
             <h2 className="text-4xl font-display font-bold mt-2">Your Voyage Timeline</h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Traveler Logs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-cyan-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-950/20 border-t border-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-display font-bold mb-6 text-white">Ready to Leave Earth?</h2>
          <p className="text-xl text-slate-300 mb-10">Secure your pod for the next launch window. Spots are limited for the 2045 season.</p>
          <Link to="/booking" className="inline-block bg-white text-slate-950 px-10 py-5 rounded-full font-black text-xl hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            RESERVE YOUR SEAT
          </Link>
        </div>
      </section>
    </div>
  );
};