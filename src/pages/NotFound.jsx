import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  AlertCircle,
  RefreshCcw,
  WifiOff,
  Map,
  Compass,
  Terminal,
} from "lucide-react";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-body overflow-hidden selection:bg-primary/30 relative flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,252,64,0.05),_transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-10 grayscale mix-blend-screen scale-110">
          <img
            src="https://images.unsplash.com/photo-1614850523296-e8c1d07ed7a5?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover blur-2xl"
            alt="Digital Void"
          />
        </div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6 py-24 flex flex-col items-center text-center">
        {/* Error Code Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full opacity-50 animate-pulse"></div>
          <motion.div
            animate={{
              textShadow: [
                "0 0 0px rgba(156,255,147,0)",
                "0 0 20px rgba(156,255,147,0.3)",
                "0 0 0px rgba(156,255,147,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="display-xl italic normal-case font-black leading-none text-on-surface tracking-[-0.08em] relative z-10 select-none"
          >
            404
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 -z-10 group">
            <span className="text-[15rem] font-black italic tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity">
              VOID
            </span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-10 h-[1px] bg-secondary/40"></div>
              <span className="label-sm text-secondary uppercase tracking-[0.5em] font-black">
                Transmission Interrupted
              </span>
              <div className="w-10 h-[1px] bg-secondary/40"></div>
            </div>
            <h1 className="display-sm normal-case italic text-on-surface leading-tight">
              Vector <span className="text-secondary not-italic">Mismatch</span>
            </h1>
            <p className="body-lg text-on-surface/40 max-w-xl mx-auto leading-relaxed">
              The coordinates you requested do not exist in the Kinetic
              database. The link has been severed or the destination page has
              been de-synchronized.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
            <Link to="/">
              <Button
                size="lg"
                className="px-16 h-20 rounded-[2.5rem] shadow-luxury-neon flex items-center gap-4 group/btn active:scale-95"
              >
                <Home
                  size={20}
                  className="group-hover:-translate-y-1 group-hover:text-black transition-all"
                />
                <span className="label-md font-black uppercase tracking-[0.3em]">
                  Return to Command Station
                </span>
              </Button>
            </Link>
            <Link to="/cars">
              <Button
                size="lg"
                variant="ghost"
                className="px-16 h-20 rounded-[2.5rem] border-white/5 hover:border-primary/40 glass-card flex items-center gap-4 group/btn active:scale-95"
              >
                <Search
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="label-md font-black uppercase tracking-[0.3em]">
                  Search Grid Data
                </span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl pt-20 border-t border-white/5">
            <div className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                <WifiOff size={20} />
              </div>
              <span className="label-sm uppercase tracking-widest font-black">
                Signal Lost
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                <Compass size={20} />
              </div>
              <span className="label-sm uppercase tracking-widest font-black">
                Bearing Invalid
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:text-primary transition-colors">
                <RefreshCcw size={20} />
              </div>
              <span className="label-sm uppercase tracking-widest font-black">
                Recalibrating...
              </span>
            </div>
          </div>
        </motion.div>

        {/* Global Telemetry Details */}
        <div className="absolute bottom-12 left-12 hidden lg:block text-left space-y-2">
          <div className="flex items-center gap-3 label-sm text-on-surface/20 uppercase tracking-[0.3em] font-black italic">
            <Terminal size={14} className="text-secondary" />
            Telemetry Dossier 0x404
          </div>
          <div className="h-[1px] w-48 bg-white/5"></div>
          <p className="text-[10px] text-on-surface/20 font-mono tracking-widest uppercase">
            ERR_CODE: LINK_STATION_TIMEOUT
            <br />
            TIMESTAMP: 30.MAR.26_17:06:51
            <br />
            POS_DATA: 0.000, 0.000, -1.000
          </p>
        </div>
      </main>

      {/* Decorative Blur and Textures */}
      <div className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
