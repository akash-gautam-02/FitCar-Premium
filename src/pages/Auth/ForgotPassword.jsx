import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, ArrowLeft, ShieldAlert, CheckCircle2, Loader2, Sparkles, AlertCircle, Terminal, Key } from 'lucide-react';
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
    <div className="min-h-screen bg-surface flex items-center justify-center px-6 relative overflow-hidden font-body selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <div className="h-full w-[1px] bg-primary absolute left-1/4"></div>
         <div className="h-full w-[1px] bg-primary absolute left-2/4"></div>
         <div className="h-full w-[1px] bg-primary absolute left-3/4"></div>
         <div className="w-full h-[1px] bg-primary absolute top-1/4"></div>
         <div className="w-full h-[1px] bg-primary absolute top-2/4"></div>
         <div className="w-full h-[1px] bg-primary absolute top-3/4"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl relative z-10"
      >
        <div className="glass-card p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden group">
          {/* Subtle Interior Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-1000"></div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-12"
              >
                <header className="space-y-6 text-center">
                  <div className="flex flex-col items-center gap-6 mb-8">
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className="w-20 h-20 rounded-[2.5rem] bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shadow-[0_0_40px_rgba(255,167,81,0.15)]"
                    >
                      <ShieldAlert size={32} />
                    </motion.div>
                    <span className="label-sm font-black tracking-[0.4em] text-on-surface/30 uppercase italic">IDENTITY_RECOVERY v2.4</span>
                  </div>
                  <h1 className="display-sm normal-case italic text-on-surface leading-tight">
                    Recovery <span className="text-primary not-italic">Protocol</span>
                  </h1>
                  <p className="label-md text-on-surface/40 uppercase tracking-widest leading-relaxed max-w-md mx-auto">
                    Enter your operational ID to re-authenticate secure access to the Kinetic Terminal.
                  </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center px-4">
                       <label className="label-sm text-secondary uppercase tracking-[0.4em] font-black">Registered ID</label>
                       <Terminal size={14} className="text-secondary/40" />
                    </div>
                    <div className="relative group/input">
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500">
                        <Mail size={20} />
                      </div>
                      <input 
                        {...register('email')}
                        type="email" 
                        placeholder="OPERATOR@KINETIC.NET"
                        className={`w-full bg-white/5 border border-white/5 rounded-3xl pl-20 pr-8 py-6 text-on-surface font-bold text-sm tracking-widest focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none placeholder:text-on-surface/10 ${errors.email ? 'border-secondary/40' : ''}`}
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-secondary text-[10px] uppercase font-bold tracking-widest absolute -bottom-6 left-4 flex items-center gap-2"
                        >
                           <AlertCircle size={12} /> {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-20 rounded-[2.5rem] shadow-luxury-neon flex items-center justify-center gap-4 group/btn active:scale-98"
                  >
                    <span className="label-md font-black uppercase tracking-[0.3em]">
                       {isLoading ? 'Calibrating Signal...' : 'Transmit Recovery Code'}
                    </span>
                    {!isLoading && <Sparkles size={18} className="text-white group-hover:scale-125 transition-transform" />}
                  </Button>
                </form>

                <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-8">
                  <Link to="/login" className="flex items-center gap-4 label-sm font-black tracking-widest text-on-surface/30 hover:text-primary transition-all uppercase group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
                    Return to Command Station
                  </Link>
                  <div className="flex items-center gap-3 opacity-20">
                     <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-bold tracking-[0.4em] uppercase">SYSTEM_ENCRYPTED_LINK_ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-16 py-10"
              >
                <div className="flex flex-col items-center space-y-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-32 h-32 rounded-[3.5rem] bg-primary/10 border-2 border-primary/40 flex items-center justify-center text-primary shadow-luxury-neon"
                  >
                    <CheckCircle2 size={64} />
                  </motion.div>
                  <div className="space-y-6">
                    <h2 className="display-sm normal-case italic text-on-surface leading-tight">Signal <span className="text-primary not-italic">Sent</span></h2>
                    <p className="label-md text-on-surface/40 uppercase tracking-[0.2em] leading-loose max-w-sm mx-auto font-bold">
                       Mission-grade recovery key has been transmitted to your secure uplink channel.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                  <Link to="/login" className="block">
                    <Button variant="ghost" className="w-full h-16 rounded-[2rem] border-white/5 hover:border-primary/40 text-xs font-black tracking-widest uppercase transition-all backdrop-blur-xl group">
                       <span className="flex items-center justify-center gap-3">
                          <Terminal size={14} className="group-hover:text-primary transition-colors" /> Back to Authentication
                       </span>
                    </Button>
                  </Link>
                  <div className="pt-4">
                     <p className="label-sm text-on-surface/20 font-bold tracking-widest uppercase hover:text-primary transition-all cursor-pointer">
                        Still locked out? <span className="text-secondary italic ml-2">Open Emergency Comms Channel</span>
                     </p>
                  </div>
                </div>
                
                <div className="absolute top-[-5%] left-[-5%] opacity-[0.02]">
                   <Key size={300} className="text-primary" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
