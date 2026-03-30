import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones, BarChart3, Globe } from 'lucide-react'

const contactSchema = z.object({
  fullName: z.string().min(3, 'Identity verification failed'),
  email: z.string().email('Invalid digital address'),
  subject: z.string().min(1, 'Selection required'),
  message: z.string().min(10, 'Packet size insufficient')
})

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit = async (data) => {
        // Simulate transmission
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Transmission Success:', data)
        alert('MISSION BRIEF TRANSMITTED SUCCESSFULLY.')
    }

    const hubs = [
        {
            id: 'ALPHA',
            title: 'Tech District HQ',
            address: '404 Kinetic Blvd, Neoverse Plaza, Sector 7G, San Francisco, CA 94105',
            img: '/assets/images/showroom.png',
            color: 'primary'
        },
        {
            id: 'BETA',
            title: 'Coastal Sector',
            address: '88 Velocity Way, Marine Terrace, Zone 4, Miami, FL 33139',
            img: '/assets/images/showroom.png',
            color: 'secondary'
        }
    ]

    return (
        <div className="bg-background text-white font-inter overflow-hidden pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover scale-105" 
                        src="/assets/images/contact_hero.png" 
                        alt="Contact Hero" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-8 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
                    >
                        <span className="text-primary font-poppins font-bold text-[0.65rem] tracking-[0.5em] uppercase text-sm">Channel Initialization</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-poppins font-black tracking-tighter uppercase text-white leading-tight italic"
                    >
                        ESTABLISH <br/> <span className="text-primary drop-shadow-[0_0_30px_rgba(0,252,64,0.4)]">CONTACT</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:col-span-8 glass-card p-10 md:p-16"
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[2px] w-16 bg-primary shadow-[0_0_10px_#9cff93]"></div>
                            <h2 className="text-3xl font-poppins font-black uppercase tracking-tight text-white italic">SECURE INQUIRY</h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[0.65rem] uppercase font-poppins font-bold tracking-[0.3em] text-primary ml-2 opacity-60">Identity</label>
                                    <div className="relative">
                                        <input 
                                            {...register('fullName')}
                                            className={`w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-on-surface placeholder:text-white/20 focus:border-primary transition-all outline-none font-inter font-bold uppercase tracking-wider ${errors.fullName ? 'border-error/50' : ''}`} 
                                            placeholder="ENTER FULL NAME" 
                                            type="text"
                                        />
                                        {errors.fullName && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-2 ml-2">{errors.fullName.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[0.65rem] uppercase font-poppins font-bold tracking-[0.3em] text-primary ml-2 opacity-60">Digital Address</label>
                                    <div className="relative">
                                        <input 
                                            {...register('email')}
                                            className={`w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-on-surface placeholder:text-white/20 focus:border-primary transition-all outline-none font-inter font-bold lowercase tracking-wider ${errors.email ? 'border-error/50' : ''}`} 
                                            placeholder="EMAIL@KINETIC.COM" 
                                            type="email"
                                        />
                                        {errors.email && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-2 ml-2">{errors.email.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[0.65rem] uppercase font-poppins font-bold tracking-[0.3em] text-primary ml-2 opacity-60">Transmission Subject</label>
                                <div className="relative">
                                    <select 
                                        {...register('subject')}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white/50 focus:border-primary focus:text-white transition-all outline-none font-poppins font-black uppercase appearance-none"
                                    >
                                        <option value="Vehicle Configuration Inquiry">Vehicle Configuration Inquiry</option>
                                        <option value="Performance Engineering Support">Performance Engineering Support</option>
                                        <option value="Press & Media Access">Press & Media Access</option>
                                        <option value="Investment Opportunities">Investment Opportunities</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronRight size={20} className="text-primary rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[0.65rem] uppercase font-poppins font-bold tracking-[0.3em] text-primary ml-2 opacity-60">Data Packet</label>
                                <textarea 
                                    {...register('message')}
                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-on-surface placeholder:text-white/20 focus:border-primary transition-all outline-none font-inter font-bold uppercase tracking-wider resize-none min-h-[180px] ${errors.message ? 'border-error/50' : ''}`} 
                                    placeholder="ENTER MESSAGE CONTENT..."
                                />
                                {errors.message && <p className="text-[10px] text-error font-bold uppercase tracking-widest mt-2 ml-2">{errors.message.message}</p>}
                            </div>

                            <button 
                                disabled={isSubmitting}
                                className="w-full bg-primary text-black font-poppins font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,252,64,0.3)] disabled:opacity-50" 
                                type="submit"
                            >
                                {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Sidebar: Hubs */}
                    <div className="lg:col-span-4 space-y-10">
                        {hubs.map((hub, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                                className="glass-card overflow-hidden group"
                            >
                                <div className="h-44 relative overflow-hidden backdrop-blur-md">
                                    <img src={hub.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" alt={hub.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                                    <div className="absolute bottom-6 left-8">
                                        <h3 className={`text-${hub.color} font-poppins font-black italic uppercase text-2xl tracking-tighter`}>HUB {hub.id}</h3>
                                    </div>
                                </div>
                                <div className="p-8 space-y-6">
                                    <p className="text-[0.65rem] uppercase font-poppins font-black tracking-[0.4em] text-primary">{hub.title}</p>
                                    <p className="text-white/60 text-sm font-inter leading-relaxed uppercase opacity-80">{hub.address}</p>
                                    <div className="pt-4 flex items-center gap-3 text-primary text-xs font-poppins font-black group-hover:translate-x-2 transition-transform cursor-pointer">
                                        <MapPin size={16} />
                                        <span className="uppercase tracking-[0.3em]">GET COORDINATES</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Support Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {[
                        { icon: <Headphones className="text-primary" />, title: '24/7 Concierge', desc: 'Immediate priority assistance for existing kinetic owners.', color: 'primary' },
                        { icon: <Globe className="text-secondary" />, title: 'Media Relations', desc: 'Press kits, asset downloads, and global communications.', color: 'secondary' },
                        { icon: <BarChart3 className="text-white" />, title: 'Investor Relations', desc: 'Quarterly performance data and strategic roadmaps.', color: 'white' }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                            className="glass-card p-10 group"
                        >
                            <div className="mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h4 className="text-2xl font-poppins font-black uppercase tracking-tight mb-4 italic">{item.title}</h4>
                            <p className="text-white/60 text-xs font-inter font-bold uppercase tracking-widest mb-8 leading-relaxed">{item.desc}</p>
                            <span className={`text-${item.color} font-poppins font-black text-[0.65rem] uppercase tracking-[0.4em] cursor-pointer hover:underline underline-offset-8 decoration-primary/30`}>Establish Link</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact
