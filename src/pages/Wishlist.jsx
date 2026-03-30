import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Heart,
  Trash2,
  ArrowRight,
  Zap,
  Gauge,
  BarChart3,
  LayoutGrid,
  Sparkles,
  AlertTriangle,
  History,
  Bookmark,
} from "lucide-react";
import useStore from "../store/useStore";
import carsData from "../data/cars.json";
import Button from "../components/ui/Button";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, addToCompare } = useStore();

  const wishlistedCars = carsData.filter((car) => wishlist.includes(car.id));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-luxury-box">
                <Bookmark size={24} fill="currentColor" />
              </div>
              <span className="label-md text-primary opacity-60">
                Private Hangar
              </span>
            </div>
            <h1 className="display-lg normal-case leading-none mb-6 text-on-surface">
              Curated <span className="text-secondary italic">Collection</span>
            </h1>
            <p className="body-lg text-on-surface/40 max-w-xl">
              Your personal grid of peak engineering. Monitoring{" "}
              <span className="text-on-surface font-bold">
                {wishlistedCars.length}
              </span>{" "}
              active units in your local synchronization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4"
          >
            {wishlistedCars.length > 0 && (
              <Button
                variant="outline"
                onClick={() => wishlist.forEach((id) => toggleWishlist(id))}
                className="px-8 h-14 rounded-2xl border-white/10 text-on-surface/60 hover:text-error hover:border-error/30"
              >
                Clear Hangar
              </Button>
            )}
            <Link to="/listing">
              <Button
                size="lg"
                className="px-10 h-14 rounded-2xl flex items-center gap-2 group"
              >
                <Sparkles
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
                Initialize Scan
              </Button>
            </Link>
          </motion.div>
        </header>

        {/* Wishlist Grid */}
        <AnimatePresence mode="wait">
          {wishlistedCars.length > 0 ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {wishlistedCars.map((car) => (
                <motion.div
                  key={car.id}
                  variants={cardVariants}
                  className="group glass-card rounded-[3rem] overflow-hidden transition-all duration-500 hover:shadow-primary/5 hover:border-primary/20"
                >
                  {/* Media Section */}
                  <div className="relative h-64 overflow-hidden bg-white/5 flex items-center justify-center p-8 group">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 drop-shadow-luxury"
                    />

                    {/* Action Overlay */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleWishlist(car.id)}
                        className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface-variant hover:bg-error hover:text-white transition-all shadow-xl"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          addToCompare(car);
                          navigate("/compare");
                        }}
                        className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-black transition-all shadow-xl"
                      >
                        <BarChart3 size={18} />
                      </motion.button>
                    </div>

                    <div className="absolute bottom-6 left-8">
                      <span className="label-md bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5 opacity-40">
                        Unit_{car.id.slice(-4)}
                      </span>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-10 space-y-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="headline-md normal-case text-on-surface mb-1 group-hover:text-primary transition-colors">
                          {car.name}
                        </h3>
                        <p className="body-md opacity-40">
                          {car.brand} • {car.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="display-md text-2xl font-bold tracking-tight text-primary">
                          ${car.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:border-primary/10 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 opacity-30">
                          <Zap size={14} className="text-secondary" />
                          <span className="label-md text-[8px]">
                            Propulsion
                          </span>
                        </div>
                        <span className="body-md font-bold text-on-surface truncate block">
                          {car.engine}
                        </span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:border-secondary/10 transition-colors">
                        <div className="flex items-center gap-2 mb-1.5 opacity-30">
                          <Gauge size={14} className="text-secondary" />
                          <span className="label-md text-[8px]">Accel</span>
                        </div>
                        <span className="body-md font-bold text-on-surface">
                          {car.acceleration}
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={() => navigate(`/cars/${car.id}`)}
                      variant="outline"
                      className="w-full h-14 rounded-2xl border-white/10 hover:border-primary/40 group/btn"
                    >
                      Retrieve Data{" "}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-48 glass-card rounded-[4rem] flex flex-col items-center justify-center space-y-10"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-[2.5rem] bg-white/5 border border-white/5 flex items-center justify-center text-on-surface/10">
                  <Bookmark size={80} />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-secondary shadow-luxury-neon flex items-center justify-center text-black">
                  <AlertTriangle size={24} />
                </div>
              </div>

              <div className="space-y-4 text-center max-w-sm">
                <h3 className="display-md normal-case text-on-surface italic">
                  Grid Empty
                </h3>
                <p className="body-lg text-on-surface/40 leading-relaxed">
                  No units identified for command tracking. De-orbit into the
                  main inventory for reconnaissance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/listing")}
                  size="lg"
                  className="px-12 h-16 rounded-2xl"
                >
                  Scan Inventory
                </Button>
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="px-12 h-16 rounded-2xl border-white/10 text-on-surface/60"
                >
                  Return Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        {wishlistedCars.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-16 glass-card rounded-[4rem] relative overflow-hidden group hover:border-primary/20 transition-all flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-all duration-700"></div>

            <div className="relative z-10 space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Sparkles className="text-primary w-5 h-5 animate-pulse" />
                <span className="label-md text-primary opacity-60">
                  Enhanced Intelligence
                </span>
              </div>
              <h4 className="display-md normal-case italic text-on-surface">
                Want more{" "}
                <span className="text-secondary not-italic">Telemetry?</span>
              </h4>
              <p className="body-lg text-on-surface/40 max-w-md">
                Connect your uplink to our neural network for real-time
                inventory updates and peak performance dossiers.
              </p>
            </div>

            <Button
              onClick={() => navigate("/listing")}
              size="lg"
              className="relative z-10 px-14 h-16 rounded-2xl shadow-luxury-neon group/cta"
            >
              Synchronize Grid{" "}
              <Sparkles className="ml-3 w-4 h-4 group-hover/cta:rotate-45 transition-transform" />
            </Button>

            <div className="absolute -right-20 -bottom-20 opacity-[0.02] rotate-12 group-hover:rotate-[20deg] transition-transform duration-1000 hidden lg:block">
              <LayoutGrid size={500} className="text-primary" />
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
