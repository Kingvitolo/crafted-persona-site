import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Target, TrendingUp, Search, Zap, Rocket, Smile, Megaphone } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">
              Strategic <span className="text-primary italic">Scope</span>
            </h2>
            <p className="text-muted-foreground font-bold uppercase text-sm tracking-[0.2em]">Core services and professional impact.</p>
          </div>
          <div className="bg-primary p-6 rounded-[2rem] border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6">
             <div className="text-center">
                <p className="text-4xl font-black italic leading-none">10.2x</p>
                <p className="text-[10px] font-black uppercase tracking-widest mt-1">Avg. ROAS</p>
             </div>
             <div className="w-px h-12 bg-foreground/20" />
             <div className="text-center">
                <p className="text-4xl font-black italic leading-none">1.2M+</p>
                <p className="text-[10px] font-black uppercase tracking-widest mt-1">Visitors</p>
             </div>
          </div>
        </div>

        {/* NEW SERVICES SCOPE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {profileData.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border-2 border-foreground rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-foreground transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-3 leading-none">{service.title}</h3>
              <p className="text-sm font-bold text-muted-foreground leading-snug">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black uppercase italic text-foreground tracking-tighter">Professional <span className="text-primary">Trajectory.</span></h3>
          </div>
          {profileData.experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-8 md:p-12 bg-white border-4 border-foreground rounded-[3rem] shadow-[10px_10px_0px_0px_var(--secondary)] flex flex-col md:flex-row items-center gap-8 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                <div className="w-24 h-24 bg-foreground text-background rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
                  <item.icon size={48} className="text-primary" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter">{item.role}</h3>
                      <p className="text-primary font-black uppercase tracking-widest text-xs">{item.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-muted border-2 border-foreground rounded-full text-[10px] font-black uppercase tracking-widest mt-4 md:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-bold text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="mt-32 p-12 bg-foreground text-background rounded-[3rem] relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 scale-150">
              <Megaphone size={120} />
           </div>
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-black uppercase italic mb-6 leading-tight">Verified <br /><span className="text-primary">Indoctrination.</span></h2>
                 <p className="text-background/60 font-bold uppercase tracking-widest text-[10px] mb-8 max-w-sm leading-relaxed">Credentialed expertise in growth hacking and high-performance design systems.</p>
              </div>
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.institution} className="p-8 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:bg-white hover:text-foreground transition-all duration-300">
                    <div className="p-4 bg-primary rounded-xl text-foreground group-hover:rotate-12 transition-transform">
                      <edu.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tighter">{edu.degree}</h4>
                      <p className="text-xs font-bold opacity-60 uppercase tracking-widest">{edu.institution} | {edu.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;