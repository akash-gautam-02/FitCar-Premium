import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Settings,
  Camera,
  Mail,
  Phone,
  Lock,
  Save,
  LogOut,
  ChevronRight,
  Gauge,
  Activity,
  Cpu,
  Fingerprint,
  Database,
} from "lucide-react";
import Button from "../components/ui/Button";

const profileSchema = z.object({
  callsign: z.string().min(3, "Callsign must be at least 3 characters"),
  email: z.string().email("Invalid operational channel (email)"),
  phone: z.string().min(10, "Invalid signal tel (phone)"),
  manifesto: z.string().max(500, "Manifesto too long"),
});

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      callsign: "Julian Thorne",
      email: "j.thorne@kinetic.io",
      phone: "+1 (555) 902-1042",
      manifesto:
        "High-performance enthusiast. Tracking telemetry for the Spectre GT and Nebula EV fleet. Focused on precision engineering and efficiency.",
    },
  });

  const onSubmit = (data) => {
    console.log("Operational update synchronized:", data);
    // Add toast notification logic here
  };

  const tabs = [
    { id: "profile", label: "Pilot Profile", icon: User },
    { id: "garage", label: "Fleet Garage", icon: Activity },
    { id: "security", label: "Security Protocols", icon: Shield },
    { id: "notifications", label: "Telemetry Alerts", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="display-md normal-case leading-none mb-4 text-on-surface">
              Profile <span className="text-primary italic">Control</span>
            </h1>
            <p className="body-lg text-on-surface/40 max-w-sm">
              Management Hub v4.0.2 • Authorized Access Only
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button
              onClick={handleSubmit(onSubmit)}
              size="lg"
              className="px-12 h-16 rounded-2xl flex items-center gap-3"
            >
              <Save size={20} />
              Synchronize Data
            </Button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="glass-card p-6 rounded-[2.5rem] overflow-hidden group relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>

              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5 relative z-10">
                <div className="w-14 h-14 rounded-2xl border border-primary/20 p-1 bg-primary/5">
                  <img
                    className="w-full h-full object-cover rounded-xl grayscale"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                    alt="Julian Thorne"
                  />
                </div>
                <div>
                  <div className="headline-md normal-case text-on-surface text-base">
                    JUL_THORNE
                  </div>
                  <div className="label-md text-primary opacity-60">
                    Apex Tier
                  </div>
                </div>
              </div>

              <nav className="flex flex-col gap-2 relative z-10">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group/nav ${
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-on-surface/40 hover:bg-white/5 hover:text-on-surface"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="body-md font-bold">{tab.label}</span>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="w-1 h-1 rounded-full bg-primary"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              <button className="flex items-center gap-4 px-6 py-5 rounded-2xl text-on-error/80 hover:bg-error/10 hover:text-error transition-all mt-6 border border-white/5 hover:border-error/20 w-full">
                <LogOut size={18} />
                <span className="body-md font-bold uppercase tracking-widest text-[10px]">
                  Terminate Session
                </span>
              </button>
            </div>

            <div className="glass-card p-6 rounded-[2rem] flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <div>
                <p className="label-md opacity-40">System Node</p>
                <div className="headline-md normal-case text-on-surface text-lg">
                  Stable v2.4
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-[3rem] p-8 md:p-12 min-h-[600px] relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full"></div>

                {activeTab === "profile" && (
                  <div className="relative z-10 space-y-12">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-8">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <User size={24} />
                      </div>
                      <div>
                        <h3 className="headline-md normal-case text-on-surface">
                          Pilot Profile
                        </h3>
                        <p className="body-md opacity-40">
                          Your operational identifiers and mission settings.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                      <div className="xl:col-span-4 flex flex-col items-center gap-6">
                        <div className="relative group">
                          <div className="w-56 h-56 rounded-[3rem] border border-white/10 p-2 bg-white/5 relative overflow-hidden shadow-luxury-box group-hover:shadow-primary/10 transition-all duration-700">
                            <img
                              className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
                              alt="Avatar"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Camera className="text-white w-10 h-10" />
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -bottom-3 -right-3 w-14 h-14 bg-primary text-black rounded-2xl shadow-luxury-neon flex items-center justify-center border-4 border-surface"
                          >
                            <Camera size={24} />
                          </motion.button>
                        </div>
                        <span className="label-md opacity-30 mt-4 tracking-[0.3em]">
                          REWRITE_BIOMETRICS
                        </span>
                      </div>

                      <div className="xl:col-span-8 space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="body-md font-bold text-on-surface/40 ml-2">
                              Operational Callsign
                            </label>
                            <div className="relative group/input">
                              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface/20 group-focus-within/input:text-primary transition-colors" />
                              <input
                                {...register("callsign")}
                                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-2xl py-4 pl-14 pr-6 text-on-surface body-md outline-none transition-all"
                                type="text"
                              />
                            </div>
                            {errors.callsign && (
                              <p className="text-error text-[10px] uppercase font-bold ml-2">
                                {errors.callsign.message}
                              </p>
                            )}
                          </div>

                          <div className="space-y-3">
                            <label className="body-md font-bold text-on-surface/40 ml-2">
                              Secure Channel (Email)
                            </label>
                            <div className="relative group/input">
                              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface/20 group-focus-within/input:text-primary transition-colors" />
                              <input
                                {...register("email")}
                                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-2xl py-4 pl-14 pr-6 text-on-surface body-md outline-none transition-all"
                                type="email"
                              />
                            </div>
                            {errors.email && (
                              <p className="text-error text-[10px] uppercase font-bold ml-2">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="body-md font-bold text-on-surface/40 ml-2">
                            Signal Tel
                          </label>
                          <div className="relative group/input">
                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface/20 group-focus-within/input:text-primary transition-colors" />
                            <input
                              {...register("phone")}
                              className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-2xl py-4 pl-14 pr-6 text-on-surface body-md outline-none transition-all"
                              type="tel"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-error text-[10px] uppercase font-bold ml-2">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div className="space-y-3">
                          <label className="body-md font-bold text-on-surface/40 ml-2">
                            Pilot Manifesto (Bio)
                          </label>
                          <textarea
                            {...register("manifesto")}
                            className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-3xl p-6 text-on-surface body-md leading-relaxed outline-none transition-all resize-none min-h-[150px]"
                          />
                          {errors.manifesto && (
                            <p className="text-error text-[10px] uppercase font-bold ml-2">
                              {errors.manifesto.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="relative z-10 space-y-12">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-8">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="headline-md normal-case text-on-surface">
                          Security Protocols
                        </h3>
                        <p className="body-md opacity-40">
                          Encryption nodes and biometric authentication
                          settings.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Biometric Access",
                          desc: "Enable hardware-level face/touch ID verification for hubs.",
                          icon: Fingerprint,
                          enabled: true,
                        },
                        {
                          title: "Quantum Encryption",
                          desc: "Secure telemetry uplink using post-quantum crypto standards.",
                          icon: Lock,
                          enabled: false,
                        },
                        {
                          title: "Ledger Node Audit",
                          desc: "Synchronize your local logs with the central Kinetic ledger.",
                          icon: Database,
                          enabled: true,
                        },
                      ].map((prot, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/5 group hover:border-white/10 transition-all"
                        >
                          <div className="flex items-center gap-6">
                            <div
                              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${prot.enabled ? "bg-primary/10 text-primary" : "bg-white/5 text-on-surface/20"}`}
                            >
                              <prot.icon size={26} />
                            </div>
                            <div>
                              <h4 className="headline-md normal-case text-base text-on-surface mb-1">
                                {prot.title}
                              </h4>
                              <p className="body-md text-on-surface/40 max-w-sm">
                                {prot.desc}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`w-14 h-8 rounded-full p-1.5 transition-colors duration-500 cursor-pointer ${prot.enabled ? "bg-primary" : "bg-surface-highest"}`}
                          >
                            <motion.div
                              animate={{ x: prot.enabled ? 24 : 0 }}
                              className="w-5 h-5 bg-white rounded-full shadow-lg"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 flex justify-center">
                      <Button
                        variant="outline"
                        className="h-16 px-12 rounded-2xl border-white/10 text-on-surface group"
                      >
                        <Lock
                          size={18}
                          className="mr-3 group-hover:text-primary transition-colors"
                        />
                        Rotate Access Protocols
                      </Button>
                    </div>
                  </div>
                )}

                {activeTab === "garage" && (
                  <div className="relative z-10 text-center py-24">
                    <Activity
                      size={64}
                      className="mx-auto mb-6 text-primary opacity-20"
                    />
                    <h3 className="headline-md normal-case text-on-surface mb-2">
                      Fleet Management
                    </h3>
                    <p className="body-lg opacity-40">
                      Section under active deployment cycle.
                    </p>
                    <Button variant="outline" className="mt-8">
                      Request Early Access
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
