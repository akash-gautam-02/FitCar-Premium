import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, Mail, Lock, ShieldCheck, ChevronRight, Zap, ArrowLeft, CheckCircle2, Cpu, Globe } from 'lucide-react'
import Button from '../../components/ui/Button'

const signupSchema = z.object({
  fullName: z.string().min(3, 'Identity name must be at least 3 segments'),
  email: z.string().email('Invalid biometric signature (email)'),
  password: z.string().min(8, 'Access code must be at least 8 segments'),
  terms: z.boolean().refine(val => val === true, 'Mission protocols must be accepted')
})

const Signup = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm({
        resolver: zodResolver(signupSchema),
        mode: 'onChange'
    })

    const onSubmit = async (data) => {
        // Simulate registration
        await new Promise(resolve => setTimeout(resolve, 1500))
        navigate('/dashboard')
    }

    const nextStep = () => setStep(2)
    const prevStep = () => setStep(1)

    return (
        <div className="bg-surface min-h-screen selection:bg-primary/30 relative overflow-hidden flex flex-col lg:flex-row font-body">
            {/* Left Side: Brand & Visuals (Desktop) */}
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden p-20">
                <div className="absolute inset-0 z-0">
                   <img 
                      src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale opacity-20 scale-110 group-hover:scale-100 transition-transform duration-[3s]"
                      alt="Supercar Abstract"
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface"></div>
                   <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface "></div>
                </div>

                <div className="relative z-10 max-w-lg space-y-12">
                   <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.8 }}
                       className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-[2.5rem] flex items-center justify-center text-primary shadow-luxury-neon"
                   >
                       <Zap size={40} className="fill-primary/20" />
                   </motion.div>
                   
                   <div className="space-y-6">
                      <motion.h1 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="display-lg normal-case italic text-on-surface leading-[0.95]"
                      >
                         Join The <br/><span className="text-secondary not-italic">Kinetic Fleet</span>
                      </motion.h1>
                      <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="body-lg text-on-surface/40 leading-relaxed max-w-sm"
                      >
                         Access the most advanced performance ecosystem in automotive history. Neural-linked telemetry, predictive engineering, and exclusive ownership protocols.
                      </motion.p>
                   </div>

                   <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.6 }}
                       className="grid grid-cols-2 gap-8"
                   >
                      <div className="space-y-3 p-8 glass-card rounded-3xl border border-white/5">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Cpu size={20} />
                         </div>
                         <div>
                            <h4 className="label-sm text-primary uppercase tracking-widest font-black">Neural Uplink</h4>
                            <p className="text-[10px] text-on-surface/30 uppercase mt-1 leading-relaxed">Real-time biometrics & vehicle syncing</p>
                         </div>
                      </div>
                      <div className="space-y-3 p-8 glass-card rounded-3xl border border-white/5">
                         <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                            <Globe size={20} />
                         </div>
                         <div>
                            <h4 className="label-sm text-secondary uppercase tracking-widest font-black">Global Grid</h4>
                            <p className="text-[10px] text-on-surface/30 uppercase mt-1 leading-relaxed">Priority access to worldwide track protocols</p>
                         </div>
                      </div>
                   </motion.div>
                </div>

                <div className="absolute top-20 left-20 opacity-5 pointer-events-none select-none italic text-[8rem] font-black leading-none">
                   PROTOTYPE_X
                </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-24 relative lg:bg-surface-container-low/20 backdrop-blur-3xl">
                <div className="w-full max-w-lg">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between items-end mb-16"
                    >
                        <div className="space-y-2">
                           <h2 className="headline-md normal-case italic text-on-surface leading-none">Create <span className="text-secondary not-italic">Identity</span></h2>
                           <p className="label-sm text-on-surface/30 uppercase tracking-[0.4em] font-black">New operative enrollment protocol</p>
                        </div>
                        <div className="flex gap-3">
                            <div className={`h-1.5 w-10 rounded-full transition-all duration-500 ${step === 1 ? 'bg-primary shadow-luxury-neon' : 'bg-white/5'}`}></div>
                            <div className={`h-1.5 w-10 rounded-full transition-all duration-500 ${step === 2 ? 'bg-primary shadow-luxury-neon' : 'bg-white/5'}`}></div>
                        </div>
                    </motion.div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                        <AnimatePresence mode='wait'>
                            {step === 1 ? (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-3">
                                        <label className="label-sm text-on-surface/30 uppercase tracking-[0.3em] font-black ml-1">Full Identity Name</label>
                                        <div className="relative group/input">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500" size={18} />
                                            <input 
                                                {...register('fullName')}
                                                type="text" 
                                                placeholder="OPERATIVE NAME"
                                                className={`w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-widest focus:ring-1 focus:ring-primary/40 outline-none transition-all placeholder:text-on-surface/10 ${errors.fullName ? 'border-secondary/40' : ''}`}
                                            />
                                            {errors.fullName && <p className="text-[10px] text-secondary font-bold uppercase tracking-widest absolute -bottom-6 left-2">{errors.fullName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4">
                                        <label className="label-sm text-on-surface/30 uppercase tracking-[0.3em] font-black ml-1">Comms Protocol (Email)</label>
                                        <div className="relative group/input">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500" size={18} />
                                            <input 
                                                {...register('email')}
                                                type="email" 
                                                placeholder="IDENTITY@UPLINK.NET"
                                                className={`w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-sm font-bold normal-case tracking-widest focus:ring-1 focus:ring-primary/40 outline-none transition-all placeholder:text-on-surface/10 ${errors.email ? 'border-secondary/40' : ''}`}
                                            />
                                            {errors.email && <p className="text-[10px] text-secondary font-bold uppercase tracking-widest absolute -bottom-6 left-2">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <Button 
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full h-20 rounded-[2rem] flex items-center justify-center gap-4 group/btn mt-12 transition-all active:scale-[0.98]"
                                    >
                                        <span className="label-md font-black uppercase tracking-[0.3em]">Initialize Phase II</span>
                                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-3">
                                        <label className="label-sm text-on-surface/30 uppercase tracking-[0.3em] font-black ml-1">Tactical Key (Password)</label>
                                        <div className="relative group/input">
                                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500" size={18} />
                                            <input 
                                                {...register('password')}
                                                type="password" 
                                                placeholder="••••••••••••"
                                                className={`w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-sm font-bold outline-none transition-all placeholder:text-on-surface/10 ${errors.password ? 'border-secondary/40' : ''}`}
                                            />
                                            {errors.password && <p className="text-[10px] text-secondary font-bold uppercase tracking-widest absolute -bottom-6 left-2">{errors.password.message}</p>}
                                        </div>
                                    </div>

                                    <div className="p-8 glass-card rounded-[2.5rem] border border-white/5 space-y-6 mt-12 relative overflow-hidden group/terms">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4 -translate-y-4 group-hover/terms:translate-x-0 group-hover/terms:translate-y-0 transition-transform duration-700">
                                           <ShieldCheck size={100} className="text-primary" />
                                        </div>
                                        <div className="flex items-start gap-6 relative z-10">
                                            <div className="relative flex items-center">
                                               <input 
                                                   {...register('terms')}
                                                   type="checkbox" 
                                                   id="terms"
                                                   className="peer w-6 h-6 rounded-lg bg-white/10 border-none text-primary focus:ring-0 cursor-pointer appearance-none checked:bg-primary transition-all"
                                               />
                                               <CheckCircle2 size={16} className="absolute left-1 text-black opacity-0 peer-checked:opacity-100 transition-all pointer-events-none" />
                                            </div>
                                            <label htmlFor="terms" className="label-sm lowercase font-bold leading-relaxed text-on-surface/40 cursor-pointer select-none">
                                                I acknowledge and accept all missions protocols, biometric data anonymization policies, and global service terms.
                                            </label>
                                        </div>
                                        {errors.terms && <p className="text-[10px] text-secondary font-bold uppercase tracking-widest absolute -bottom-1 right-8">{errors.terms.message}</p>}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 mt-12">
                                        <button 
                                            type="button"
                                            onClick={prevStep}
                                            className="px-10 h-20 bg-white/5 border border-white/5 text-on-surface/40 label-md font-black uppercase tracking-widest rounded-[2rem] hover:bg-white/10 hover:text-on-surface transition-all active:scale-[0.95] flex items-center justify-center gap-3"
                                        >
                                           <ArrowLeft size={18} /> Restart
                                        </button>
                                        <Button 
                                            disabled={isSubmitting || !isValid}
                                            type="submit"
                                            className="flex-grow h-20 rounded-[2rem] shadow-luxury-neon flex items-center justify-center gap-4 transition-all active:scale-98"
                                        >
                                            <span className="label-md font-black uppercase tracking-[0.3em]">
                                               {isSubmitting ? 'Finalizing Enrollment...' : 'Enroll Operative'}
                                            </span>
                                            {!isSubmitting && <ChevronRight />}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    <div className="mt-16 text-center">
                        <p className="label-sm text-on-surface/40 font-bold tracking-widest uppercase">
                            Already in the fleet? <Link to="/login" className="text-secondary hover:text-primary hover:underline ml-2 transition-all italic">Initialize Session</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Subtle Overlay Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
               <div className="h-full w-[1px] bg-primary absolute left-1/4"></div>
               <div className="h-full w-[1px] bg-primary absolute left-3/4"></div>
               <div className="w-full h-[1px] bg-primary absolute top-1/4"></div>
               <div className="w-full h-[1px] bg-primary absolute top-3/4"></div>
            </div>
        </div>
    )
}

export default Signup
