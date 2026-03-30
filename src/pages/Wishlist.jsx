import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Heart, Trash2, ArrowRight, Zap, Gauge, 
  BarChart3, LayoutGrid, Sparkles, AlertTriangle 
} from 'lucide-react';
import useStore from '../store/useStore';
import carsData from '../data/cars.json';
import Button from '../components/ui/Button';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, addToCompare } = useStore();

  const wishlistedCars = carsData.filter(car => wishlist.includes(car.id));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen font-body selection:bg-primary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header & Status Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Heart size={24} fill="currentColor" />
                 </div>
                 <span className="text-[0.7rem] font-black text-secondary tracking-[0.4em] uppercase italic block">PRIVATE_HANGAR</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
                COMMAND_<span className="text-primary italic">WISHLIST</span>
              </h2>
              <p className="text-on-surface-variant mt-6 text-sm font-bold tracking-widest uppercase max-w-xl leading-relaxed">
                Your curated selection of peak engineering. Monitoring <span className="text-primary font-black">{wishlistedCars.length}</span> active telemetry units in your local grid.
              </p>
            </motion.div>

            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="flex flex-wrap gap-4"
            >
              {wishlistedCars.length > 0 && (
                <button 
                  onClick={() => wishlist.forEach(id => toggleWishlist(id))}
                  className="px-10 py-4 rounded-full border border-outline-variant/20 text-xs font-black tracking-widest text-on-surface-variant hover:text-error hover:border-error/30 transition-all uppercase"
                >
                  DEACTIVATE_ALL
                </button>
              )}
              <Link to="/listing">
                <Button className="px-12 py-4 rounded-full shadow-[0_10px_30px_rgba(156,255,147,0.3)]">
                  INITIALIZE_NEW_PROBE
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Wishlist Grid */}
        <AnimatePresence mode="wait">
          {wishlistedCars.length > 0 ? (
            <motion.div 
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {wishlistedCars.map((car) => (
                <motion.div 
                  key={car.id}
                  variants={cardVariants}
                  layout
                  className="group relative bg-surface-container-low/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-700 shadow-2xl"
                >
                  {/* Card Media Segment */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-surface-container-high/40 to-transparent">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
                    />
                    
                    {/* Floating Controls */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                      <button 
                        onClick={() => toggleWishlist(car.id)}
                        className="w-12 h-12 rounded-2xl bg-surface-container-highest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:bg-error hover:text-white transition-all shadow-xl active:scale-90"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button 
                        onClick={() => {
                          addToCompare(car);
                          navigate('/compare');
                        }}
                        className="w-12 h-12 rounded-2xl bg-surface-container-highest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all shadow-xl active:scale-90"
                      >
                        <BarChart3 size={18} />
                      </button>
                    </div>

                    {/* Unit ID Badge */}
                    <div className="absolute bottom-6 left-8">
                       <span className="text-secondary text-[8px] font-black uppercase tracking-[0.4em] italic bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">UNIT_REC_0{car.id.slice(-2)}</span>
                    </div>
                  </div>

                  {/* Card Content Segment */}
                  <div className="p-10 space-y-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-on-surface mb-2">{car.name}</h3>
                        <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest">{car.brand} <span className="text-primary italic mx-2">//</span> {car.category}</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-primary text-2xl font-black tracking-tighter leading-none italic">${car.price.toLocaleString()}</span>
                        <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest">MSRP OPERATIONAL</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-surface-container-high/40 p-4 rounded-3xl border border-outline-variant/10 group-hover:border-primary/10 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                             <Zap className="w-3 h-3 text-secondary" />
                             <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">PROPULSION</span>
                          </div>
                          <span className="font-black italic tracking-tighter text-on-surface uppercase">{car.engine}</span>
                       </div>
                       <div className="bg-surface-container-high/40 p-4 rounded-3xl border border-outline-variant/10 group-hover:border-secondary/10 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                             <Gauge className="w-3 h-3 text-secondary" />
                             <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">ACCEL</span>
                          </div>
                          <span className="font-black italic tracking-tighter text-on-surface uppercase">{car.acceleration}</span>
                       </div>
                    </div>

                    <Button 
                      onClick={() => navigate(`/cars/${car.id}`)}
                      variant="ghost" 
                      className="w-full h-14 rounded-full border-outline-variant/20 hover:border-primary group-hover/btn:bg-primary transition-all text-xs font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3 group/btn"
                    >
                      VIEW_UNIT_DATA <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Decorative Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/60 transition-colors rounded-tl-[2.5rem]"></div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
               key="empty"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="py-48 px-12 bg-surface-container-low/20 backdrop-blur-md rounded-[3rem] border border-dashed border-outline-variant/20 flex flex-col items-center justify-center space-y-10 italic"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-surface-container-highest border border-outline-variant/10 flex items-center justify-center text-on-surface-variant opacity-20">
                  <Heart size={64} />
                </div>
                <div className="absolute -top-2 -right-2">
                   <AlertTriangle className="text-secondary w-10 h-10 animate-bounce" />
                </div>
              </div>
              
              <div className="space-y-4 text-center">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">GRID_IS_EMPTY</h3>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-black max-w-sm mx-auto leading-relaxed">
                   No units identified for command tracking. De-orbit into the main inventory for reconnaissance.
                </p>
              </div>

              <div className="flex gap-4">
                 <Button 
                    onClick={() => navigate('/listing')}
                    className="px-12 py-5 rounded-full shadow-[0_10px_30px_rgba(156,255,147,0.3)] text-xs font-black tracking-widest"
                 >
                    SCAN_MAIN_INVENTORY
                 </Button>
                 <Button 
                    onClick={() => navigate('/')}
                    variant="ghost" 
                    className="px-12 py-5 rounded-full border-outline-variant/30 hover:border-primary text-xs font-black tracking-widest"
                 >
                    RTB (HOME)
                 </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Reach-out Section */}
        <motion.section 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 p-16 bg-surface-container-high/40 rounded-[3rem] border border-outline-variant/10 relative overflow-hidden backdrop-blur-xl group hover:border-primary/20 transition-all flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="relative z-10 space-y-4 text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start gap-4">
                <Sparkles className="text-primary w-5 h-5 animate-pulse" />
                <span className="text-[0.7rem] font-black text-primary tracking-[0.4em] uppercase italic">ENHANCED_INTELLIGENCE</span>
             </div>
             <h4 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">WANT_MORE_<span className="text-secondary">TELEMETRY</span>?</h4>
             <p className="text-on-surface-variant max-w-md text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">
                Connect your uplink to our neural network for real-time inventory updates and peak performance dossiers on new units.
             </p>
          </div>
          
          <Button 
             onClick={() => navigate('/listing')}
             className="relative z-10 bg-white text-black hover:bg-primary hover:text-on-primary transition-all px-14 py-6 rounded-full text-xs font-black tracking-[0.3em] uppercase group/cta shadow-2xl"
          >
             SYNCHRONIZE_GRID <Sparkles className="inline-block ml-3 w-4 h-4 group-hover/cta:rotate-45 transition-transform" />
          </Button>

          {/* Background Branding Overlay */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] rotate-12 group-hover:rotate-[20deg] transition-transform duration-1000">
             <LayoutGrid size={400} className="text-primary" />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Wishlist;
