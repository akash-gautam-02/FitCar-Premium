import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, ArrowLeft, ShieldAlert, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import Button from '../../components/ui/Button';

const forgotPasswordSchema = z.object({
  email: z.string().email('Operational ID must be a valid email channel'),
});

const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log('Telemetry recovery signal sent for:', data.email);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden font-body">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="bg-surface-container-low/40 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-outline-variant/10 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-all duration-700">
          {/* Progress Indicator */}
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-full opacity-60"></div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <header className="space-y-4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <ShieldAlert size={24} />
                    </div>
                    <span className="text-[0.7rem] font-black tracking-[0.4em] text-on-surface-variant uppercase italic">IDENTITY_RECOVERY</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.9] text-on-surface">
                    RECOVERY_<span className="text-primary">PROTOCOL</span>
                  </h1>
                  <p className="text-on-surface-variant text-sm font-bold tracking-widest uppercase py-2 leading-relaxed max-w-sm">
                    Enter your operational ID to re-authenticate access to the terminal.
                  </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-4 relative">
                    <label className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase px-4">REGISTERED_ID</label>
                    <div className="relative group/input">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        {...register('email')}
                        type="email" 
                        placeholder="operator@kinetic.io"
                        className={`w-full bg-surface-container-highest/60 border-none rounded-2xl pl-16 pr-8 py-5 text-on-surface font-black text-sm tracking-widest focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-on-surface-variant/40 ${errors.email ? 'ring-2 ring-error/40' : ''}`}
                      />
                    </div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-error text-[10px] uppercase font-bold tracking-widest pl-4 flex items-center gap-2"
                      >
                         <AlertCircle size={12} /> {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-16 rounded-full text-sm font-black tracking-[0.3em] shadow-[0_10px_30px_rgba(156,255,147,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        CALIBRATING SIGNAL...
                      </>
                    ) : (
                      <>
                         TRANSMIT_RECOVERY_KEY
                         <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-outline-variant/10">
                  <Link to="/login" className="flex items-center gap-3 text-[10px] font-black tracking-widest text-on-surface-variant hover:text-primary transition-all uppercase">
                    <ArrowLeft size={14} /> RETURN TO COMMAND STATION
                  </Link>
                  <p className="text-[9px] font-bold text-on-surface-variant tracking-[0.2em] uppercase">SYSTEM_v4.0.2 / SECURE</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-12 py-10"
              >
                <div className="flex flex-col items-center space-y-8">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center text-primary shadow-[0_0_50px_rgba(156,255,147,0.3)]"
                  >
                    <CheckCircle2 size={64} />
                  </motion.div>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-on-surface">SIGNAL_<span className="text-primary">SENT</span></h2>
                    <p className="text-on-surface-variant text-sm font-bold tracking-widest uppercase leading-relaxed max-w-[280px] mx-auto">
                      Operational recovery key has been transmitted to your secure uplink.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link to="/login" className="block">
                    <Button variant="ghost" className="w-full py-4 rounded-full border-outline-variant/20 hover:border-primary text-xs font-black tracking-widest uppercase transition-all">
                      BACK_TO_AUTHENTICATION
                    </Button>
                  </Link>
                  <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">STILL LOCKED OUT? <span className="text-secondary cursor-pointer hover:underline">CONTACT COMMAND HUB</span></p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// Internal Alert component mock for error state
const AlertCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);

export default ForgotPassword;
