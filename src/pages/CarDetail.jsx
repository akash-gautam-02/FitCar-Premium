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
        <div className="bg-background min-h-screen text-white overflow-x-hidden font-inter">
            {/* Navigation Overlay */}
            <div className="absolute top-12 left-6 md:left-20 z-30 flex items-center gap-6">
                <Link to="/listing" className="group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl glass-effect border border-white/10 flex items-center justify-center group-hover:border-primary transition-all duration-500">
                        <ArrowLeft size={20} className="text-white group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[0.65rem] font-poppins font-bold tracking-[0.3em] text-white/50 group-hover:text-white transition-colors uppercase">
                        BACK TO FLEET
                    </span>
                </Link>
            </div>
            {/* Hero Gallery Section */}
            <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                >
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent"></div>
                </motion.div>

                {/* Editorial Title Overlay */}
                <div className="absolute bottom-20 left-6 md:left-20 z-10 max-w-4xl">
                    <div className="space-y-8">
                        <motion.div 
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex items-center gap-5"
                        >
                            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-poppins font-bold text-[0.6rem] tracking-[0.4em] rounded-lg uppercase">
                                PERFORMANCE SERIES
                            </span>
                            <div className="h-[1px] w-20 bg-primary/30"></div>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-7xl md:text-9xl font-poppins font-bold tracking-tighter leading-[0.9] uppercase"
                        >
                            {car.name.split(' ').slice(0, -1).join(' ')} <br/>
                            <span className="text-primary italic">{car.name.split(' ').pop()}</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="text-on-surface-variant max-w-xl text-lg font-medium leading-relaxed opacity-70"
                        >
                            {car.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="relative z-20 px-6 md:px-20 lg:px-40 -mt-20 space-y-32 pb-48">
                
                {/* Specs Bento Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'PEAK POWER', value: car.power, icon: Zap, suffix: ' HP' },
                        { label: '0-60 MPH', value: car.acceleration, icon: Timer, suffix: ' S' },
                        { label: 'TOP VELOCITY', value: car.topSpeed, icon: Gauge, suffix: '' },
                        { label: 'ENGINE CONFIG', value: car.engine, icon: ShieldCheck, suffix: '' }
                    ].map((spec, i) => (
                        <motion.div 
                            key={i}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="glass-card p-10 flex flex-col justify-between min-h-[220px] group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <spec.icon className="text-primary group-hover:scale-110 transition-transform duration-500" size={28} />
                            </div>
                            <div>
                                <h4 className="text-on-surface-variant text-[0.6rem] font-poppins font-bold tracking-[0.3em] mb-3 opacity-40 uppercase">{spec.label}</h4>
                                <div className="text-4xl font-poppins font-bold tracking-tighter text-white">
                                    {spec.value}<span className="text-lg text-primary ml-1">{spec.suffix}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Ownership & EMI Section */}
                <section className="grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-10 pt-8">
                        <div className="space-y-4">
                            <span className="text-primary font-poppins font-bold text-[0.65rem] tracking-[0.5em] uppercase opacity-60">STRATEGIC INVESTMENT</span>
                            <h3 className="text-5xl font-poppins font-bold tracking-tighter leading-none uppercase">OWNERSHIP <br/> <span className="text-white/40">STRUCTURE.</span></h3>
                        </div>
                        <div className="p-12 glass-effect rounded-[2.5rem] border border-white/10 space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary/40 group-hover:bg-primary transition-colors duration-500"></div>
                            <div className="space-y-2">
                                <span className="text-on-surface-variant text-[0.6rem] font-poppins font-bold tracking-[0.2em] opacity-50 uppercase">MSRP STARTING AT</span>
                                <div className="text-6xl font-poppins font-bold tracking-tighter text-white">${car.price.toLocaleString()}</div>
                            </div>
                            <p className="text-[0.9rem] text-on-surface-variant font-medium leading-relaxed opacity-70">
                                Includes 4-year premium maintenance, 24/7 concierge trackside assistance, and global charging access for life.
                            </p>
                            <div className="pt-4">
                                <Link to={`/booking?carName=${encodeURIComponent(car.name)}`}>
                                    <Button className="w-full h-16 rounded-2xl" size="xl">PROCURE VEHICLE</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 glass-card p-12 space-y-12">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                <Calculator className="text-secondary" size={28} />
                            </div>
                            <h3 className="text-2xl font-poppins font-bold tracking-tight text-white uppercase">EMI PRECISION CALCULATOR</h3>
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex justify-between text-[0.65rem] font-poppins font-bold tracking-[0.2em] uppercase">
                                    <span className="text-on-surface-variant/60">DOWN PAYMENT</span>
                                    <span className="text-primary">${downPayment.toLocaleString()}</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="20000" 
                                    max={car.price * 0.8} 
                                    step="5000"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(parseInt(e.target.value))}
                                    className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary" 
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between text-[0.65rem] font-poppins font-bold tracking-[0.2em] uppercase">
                                    <span className="text-on-surface-variant/60">OPERATIONAL TENURE</span>
                                    <span className="text-primary">{tenure} MONTHS</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="12" 
                                    max="84" 
                                    step="12"
                                    value={tenure}
                                    onChange={(e) => setTenure(parseInt(e.target.value))}
                                    className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary" 
                                />
                            </div>
                        </div>
                        <div className="pt-12 border-t border-white/5 flex flex-wrap justify-between items-center gap-8">
                            <div className="space-y-2">
                                <span className="text-on-surface-variant text-[0.6rem] font-poppins font-bold tracking-[0.2em] opacity-50 uppercase">ESTIMATED MONTHLY</span>
                                <div className="text-6xl font-poppins font-bold tracking-tighter text-white">
                                    ${monthlyPayment.toLocaleString()}
                                    <span className="text-sm font-medium text-on-surface-variant tracking-normal ml-3 opacity-40">/MO</span>
                                </div>
                            </div>
                            <Link to={`/booking?carName=${encodeURIComponent(car.name)}`}>
                                <Button variant="secondary" size="lg" className="px-12 h-16 rounded-2xl">INITIATE APPLICATION</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Technical Specs Table */}
                <section className="space-y-20">
                    <div className="text-center space-y-6">
                        <span className="text-secondary font-poppins font-bold text-[0.65rem] tracking-[0.5em] uppercase opacity-60">MECHANICAL DATA</span>
                        <h2 className="text-5xl font-poppins font-bold tracking-tighter text-white uppercase underline decoration-primary/30 underline-offset-[16px] decoration-2">PERFORMANCE <span className="text-white/40">TELEMETRY.</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-24 gap-y-4 max-w-6xl mx-auto">
                        {[
                            { label: 'TRANSMISSION', value: car.transmission },
                            { label: 'CONFIGURATION', value: car.engine },
                            { label: 'CURB WEIGHT', value: '1525 KG' },
                            { label: 'EFFICIENCY', value: '98%' },
                            { label: 'SEATING CAPACITY', value: '2 OPERATIVES' },
                            { label: 'INTERIOR MATERIAL', value: car.interiorColor },
                            { label: 'EXTERIOR FINISH', value: car.exteriorColor },
                            { label: 'WARRANTY PERIOD', value: '100,000 MI' }
                        ].map((spec, i) => (
                            <div key={i} className="flex justify-between items-center py-8 border-b border-white/5 group hover:border-primary/20 transition-all duration-500">
                                <span className="text-on-surface-variant text-[0.7rem] font-poppins font-bold tracking-[0.2em] opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all uppercase">{spec.label}</span>
                                <span className="text-white font-poppins font-bold tracking-tight text-lg uppercase">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Review Section */}
                <section className="space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-12">
                        <div className="space-y-5">
                           <span className="text-primary font-poppins font-bold text-[0.65rem] tracking-[0.5em] uppercase opacity-60">OPERATOR REVIEWS</span>
                           <h2 className="text-5xl font-poppins font-bold text-white uppercase tracking-tighter">DRIVER <span className="text-white/40">INTELLIGENCE.</span></h2>
                        </div>
                        <div className="flex items-center gap-6 glass-effect px-10 py-5 rounded-[2rem] border border-white/10">
                            <div className="flex text-primary gap-1">
                                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <span className="text-3xl font-poppins font-bold tracking-tighter">4.9<span className="text-sm opacity-40 ml-1">/5</span></span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'MARCUS V.', role: 'TECH OPERATIVE', text: "The acceleration is absolute. It feels like warping through the kinetic grid in real-time." },
                            { name: 'SARAH L.', role: 'PRECISION DRIVER', text: "Finally a machine that doesn't just calculate speed, but manifests it through pure feedback." },
                            { name: 'JASON D.', role: 'ARCHITECT', text: "The interior geometry is a masterclass in minimalism and focus. Every touchpoint is deliberate." }
                        ].map((rev, i) => (
                            <div key={i} className="p-12 glass-card space-y-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                                <div className="text-primary/5 absolute -top-10 -right-10 rotate-12 group-hover:text-primary/10 transition-colors duration-500">
                                    <Star size={180} fill="currentColor" />
                                </div>
                                <p className="text-xl font-medium text-white/90 leading-tight relative z-10">"{rev.text}"</p>
                                <div className="flex items-center gap-5 relative z-10 pt-8 border-t border-white/10">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-poppins font-bold text-primary">
                                        {rev.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-poppins font-bold text-sm tracking-wide">{rev.name}</div>
                                        <div className="text-[0.6rem] text-primary/60 font-poppins font-bold tracking-[0.2em] uppercase">{rev.role}</div>
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
