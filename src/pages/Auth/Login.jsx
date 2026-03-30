import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Apple, Chrome, ChevronRight, Fingerprint, ShieldCheck } from 'lucide-react'
import Button from '../../components/ui/Button'

const loginSchema = z.object({
  email: z.string().email('Invalid biometric signature (email)'),
  password: z.string().min(8, 'Access code must be at least 8 segments')
})

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data) => {
        // Simulate authentication
        await new Promise(resolve => setTimeout(resolve, 1500))
        navigate('/dashboard')
    }

    return (
        <div className="bg-surface min-h-screen selection:bg-primary/30 relative overflow-hidden flex flex-col items-center justify-center font-body px-6">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,252,64,0.08),_transparent_70%)]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 w-full max-w-lg">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-10">
                       <motion.div 
                           whileHover={{ scale: 1.1, rotate: 180 }}
                           transition={{ duration: 0.6 }}
                           className="w-20 h-20 rounded-[2.5rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-luxury-neon"
                       >
                           <Fingerprint size={32} />
                       </motion.div>
                    </div>
                    <h1 className="display-md normal-case italic text-on-surface leading-none mb-4">
                      Initialize <span className="text-secondary not-italic">Session</span>
                    </h1>
                    <p className="label-sm text-on-surface/30 uppercase tracking-[0.4em] font-bold">KINETIC MOTORS • SECURE TERMINAL v4.0</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card p-10 md:p-16 rounded-[4rem] border border-white/5 relative group overflow-hidden"
                >
                    {/* Subtle Interior Glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-1000"></div>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-2">
                                   <label className="label-sm text-on-surface/30 uppercase tracking-[0.3em] font-black">Operator Access ID</label>
                                   <ShieldCheck size={14} className="text-primary/40" />
                                </div>
                                <div className="relative group/input">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500" size={18} />
                                    <input 
                                        {...register('email')}
                                        type="email" 
                                        placeholder="IDENTITY_ID@KINETIC.SYS"
                                        className={`w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-widest focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none placeholder:text-on-surface/10 ${errors.email ? 'border-secondary/40' : ''}`}
                                    />
                                    {errors.email && (
                                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-6 left-2 text-[10px] text-secondary font-bold uppercase tracking-widest">
                                          {errors.email.message}
                                       </motion.div>
                                    )}
                                </div>
                            </div>

                            <div className="relative space-y-3 pt-2">
                                <div className="flex justify-between items-center px-2">
                                    <label className="label-sm text-on-surface/30 uppercase tracking-[0.3em] font-black">Tactical Key</label>
                                    <Link to="/forgot-password" size="sm" className="text-[10px] text-secondary hover:text-primary transition-all font-black tracking-widest uppercase italic">Key Recovery?</Link>
                                </div>
                                <div className="relative group/input">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface/20 group-focus-within/input:text-primary transition-all duration-500" size={18} />
                                    <input 
                                        {...register('password')}
                                        type="password" 
                                        placeholder="••••••••••••"
                                        className={`w-full bg-white/5 border border-white/5 rounded-3xl py-6 pl-16 pr-8 text-sm font-bold normal-case focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none placeholder:text-on-surface/10 ${errors.password ? 'border-secondary/40' : ''}`}
                                    />
                                    {errors.password && (
                                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-6 left-2 text-[10px] text-secondary font-bold uppercase tracking-widest">
                                          {errors.password.message}
                                       </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button 
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full h-20 rounded-[2rem] shadow-luxury-neon flex items-center justify-center gap-4 group/btn"
                        >
                            <span className="label-md font-black uppercase tracking-[0.3em]">
                               {isSubmitting ? 'Verifying Uplink...' : 'Initialize Access'}
                            </span>
                            {!isSubmitting && <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
                        </Button>
                    </form>

                    <div className="mt-12 relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <span className="relative z-10 bg-surface/50 backdrop-blur-xl px-10 label-sm text-on-surface/20 uppercase tracking-[0.5em] font-black italic">Protocol Redundancy</span>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-12">
                        <button className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 py-5 rounded-2xl transition-all group/opt">
                            <Chrome size={20} className="text-on-surface/40 group-hover/opt:text-primary transition-colors" />
                            <span className="label-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Chrome</span>
                        </button>
                        <button className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/5 py-5 rounded-2xl transition-all group/opt">
                            <Apple size={20} className="text-on-surface/40 group-hover/opt:text-primary transition-colors" />
                            <span className="label-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Apple ID</span>
                        </button>
                    </div>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="mt-12 text-center space-y-4"
                >
                    <p className="label-sm text-on-surface/30 font-bold tracking-widest uppercase">
                        Unregistered operative? <Link to="/signup" className="text-primary hover:text-secondary hover:underline ml-2 transition-all">Enroll Identity</Link>
                    </p>
                </motion.div>
            </main>

            <footer className="mt-20 pb-10 text-center opacity-30">
                <p className="label-sm uppercase tracking-[0.5em] font-black">© 2024 KINETIC MOTORS • ALL SYSTEMS NOMINAL</p>
            </footer>
        </div>
    )
}

export default Login
