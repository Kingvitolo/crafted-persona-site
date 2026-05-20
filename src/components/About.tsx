import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Badge } from './ui/badge';
import { Smile, Zap, Rocket, Star, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
              <Smile size={32} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none">
              High stakes. <br />
              <span className="text-primary italic underline decoration-4 underline-offset-8">Low Stress.</span>
            </h2>
            <div className="space-y-8 text-muted-foreground text-lg leading-relaxed font-bold">
              <p>
                {profileData.bio}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                 {[ 
                   { icon: Zap, label: "Fast" },
                   { icon: Rocket, label: "Bold" },
                   { icon: Heart, label: "Driven" }
                 ].map(item => (
                   <div key={item.label} className="bg-white border-2 border-foreground p-4 rounded-2xl flex flex-col items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <item.icon size={20} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-foreground shadow-2xl mb-12 group">
               <img 
                 src={profileData.backgrounds.about} 
                 alt="Workstation" 
                 className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            {profileData.skills.map((skillGroup, idx) => (
              <div key={skillGroup.category} className="p-8 bg-white border-2 border-foreground rounded-2xl hover:shadow-[10px_10px_0px_0px_var(--primary)] transition-all">
                <h3 className="text-lg font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary text-foreground text-xs rounded-lg font-black italic">
                    0{idx + 1}
                  </span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="px-4 py-1.5 text-[10px] font-black bg-secondary text-foreground border border-foreground/10 transition-all rounded-full uppercase tracking-widest"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;