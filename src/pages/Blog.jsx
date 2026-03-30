import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Mail, Search, Menu } from 'lucide-react';
import blogs from '../data/blogs.json';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Engineering', 'Design', 'Performance', 'Lifestyle'];

  const filteredBlogs = activeCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary selection:text-on-primary">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover grayscale" 
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop" 
              alt="Kinetic Journal Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-surface-container/60 backdrop-blur-xl text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Featured Edition
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] uppercase mb-6"
            >
              KINETIC <br/>
              <span className="text-primary drop-shadow-[0_0_15px_rgba(156,255,147,0.4)]">JOURNAL</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-light"
            >
              Exploration of the bleeding edge in automotive engineering, design philosophy, and the future of human mobility.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-lg bg-surface-container/40 backdrop-blur-md border-l-4 border-primary max-w-2xl group cursor-pointer transition-all hover:bg-surface-container-highest/60"
            >
              <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-2 block">Technology & Engineering</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 group-hover:text-primary transition-colors">THE FUTURE OF SOLID-STATE PROPULSION</h2>
              <div className="flex items-center gap-6 text-on-surface-variant text-xs font-medium">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> MAY 24, 2024</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 MIN READ</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories & Filter */}
        <section className="px-8 md:px-16 py-12 sticky top-20 z-40 bg-surface/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-outline-variant/20 pb-8">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-surface-container/60 text-on-surface hover:text-primary border border-outline-variant/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant uppercase text-[10px] font-bold tracking-widest">
              <span>Sorting by:</span>
              <span className="text-on-surface">Newest First</span>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="px-8 md:px-16 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div 
                key={blog.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={blog.image} 
                    alt={blog.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-secondary text-[10px] font-black uppercase tracking-widest mb-2 block">{blog.category}</span>
                <h3 className="text-xl font-black uppercase mb-3 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 mb-4 font-light">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                    <span>{blog.readTime}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                    <span>{blog.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-xl border border-primary/40 text-primary font-black uppercase tracking-widest bg-surface-container/40 backdrop-blur-md hover:bg-primary/10 transition-all"
            >
              Load More Entries
            </motion.button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-surface-container-low py-24 px-8 md:px-16 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.04em] uppercase mb-6 leading-[0.9]">
                SUBSCRIBE TO <br/>
                <span className="text-primary">THE GRID</span>
              </h2>
              <p className="text-on-surface-variant text-lg max-w-md font-light">
                Get priority access to technical whitepapers, prototype unveils, and event invitations. No noise, just precision.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-surface-container-highest rounded-full px-8 py-4 flex items-center border border-outline-variant/20 focus-within:border-secondary transition-all">
                  <Mail className="w-5 h-5 text-on-surface-variant mr-3" />
                  <input 
                    className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-tertiary uppercase text-xs font-bold tracking-widest w-full" 
                    placeholder="YOUR EMAIL ADDRESS" 
                    type="email"
                  />
                </div>
                <button className="bg-primary hover:bg-primary-fixed text-on-primary px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-[0_10px_30px_rgba(156,255,147,0.3)] hover:scale-105 active:scale-95 whitespace-nowrap">
                  Join Now
                </button>
              </form>
              <p className="text-[10px] text-on-tertiary font-bold uppercase tracking-widest mt-4 ml-6">
                By subscribing, you agree to our <a className="underline" href="#">Privacy Policy</a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
