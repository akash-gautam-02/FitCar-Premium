import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, Mail, Lock, ShieldCheck, ChevronRight, Zap } from 'lucide-react'
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
        <div className="bg-background min-h-screen text-white font-black uppercase tracking-widest relative overflow-hidden flex flex-col md:flex-row">
            {/* Left Side: Brand & Visuals */}
            <div className="hidden md:flex md:w-1/2 bg-surface-container relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(0,252,64,0.1),_transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full"></div>
                
                <div className="relative z-10 text-center px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/20 shadow-[0_0_40px_rgba(0,252,64,0.15)]"
                    >
                        <Zap className="text-primary fill-primary/20" size={40} />
                    </motion.div>
                    <h1 className="text-6xl font-black tracking-tighter mb-6 leading-none">JOIN THE<br/><span className="text-primary italic">KINETIC</span> FLEET</h1>
                    <p className="text-xs text-on-surface-variant tracking-[0.4em] font-bold max-w-sm mx-auto leading-relaxed opacity-60">
                        ACCESS THE MOST ADVANCED PERFORMANCE VEHICLES IN THE KNOWN GALAXY.
                    </p>

                    <div className="mt-16 grid grid-cols-2 gap-6 text-left">
                        <div className="p-4 border-l border-primary/30">
                            <h4 className="text-[0.6rem] text-primary mb-1">REAL-TIME</h4>
                            <p className="text-[0.5rem] tracking-widest">VEHICLE TELEMETRY</p>
                        </div>
                        <div className="p-4 border-l border-primary/30">
                            <h4 className="text-[0.6rem] text-primary mb-1">PRIORITY</h4>
                            <p className="text-[0.5rem] tracking-widest">MAINTENANCE SCHEDULING</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 opacity-20 pointer-events-none">
                    <p className="text-[10rem] font-black italic tracking-tighter leading-none select-none">UNIT-X01</p>
                </div>
            </div>

            {/* Right Side: Registration Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-20 relative bg-background">
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-black tracking-tighter">NEW IDENTITY</h2>
                        <div className="flex gap-2">
                            <div className={`h-1 w-8 rounded-full transition-all ${step === 1 ? 'bg-primary' : 'bg-white/10'}`}></div>
                            <div className={`h-1 w-8 rounded-full transition-all ${step === 2 ? 'bg-primary' : 'bg-white/10'}`}></div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        <AnimatePresence mode='wait'>
                            {step === 1 ? (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-3">
                                        <label className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black ml-1">FULL NAME IDENTITY</label>
                                        <div className="relative group/input">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors" size={18} />
                                            <input 
                                                {...register('fullName')}
                                                type="text" 
                                                placeholder="ALEXANDER KINETIC"
                                                className={`w-full bg-surface-container/30 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold uppercase focus:ring-1 focus:ring-primary/40 outline-none transition-all ${errors.fullName ? 'border-error/50' : ''}`}
                                            />
                                        </div>
                                        {errors.fullName && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-1 ml-1">{errors.fullName.message}</p>}
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black ml-1">IDENTITY VECTOR (EMAIL)</label>
                                        <div className="relative group/input">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors" size={18} />
                                            <input 
                                                {...register('email')}
                                                type="email" 
                                                placeholder="name@kinetic-motors.com"
                                                className={`w-full bg-surface-container/30 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold normal-case focus:ring-1 focus:ring-primary/40 outline-none transition-all ${errors.email ? 'border-error/50' : ''}`}
                                            />
                                        </div>
                                        {errors.email && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-1 ml-1">{errors.email.message}</p>}
                                    </div>

                                    <button 
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full py-5 bg-surface-container-highest/50 border border-white/10 text-white font-black uppercase tracking-tighter text-xl rounded-2xl hover:bg-surface-bright transition-all flex items-center justify-center gap-4 group"
                                    >
                                        NEXT PHASE
                                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-3">
                                        <label className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black ml-1">ENCRYPTED KEY (PASSWORD)</label>
                                        <div className="relative group/input">
                                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors" size={18} />
                                            <input 
                                                {...register('password')}
                                                type="password" 
                                                placeholder="••••••••"
                                                className={`w-full bg-surface-container/30 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold normal-case focus:ring-1 focus:ring-primary/40 outline-none transition-all ${errors.password ? 'border-error/50' : ''}`}
                                            />
                                        </div>
                                        {errors.password && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-1 ml-1">{errors.password.message}</p>}
                                    </div>

                                    <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl space-y-4">
                                        <div className="flex items-start gap-4">
                                            <input 
                                                {...register('terms')}
                                                type="checkbox" 
                                                id="terms"
                                                className="mt-1 bg-background border-outline-variant/30 text-primary rounded focus:ring-primary"
                                            />
                                            <label htmlFor="terms" className="text-[0.6rem] font-bold leading-relaxed text-on-surface-variant cursor-pointer">
                                                By initializing this session, I accept all mission protocols, data anonymization agreements, and terms of service.
                                            </label>
                                        </div>
                                        {errors.terms && <p className="text-[10px] text-error font-bold uppercase tracking-widest">{errors.terms.message}</p>}
                                    </div>

                                    <div className="flex gap-4">
                                        <button 
                                            type="button"
                                            onClick={prevStep}
                                            className="px-6 py-5 bg-surface-container-highest/50 border border-white/10 text-white font-black uppercase rounded-2xl hover:bg-surface-bright transition-all"
                                        >
                                            RESTART
                                        </button>
                                        <button 
                                            disabled={isSubmitting || !isValid}
                                            type="submit"
                                            className="flex-grow py-5 bg-primary text-on-primary font-black uppercase tracking-tighter text-xl rounded-2xl shadow-[0_0_30px_rgba(0,252,64,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'ENROLLING...' : 'ENROLL OPERATIVE'}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-[0.6rem] text-on-surface-variant font-bold tracking-widest">
                            ALREADY ENROLLED? <Link to="/login" className="text-primary hover:underline ml-2">INITIALIZE SESSION</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
