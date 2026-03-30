import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Apple, Chrome } from 'lucide-react'
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
        console.log('Login Success:', data)
        navigate('/dashboard')
    }

    return (
        <div className="bg-background min-h-screen text-white font-black uppercase tracking-widest relative overflow-hidden flex flex-col">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,252,64,0.08),_transparent_70%)]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
            </div>

            <main className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
                <div className="w-full max-w-md">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">INITIALIZE<br/><span className="text-primary italic">SESSION</span></h1>
                        <p className="text-[0.6rem] text-on-surface-variant tracking-[0.4em] font-bold">KINETIC MOTORS • SECURE UPLINK</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-surface-container/40 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 md:p-10 relative group"
                    >
                        {/* Subtle Interior Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-all duration-700"></div>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black ml-1">ACCESS ID</label>
                                    <div className="relative group/input">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors" size={18} />
                                        <input 
                                            {...register('email')}
                                            type="email" 
                                            placeholder="name@kinetic-motors.com"
                                            className={`w-full bg-surface-highest/10 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold normal-case focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none ${errors.email ? 'border-error/50' : ''}`}
                                        />
                                    </div>
                                    {errors.email && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-1 ml-1">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-black">ENCRYPTED KEY</label>
                                        <Link to="/forgot-password" size="sm" className="text-[0.6rem] text-primary hover:text-white transition-colors cursor-pointer font-black tracking-widest">RECOVERY?</Link>
                                    </div>
                                    <div className="relative group/input">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within/input:text-primary transition-colors" size={18} />
                                        <input 
                                            {...register('password')}
                                            type="password" 
                                            placeholder="••••••••"
                                            className={`w-full bg-surface-highest/10 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm font-bold normal-case focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none ${errors.password ? 'border-error/50' : ''}`}
                                        />
                                    </div>
                                    {errors.password && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-1 ml-1">{errors.password.message}</p>}
                                </div>
                            </div>

                            <button 
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full py-5 bg-primary text-on-primary font-black uppercase tracking-tighter text-xl rounded-2xl shadow-[0_0_30px_rgba(0,252,64,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                            >
                                {isSubmitting ? 'SYNCHRONIZING...' : 'INITIATE CORE ACCESS'}
                            </button>
                        </form>

                        <div className="mt-10 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/5"></div>
                            </div>
                            <div className="relative flex justify-center text-[0.6rem] uppercase font-black bg-transparent">
                                <span className="bg-surface px-4 text-on-surface-variant tracking-[0.4em]">External Links</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 py-4 rounded-xl transition-all group/btn">
                                <Chrome size={18} className="group-hover/btn:text-primary transition-colors" />
                                <span className="text-[0.6rem] font-bold">CHROME</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 py-4 rounded-xl transition-all group/btn">
                                <Apple size={18} className="group-hover/btn:text-primary transition-colors" />
                                <span className="text-[0.6rem] font-bold">APPLE</span>
                            </button>
                        </div>
                    </motion.div>

                    <div className="mt-10 text-center">
                        <p className="text-[0.6rem] text-on-surface-variant font-bold tracking-widest">
                            NEW OPERATIVE? <Link to="/signup" className="text-primary hover:underline ml-2">CREATE IDENTITY</Link>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="py-8 px-6 text-center relative z-10">
                <p className="text-[0.5rem] text-on-surface-variant tracking-[0.5em] font-black opacity-40">© 2024 KINETIC MOTORS • ALL SYSTEMS NOMINAL</p>
            </footer>
        </div>
    )
}

export default Login
