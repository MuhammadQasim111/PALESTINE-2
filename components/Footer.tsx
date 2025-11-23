import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-cyan-500/20 p-2 rounded-full">
                <Rocket className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-xl font-display font-bold tracking-widest text-white">CELESTIA</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The premier provider of interplanetary leisure and research logistics. Connecting Earth to the wonders of Palestine-2 since 2040.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/planet" className="hover:text-cyan-400 transition-colors">The Planet</Link></li>
              <li><Link to="/packages" className="hover:text-cyan-400 transition-colors">Voyages</Link></li>
              <li><Link to="/apps" className="hover:text-cyan-400 transition-colors">App Ecosystem</Link></li>
              <li><Link to="/investor" className="hover:text-cyan-400 transition-colors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Spaceflight Waiver</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Orbital Law Compliance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Insurance Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
            <div className="mt-6">
               <p className="text-xs text-slate-500">Nevada Launch Hub, Sector 7</p>
               <p className="text-xs text-slate-500">United North America, Earth</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center">
          <p className="text-slate-600 text-xs">
            © 2045 Celestia Interplanetary Voyages. All rights reserved. Palestine-2 is a registered trademark of the Seraphi Preservation Trust.
          </p>
        </div>
      </div>
    </footer>
  );
};