import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { ArrowRight, Sparkles, Zap, Target, Search, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background bg-dot-pattern">
      {/* Lively Background Elements */}
      <div className="absolute top-20 right-[-5%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 left-[-5%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary-foreground text-xs font-black uppercase tracking-[0.2em] rounded-full mb-8 border border-primary/20 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary animate-spin-slow" />
              <span className="text-foreground">Marketing & Design Fuel</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-8 text-foreground tracking-tighter">
              Bold Growth. <br />
              <span className="text-primary italic">Zero Friction.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-bold leading-snug">
              I'm <span className="text-foreground border-b-4 border-primary/40">{profileData.name}</span>. A professional youth helping brands skip the complexity and go straight to the revenue. 
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {profileData.roles.map((role, idx) => (
                <span key={role} className={`px-4 py-2 rounded-xl text-sm font-black uppercase tracking-widest border-2 ${idx % 2 === 0 ? 'bg-background border-primary/30 text-primary' : 'bg-foreground border-foreground text-background'}`}>
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#projects"
                className="flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-black rounded-2xl hover:scale-105 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest text-sm"
              >
                View The Vault
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-10 py-4 border-2 border-foreground font-black rounded-2xl hover:bg-secondary transition-all uppercase tracking-widest text-sm"
              >
                Let's Collab
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-foreground shadow-[20px_20px_0px_0px_var(--primary)] aspect-[4/5] bg-muted">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Lively Floating Widgets */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-foreground text-background p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4"
            >
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-foreground font-black">
                <Target size={20} />
              </div>
              <div>
                <p className="text-xl font-black leading-none">+1,200%</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">SEO Smashed</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white border-4 border-foreground p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4"
            >
              <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-foreground">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xl font-black leading-none tracking-tight">10.2x ROAS</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 text-muted-foreground">Ad Performance</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;