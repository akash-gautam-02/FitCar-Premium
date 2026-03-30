import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body overflow-hidden selection:bg-primary selection:text-on-primary">
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-24">
        {/* Background Visual Metaphor */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,65,0.05)_51%)] bg-[length:100%_4px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.4 }}
              transition={{ duration: 2 }}
              className="w-full h-full object-cover mix-blend-screen blur-sm" 
              src="https://images.unsplash.com/photo-1614850523296-e8c1d07ed7a5?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Void"
            />
          </div>
          {/* Kinetic Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0e0e0e_90%)]"></div>
        </div>

        {/* Content Canvas */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          {/* Error Code / Metadata */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] tracking-[0.2em] font-black uppercase">ERROR_CODE_404</span>
            <span className="text-secondary text-[10px] tracking-[0.2em] font-medium uppercase">SYSTEM_STATE: DISCONNECTED</span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 10 }}
            className="font-headline text-[10vw] md:text-[8rem] font-black leading-[0.8] tracking-[-0.06em] uppercase italic mb-8"
            style={{ textShadow: '2px 0 #00e3fd, -2px 0 #ff7351' }}
          >
            GRID<br/><span className="text-primary">DISCONNECTED</span>
          </motion.h1>

          <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center mb-16">
            {/* Data Cluster 01 */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-start gap-1 p-6 bg-surface-container-low/40 backdrop-blur-md rounded-lg border-l-2 border-primary w-full md:w-auto"
            >
              <span className="text-[10px] tracking-widest text-on-surface-variant uppercase">TELEMETRY_STATUS</span>
              <span className="text-2xl font-black text-on-surface">LOST_SIGNAL</span>
            </motion.div>
            {/* Description */}
            <motion.p 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-on-surface-variant text-lg md:text-xl font-body max-w-lg text-left leading-relaxed font-light"
            >
              The requested coordinates do not exist in the Kinetic database. The path has been purged or never synchronized with the core monolith.
            </motion.p>
          </div>

          {/* CTA Cluster */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link 
              className="group relative px-12 py-5 bg-primary text-on-primary font-black text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(156,255,147,0.4)] flex items-center justify-center gap-3" 
              to="/"
            >
              <Home className="w-5 h-5" />
              RETURN TO HUB
            </Link>
            <Link 
              className="px-12 py-5 border border-outline-variant/30 backdrop-blur-xl text-on-surface font-black text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-surface-container-highest flex items-center justify-center gap-3" 
              to="/cars"
            >
              <Search className="w-5 h-5" />
              SEARCH THE GRID
            </Link>
          </motion.div>
        </div>

        {/* Telemetry Details Overlay */}
        <div className="absolute bottom-12 left-8 hidden lg:block">
          <div className="flex flex-col gap-2 font-mono text-[9px] text-on-tertiary-fixed-variant tracking-tighter uppercase">
            <div>LOC_DATA: [0x000404]</div>
            <div>VECTOR_STRENGTH: 0.00%</div>
            <div>LAST_KNOWN_POS: 34.0522° N, 118.2437° W</div>
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary"
            >
              RECALIBRATING...
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
