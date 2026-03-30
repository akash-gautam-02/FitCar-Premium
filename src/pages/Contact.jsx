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
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFX9lCt8Dj1y-xBzEMpyOL0iypG5qnL6R5iR1aF1Iu8SHNmdzpJxOF2Ej16VJy6WSyX7rMF5Y5PJIX6N4SRVzJ8ZtjX4d3RopN0OWCJCUB-XBAzMRhXsZ4--8qgIZxBbwHk-pZq40jkWnTQ8gGgpDOP4PbpImnzfe7qN3dm0X66ey-bWe32jQmwbjwosspiFBcZr_rBkwcImpTVXgz5-1z7z8zAfukU3defxgAUiKDPGmm5_Mp_81E4w1iq_bH1e1ugObr3s2D3Yw',
            color: 'primary'
        },
        {
            id: 'BETA',
            title: 'Coastal Sector',
            address: '88 Velocity Way, Marine Terrace, Zone 4, Miami, FL 33139',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDai2K2pspNVy4Nr8APRM7ZOPaWqRUgiexIuIoXkSe7-upa5fT6C5xECs33P5Pg634S49hxJiZo7giBX88vl99BNC56udB4SPwRTbrVORLk67AipWw4goTifBc8o5pRtEph_0olvISf1SHM0c-FgA0kQjfLHFQCYoIfWRe8r_sF81STy3lOfB1KSITPdaYfXhlR5yr96D5aRn_L4O3HxgRwdVNhct8mjwnuaRrniZKWP58pl-Mhinl6sQokb5Np2_YdWwGtLdBcScc',
            color: 'secondary'
        }
    ]

    return (
        <div className="bg-background text-white font-black overflow-hidden pt-20">
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi1_hZtDUdxAG_0k_kkqDIamzX_AK5TgOK7O_7PSeqc1c1F6JqdTqGWCOR9z9goX8KVCaTBjGeV1xxdWf9WC7BR2s2xDCpedf6ZLEC2aTbvvDgf0XGTu-Gqcqw0tkiMqDT3Hs-cg6_mA3ROfCTPzt5RxEAKxKz1aLqG_uYsdEWc2xfHHMGONuI7cjEJE1IChrd2XvP872fr58xE9ZQDGXeAJxI3dsFYwEmDhhyWr6zhtfN5XrepOV1FgWeS-UoQ5W8pluhxwS4sHM" 
                        alt="Contact Hero" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary font-bold tracking-[0.5em] uppercase text-sm mb-6 block">Channel Initialization</motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-white leading-none italic"
                    >
                        ESTABLISH <br/> <span className="text-primary drop-shadow-[0_0_20px_rgba(0,252,64,0.4)]">CONTACT</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:col-span-8 bg-surface-container-low p-10 md:p-16 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/5"
                    >
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[2px] w-16 bg-primary"></div>
                            <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">SECURE INQUIRY</h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase font-black tracking-[0.3em] text-on-surface-variant ml-2 opacity-60">Identity</label>
                                    <div className="relative">
                                        <input 
                                            {...register('fullName')}
                                            className={`w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl px-8 py-5 text-on-surface placeholder:text-outline-variant focus:border-primary transition-all outline-none font-bold uppercase ${errors.fullName ? 'border-error/50' : ''}`} 
                                            placeholder="FULL NAME" 
                                            type="text"
                                        />
                                        {errors.fullName && <p className="text-[10px] text-error font-black uppercase tracking-widest mt-2 ml-2">{errors.fullName.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase font-black tracking-[0.3em] text-on-surface-variant ml-2 opacity-60">Digital Address</label>
                                    <div className="relative">
                                        <input 
                                            {...register('email')}
                                            className={`w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl px-8 py-5 text-on-surface placeholder:text-outline-variant focus:border-primary transition-all outline-none font-bold normal-case ${errors.email ? 'border-error/50' : ''}`} 
                                            placeholder="EMAIL@KINETIC.COM" 
                                            type="email"
                                        />
                                        {errors.email && <p className="text-[10px] text-error font-black uppercase tracking-widest mt-2 ml-2">{errors.email.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-on-surface-variant ml-2 opacity-60">Transmission Subject</label>
                                <select 
                                    {...register('subject')}
                                    className="w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl px-8 py-5 text-on-surface focus:border-primary transition-all outline-none font-black uppercase appearance-none"
                                >
                                    <option value="Vehicle Configuration Inquiry">Vehicle Configuration Inquiry</option>
                                    <option value="Performance Engineering Support">Performance Engineering Support</option>
                                    <option value="Press & Media Access">Press & Media Access</option>
                                    <option value="Investment Opportunities">Investment Opportunities</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-on-surface-variant ml-2 opacity-60">Data Packet</label>
                                <textarea 
                                    {...register('message')}
                                    className={`w-full bg-surface-container-highest/50 border border-white/5 rounded-2xl px-8 py-5 text-on-surface placeholder:text-outline-variant focus:border-primary transition-all outline-none font-bold uppercase resize-none min-h-[150px] ${errors.message ? 'border-error/50' : ''}`} 
                                    placeholder="ENTER MESSAGE CONTENT..."
                                />
                                {errors.message && <p className="text-[10px] text-error font-black uppercase tracking-widest mt-2 ml-2">{errors.message.message}</p>}
                            </div>

                            <button 
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-primary-container text-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,252,64,0.3)] disabled:opacity-50" 
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
                                className="bg-surface-container-high rounded-3xl overflow-hidden border border-white/5 group shadow-xl"
                            >
                                <div className="h-44 relative bg-background overflow-hidden">
                                    <img src={hub.img} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={hub.title} />
                                    <div className={`absolute inset-0 bg-${hub.color}/10`}></div>
                                    <div className="absolute bottom-6 left-8">
                                        <h3 className={`text-${hub.color} font-black italic uppercase text-2xl tracking-tighter`}>HUB {hub.id}</h3>
                                    </div>
                                </div>
                                <div className="p-8 space-y-6">
                                    <p className="text-[10px] uppercase font-black tracking-[0.4em] text-secondary">{hub.title}</p>
                                    <p className="text-on-surface-variant text-sm font-bold leading-relaxed uppercase opacity-80">{hub.address}</p>
                                    <div className="pt-4 flex items-center gap-3 text-primary text-xs font-black group-hover:translate-x-2 transition-transform cursor-pointer">
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
                        { icon: <Headphones />, title: '24/7 Concierge', desc: 'Immediate priority assistance for existing kinetic owners.', color: 'primary' },
                        { icon: <Globe />, title: 'Media Relations', desc: 'Press kits, asset downloads, and global communications.', color: 'secondary' },
                        { icon: <BarChart3 />, title: 'Investor Relations', desc: 'Quarterly performance data and strategic roadmaps.', color: 'white' }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                            className={`bg-surface-container p-10 rounded-3xl border-l-[6px] transition-all hover:bg-surface-bright group ${item.color === 'primary' ? 'border-primary' : item.color === 'secondary' ? 'border-secondary' : 'border-white'}`}
                        >
                            <div className={`text-${item.color} mb-8 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                            <h4 className="text-2xl font-black uppercase tracking-tight mb-4 italic">{item.title}</h4>
                            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-8 opacity-70">{item.desc}</p>
                            <span className={`text-${item.color} font-black text-[10px] uppercase tracking-[0.4em] cursor-pointer hover:underline underline-offset-4`}>Establish Link</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact
