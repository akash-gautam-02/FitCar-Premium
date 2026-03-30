import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  History,
  Shield,
  ChevronRight,
  MapPin,
  Zap,
  Gauge,
  Heart,
  Activity,
  Award,
  Calendar,
  Edit3,
  TrendingUp,
  Bell,
} from "lucide-react";
import Button from "../components/ui/Button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 pb-32">
      <main className="pt-32 px-6 max-w-7xl mx-auto space-y-12">
        {/* Profile Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass-card p-10 rounded-[3rem] relative group overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start"
          >
            {/* Animated Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700"></div>

            <div className="relative">
              <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden border border-white/10 p-1 bg-white/5 shadow-luxury-box group/avatar relative">
                <img
                  className="w-full h-full object-cover rounded-[2.2rem] grayscale group-hover/avatar:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                  alt="Julian Thorne"
                />
                <button className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity rounded-[2.2rem]">
                  <Edit3 size={24} className="text-primary" />
                </button>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-luxury-neon border border-black/10">
                <Award size={20} className="text-black" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="display-md normal-case leading-tight text-on-surface">
                  Julian Thorne
                </h1>
                <div className="inline-flex px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-[10px] font-black tracking-[0.2rem] uppercase text-primary">
                    Apex Tier
                  </span>
                </div>
              </div>

              <p className="body-lg text-on-surface/60 max-w-lg mb-8">
                High-performance enthusiast. Monitoring telemetry for the{" "}
                <span className="text-on-surface">Spectre GT</span> and{" "}
                <span className="text-on-surface">Nebula EV</span> fleet.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1 ring-1 ring-white/5">
                  <span className="label-md opacity-40">Total Distance</span>
                  <span className="text-2xl font-bold tracking-tight text-on-surface">
                    12,482{" "}
                    <span className="text-sm font-medium opacity-40">km</span>
                  </span>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1 ring-1 ring-white/5">
                  <span className="label-md opacity-40">Fleet Hubs</span>
                  <span className="text-2xl font-bold tracking-tight text-on-surface">
                    042{" "}
                    <span className="text-sm font-medium opacity-40">
                      Units
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notifications / Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 rounded-[3rem] flex flex-col justify-between group"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="headline-md normal-case text-on-surface">
                  Quick Access
                </h3>
                <Bell
                  size={20}
                  className="text-on-surface/40 group-hover:text-primary transition-colors cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Settings,
                    label: "Fleet Systems",
                    color: "text-secondary",
                  },
                  {
                    icon: Shield,
                    label: "Security Protocols",
                    color: "text-primary",
                  },
                  {
                    icon: History,
                    label: "Ledger Audit",
                    color: "text-on-surface",
                  },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex justify-between items-center group/btn p-5 rounded-2xl bg-white/0 hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-5">
                      <item.icon
                        className="text-on-surface/40 group-hover/btn:text-primary transition-colors duration-300"
                        size={20}
                      />
                      <span className="body-md font-bold text-on-surface/60 group-hover/btn:text-on-surface">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight
                      className="text-on-surface/20 group-hover/btn:translate-x-1 group-hover/btn:text-primary transition-all underline decoration-1 underline-offset-4"
                      size={18}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="w-full h-14 rounded-2xl border-white/10 hover:border-primary/40 text-on-surface"
              >
                View All Protocols
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Active Delivery Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative group overflow-hidden rounded-[3rem] h-[450px] flex flex-col"
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                src="/assets/images/cars/porsche-911-gt3-rs.png"
                alt="Active Machine"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 mt-auto p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="label-md text-primary">
                  In Transit • Protocol 042
                </span>
              </div>
              <h2 className="display-md mb-2 italic text-white uppercase leading-none">
                Spectre <span className="text-primary not-italic">GT-X</span>
              </h2>
              <p className="body-lg text-white/50 mb-10 normal-case">
                En route to Sector Hub C • Projected ETA 14:45
              </p>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="rounded-2xl px-10 flex items-center gap-3"
                >
                  <MapPin size={18} />
                  Live Track
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-10 bg-black/20 backdrop-blur-md border-white/10 text-white"
                >
                  Telemetry
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass-card p-10 rounded-[3rem] flex flex-col justify-between h-[450px] overflow-hidden group"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="headline-md text-on-surface">Telemetry</h3>
                <p className="label-md text-primary">Live Sync Active</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <TrendingUp size={24} />
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="label-md opacity-40">Energy Reserve</span>
                  <span className="text-xl font-bold font-mono text-secondary">
                    88%
                  </span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary shadow-[0_0_15px_rgba(0,227,253,0.5)]"
                  ></motion.div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="label-md opacity-40">System Integrity</span>
                  <span className="text-xl font-bold font-mono text-primary">
                    94%
                  </span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-primary shadow-[0_0_15px_rgba(156,255,147,0.5)]"
                  ></motion.div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-on-surface">
                    2.1
                  </span>
                  <span className="text-xl font-bold text-on-surface/40 uppercase">
                    s
                  </span>
                </div>
                <span className="label-md opacity-40 block">
                  Avg. 0-60 Velocity Delta
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Recent Dynamics List */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12">
          <div className="lg:col-span-1 space-y-6 lg:border-r lg:border-white/5 lg:pr-12">
            <h2 className="display-md leading-none text-on-surface mb-6">
              Recent <br />
              <span className="text-primary">Dynamics</span>
            </h2>
            <p className="body-lg text-on-surface/40 normal-case mb-8">
              Continuous audit log of vehicle-to-cloud interactions and
              performance analytics.
            </p>
            <div className="relative p-6 glass-card rounded-[2rem] border-primary/20 bg-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold text-on-surface">Secure Protocol</h4>
              </div>
              <p className="body-md text-on-surface/60">
                Quantum encryption verified on all current nodes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              {
                date: "12 OCT",
                icon: Zap,
                color: "text-secondary",
                bg: "bg-secondary/10",
                title: "Supercharge Sync",
                desc: "North Sector V3 • 45kWh delta",
                value: "+$12.40",
              },
              {
                date: "11 OCT",
                icon: Award,
                color: "text-primary",
                bg: "bg-primary/10",
                title: "Performance Credential",
                desc: "Top Velocity Achievement: 'Mach Whisper'",
                status: "VALIDATED",
              },
              {
                date: "08 OCT",
                icon: Calendar,
                color: "text-on-surface",
                bg: "bg-white/5",
                title: "Maintenance Protocol",
                desc: "Annual Calibration • Oct 24",
                status: "PENDING",
              },
            ].map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-3xl group cursor-pointer border border-transparent hover:border-white/5 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-20 flex flex-col">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-on-surface/30">
                    {log.date}
                  </span>
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${log.bg} ${log.color} border border-transparent group-hover:border-white/10 transition-all`}
                >
                  <log.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="headline-md normal-case text-on-surface group-hover:text-primary transition-colors">
                    {log.title}
                  </h4>
                  <p className="body-md text-on-surface/40 group-hover:text-on-surface/60">
                    {log.desc}
                  </p>
                </div>
                <div className="text-right">
                  {log.value ? (
                    <span className="font-mono font-bold text-secondary">
                      {log.value}
                    </span>
                  ) : (
                    <span className="label-md opacity-30 group-hover:opacity-60">
                      {log.status}
                    </span>
                  )}
                </div>
                <ChevronRight
                  size={18}
                  className="text-on-surface/10 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all ml-4"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
