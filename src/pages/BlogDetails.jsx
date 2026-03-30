import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Mail, ChevronRight } from 'lucide-react';
import blogs from '../data/blogs.json';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id) || blogs[0]; // Fallback to first blog for demo

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary selection:text-on-primary">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] overflow-hidden flex items-end px-8 pb-20">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover" 
              src={blog.image} 
              alt={blog.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-black tracking-[0.2em] rounded-full">
                {blog.category}
              </span>
              <span className="text-on-surface-variant text-[10px] font-medium tracking-widest uppercase">
                {blog.date}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8"
            >
              {blog.title.split(':').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  <span className={i > 0 ? "text-primary italic" : ""}>{part}</span>
                </React.Fragment>
              ))}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-surface-container overflow-hidden">
                <User className="w-full h-full p-2 text-primary" />
              </div>
              <div>
                <p className="text-primary font-bold text-xs tracking-widest uppercase">OPERATOR_01</p>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">Lead Systems Architect</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 py-20">
          <article className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10 text-on-surface-variant leading-relaxed text-lg font-light"
            >
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                The evolution of automotive kinetics is reaching a terminal velocity point. As we transition away from combustion-based legacy systems, the architecture of power is being fundamentally reimagined. The kinetic monolith industries' latest breakthrough in solid-state energy density is not just an incremental upgrade—it is a complete system override.
              </p>

              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-on-surface pt-4">01_CORE_SYNTHESIS</h2>
              <p>
                Unlike traditional lithium-ion configurations that rely on volatile liquid electrolytes, our solid-state modules utilize a ceramic-polymer composite. This allows for a 40% increase in energy-to-mass ratio while reducing the thermal footprint by nearly half. The result is a chassis that breathes, managing heat as a structural element rather than a byproduct.
              </p>

              <div className="my-12 relative rounded-lg overflow-hidden border border-outline-variant/20 group">
                <img 
                  className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Core Interface" 
                />
                <div className="absolute bottom-4 left-4 bg-surface-container/60 backdrop-blur-md px-4 py-2 rounded-lg">
                  <span className="text-[10px] text-primary font-mono uppercase tracking-widest">IMG_REF: CORE_INTERFACE_09</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-8 py-4 my-12 italic text-2xl font-light text-on-surface bg-surface-container/20">
                "We are no longer designing cars. We are engineering localized atmospheric disruptions powered by pure electrical intent."
              </blockquote>

              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-on-surface pt-4">02_TELEMETRY_OVERRIDE</h2>
              <p>
                Through the integration of the NEON_GENESIS neural link, every module within the drive unit communicates in sub-millisecond intervals. This isn't just traction control; it is predictive surface adaptation. The vehicle knows the friction coefficient of the asphalt before the tire even makes contact.
              </p>
            </motion.div>

            {/* Back to Blog */}
            <div className="mt-16 pt-8 border-t border-outline-variant/20">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary uppercase text-xs font-black tracking-widest hover:gap-4 transition-all">
                <ArrowLeft className="w-4 h-4" /> Back to Journal
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-surface-container-high rounded-lg border border-outline-variant/10 shadow-2xl">
              <h3 className="text-primary font-black italic uppercase tracking-widest text-lg mb-2">SUBSCRIBE_TO_THE_GRID</h3>
              <p className="text-on-surface-variant text-xs mb-8 uppercase tracking-widest leading-loose">Access exclusive telemetry data and prototype reports delivered via secure uplink.</p>
              <div className="space-y-4">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 text-xs font-mono focus:ring-1 focus:ring-primary placeholder:text-outline" 
                  placeholder="OPERATOR_EMAIL" 
                  type="email"
                />
                <button className="w-full py-4 bg-primary text-on-primary font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(156,255,147,0.3)]">
                  INITIATE_UPLINK
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-on-surface font-black uppercase tracking-tighter text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                NEXT_PROTOCOL
              </h3>
              <div className="space-y-6">
                {blogs.filter(b => b.id !== id).map(related => (
                  <Link key={related.id} to={`/blog/${related.id}`} className="group block border-b border-outline-variant/10 pb-6">
                    <p className="text-primary text-[10px] font-bold tracking-widest mb-1 uppercase">{related.category}</p>
                    <h4 className="text-on-surface font-bold text-lg group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
