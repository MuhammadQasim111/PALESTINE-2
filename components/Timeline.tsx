import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Earth Launch', desc: 'Nevada Space Hub', time: 'T-00:00' },
  { title: 'LEO Gateway', desc: 'Celestia Orbital Gate', time: 'T+02:00' },
  { title: 'Hyperlight Tunnel', desc: 'Deep Space Warp', time: 'T+04:30' },
  { title: 'Palestine-2 Orbit', desc: 'Aurora View Approach', time: 'T+07:00' },
  { title: 'Descent', desc: 'Cloudport Seraphi', time: 'T+08:15' },
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0 transform -translate-x-1/2" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className={`w-full md:w-5/12 glass-panel p-6 rounded-xl border-l-4 ${index % 2 === 0 ? 'border-cyan-400 text-left' : 'border-purple-400 md:text-right'}`}>
              <span className="font-tech text-xs uppercase tracking-widest text-slate-400 mb-2 block">{step.time}</span>
              <h3 className="text-xl font-display font-bold text-white mb-1">{step.title}</h3>
              <p className="text-slate-300 text-sm">{step.desc}</p>
            </div>

            {/* Center Dot */}
            <div className="relative z-10">
              <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
            </div>

            {/* Empty Space for Balance */}
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};