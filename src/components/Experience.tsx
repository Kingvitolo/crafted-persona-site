import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ArrowUpRight, BarChart, Globe, Mail, Rocket } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-abstract-tech relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-foreground">
            The <span className="text-primary italic">Execution</span> Log
          </h2>
          <p className="text-muted-foreground font-bold max-w-xl mx-auto uppercase text-sm tracking-[0.2em]">Verified Performance & Professional Milestones.</p>
        </div>

        {/* Benchmarks with Livelier Visuals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[ 
            { label: "SEO Dominance", value: "1.2M+", icon: Globe, detail: "Organic Visitors" },
            { label: "Ad ROI", value: "10.2x", icon: BarChart, detail: "Average ROAS" },
            { label: "Site Speed", value: "99/100", icon: Rocket, detail: "Lighthouse Score" },
            { label: "Retention", value: "45%", icon: Mail, detail: "Email Open Rate" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border-2 border-foreground shadow-[10px_10px_0px_0px_var(--primary)] text-center group hover:-translate-y-2 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <h3 className="text-4xl font-black text-foreground mb-1 tracking-tighter">{item.value}</h3>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">{item.label}</p>
              <p className="text-[10px] font-bold uppercase text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {profileData.experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-10 md:p-12 bg-white border-2 border-foreground hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] transition-all flex flex-col md:flex-row items-center gap-10">
                <div className="w-24 h-24 bg-foreground text-white flex items-center justify-center shrink-0 shadow-xl">
                  <item.icon size={40} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-3xl font-black uppercase text-foreground leading-none">{item.role}</h3>
                      <p className="text-primary font-black uppercase tracking-widest text-sm mt-2">{item.company}</p>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground border-2 border-border px-4 py-1.5">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-bold text-lg leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;