import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Box,
  Truck,
  ShieldCheck,
  MapPin,
  Key,
  Activity,
  Sparkles,
  LayoutGrid,
  ArrowRight,
  Download,
  Share2,
  Calculator,
  Info,
  ChevronRight,
} from "lucide-react";
import Button from "../components/ui/Button";

const Counter = ({ value, duration = 2, decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={nodeRef}>{count.toFixed(decimals)}</span>;
};

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const orderId = "KD-8829-XL0-91";
  const estDelivery = "NOV 24, 2024";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center mb-24 relative"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[600px] opacity-[0.05] pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-primary via-transparent to-transparent blur-[140px] rounded-full"></div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mb-10 inline-flex items-center justify-center p-6 rounded-[2rem] bg-primary/10 border border-primary/20 shadow-luxury-box group"
          >
            <CheckCircle2
              size={64}
              className="text-primary group-hover:scale-110 transition-transform duration-500"
              strokeWidth={1.5}
            />
          </motion.div>

          <div className="space-y-4 mb-20">
            <motion.span
              variants={itemVariants}
              className="label-md text-primary opacity-60 tracking-[0.4em] uppercase font-black"
            >
              Uplink Synchronized
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="display-lg normal-case italic leading-none text-on-surface"
            >
              Mission{" "}
              <span className="text-secondary not-italic">Acquired</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="body-lg text-on-surface/40 max-w-xl mx-auto"
            >
              Engineering dossier finalized. Batch 01 // Unit_4492-X has been
              allocated to your hangar with priority clearance.
            </motion.p>
          </div>

          {/* Main Visual */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden glass-card group border border-white/5 shadow-2xl"
          >
            <img
              src="/assets/images/cars/ferrari-sf90.png"
              alt="Unit Allocation Preview"
              className="w-full h-full object-contain p-20 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 drop-shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-12 text-left space-y-2">
              <span className="display-sm font-black text-primary leading-none italic uppercase">
                Confirmed_Unit
              </span>
              <div className="flex items-center gap-3">
                <span className="label-sm bg-white/10 px-4 py-1.5 rounded-xl border border-white/10 uppercase tracking-widest opacity-60">
                  Serial: {orderId}
                </span>
                <span className="label-sm bg-secondary/10 text-secondary px-4 py-1.5 rounded-xl border border-secondary/20 uppercase tracking-widest">
                  S-Tier Slot
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Status Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24"
        >
          {/* Primary Status Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 glass-card p-12 rounded-[3.5rem] flex flex-col justify-between group hover:border-primary/20 transition-all border border-white/5"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <Box size={16} />
                  <h3 className="label-md uppercase tracking-widest font-black">
                    Tracking Number
                  </h3>
                </div>
                <p className="headline-md normal-case text-on-surface font-black tracking-tight">
                  {orderId}
                </p>
              </div>
              <div className="space-y-4 md:text-right">
                <div className="flex items-center md:justify-end gap-2 text-secondary opacity-60">
                  <Truck size={16} />
                  <h3 className="label-md uppercase tracking-widest font-black">
                    Est. Delivery
                  </h3>
                </div>
                <p className="headline-md normal-case italic text-on-surface">
                  {estDelivery}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "33%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-container shadow-luxury-neon"
                ></motion.div>
              </div>
              <div className="flex justify-between">
                {[
                  { label: "Uplink", status: "completed" },
                  { label: "Matrix", status: "active" },
                  { label: "Terminal", status: "pending" },
                  { label: "Arrival", status: "pending" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${step.status === "completed" ? "bg-primary" : step.status === "active" ? "bg-secondary animate-pulse shadow-[0_0_15px_rgba(var(--color-secondary),0.5)]" : "bg-white/10"}`}
                    ></div>
                    <span
                      className={`label-sm uppercase tracking-widest ${step.status === "pending" ? "opacity-20" : "opacity-100"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Data Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 glass-card p-10 rounded-[3.5rem] border border-white/5 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3 opacity-40">
                <Activity size={18} />
                <h3 className="label-md uppercase tracking-widest font-black">
                  Unit Telemetry
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="body-md text-on-surface/40 italic">
                    Peak Output
                  </span>
                  <span className="label-md font-black text-secondary">
                    <Counter value={1020} /> HP
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="body-md text-on-surface/40 italic">
                    0-60 MPH
                  </span>
                  <span className="label-md font-black text-secondary">
                    <Counter value={1.99} decimals={2} />s
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="body-md text-on-surface/40 italic">
                    Propulsion
                  </span>
                  <span className="label-md font-black text-on-surface uppercase">
                    Tri-Motor AWD
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="body-md text-on-surface/40 italic">
                    Colorway
                  </span>
                  <span className="label-md font-black text-on-surface uppercase">
                    Obsidian Chrome
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 blur-[80px] rounded-full"></div>
          </motion.div>
        </motion.section>

        {/* Pre-Activation Features */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full space-y-12 mb-24"
        >
          <div className="flex items-center justify-between">
            <h3 className="headline-md normal-case italic text-on-surface">
              Neural{" "}
              <span className="text-secondary not-italic">Integrations</span>
            </h3>
            <span className="label-sm bg-white/5 px-4 py-2 rounded-xl text-primary opacity-60 italic">
              Pre-Deployment Phase
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Digital Key Cryptography",
                desc: "Initialize biometric decryption on your secondary device for secure hangar access.",
                icon: Key,
                color: "primary",
              },
              {
                title: "Telematic Insurance Sync",
                desc: "Connect your policy matrix for dynamic premium adjustments based on performance data.",
                icon: ShieldCheck,
                color: "secondary",
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-[3rem] border border-white/5 group cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <div
                    className={`w-16 h-16 rounded-[1.5rem] bg-${feat.color}/10 border border-${feat.color}/20 flex items-center justify-center text-${feat.color}`}
                  >
                    <feat.icon size={28} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="label-md font-black text-on-surface uppercase tracking-tight">
                      {feat.title}
                    </h4>
                    <p className="body-md text-on-surface/40 max-w-[280px] leading-snug">
                      {feat.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="text-on-surface/20 group-hover:text-primary group-hover:translate-x-2 transition-all"
                  size={24}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Actions */}
        <motion.footer
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <Button
            size="lg"
            className="px-16 h-20 rounded-2xl shadow-luxury-neon flex items-center gap-3 group"
            onClick={() => navigate("/dashboard")}
          >
            Manage Hangar{" "}
            <Activity
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
          </Button>
          <Button
            variant="outline"
            className="px-12 h-20 rounded-2xl border-white/10 text-on-surface/60 flex items-center gap-3 group"
          >
            Share Dossier{" "}
            <Share2
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
          </Button>
        </motion.footer>
      </div>
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
