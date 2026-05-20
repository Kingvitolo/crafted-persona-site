import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Badge } from './ui/badge';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-workspace-overlay overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none">
              High stakes. <br />
              <span className="text-primary">No Bullshit.</span>
            </h2>
            <div className="space-y-8 text-white/80 text-xl leading-snug font-medium">
              <p>
                The digital landscape is crowded with noise. I build the signal. My methodology is rooted in three things: Data, Psychology, and Efficiency.
              </p>
              <p>
                Whether I'm managing multi-million dollar ad spends or architecting a brand's SEO foundation, my focus remains the same: Converting curiosity into capital.
              </p>
              <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white font-black italic text-2xl italic leading-tight">
                  "If your design isn't making you money, it's just expensive art."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {profileData.skills.map((skillGroup, idx) => (
              <div key={skillGroup.category} className="p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:border-primary/50 transition-all group">
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-6 flex items-center gap-4">
                  <span className="text-primary">0{idx + 1}.</span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="px-5 py-2 text-xs font-black bg-white/5 text-white border border-white/10 group-hover:border-primary/30 transition-all rounded-lg uppercase tracking-widest"
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