import React from 'react'
import { motion } from 'framer-motion'
import { 
    User, Settings, History, Shield, ChevronRight, 
    MapPin, Zap, Gauge, Heart, Activity, 
    Award, Calendar, Edit3 
} from 'lucide-react'
import Button from '../components/ui/Button'

const Dashboard = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white font-black uppercase tracking-widest pb-32">
            <main className="pt-32 px-6 max-w-[1400px] mx-auto space-y-12">
                
                {/* Profile Overview Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="lg:col-span-2 flex flex-col md:flex-row gap-10 p-10 rounded-[2.5rem] bg-surface-highest/5 border border-white/5 items-center md:items-start relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="relative z-10">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary shadow-luxury-neon relative group/avatar">
                                <img 
                                    className="w-full h-full object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-500" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9vc_HqX3z89iF_gzZRpADD5h9UJ4Zfm_GxmYLLSF_p0bS1jVMBlLgscFKYXza2yb38eP5qPW9eH2QRw84fBH_AgIIkiRF3txHqA036VsMhZpZZjcZ9EDnpV_UVFIqIpEyRajXqdQcC_uXG9b_Cmn7RvFeRitoR5BDxTwi_W5HnsSh-to0FP1OOvUyBh0LBEg4088vxLA4YBDWy27hraISu5prndO8gqctuou-iS8222plgzueKrSaCA4Zv4IA098H_s6KaQnl_Dc" 
                                    alt="Julian Thorne"
                                />
                                <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                                    <Edit3 size={24} className="text-primary" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-4 relative z-10">
                            <div className="flex flex-col md:flex-row md:items-end gap-4">
                                <h1 className="text-5xl font-black tracking-tighter italic">JULIAN THORNE</h1>
                                <span className="text-secondary font-black tracking-[0.3em] text-[0.6rem] mb-2 px-3 py-1 bg-secondary/10 rounded-full">APEX MEMBER</span>
                            </div>
                            <p className="text-on-surface-variant text-[0.75rem] max-w-lg normal-case font-bold opacity-60 leading-relaxed">
                                High-performance enthusiast. Tracking telemetry for the Spectre GT and Nebula EV fleet. Focused on precision engineering and efficiency.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start">
                                <div className="px-6 py-3 bg-surface-highest/10 rounded-3xl border border-white/5 space-y-1">
                                    <span className="text-[0.55rem] text-on-surface-variant block opacity-60">TOTAL DISTANCE</span>
                                    <span className="text-2xl font-black italic tracking-tighter">12,482 <span className="text-sm text-secondary tracking-normal font-bold not-italic">KM</span></span>
                                </div>
                                <div className="px-6 py-3 bg-surface-highest/10 rounded-3xl border border-white/5 space-y-1">
                                    <span className="text-[0.55rem] text-on-surface-variant block opacity-60">FLEET RANK</span>
                                    <span className="text-2xl font-black italic tracking-tighter">#042 <span className="text-sm text-primary tracking-normal font-bold not-italic">TOP 1%</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Access */}
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="p-10 rounded-[2.5rem] bg-surface-highest/10 border border-white/5 h-full flex flex-col justify-between"
                    >
                        <div className="space-y-8">
                            <h3 className="text-[0.65rem] font-black tracking-[0.4em] text-primary opacity-80 mb-8">QUICK ACCESS</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Settings, label: 'Fleet Settings' },
                                    { icon: History, label: 'Transaction History' },
                                    { icon: Shield, label: 'Privacy & Security' }
                                ].map((item, i) => (
                                    <button key={i} className="w-full flex justify-between items-center group p-5 rounded-2xl bg-white/0 hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
                                        <div className="flex items-center gap-5">
                                            <item.icon className="text-on-surface-variant group-hover:text-primary transition-colors duration-300" size={20} />
                                            <span className="text-sm font-black tracking-tight">{item.label}</span>
                                        </div>
                                        <ChevronRight className="text-on-surface-variant group-hover:translate-x-1 transition-all" size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Active Delivery Card */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-surface-highest/5 h-[400px] flex flex-col"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                        <img 
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCey6S0RdIm1UR7hUA_rc0fUUQhldsWkyvKOfNi-kU-XfUe-_schvm2sHeFgJWQZlGWH4J_Y8LJR4IQNPl1Xyej9eOm2i3nl8GsVX6xaCn2rJJ6-9Jw7edTajUSJBLGbUZOJDqNJ3W1ybIODspkEthhNGq1mBvEzRVJhxJrwSuRvIKbVVxTRK4aXlfPBhJumcUaIg3Rpc15P7N8YbrQtTf_BpRb0HP0raZjRo8OZLnesNlIfoBn5PXPKNu64DsEZ_IV2qD6OCLSfDg" 
                            alt="Spectre GT-X"
                        />
                        <div className="relative z-20 mt-auto p-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                <span className="text-[0.6rem] font-black tracking-[0.3em] text-primary">ACTIVE DELIVERY</span>
                            </div>
                            <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-2">SPECTRE GT-X</h2>
                            <p className="text-on-surface-variant text-[0.75rem] font-bold opacity-60 mb-8 normal-case">En route to North Sector Hub • ETA 14:30</p>
                            <Button variant="primary" size="lg" className="rounded-full px-10 shadow-luxury-neon flex items-center gap-3">
                                <MapPin size={18} />
                                TRACK LIVE
                            </Button>
                        </div>
                    </motion.div>

                    {/* Performance Stats */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-10 rounded-[2.5rem] bg-surface-highest/10 border border-white/5 flex flex-col justify-between h-[400px] overflow-hidden relative group"
                    >
                         <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-700"></div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-[0.6rem] font-black tracking-[0.4em] text-secondary opacity-80">TELEMETRY</h3>
                            <Gauge className="text-secondary" size={24} />
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between text-[0.6rem] font-black tracking-[0.2rem] text-on-surface-variant group-hover:text-white transition-colors">
                                    <span>POWER RESERVE</span>
                                    <span className="text-secondary">88%</span>
                                </div>
                                <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-secondary shadow-luxury-neon"></motion.div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-[0.6rem] font-black tracking-[0.2rem] text-on-surface-variant group-hover:text-white transition-colors">
                                    <span>TIRE INTEGRITY</span>
                                    <span className="text-primary">94%</span>
                                </div>
                                <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-primary shadow-luxury-neon"></motion.div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-5xl font-black italic tracking-tighter">2.1<span className="text-xl font-bold text-on-surface-variant not-italic ml-1 opacity-60">S</span></span>
                                <span className="block text-[0.55rem] tracking-[0.2em] text-on-surface-variant font-black mt-2 opacity-60 uppercase">AVG. 0-60 START</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Wishlist Summary */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-10 rounded-[2.5rem] bg-surface-highest/5 border border-primary/20 flex flex-col h-[400px] relative overflow-hidden"
                    >
                         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[80px]"></div>
                        <div className="flex justify-between items-start mb-10">
                            <h3 className="text-[0.6rem] font-black tracking-[0.4em] text-primary opacity-80">WISHLIST</h3>
                            <Heart className="text-primary fill-primary" size={24} />
                        </div>
                        <div className="flex-1 space-y-6 overflow-y-auto custom-scrollbar pr-3">
                            {[
                                { title: 'Nebula Concept', status: 'PRE-ORDER STATUS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmhizW_7ntrAa3AsNvpeNkG5J-T-k6YBlNrifLyRbl5utTWhCXKbhD0dHjAON0XJ5GAzS6BNEk9JdSKkvMMJFyhih6_Vos9fJMEnbtEdBS5zp4vYg2LfqFpJAGTDHqFJWtr37uPWrjX-Lty-BPV3RhsDRBcmyf1Xb1m4Q7JKAElSFPL2R5UNYrLVL_C-YUUlpzTGcq_MvJWG7r2rUxvbDHMn_lli3ELA-4Vx0xx14B48QGP7D140A5uEwdoljua1N7AhLtyJ0Ov6o' },
                                { title: 'Onyx Rim Pack', status: 'LIMITED EDITION', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Pbe5_lw-MNSPFH_R3NJY5ITkpzRG0Ik3CdwtnATfqH12UwR6merylnBHWGNW_Q4CjMGLjNLeokiobxMVDnsOEENGmQkOR6EVlDEP0rd7o1U7DUSusffVj5McebNZTTsW39TLoTPADQl16h_dUKYK7Q5AvKOvJItvlbNPJBzFIFDrrE6G1JsAWLvcAvLrN5SKUIXq3XciAhOzzgOdQNySyIEFRhhl4BQoJtwlXC7l-KL432ouPXxksbVK0D5VLHlu6bFXfOyhmgI' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-5 group cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-surface-highest/20 border border-white/5">
                                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={item.img} alt={item.title} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-black text-sm tracking-tight group-hover:text-primary transition-colors">{item.title}</p>
                                        <p className="text-[0.5rem] text-on-surface-variant font-black tracking-widest opacity-40 uppercase">{item.status}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <button className="mt-8 text-primary text-[0.6rem] font-black tracking-[0.3em] uppercase hover:underline underline-offset-8 transition-all w-max">VIEW ALL ITEMS</button>
                    </motion.div>
                </section>

                {/* Recent Dynamics */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 border-t border-white/5">
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-5xl font-black tracking-tighter italic leading-none">RECENT <br/><span className="text-primary">DYNAMICS</span></h2>
                        <p className="text-on-surface-variant text-[0.75rem] font-bold normal-case opacity-60 leading-relaxed max-w-sm">
                            Real-time logs of your interaction with the Kinetic ecosystem. Precision tracking for every maneuver.
                        </p>
                        <div className="h-px bg-gradient-to-r from-primary/40 to-transparent w-full"></div>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                        {[
                            { date: '12 OCT', icon: Zap, color: 'text-secondary', bg: 'bg-secondary/10', title: 'Supercharge Completed', desc: 'North Station V3 • 45kWh Added', value: '+$12.40' },
                            { date: '11 OCT', icon: Award, color: 'text-primary', bg: 'bg-primary/10', title: 'Performance Badge Earned', desc: "Top Speed Achievement: 'Mach Whisper'", status: 'BADGE' },
                            { date: '08 OCT', icon: Calendar, color: 'text-white', bg: 'bg-white/5', title: 'Service Appointment Scheduled', desc: 'Annual Calibration • Oct 24', status: 'PENDING' }
                        ].map((log, i) => (
                            <motion.div 
                                key={i}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-8 p-8 rounded-[1.5rem] bg-white/0 hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5 group"
                            >
                                <span className="text-[0.65rem] font-black font-mono text-on-surface-variant w-20 opacity-40">{log.date}</span>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${log.bg} ${log.color} shadow-luxury-neon transition-transform group-hover:scale-110`}>
                                    <log.icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-black text-sm tracking-tight transition-colors group-hover:text-white">{log.title}</h4>
                                    <p className="text-[0.65rem] text-on-surface-variant font-bold normal-case opacity-40 group-hover:opacity-60">{log.desc}</p>
                                </div>
                                {log.value ? (
                                    <span className={`text-[0.65rem] font-black ${log.color}`}>{log.value}</span>
                                ) : (
                                    <span className="text-[0.55rem] font-black text-on-surface-variant uppercase tracking-widest opacity-40">{log.status}</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard
