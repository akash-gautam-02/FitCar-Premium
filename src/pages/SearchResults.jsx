import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowLeft,
  Filter,
  SlidersHorizontal,
  AlertCircle,
  Sparkles,
  Terminal,
  Activity,
  Zap,
  Home,
} from "lucide-react";
import CarCard from "../components/ui/CarCard";
import Button from "../components/ui/Button";
import carsData from "../data/cars.json";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredCars = carsData.filter(
    (car) =>
      car.name.toLowerCase().includes(query.toLowerCase()) ||
      car.brand.toLowerCase().includes(query.toLowerCase()) ||
      car.category.toLowerCase().includes(query.toLowerCase()),
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-primary/30 font-body pt-32 pb-32 px-6">
      <div className="max-w-[1920px] mx-auto">
        {/* Navigation & Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <Link
              to="/listing"
              className="group inline-flex items-center gap-4 label-sm font-black tracking-[0.4em] text-on-surface/40 hover:text-primary transition-all uppercase italic"
            >
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all border border-white/5">
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </div>
              System Inventory
            </Link>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="display-lg normal-case italic text-on-surface leading-none tracking-[-0.04em]"
              >
                Search{" "}
                <span className="text-secondary not-italic">Analytics</span>
              </motion.h1>
              <div className="flex flex-wrap items-center gap-4">
                <div className="glass-card px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:border-primary/40 transition-all">
                  <Search className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="headline-xs normal-case italic text-on-surface">
                    "{query.toUpperCase()}"
                  </span>
                </div>
                <div className="glass-card px-8 py-4 rounded-2xl border border-white/10 flex items-center gap-4">
                  <Activity className="text-secondary w-5 h-5 animate-pulse" />
                  <span className="label-md text-on-surface font-black tracking-widest uppercase">
                    {filteredCars.length} MATCHES DETECTED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-6 p-8 glass-card rounded-[2.5rem] border border-white/5 max-w-sm">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
              <Terminal size={24} />
            </div>
            <div className="space-y-1">
              <p className="label-sm text-on-surface font-black uppercase tracking-widest">
                Neural Link Active
              </p>
              <p className="text-[10px] text-on-surface/20 uppercase tracking-[0.2em] font-bold">
                Scanning Global Grid database...
              </p>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {filteredCars.length > 0 ? (
              <motion.section
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12"
              >
                {filteredCars.map((car) => (
                  <motion.div key={car.id} variants={itemVariants}>
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </motion.section>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-40 glass-card rounded-[4rem] border-dashed border-white/10 flex flex-col items-center justify-center text-center space-y-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,252,64,0.02)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="relative">
                  <div className="absolute -inset-10 bg-secondary/10 blur-[60px] rounded-full"></div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 rounded-[3.5rem] glass-card flex items-center justify-center text-secondary border border-secondary/20 relative z-10"
                  >
                    <Zap size={48} className="fill-secondary/10" />
                  </motion.div>
                </div>

                <div className="space-y-4 relative z-10">
                  <h2 className="display-sm normal-case italic text-on-surface">
                    Zero{" "}
                    <span className="text-secondary not-italic">Matches</span>
                  </h2>
                  <p className="label-md text-on-surface/30 font-black uppercase tracking-[0.3em] max-w-md mx-auto leading-relaxed">
                    No telemetry signals identified for query:{" "}
                    <span className="text-secondary italic">"{query}"</span>.
                    Recalibrate your search parameters or explore the full fleet
                    inventory.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                  <Link to="/listing">
                    <Button
                      size="lg"
                      className="px-12 h-18 rounded-3xl shadow-luxury-neon flex items-center gap-4"
                    >
                      Explore Elite Fleet <Sparkles size={18} />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="px-12 h-18 rounded-3xl border-white/5 hover:border-white/20 glass-card flex items-center gap-4"
                    >
                      Return to Control Hub <Home size={18} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Suggested Analytics (When results are low) */}
        {filteredCars.length < 3 && filteredCars.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 pt-24 border-t border-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <span className="label-sm text-primary uppercase tracking-[0.5em] font-black italic opacity-60">
                  Strategic Recommendations
                </span>
                <h3 className="display-xs normal-case italic text-on-surface leading-none">
                  Alternative{" "}
                  <span className="text-secondary not-italic">Protocols</span>
                </h3>
              </div>
              <Link
                to="/listing"
                className="label-sm font-black uppercase tracking-[0.3em] text-on-surface/40 hover:text-primary transition-all flex items-center gap-3"
              >
                View Full Grid <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12">
              {carsData.slice(0, 4).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Ambient Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] -z-10">
        <div className="h-full w-[1px] bg-primary absolute left-1/3"></div>
        <div className="h-full w-[1px] bg-primary absolute left-2/3"></div>
      </div>
    </div>
  );
};

// Helper for Chevron icon if not imported correctly
const ChevronRight = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default SearchResults;
