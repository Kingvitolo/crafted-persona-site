import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Mail, Target, Send, Zap, ShieldCheck, Rocket } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Intelligence received. Holden will contact you within 12 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-foreground rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Rocket size={14} />
                <span>Ready for Ignition</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter">Let's <br /><span className="text-primary italic underline decoration-8">Scale.</span></h2>
              <p className="text-2xl text-muted-foreground mb-12 leading-tight font-bold border-l-8 border-primary pl-8 max-w-md">
                I'm currently accepting new projects that demand high-ROI marketing and clean design. 
              </p>

              <div className="space-y-12">
                <a href={`mailto:holden@growthwizard.io`} className="group flex items-center gap-10">
                  <div className="w-20 h-20 bg-foreground text-background rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-2xl">
                    <Mail size={40} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">The Direct Line</p>
                    <p className="text-3xl font-black group-hover:text-primary transition-colors tracking-tighter uppercase">Holden@growthwizard.io</p>
                  </div>
                </a>
                
                <div className="flex gap-6 pt-4">
                  {profileData.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-14 h-14 bg-secondary border-2 border-foreground rounded-2xl flex items-center justify-center text-foreground hover:bg-primary transition-all hover:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      title={social.name}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 bg-white border-4 border-foreground rounded-[4rem] shadow-[20px_20px_0px_0px_var(--primary)]"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.4em] text-foreground/40">Your Identity</label>
                  <input
                    required
                    type="text"
                    placeholder="Amazing Partner"
                    className="w-full px-0 py-4 bg-transparent border-b-4 border-foreground focus:border-primary outline-none transition-all font-black text-xl uppercase placeholder:text-foreground/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.4em] text-foreground/40">Digital Coordinates</label>
                  <input
                    required
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full px-0 py-4 bg-transparent border-b-4 border-foreground focus:border-primary outline-none transition-all font-black text-xl uppercase placeholder:text-foreground/10"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-4 px-10 py-8 bg-foreground text-background font-black text-2xl uppercase tracking-[0.3em] rounded-3xl hover:bg-primary hover:text-foreground transition-all active:scale-95 shadow-2xl"
                >
                  Initiate Growth
                  <Send size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
                <div className="flex items-center gap-3 pt-6 opacity-30 justify-center">
                   <ShieldCheck size={14} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Confidential digital bridge.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;