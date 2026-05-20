import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-hero-industrial">
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-lg mb-8 border border-primary/30 backdrop-blur-sm">
              <Sparkles size={14} className="text-primary" />
              <span>Engineered for Maximum ROI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-white">
              Surgical Precision. <br />
              <span className="text-primary">Measurable Growth.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-medium leading-relaxed">
              I'm <span className="text-white font-bold">{profileData.name}</span>. I strip away the digital fluff to deliver clean, high-performance SEO and design solutions. 
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {profileData.roles.map((role) => (
                <span key={role} className="px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl text-sm font-bold text-white/70">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#projects"
                className="flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-black rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
              >
                Explore Benchmarks
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-10 py-4 border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Start a Riot
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;