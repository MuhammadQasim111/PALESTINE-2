import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { Send, CheckCircle } from 'lucide-react';

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedPackage = searchParams.get('package');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    packageId: preSelectedPackage || 'explorer',
    month: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 pt-20">
        <div className="glass-panel p-10 rounded-2xl max-w-lg w-full text-center border border-green-500/30">
           <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
             <CheckCircle className="w-10 h-10 text-green-400" />
           </div>
           <h2 className="text-3xl font-display font-bold text-white mb-4">Request Received</h2>
           <p className="text-slate-300 mb-8">
             Commander {formData.name.split(' ')[0]}, your interest in the <strong>{PACKAGES.find(p => p.id === formData.packageId)?.title}</strong> has been logged. 
             Our orbital concierge will contact you via secure frequency within 24 Earth hours.
           </p>
           <button onClick={() => setSubmitted(false)} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
             Submit another request
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950 text-white px-4 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />

       <div className="max-w-4xl mx-auto relative z-10">
         <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Secure Your Passage</h1>
            <p className="text-slate-400">Begin the vetting process for interplanetary travel. Due to high demand, all bookings are subject to health and financial verification.</p>
         </div>

         <div className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">Full Name</label>
                   <input 
                     required
                     type="text" 
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                     placeholder="e.g. Cmdr. Shepard"
                     value={formData.name}
                     onChange={e => setFormData({...formData, name: e.target.value})}
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">Comms Frequency (Email)</label>
                   <input 
                     required
                     type="email" 
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none"
                     placeholder="name@example.com"
                     value={formData.email}
                     onChange={e => setFormData({...formData, email: e.target.value})}
                   />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">Select Package Tier</label>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PACKAGES.map(pkg => (
                      <div 
                        key={pkg.id}
                        onClick={() => setFormData({...formData, packageId: pkg.id})}
                        className={`cursor-pointer p-4 rounded-lg border transition-all flex justify-between items-center ${formData.packageId === pkg.id ? 'bg-cyan-500/10 border-cyan-500' : 'bg-slate-900/30 border-slate-700 hover:bg-slate-800'}`}
                      >
                        <div>
                          <p className={`font-bold ${formData.packageId === pkg.id ? 'text-cyan-400' : 'text-white'}`}>{pkg.title}</p>
                          <p className="text-xs text-slate-400">{pkg.price}</p>
                        </div>
                        {formData.packageId === pkg.id && <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="block text-sm font-bold text-slate-300 uppercase tracking-wider">Preferred Departure</label>
                 <select 
                   className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                   value={formData.month}
                   onChange={e => setFormData({...formData, month: e.target.value})}
                   required
                 >
                   <option value="">Select a Launch Window</option>
                   <option value="q3-2045">Q3 2045 (Limited Availability)</option>
                   <option value="q4-2045">Q4 2045</option>
                   <option value="q1-2046">Q1 2046</option>
                   <option value="q2-2046">Q2 2046</option>
                 </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-5 rounded-lg text-lg transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center gap-2"
              >
                INITIATE BOOKING PROTOCOL <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                Alternatively, use the secure <a href="#" className="text-cyan-400 underline">Google Form Portal</a> for government-sponsored research grants.
              </p>
            </form>
         </div>
       </div>
    </div>
  );
};