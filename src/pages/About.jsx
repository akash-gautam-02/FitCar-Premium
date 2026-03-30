import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Shield, Award } from 'lucide-react'

const About = () => {
    const stats = [
        { label: 'Gear Shift Latency', value: '0.02s' },
        { label: 'Curb Weight Target', value: '1200kg' },
        { label: 'Power Output', value: '1.2 MW' },
        { label: 'Downforce', value: '850kg' }
    ]

    const principles = [
        {
            icon: <Zap className="text-primary" />,
            title: 'Innovation',
            desc: 'Pioneering propulsion systems that redefine what is possible in the electric and hybrid era.'
        },
        {
            icon: <Target className="text-secondary" />,
            title: 'Precision',
            desc: 'Components machined with aerospace tolerance to ensure reliability at extreme thermal limits.'
        },
        {
            icon: <Shield className="text-white" />,
            title: 'Exclusivity',
            desc: 'Limited production runs for collectors who value rarity as much as performance metrics.'
        }
    ]

    const leaders = [
        { name: 'Erik Vance', role: 'Chief Executive', color: 'primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu7X2NEZDkh_epMUas3XuRJUdifhUs7JvxLSuhLoMk3ItngIpX7cjdolCwW44SZNZigq-d689qN5IjfUywp7sUpx6h1qCukXJuWnEzLr1YpC1fCfALhiJZzuIoaLg4YiBe7v-ccHBpaBR8VNHiIO267a_50EhoEcPJYd6dqvX2WTFXlSQ0qi_QfnrkBaj5dhLSt8tm1leJVStJOwP8PpR8E93ZZ5v0qtgccmcrKeCQtJmAV5SuJr7W4iwtC_GBcAEfwxnDhBzwWN8' },
        { name: 'Elena Kross', role: 'Lead Propulsion', color: 'secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX5K32QfB8ThSBx3c4w8M45WV0UTEzEj9s8U59hI-BbjvgXw88RmD2ROgvfUxsrpd8OfDlCgVrwoOXp8HqXYGFRN0-q_lnFMEggoheGYs8UebqnIlXAtRBkmpzAr7tCQMPWjRrvqHD0Lx9yCVxWRYcNc5nPnrC9rg-nXpTrFHEtV2Li-h4el8QZcG1xWxtArBxazlmh4J8bsrtgt__NJw0FM7K94ZzEEqGi6US_JDMkqQNZHDiRlnocBVP7XY2muEvmz7_Jv10edc' },
        { name: 'Julian Thorne', role: 'Design Director', color: 'primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2l0i1GHYqjTFGC_ckdbphpamNq06RcaBk8JMpKhvP8VY3-q6liT4CEtjIOhgLtU2h8BekRjy8TrpUjNS1gu4rQ5D3gOkZKRSNNJw4O7XUapgDmNbK6fNSyZsX3Fa2yiGhsnM2cilAZj6PyxQv58bbjCDNisjMFtwfIJxQnCAJ71uUWujtFcrFwrNiVqWRwtt9O1vM2A9soaKDNKTYhbVkG4krgRR9q-qmd4JKynyGT2NtIUWqyvbx7uk3_gtOU7wv27BUq4klktw' },
        { name: 'Marcus Reid', role: 'Operations Head', color: 'secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi5KQOyDJ_ufj3gvlRUFttunQ7ALH9BF_ZUotwmglsUOITKu2xyunJ9RIfxIgORtF2x6ltK-eaxolZewgtOF9HSWz8PFkcGY-2m8SyWBRVIUUGfV790btZmgprQt7QpeclCyPxAmND3Ss0UOze51nWSwcDZOi6C0Yr_hR9G_oPwjX7-Tn_nhqyFJeLm_xrKaHUsRW-UBzku9XRyEL9qriBYUbBWOQ2uwsKTjNRbv5Gy93geyZ1Ej7HpOlkOgqu26nrpCtnw3gDB7w' }
    ]

    return (
        <div className="bg-background text-white font-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEfHK5_6nU3DRnxACKk5GCvg4WZUjGgbF3HGTu8ouyJaa-HhIg3_r6ra6pEhHkX7dK4P9gJQ1u4lAyyvReRt4cw_vKgAsqM_pi70DEMrw-hqTrprb0utUVj4eTqjsQ7kRcoCw3g_ncUhlBpq3rlrbSc-NRMK0uU5a05b9_MoFelOvhshbZov0USeJkj1c98lLLGA3aMJkmNWWBFOraTrVBF56zTYMCKqsKuXsFkHY19o8L0MfM3Ix5TwGHV8s_7BeUv0ASxSAoDA4" 
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                        alt="Hero background" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                
                <div className="relative z-10 px-8 md:px-20 max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                        className="inline-block mb-6 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
                    >
                        <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase">Est. 2024</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-8"
                    >
                        OUR MISSION: <br/>
                        <span className="text-primary drop-shadow-[0_0_30px_rgba(0,252,64,0.4)]">BEYOND VELOCITY</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        className="text-on-surface-variant text-lg md:text-2xl max-w-2xl font-bold uppercase tracking-widest leading-relaxed opacity-70"
                    >
                        We don't just build cars. We engineer visceral experiences that bridge the gap between human intuition and mechanical perfection.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-32 px-8 bg-surface-container-low border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-primary-container mb-12"></div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic">The Precision Narrative</h2>
                        <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-bold tracking-tight opacity-80 uppercase">
                            <p>Kinetic Motors was born from a singular obsession: the pursuit of the perfect drive. In an era of digital disconnection, we sought to restore the tactile, raw energy of the open road through surgical engineering.</p>
                            <p>Every curve of our chassis is sculpted by aerodynamics; every piston stroke is measured in microns. We believe that velocity is not just a measurement of speed, but a state of being where machine and pilot become a singular, focused entity.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-outline-variant/20 mt-12">
                            {stats.slice(0, 2).map((stat, idx) => (
                                <div key={idx}>
                                    <span className="block text-4xl font-black text-secondary tracking-tighter mb-1 italic">{stat.value}</span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-on-surface-variant opacity-60">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDthNo0HDS4_RegYokxrdpUbneenZe_QJHxT7-yRkB1RmDBqCoMeikbOf8MTU68oiW-qTLPIytBaJOiRWQEqXOi76LqxKNKoYre66wPvmqIgGufjZs02YceClp9qVjnmXfP16gh-6HGyU3uC9Po4CCHPL6S66DQn81uBm8mm5Ozx0iuNuL_RsJukqFxHpEozmw9Fqk_6EC-uqHofdf69hyrMFZ4IgZDc2rDbFDS2uUssew-_FmTQ7wtmVVNPJfAyrMDRW-K5mkaxWU" 
                                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                                alt="Engineering Lab"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-surface-container/80 backdrop-blur-xl p-10 rounded-2xl border border-white/5 hidden md:block max-w-sm shadow-2xl">
                            <p className="italic font-black text-xl text-primary leading-tight">"THE DIFFERENCE BETWEEN A MACHINE AND A SOUL IS THE SOUND IT MAKES AT 9,000 RPM."</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-40 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold tracking-[0.5em] uppercase text-sm mb-4 block">Philosophical DNA</span>
                        <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter italic">Core Principles</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {principles.map((p, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                                className="bg-surface-container p-12 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="mb-10 w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {React.cloneElement(p.icon, { size: 32 })}
                                </div>
                                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">{p.title}</h3>
                                <p className="text-on-surface-variant font-bold uppercase tracking-widest text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-40 px-8 bg-surface-container/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                        <div>
                            <span className="text-on-surface-variant font-bold tracking-widest uppercase text-sm opacity-60">The Visionaries</span>
                            <h2 className="text-6xl font-black uppercase tracking-tighter mt-4 italic leading-none">Architects of Speed</h2>
                        </div>
                        <p className="max-w-md text-on-surface-variant font-bold uppercase tracking-widest leading-relaxed text-right opacity-60 italic">
                            Bringing decades of heritage from F1 and aerospace engineering to the streets.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {leaders.map((leader, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className={`w-full aspect-square rounded-3xl overflow-hidden mb-8 border-2 ${leader.color === 'primary' ? 'border-primary/20 group-hover:border-primary' : 'border-secondary/20 group-hover:border-secondary'} transition-colors relative`}>
                                    <img src={leader.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={leader.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight italic mb-2">{leader.name}</h4>
                                <span className={`text-[10px] uppercase tracking-[0.4em] font-black ${leader.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>{leader.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
