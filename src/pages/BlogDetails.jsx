import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, ArrowLeft, Mail, 
  ChevronRight, Share2, Bookmark, MessageSquare, 
  Sparkles, Terminal, Activity, Cpu
} from 'lucide-react';
import blogs from '../data/blogs.json';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id) || blogs[0]; // Fallback to first blog for demo

  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-primary/30 font-body">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] overflow-hidden flex items-end px-6 pb-24 md:px-20 md:pb-32">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.2, filter: 'blur(10px) grayscale(100%)' }}
              animate={{ scale: 1, filter: 'blur(0px) grayscale(0%)' }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full h-full object-cover opacity-60" 
              src={blog.image} 
              alt={blog.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/40 via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="px-6 py-2 bg-primary text-black label-md font-black tracking-[0.2em] rounded-2xl shadow-luxury-neon">
                {blog.category.toUpperCase()}
              </span>
              <div className="h-[1px] w-20 bg-white/10 hidden md:block"></div>
              <span className="text-on-surface/40 label-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <Calendar size={14} className="text-primary" /> {blog.date}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="display-lg normal-case italic text-on-surface leading-[0.95] mb-12 max-w-5xl"
            >
              {blog.title}
            </motion.h1>

            <div className="flex flex-wrap items-center gap-12 pt-8 border-t border-white/5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-[2rem] border border-white/10 glass-card flex items-center justify-center text-primary group-hover:shadow-luxury-neon transition-all overflow-hidden relative">
                   <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Author"
                   />
                </div>
                <div>
                  <p className="text-primary font-black label-md tracking-widest uppercase group-hover:text-secondary mb-1">ARCHITECT_0X24</p>
                  <p className="text-on-surface/40 label-sm uppercase tracking-widest font-bold">Principal Synthesis Engineer</p>
                </div>
              </motion.div>

              <div className="flex items-center gap-8 text-on-surface/30 label-sm font-bold uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-3">
                    <Clock size={16} className="text-secondary" />
                    <span>{blog.readTime}</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <MessageSquare size={16} className="text-secondary" />
                    <span>24 Protocol Updates</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="absolute right-20 bottom-32 hidden xl:flex flex-col gap-6">
             {[Share2, Bookmark, Terminal].map((Icon, i) => (
                <motion.button
                   key={i}
                   whileHover={{ scale: 1.1, x: -5 }}
                   className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-on-surface/40 hover:text-primary transition-all border border-white/5"
                >
                   <Icon size={20} />
                </motion.button>
             ))}
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20 py-32">
          <article className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12 text-on-surface/60 body-lg font-medium leading-[1.8]"
            >
              <div className="relative p-12 glass-card rounded-[3rem] border border-primary/10 overflow-hidden group mb-16">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
                 <p className="relative z-10 text-on-surface italic headline-sm leading-relaxed first-letter:text-8xl first-letter:font-black first-letter:text-primary first-letter:mr-6 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
                   The evolution of automotive kinetics is reaching a terminal velocity point. As we transition away from combustion-based legacy systems, the architecture of power is being fundamentally reimagined. The kinetic monolith industries' latest breakthrough in solid-state energy density is not just an incremental upgrade—it is a complete system override.
                 </p>
                 <div className="absolute bottom-0 right-0 p-4 opacity-5">
                    <Cpu size={120} className="text-primary" />
                 </div>
              </div>

              <h2 className="headline-md normal-case italic text-on-surface pt-8 flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-primary/30"></span>
                 01. CORE_SYNTHESIS
              </h2>
              <p>
                Unlike traditional lithium-ion configurations that rely on volatile liquid electrolytes, our solid-state modules utilize a ceramic-polymer composite. This allows for a 40% increase in energy-to-mass ratio while reducing the thermal footprint by nearly half. The result is a chassis that breathes, managing heat as a structural element rather than a byproduct.
              </p>

              <div className="my-16 relative rounded-[4rem] overflow-hidden glass-card p-4 group">
                <div className="aspect-video relative overflow-hidden rounded-[3rem]">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                    alt="Core Interface" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-8 left-8 p-6 glass-card rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <span className="label-sm text-primary font-mono uppercase tracking-[0.2em] flex items-center gap-3">
                       <Activity size={14} /> SCANNING: CORE_INTERFACE_09
                    </span>
                  </div>
                </div>
              </div>

              <blockquote className="relative p-16 rounded-[4rem] glass-card border-none overflow-hidden my-20">
                 <div className="absolute top-0 left-0 w-2 h-full bg-primary/40"></div>
                 <div className="absolute -top-12 -left-12 opacity-[0.03]">
                    <span className="text-[20rem] font-black leading-none">"</span>
                 </div>
                 <p className="relative z-10 headline-sm italic font-light text-on-surface leading-loose">
                    "We are no longer designing cars. We are engineering localized atmospheric disruptions powered by pure electrical intent."
                 </p>
                 <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-secondary/30"></div>
                    <span className="label-md text-secondary uppercase tracking-widest italic opacity-60">Kinetic Motors Technical Board</span>
                 </div>
              </blockquote>

              <h2 className="headline-md normal-case italic text-on-surface pt-8 flex items-center gap-4">
                 <span className="w-12 h-[1px] bg-primary/30"></span>
                 02. TELEMETRY_OVERRIDE
              </h2>
              <p>
                Through the integration of the NEON_GENESIS neural link, every module within the drive unit communicates in sub-millisecond intervals. This isn't just traction control; it is predictive surface adaptation. The vehicle knows the friction coefficient of the asphalt before the tire even makes contact.
              </p>
            </motion.div>

            {/* Back to Blog */}
            <div className="mt-24 pt-12 border-t border-white/5 flex items-center justify-between">
              <Link to="/blog" className="group inline-flex items-center gap-4 text-primary label-md uppercase font-black tracking-widest hover:gap-6 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                   <ArrowLeft className="w-5 h-5 -translate-x-1 group-hover:-translate-x-2 transition-transform" />
                </div>
                Return to Journal
              </Link>

              <div className="flex gap-4">
                 <span className="label-sm text-on-surface/20 uppercase tracking-[0.2em] font-bold">End of Transmission</span>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            <div className="p-12 glass-card rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                 <Mail size={120} className="text-secondary" />
              </div>
              <div className="relative z-10 space-y-8">
                 <div className="space-y-4">
                    <h3 className="headline-sm normal-case italic text-on-surface leading-tight">Join The <br/><span className="text-secondary not-italic text-4xl">Grid</span></h3>
                    <p className="label-md text-on-surface/30 uppercase tracking-[0.1em] leading-loose">Locked dossiers delivered via secure encrypted uplink.</p>
                 </div>
                 <div className="space-y-4">
                   <input 
                     className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 label-md text-on-surface placeholder:text-on-surface/10 focus:ring-1 focus:ring-primary/40 outline-none transition-all uppercase tracking-widest font-bold" 
                     placeholder="OPERATOR_ID" 
                     type="email"
                   />
                   <button className="w-full py-6 bg-primary text-black font-black label-md uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-luxury-neon flex items-center justify-center gap-3">
                     Initialize Upload <Sparkles size={18} />
                   </button>
                 </div>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-on-surface display-xs normal-case italic flex items-center gap-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-luxury-neon"></span>
                Next Protocol
              </h3>
              <div className="space-y-8">
                {blogs.filter(b => b.id !== id).slice(0, 3).map(related => (
                  <Link key={related.id} to={`/blog/${related.id}`} className="group block space-y-3">
                    <div className="flex items-center gap-4 text-on-surface/20 label-sm font-bold uppercase tracking-widest">
                       <span className="text-secondary opacity-60 italic">{related.category}</span>
                       <span className="w-1 h-1 bg-white/5 rounded-full"></span>
                       <span>{related.date}</span>
                    </div>
                    <h4 className="headline-xs normal-case italic text-on-surface group-hover:text-primary transition-colors leading-[1.3]">
                      {related.title}
                    </h4>
                    <div className="h-[1px] w-full bg-white/5 group-hover:bg-primary/20 transition-all"></div>
                  </Link>
                ))}
              </div>
              
              <Link to="/blog" className="block text-center py-6 rounded-2xl border border-white/5 glass-card label-md uppercase tracking-[0.2em] text-on-surface/40 hover:text-primary hover:border-primary/20 transition-all font-bold mt-12">
                 View Full Database
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
