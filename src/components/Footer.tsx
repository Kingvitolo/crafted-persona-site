import React from 'react';
import { profileData } from '../data/profile';
import { Target } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight group">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg shadow-sm">
                <Target size={22} />
              </div>
              <span className="uppercase text-white">Holden</span>
            </a>
            <p className="text-background/60 max-w-xs font-medium text-xs tracking-wide leading-relaxed">
              Simplifying digital growth through SEO, Media Buying, and Design since 2017.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Strategic Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-xs font-bold uppercase hover:text-primary transition-colors tracking-widest">Philosophy</a></li>
                <li><a href="#projects" className="text-xs font-bold uppercase hover:text-primary transition-colors tracking-widest">Works</a></li>
                <li><a href="#experience" className="text-xs font-bold uppercase hover:text-primary transition-colors tracking-widest">History</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Network</h4>
              <div className="flex flex-wrap gap-4">
                {profileData.socials.map((s) => (
                  <a key={s.name} href={s.url} className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-all">
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-background/40">
            © {new Date().getFullYear()} Holden. All results verified.
          </div>
          <div className="text-[9px] uppercase font-black tracking-[0.3em] text-primary/60">
            Clean Design. Measurable Growth.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;