import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ChevronRight, ExternalLink, Star, Megaphone } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background relative border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
             <Megaphone size={40} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none text-foreground">
            The <span className="text-primary">Win</span> Vault
          </h2>
          <p className="text-lg text-muted-foreground font-bold uppercase tracking-[0.3em]">Selected works that paid off.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col bg-white border-2 border-foreground rounded-[2.5rem] overflow-hidden hover:shadow-[15px_15px_0px_0px_var(--primary)] transition-all duration-500">
                <div className="relative h-64 overflow-hidden border-b-2 border-foreground">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-30" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="bg-foreground text-background px-4 py-2 rounded-xl flex items-center gap-2 font-black italic shadow-xl">
                      <project.metrics.icon size={16} className="text-primary" />
                      <span className="text-lg">{project.metrics.value}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-secondary text-foreground rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4 leading-tight tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-bold leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  {project.testimonial && (
                    <div className="mt-auto mb-8 p-6 bg-primary/5 rounded-2xl relative border border-primary/10">
                      <p className="text-foreground font-bold text-sm italic leading-snug mb-4">
                        "{project.testimonial.text}"
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">— {project.testimonial.author}</p>
                    </div>
                  )}

                  <a 
                    href={project.link} 
                    className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary hover:text-foreground transition-all active:scale-95"
                  >
                    Deep Dive <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Success Break Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative h-[60vh] rounded-[4rem] overflow-hidden border-4 border-foreground group"
        >
           <img 
             src={profileData.backgrounds.success} 
             alt="Success Vibe" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
           <div className="absolute bottom-16 left-12 right-12 text-center md:text-left">
              <h3 className="text-4xl md:text-6xl font-black text-background uppercase italic tracking-tighter mb-6">"Digital growth is a <span className="text-primary underline decoration-8">team sport.</span>"</h3>
              <p className="text-background/40 font-black uppercase tracking-[0.4em] text-xs">Let's build your dream team.</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;