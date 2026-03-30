import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Timer, Gauge, Battery, ShieldCheck, Star, ArrowRight, Info, Calculator } from 'lucide-react'
import Button from '../components/ui/Button'
import carsData from '../data/cars.json'
import useVehicleStore from '../store/useVehicleStore'

const CarDetail = () => {
    const { id } = useParams()
    const car = carsData.find((c) => c.id === id)
    const { wishlist, toggleWishlist } = useVehicleStore()
    
    // EMI Calculator State
    const [downPayment, setDownPayment] = useState(45000)
    const [tenure, setTenure] = useState(48)
    const interestRate = 0.05 // 5%

    const monthlyPayment = useMemo(() => {
        if (!car) return 0
        const principal = car.price - downPayment
        const monthlyRate = interestRate / 12
        const x = Math.pow(1 + monthlyRate, tenure)
        const monthly = (principal * x * monthlyRate) / (x - 1)
        return Math.round(monthly)
    }, [car, downPayment, tenure])

    if (!car) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-black text-white italic mb-4">VEHICLE LOG NOT FOUND</h1>
                <Link to="/listing">
                    <Button variant="primary">RETURN TO INVENTORY</Button>
                </Link>
            </div>
        )
    }

    const isWishlisted = wishlist.includes(car.id)

    return (
        <div className="bg-background min-h-screen font-black text-white uppercase tracking-widest overflow-x-hidden">
            {/* Hero Gallery Section */}
            <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                </motion.div>

                {/* Editorial Title Overlay */}
                <div className="absolute bottom-12 left-6 md:left-20 z-10 max-w-4xl space-y-6">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        <span className="px-3 py-1 bg-primary text-background font-black text-[0.7rem] tracking-[0.3em] rounded-sm italic">
                            2024 PERFORMANCE SERIES
                        </span>
                        <div className="h-[1px] w-24 bg-primary/40"></div>
                    </motion.div>
                    <motion.h1 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85]"
                    >
                        {car.name.split(' ').pop()} <br/>
                        <span className="text-secondary italic">EDITION</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-on-surface-variant max-w-xl text-sm font-bold tracking-widest leading-relaxed normal-case"
                    >
                        {car.description}
                    </motion.p>
                </div>
                
                {/* Back Link */}
                <Link to="/listing" className="absolute top-12 left-6 md:left-20 z-20 flex items-center gap-3 text-[0.7rem] hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all">
                        <ArrowLeft size={16} />
                    </div>
                   <span className="opacity-60 group-hover:opacity-100 transition-opacity">GO BACK TO COLLECTION</span>
                </Link>
            </section>

            {/* Main Content */}
            <main className="relative z-20 px-6 md:px-20 lg:px-40 -mt-20 space-y-32 pb-48">
                
                {/* Specs Bento Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Peak Power', value: car.power, icon: Zap, suffix: 'HP' },
                        { label: '0-60 MPH', value: car.acceleration, icon: Timer, suffix: '' },
                        { label: 'Top Velocity', value: car.topSpeed, icon: Gauge, suffix: '' },
                        { label: 'Engine Config', value: car.engine, icon: ShieldCheck, suffix: '' }
                    ].map((spec, i) => (
                        <motion.div 
                            key={i}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-surface-highest/10 backdrop-blur-3xl border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between min-h-[200px] group hover:border-primary/20 transition-all"
                        >
                            <spec.icon className="text-secondary group-hover:scale-110 transition-transform" size={32} />
                            <div>
                                <h4 className="text-on-surface-variant text-[0.6rem] font-black tracking-widest mb-2 opacity-60">{spec.label}</h4>
                                <div className="text-3xl font-black italic tracking-tighter text-white">
                                    {spec.value}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Ownership & EMI Section */}
                <section className="grid lg:grid-cols-12 gap-20 items-start">
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-primary text-[0.7rem] font-black tracking-[0.4em] kinetic-asymmetry">STRATEGIC INVESTMENT</h2>
                            <h3 className="text-5xl font-black italic tracking-tighter leading-none">OWNERSHIP <br/> <span className="text-on-surface-variant">STRUCTURE</span></h3>
                        </div>
                        <div className="p-10 bg-surface-highest/5 rounded-[3rem] border-l-4 border-primary space-y-6">
                            <div className="space-y-1">
                                <span className="text-on-surface-variant text-[0.65rem] opacity-60">MSRP STARTING AT</span>
                                <div className="text-5xl font-black italic tracking-tighter text-white">${car.price.toLocaleString()}</div>
                            </div>
                            <p className="text-[0.75rem] text-on-surface-variant font-bold normal-case leading-relaxed opacity-80">
                                Includes 4-year premium maintenance, 24/7 concierge trackside assistance, and global charging access for life.
                            </p>
                            <div className="pt-6">
                                <Button className="w-full" size="xl">PROCURE VEHICLE</Button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-surface-highest/10 rounded-[3rem] p-12 border border-white/5 backdrop-blur-xl space-y-12">
                        <div className="flex items-center gap-4">
                            <Calculator className="text-secondary" size={28} />
                            <h3 className="text-2xl font-black italic tracking-tighter text-white">EMI PRECISION CALCULATOR</h3>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex justify-between text-[0.7rem] font-black tracking-widest">
                                    <span className="text-on-surface-variant">DOWN PAYMENT</span>
                                    <span className="text-primary">${downPayment.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="20000" 
                                    max={car.price * 0.8} 
                                    step="5000"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(parseInt(e.target.value))}
                                    className="w-full h-1 bg-surface-highest/20 rounded-full appearance-none cursor-pointer accent-primary" 
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between text-[0.7rem] font-black tracking-widest">
                                    <span className="text-on-surface-variant">OPERATIONAL TENURE</span>
                                    <span className="text-primary">{tenure} MONTHS</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="12" 
                                    max="84" 
                                    step="12"
                                    value={tenure}
                                    onChange={(e) => setTenure(parseInt(e.target.value))}
                                    className="w-full h-1 bg-surface-highest/20 rounded-full appearance-none cursor-pointer accent-primary" 
                                />
                            </div>
                        </div>
                        <div className="pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-8">
                            <div className="space-y-1">
                                <span className="text-on-surface-variant text-[0.6rem] opacity-60">ESTIMATED MONTHLY</span>
                                <div className="text-5xl font-black italic tracking-tighter text-white">
                                    ${monthlyPayment.toLocaleString()}
                                    <span className="text-sm font-bold text-on-surface-variant tracking-normal ml-2">/MO</span>
                                </div>
                            </div>
                            <Button variant="secondary" size="lg" className="px-12">INITIATE APPLICATION</Button>
                        </div>
                    </div>
                </section>

                {/* Technical Specs Table */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-secondary text-[0.7rem] tracking-[0.4em]">MECHANICAL DATA</span>
                        <h2 className="text-4xl font-black italic text-white underline decoration-primary/40 underline-offset-8">PERFORMANCE TELEMETRY</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-32 gap-y-4 max-w-5xl mx-auto">
                        {[
                            { label: 'Transmission', value: car.transmission },
                            { label: 'Configuration', value: car.engine },
                            { label: 'Curb Weight', value: '1525 KG' },
                            { label: 'Efficiency', value: '98%' },
                            { label: 'Seating Capacity', value: '2 Operatives' },
                            { label: 'Interior Material', value: car.interiorColor },
                            { label: 'Exterior Finish', value: car.exteriorColor },
                            { label: 'Warranty Period', value: '100,000 MI' }
                        ].map((spec, i) => (
                            <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-white/20 transition-all">
                                <span className="text-on-surface-variant text-[0.75rem] font-bold opacity-60 group-hover:opacity-100">{spec.label}</span>
                                <span className="text-white font-black tracking-tight italic">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="space-y-16">
                    <div className="flex justify-between items-end gap-8 border-b border-white/5 pb-10">
                        <div className="space-y-4">
                           <span className="text-primary text-[0.7rem] tracking-[0.4em]">OPERATOR REVIEWS</span>
                           <h2 className="text-5xl font-black text-white italic tracking-tighter">DRIVER <span className="text-on-surface-variant">INTELLIGENCE</span></h2>
                        </div>
                        <div className="flex items-center gap-4 bg-surface-highest/10 px-8 py-4 rounded-3xl border border-white/5">
                            <div className="flex text-primary">
                                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter">4.9/5</span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: 'MARCUS V.', role: 'TECH OPERATIVE', text: "The acceleration is absolute. It feels like warping through the kinetic grid in real-time." },
                            { name: 'SARAH L.', role: 'PRECISION DRIVER', text: "Finally a machine that doesn't just calculate speed, but manifests it through pure feedback." },
                            { name: 'JASON D.', role: 'ARCHITECT', text: "The interior geometry is a masterclass in minimalism and focus. Every touchpoint is deliberate." }
                        ].map((rev, i) => (
                            <div key={i} className="p-10 bg-surface-highest/5 rounded-[3rem] border border-white/5 space-y-8 relative overflow-hidden group hover:border-primary/20 transition-all">
                                <div className="text-primary opacity-20 absolute -top-4 -right-4">
                                    <Star size={120} fill="currentColor" />
                                </div>
                                <p className="text-xl italic text-on-surface font-black normal-case leading-tight relative z-10 opacity-80 group-hover:opacity-100">"{rev.text}"</p>
                                <div className="flex items-center gap-6 relative z-10 pt-4 border-t border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-surface-highest/20 border border-white/10" />
                                    <div>
                                        <div className="text-white font-black text-sm">{rev.name}</div>
                                        <div className="text-[0.6rem] text-on-surface-variant font-bold opacity-60 tracking-[0.2em]">{rev.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Sticky CTA - Mobile/Tablet Only */}
            <div className="fixed bottom-32 right-8 z-50 lg:hidden pointer-events-none">
                <Button className="pointer-events-auto rounded-full w-20 h-20 p-0 flex items-center justify-center shadow-luxury-float group" size="xl">
                   <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    )
}

export default CarDetail
