import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  User, Shield, Bell, CreditCard, Settings, Camera, 
  Mail, Phone, Lock, Save, LogOut, ChevronRight, Gauge
} from 'lucide-react';

const profileSchema = z.object({
  callsign: z.string().min(3, 'Callsign must be at least 3 characters'),
  email: z.string().email('Invalid operational channel (email)'),
  phone: z.string().min(10, 'Invalid signal tel (phone)'),
  manifesto: z.string().max(500, 'Manifesto too long'),
});

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      callsign: 'OPERATOR_01',
      email: 'op01@kinetic.io',
      phone: '+1 (555) 902-1042',
      manifesto: 'Standard tactical racing specialist. 7 years experience in high-G environments. Core level 7 operational clearance.',
    }
  });

  const onSubmit = (data) => {
    console.log('Operational update synchronized:', data);
    // Add toast notification logic here
  };

  const tabs = [
    { id: 'profile', label: 'PILOT PROFILE', icon: User },
    { id: 'garage', label: 'GARAGE', icon: Settings },
    { id: 'security', label: 'SECURITY PROTOCOLS', icon: Shield },
    { id: 'notifications', label: 'TELEMETRY ALERTS', icon: Bell },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body selection:bg-primary selection:text-on-primary pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/10 pb-8 mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-4 uppercase">
              PROFILE_<span className="text-primary">SETTINGS</span>
            </h2>
            <p className="text-on-surface-variant font-bold text-sm tracking-widest uppercase">
              Management Hub v4.0.2 / Operational Control
            </p>
          </motion.div>
          <motion.button 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit(onSubmit)}
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-black text-xs tracking-widest shadow-[0_10px_30px_rgba(156,255,147,0.3)]"
          >
            SAVE CHANGES
          </motion.button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side Nav */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant/10">
                <div className="w-12 h-12 rounded-full border-2 border-primary p-1">
                  <User className="w-full h-full text-primary" />
                </div>
                <div>
                  <div className="text-primary font-black italic tracking-tighter uppercase">OPERATOR_01</div>
                  <div className="text-on-surface-variant text-[10px] tracking-widest font-bold">CORE_LEVEL_7</div>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-4 px-6 py-3 rounded-full text-xs font-black tracking-widest transition-all ${
                        activeTab === tab.id 
                        ? 'bg-primary text-on-primary' 
                        : 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
                <button className="flex items-center gap-4 px-6 py-3 rounded-full text-xs font-black tracking-widest text-error hover:bg-error/10 transition-all mt-4 border border-error/20">
                  <LogOut className="w-4 h-4" />
                  TERMINATE SESSION
                </button>
              </nav>
            </div>
            
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 hidden lg:block">
              <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-4">SYSTEM_UPTIME</p>
              <div className="flex items-center gap-4">
                <Gauge className="text-secondary w-8 h-8" />
                <div>
                  <div className="text-2xl font-black italic text-on-surface tracking-tighter">99.98%</div>
                  <div className="text-[10px] font-bold text-secondary tracking-widest uppercase">STABLE</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-container/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-outline-variant/10"
            >
              {activeTab === 'profile' && (
                <div className="space-y-12">
                  <div className="flex items-center gap-4 border-b border-outline-variant/10 pb-6">
                    <User className="text-secondary w-6 h-6" />
                    <h3 className="text-xl font-black tracking-widest italic uppercase font-headline">PILOT_PROFILE</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center gap-6">
                      <div className="relative group">
                        <div className="w-48 h-48 rounded-full border-4 border-primary p-2 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(156,255,147,0.5)]">
                          <img 
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all" 
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2000&auto=format&fit=crop" 
                            alt="Avatar" 
                          />
                        </div>
                        <button className="absolute bottom-2 right-2 bg-secondary text-on-secondary rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
                          <Camera className="w-5 h-5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-on-surface-variant font-bold tracking-[0.2em] uppercase">IDENTIFICATION_REWRITE</span>
                    </div>

                    <div className="md:col-span-2 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase px-2">CALLSIGN</label>
                          <input 
                            {...register('callsign')}
                            className="w-full bg-surface-container-highest/60 border-none rounded-xl p-4 text-on-surface font-black text-sm tracking-tight focus:ring-2 focus:ring-secondary transition-all" 
                            type="text" 
                          />
                          {errors.callsign && <p className="text-error text-[10px] mt-1 font-bold uppercase tracking-widest">{errors.callsign.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase px-2">COMMS_CHANNEL</label>
                          <input 
                            {...register('email')}
                            className="w-full bg-surface-container-highest/60 border-none rounded-xl p-4 text-on-surface font-black text-sm tracking-tight focus:ring-2 focus:ring-secondary transition-all" 
                            type="email" 
                          />
                          {errors.email && <p className="text-error text-[10px] mt-1 font-bold uppercase tracking-widest">{errors.email.message}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase px-2">SIGNAL_TEL</label>
                        <input 
                          {...register('phone')}
                          className="w-full bg-surface-container-highest/60 border-none rounded-xl p-4 text-on-surface font-black text-sm tracking-tight focus:ring-2 focus:ring-secondary transition-all" 
                          type="tel" 
                        />
                        {errors.phone && <p className="text-error text-[10px] mt-1 font-bold uppercase tracking-widest">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-secondary tracking-[0.2em] uppercase px-2">PILOT_MANIFESTO</label>
                        <textarea 
                          {...register('manifesto')}
                          className="w-full bg-surface-container-highest/60 border-none rounded-xl p-4 text-on-surface text-sm leading-relaxed focus:ring-2 focus:ring-secondary transition-all resize-none font-light" 
                          rows="4"
                        />
                        {errors.manifesto && <p className="text-error text-[10px] mt-1 font-bold uppercase tracking-widest">{errors.manifesto.message}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-12">
                   <div className="flex items-center gap-4 border-b border-outline-variant/10 pb-6">
                    <Shield className="text-secondary w-6 h-6" />
                    <h3 className="text-xl font-black tracking-widest italic uppercase font-headline">SECURITY_PROTOCOLS</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                      <div>
                        <h4 className="text-sm font-black tracking-widest uppercase mb-1">BIOMETRIC_AUTH</h4>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">ENABLE FINGERPRINT/FACE SCAN FOR HUB ACCESS</p>
                      </div>
                      <div className="w-14 h-7 bg-primary text-on-primary p-1 rounded-full flex items-center justify-end cursor-pointer">
                        <div className="w-5 h-5 bg-on-primary rounded-full"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                      <div>
                        <h4 className="text-sm font-black tracking-widest uppercase mb-1">2FA_ENCRYPTION</h4>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">MULTI-FACTOR AUTHORIZATION VIA SECURE UPLINK</p>
                      </div>
                      <div className="w-14 h-7 bg-surface-container-highest p-1 rounded-full flex items-center justify-start cursor-pointer">
                        <div className="w-5 h-5 bg-on-surface-variant rounded-full"></div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-transparent border border-outline-variant/30 text-xs font-black tracking-[0.3em] rounded-xl hover:border-primary hover:text-primary transition-all uppercase">
                      UPDATE_ACCESS_KEY
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
