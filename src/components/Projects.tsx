import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ChevronRight, Target, ShieldCheck } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Case <span className="text-primary italic">Studies.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-bold uppercase tracking-widest border-l-4 border-primary pl-6">Real businesses. Real metrics. No fluff.</p>
          </div>
          <div className="hidden md:block">
            <ShieldCheck size={100} className="text-primary/10" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {profileData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full flex flex-col bg-white border-2 border-foreground hover:shadow-[20px_20px_0px_0px_var(--primary)] transition-all duration-500 overflow-hidden">
                <div className="relative aspect-video overflow-hidden border-b-2 border-foreground">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-primary text-primary-foreground px-6 py-3 shadow-2xl flex items-center justify-between font-black uppercase italic transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <span>{project.metrics.label}</span>
                      <span className="text-2xl">{project.metrics.value}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-secondary text-foreground">
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-6 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-bold leading-snug mb-10">
                    {project.description}
                  </p>
                  
                  {project.testimonial && (
                    <div className="mt-auto mb-10 p-8 bg-secondary/30 border-l-8 border-primary italic">
                      <p className="text-foreground font-bold text-lg leading-tight mb-4">
                        "{project.testimonial.text}"
                      </p>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">— {project.testimonial.author}</p>
                    </div>
                  )}

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-3 font-black uppercase tracking-[0.3em] text-sm group/btn"
                  >
                    Deep Dive <ChevronRight size={20} className="group-hover/btn:translate-x-2 transition-transform text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Visual Detail Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative h-[50vh] overflow-hidden border-2 border-foreground group"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/37ef0254-274c-4f98-bdbc-6e3605eaa20a/professional-detail-8e472b66-1779273018507.webp" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            alt="Detail"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
            <div className="max-w-2xl bg-white border-2 border-foreground p-12 shadow-[15px_15px_0px_0px_var(--primary)]">
               <h3 className="text-3xl font-black uppercase italic mb-4">"Performance is the only metric that matters."</h3>
               <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">- Holden</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;