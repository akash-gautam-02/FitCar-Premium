import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeft, Filter, SlidersHorizontal, AlertCircle, Sparkles } from 'lucide-react';
import CarCard from '../components/ui/CarCard';
import Button from '../components/ui/Button';
import carsData from '../data/cars.json';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const filteredCars = carsData.filter(car => 
    car.name.toLowerCase().includes(query.toLowerCase()) || 
    car.brand.toLowerCase().includes(query.toLowerCase()) ||
    car.category.toLowerCase().includes(query.toLowerCase())
  );

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen font-body pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Navigation Header */}
        <nav className="mb-12 flex items-center justify-between">
          <Link to="/listing" className="group flex items-center gap-3 text-xs font-black tracking-[0.3em] text-on-surface-variant hover:text-primary transition-all uppercase">
            <div className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to Inventory
          </Link>
          
          <div className="flex items-center gap-4 text-xs font-black tracking-[0.3em] text-on-surface-variant uppercase">
            <span className="hidden md:inline">Telemetry Active</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
        </nav>

        {/* Search Header */}
        <header className="mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[0.7rem] md:text-xs font-black text-secondary tracking-[0.4em] uppercase mb-4 italic">IDENTIFIED_ANALYTICS</h2>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-8 uppercase">
              SEARCH_<span className="text-primary">RESULTS</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-surface-container-high px-6 py-3 rounded-full border border-outline-variant/10 flex items-center gap-3 transition-all hover:border-primary/30">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold tracking-widest text-on-surface uppercase">"{query}"</span>
              </div>
              <div className="bg-surface-container-high px-6 py-3 rounded-full border border-outline-variant/10 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold tracking-widest text-on-surface uppercase">{filteredCars.length} MATCHES</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Results Area */}
          <div className={`${filteredCars.length > 0 ? 'lg:col-span-12' : 'lg:col-span-12 text-center'}`}>
            <AnimatePresence mode="wait">
              {filteredCars.length > 0 ? (
                <motion.div 
                  key="results"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {filteredCars.map((car) => (
                    <motion.div key={car.id} variants={itemVariants}>
                      <CarCard car={car} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-32 px-12 bg-surface-container-low/40 backdrop-blur-md rounded-[3rem] border border-dashed border-outline-variant/20 flex flex-col items-center justify-center space-y-8"
                >
                  <div className="w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center border border-error/20">
                    <AlertCircle className="w-12 h-12 text-error animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase">ZERO_MATCHES_IDENTIFIED</h2>
                    <p className="text-on-surface-variant font-bold text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                      Telemetry signal weak for query: <span className="text-error">"{query}"</span>. 
                      Re-calibrate your search parameters or try a broader automotive term.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/listing">
                      <Button variant="ghost" className="px-10 py-5 rounded-full border-outline-variant/30 hover:border-primary hover:text-primary">
                        BROWSE FULL INVENTORY
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button className="px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(156,255,147,0.2)]">
                        RETURN TO STATION
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Global Suggestions (When 0 or few results) */}
        {filteredCars.length < 3 && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-32 pt-20 border-t border-outline-variant/10"
          >
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary text-[0.7rem] font-black tracking-[0.4em] uppercase">Recommended Telemetry</span>
              <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none uppercase">
                PEAK_<span className="text-secondary">PERFORMANCE</span>_MACHINES
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 opacity-70 hover:opacity-100 transition-opacity">
              {carsData.slice(0, 3).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
