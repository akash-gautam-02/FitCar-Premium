import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ArrowLeft, CreditCard, Wallet, Landmark, 
  ShieldCheck, Lock, ChevronRight, CheckCircle2,
  Sparkles, Package, Download, Calculator, Info
} from 'lucide-react';
import Button from '../components/ui/Button';

const checkoutSchema = z.object({
  cardName: z.string().min(3, 'Cardholder name required'),
  cardNumber: z.string().min(16, 'Full card number required').max(19),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry (MM/YY)'),
  cvv: z.string().min(3, 'CVV required').max(4),
  method: z.enum(['card', 'crypto', 'bank'])
});

const Checkout = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            method: 'card'
        }
    });

    const paymentMethod = watch('method');

    const onSubmit = async (data) => {
        // Simulate settlement process
        await new Promise(resolve => setTimeout(resolve, 2000));
        navigate('/order-confirmation');
    };

    const orderSummary = {
        carName: 'KINETIC OBSIDIAN',
        basePrice: 124900,
        performancePack: 15000,
        tax: 9800,
        destinationFee: 1200,
        total: 150900
    };

    return (
        <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column: Payment Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <header className="flex items-center gap-6 mb-16">
                            <motion.button 
                                whileHover={{ x: -4 }}
                                onClick={() => navigate(-1)} 
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/60 hover:text-primary transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </motion.button>
                            <h1 className="display-md normal-case italic text-on-surface">Secure <span className="text-primary not-italic">Settlement</span></h1>
                        </header>

                        <div className="space-y-16">
                            {/* Execution Protocol */}
                            <section>
                                <div className="flex items-center gap-3 mb-8 opacity-40">
                                   <Lock size={16} />
                                   <h3 className="label-md uppercase tracking-widest font-black">Execution Protocol</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {[
                                        { id: 'card', name: 'Credit Card', icon: CreditCard, desc: 'Visa / MC / Amex' },
                                        { id: 'crypto', name: 'Crypto Wallet', icon: Wallet, desc: 'ETH / BTC / SOL' },
                                        { id: 'bank', name: 'Bank Transfer', icon: Landmark, desc: 'Wire / SWIFT' }
                                    ].map((method) => (
                                        <motion.div 
                                            key={method.id}
                                            whileHover={{ y: -6, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setValue('method', method.id, { shouldValidate: true })}
                                            className={`p-8 rounded-[2.5rem] border flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                                                paymentMethod === method.id 
                                                ? 'bg-primary/5 border-primary shadow-luxury-neon' 
                                                : 'bg-white/5 border-white/5 hover:border-primary/40'
                                            }`}
                                        >
                                            {paymentMethod === method.id && (
                                                <motion.div 
                                                    layoutId="active-glow" 
                                                    className="absolute inset-0 bg-primary/5 blur-2xl" 
                                                />
                                            )}
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${paymentMethod === method.id ? 'bg-primary text-black' : 'bg-white/5 text-on-surface/30 group-hover:text-primary/60'}`}>
                                               <method.icon size={28} />
                                            </div>
                                            <div className="space-y-1 relative z-10">
                                                <span className={`label-md uppercase font-black tracking-[0.2em] block ${paymentMethod === method.id ? 'text-primary' : 'text-on-surface/40'}`}>{method.name}</span>
                                                <span className="label-sm opacity-30 lowercase italic">{method.desc}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                {errors.method && <p className="label-sm text-error/80 mt-4 ml-2">{errors.method.message}</p>}
                            </section>

                            {/* Payment Form */}
                            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-10 md:p-12 rounded-[3.5rem] border border-white/5 space-y-10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                                
                                <AnimatePresence mode="wait">
                                    {paymentMethod === 'card' && (
                                        <motion.div 
                                            key="card-fields"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                        >
                                            <div className="space-y-3">
                                                <label className="label-md uppercase font-bold text-on-surface/40 tracking-widest ml-2 italic">Cardholder Identity</label>
                                                <input 
                                                    {...register('cardName')}
                                                    type="text" 
                                                    placeholder="ALEXANDER KINETIC"
                                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all outline-none placeholder:opacity-20 ${errors.cardName ? 'border-error/50 bg-error/5' : ''}`}
                                                />
                                                {errors.cardName && <p className="label-sm text-error/80 ml-2">{errors.cardName.message}</p>}
                                            </div>
                                            <div className="space-y-3">
                                                <label className="label-md uppercase font-bold text-on-surface/40 tracking-widest ml-2 italic">Core Number</label>
                                                <input 
                                                    {...register('cardNumber')}
                                                    type="text" 
                                                    placeholder="0000 0000 0000 0000"
                                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all outline-none placeholder:opacity-20 ${errors.cardNumber ? 'border-error/50 bg-error/5' : ''}`}
                                                />
                                                {errors.cardNumber && <p className="label-sm text-error/80 ml-2">{errors.cardNumber.message}</p>}
                                            </div>
                                            <div className="space-y-3">
                                                <label className="label-md uppercase font-bold text-on-surface/40 tracking-widest ml-2 italic">Temporal Validity</label>
                                                <input 
                                                    {...register('expiry')}
                                                    type="text" 
                                                    placeholder="MM / YY"
                                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all outline-none placeholder:opacity-20 ${errors.expiry ? 'border-error/50 bg-error/5' : ''}`}
                                                />
                                                {errors.expiry && <p className="label-sm text-error/80 ml-2">{errors.expiry.message}</p>}
                                            </div>
                                            <div className="space-y-3">
                                                <label className="label-md uppercase font-bold text-on-surface/40 tracking-widest ml-2 italic">Security Vector (CVV)</label>
                                                <input 
                                                    {...register('cvv')}
                                                    type="password" 
                                                    placeholder="•••"
                                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface focus:border-primary/40 focus:ring-1 focus:ring-primary/40 transition-all outline-none placeholder:opacity-20 ${errors.cvv ? 'border-error/50 bg-error/5' : ''}`}
                                                />
                                                {errors.cvv && <p className="label-sm text-error/80 ml-2">{errors.cvv.message}</p>}
                                            </div>
                                        </motion.div>
                                    )}

                                    {paymentMethod === 'crypto' && (
                                        <motion.div 
                                            key="crypto-fields"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="p-10 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex flex-col items-center text-center gap-6"
                                        >
                                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                                <Wallet size={32} />
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="label-md uppercase font-black text-primary tracking-widest">Connect Matrix Wallet</h4>
                                                <p className="body-md text-primary/60 max-w-sm">Authorization will be requested via your browser extension after confirmation.</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {paymentMethod === 'bank' && (
                                        <motion.div 
                                            key="bank-fields"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="p-8 border border-white/10 rounded-[2.5rem] bg-white/2 space-y-4"
                                        >
                                            <div className="flex items-center gap-4 text-on-surface/60">
                                                <Landmark size={20} />
                                                <span className="label-md uppercase font-bold tracking-widest">Institution Protocol</span>
                                            </div>
                                            <p className="body-md text-on-surface/40 leading-relaxed italic">
                                                Direct ledger transfer instructions will be generated and dispatched to your primary uplink address upon execution. Finalization may take up to 24 atomic cycles.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="pt-4 space-y-8">
                                    <div className="flex items-center gap-6 p-6 bg-white/2 border border-white/5 rounded-3xl group hover:border-primary/20 transition-colors">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                           <p className="label-md uppercase font-black text-on-surface tracking-[0.2em]">Quantum Encryption Active</p>
                                           <p className="label-sm text-on-surface/40">Full node desensitization for total transaction anonymity.</p>
                                        </div>
                                    </div>

                                    <Button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        size="lg"
                                        className="w-full h-24 rounded-3xl shadow-luxury-neon group relative overflow-hidden"
                                    >
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-10 transition-opacity"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                        />
                                        <span className="relative z-10 flex items-center justify-center gap-4 text-2xl font-black italic tracking-tighter uppercase">
                                           {isSubmitting ? 'Syncing...' : 'Authorize Investment'}
                                           {!isSubmitting && <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />}
                                        </span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column: Order Summary */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-12 xl:col-span-5"
                    >
                        <div className="glass-card p-10 md:p-12 rounded-[4rem] sticky top-32 border border-white/5 overflow-hidden group">
                            {/* Decorative background pulse */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-colors duration-1000" />
                            
                            <div className="relative z-10">
                               <div className="flex items-center justify-between mb-12">
                                  <div className="flex items-center gap-3 opacity-40">
                                     <Package size={18} />
                                     <h3 className="label-md uppercase font-black tracking-[0.2em] text-on-surface">Unit_Dossier</h3>
                                  </div>
                                  <span className="label-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full font-black italic">Batch 01 // Unit_4492</span>
                               </div>
                               
                               <div className="flex items-center gap-8 mb-12 pb-12 border-b border-white/5">
                                   <div className="w-32 h-32 bg-black/40 rounded-[2.5rem] border border-white/5 p-6 flex items-center justify-center shrink-0 relative overflow-hidden group/img shadow-2xl">
                                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                       <img src="/assets/images/cars/ferrari-sf90.png" className="w-full h-full object-contain filter grayscale group-hover/img:grayscale-0 group-hover:scale-110 transition-all duration-700 drop-shadow-luxury" alt="Car Preview" />
                                   </div>
                                   <div className="space-y-2">
                                       <h4 className="display-sm text-3xl normal-case italic text-on-surface leading-none tracking-tighter">KINETIC <span className="text-primary not-italic">OBSIDIAN</span></h4>
                                       <div className="flex flex-wrap gap-2 pt-2">
                                          <span className="label-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-on-surface/40">V12 HYBRID</span>
                                          <span className="label-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-on-surface/40">AERO_X</span>
                                       </div>
                                   </div>
                               </div>

                               <div className="space-y-6 mb-12">
                                   <div className="flex justify-between items-center group/row">
                                       <span className="label-md uppercase tracking-widest text-on-surface/40 group-hover/row:text-on-surface/80 transition-colors">Core Allocation</span>
                                       <span className="body-lg font-black text-on-surface tracking-tight">${orderSummary.basePrice.toLocaleString()}</span>
                                   </div>
                                   <div className="flex justify-between items-center text-secondary group/row">
                                       <div className="flex items-center gap-2">
                                          <Sparkles size={14} className="animate-pulse" />
                                          <span className="label-md uppercase tracking-widest font-black">Performance Matrix</span>
                                       </div>
                                       <span className="body-lg font-black tracking-tight">+ ${orderSummary.performancePack.toLocaleString()}</span>
                                   </div>
                                   <div className="flex justify-between items-center group/row">
                                       <span className="label-md uppercase tracking-widest text-on-surface/40 group-hover/row:text-on-surface/80 transition-colors">Regulatory Tax</span>
                                       <span className="body-lg font-black text-on-surface tracking-tight">${orderSummary.tax.toLocaleString()}</span>
                                   </div>
                                   <div className="flex justify-between items-center group/row">
                                       <span className="label-md uppercase tracking-widest text-on-surface/40 group-hover/row:text-on-surface/80 transition-colors">Logistics Fee</span>
                                       <span className="body-lg font-black text-on-surface tracking-tight">${orderSummary.destinationFee.toLocaleString()}</span>
                                   </div>
                               </div>

                               <div className="pt-10 border-t border-white/10 relative">
                                   <div className="absolute top-0 left-0 w-32 h-[1px] bg-primary/40" />
                                   <div className="flex justify-between items-end">
                                       <div className="space-y-2">
                                           <div className="flex items-center gap-2 text-primary">
                                              <Calculator size={14} />
                                              <span className="label-sm font-black uppercase tracking-[0.4em] italic">Total Settlement</span>
                                           </div>
                                           <h4 className="display-md font-black text-5xl text-on-surface tracking-[ -0.05em] italic leading-none">${orderSummary.total.toLocaleString()}</h4>
                                       </div>
                                       <div className="text-right">
                                           <span className="label-xs text-on-surface/20 uppercase tracking-[0.3em] block mb-1">VAT INCL.</span>
                                           <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                              <span className="label-xs text-primary font-black">LOCKED</span>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                  className="mt-12 p-6 bg-white/2 rounded-3xl border border-white/5 flex items-center justify-between group/status"
                               >
                                  <div className="flex items-center gap-4">
                                     <CheckCircle2 size={18} className="text-primary group-hover/status:scale-110 transition-transform" />
                                     <span className="label-sm text-on-surface/40 uppercase tracking-[0.2em] font-bold">Allocation Secure</span>
                                  </div>
                                  <Info size={14} className="text-on-surface/10 hover:text-primary transition-colors cursor-help" />
                               </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
