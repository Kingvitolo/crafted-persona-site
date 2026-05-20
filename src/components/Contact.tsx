import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Mail, Target, Send, ShieldAlert, Rocket } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Intelligence Report Received. Expect contact within 12 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-6xl md:text-7xl font-black uppercase mb-10 leading-none">
                Deploy <br /><span className="text-primary italic">Results.</span>
              </h2>
              <p className="text-2xl text-white/70 mb-12 leading-tight font-bold border-l-8 border-primary pl-8">
                I'm selective with my clients. If you're looking for high-velocity growth and have the infrastructure to handle it, let's deploy.
              </p>

              <div className="space-y-12">
                <a href={`mailto:holden@digitalgrowth.io`} className="group flex items-center gap-10">
                  <div className="w-20 h-20 bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Mail size={40} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">Encrypted Comms</p>
                    <p className="text-3xl font-black group-hover:text-primary transition-colors">holden@digitalgrowth.io</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-10">
                   <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center">
                      <Target size={40} className="text-white/40" />
                   </div>
                   <div className="flex gap-8">
                      {profileData.socials.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          className="text-white/40 hover:text-primary transition-all hover:scale-125"
                          title={social.name}
                        >
                          <social.icon size={28} />
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 bg-white border-4 border-foreground shadow-[20px_20px_0px_0px_var(--primary)]"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.4em] text-primary">Identity</label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-secondary/10 border-b-4 border-foreground focus:border-primary outline-none transition-all font-black text-xl uppercase placeholder:text-foreground/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.4em] text-primary">Coordinates</label>
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-secondary/10 border-b-4 border-foreground focus:border-primary outline-none transition-all font-black text-xl uppercase placeholder:text-foreground/20"
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.4em] text-primary">Objective</label>
                  <select className="w-full px-6 py-4 bg-secondary/10 border-b-4 border-foreground focus:border-primary outline-none transition-all font-black text-xl uppercase appearance-none cursor-pointer">
                    <option>Strategic SEO</option>
                    <option>Media Buying</option>
                    <option>Design & UX</option>
                    <option>Full Scale Growth</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-4 px-10 py-6 bg-foreground text-white font-black text-2xl uppercase tracking-[0.3em] hover:bg-primary transition-all active:scale-95"
                >
                  Deploy Mission
                  <Rocket size={28} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
                <div className="flex items-center gap-3 pt-6 opacity-30 justify-center">
                   <ShieldAlert size={14} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Confidential communication channel.</span>
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