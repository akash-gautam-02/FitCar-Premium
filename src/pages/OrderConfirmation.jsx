import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = () => {
    const navigate = useNavigate()

    const orderId = 'KD-8829-XL0-91'
    const estDelivery = 'NOV 24, 2024'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
            {/* Hero Section: Kinetic Monolith Style */}
            <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col items-center text-center mb-16 relative"
            >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] h-[500px] opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-b from-primary via-transparent to-transparent blur-[120px]"></div>
                </div>

                <motion.div 
                    variants={itemVariants}
                    className="mb-6 inline-flex items-center justify-center p-4 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_40px_rgba(0,255,65,0.15)]"
                >
                    <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase text-on-background mb-2 leading-none"
                >
                    MISSION ACQUIRED
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-on-surface-variant font-label tracking-widest uppercase text-sm mb-12"
                >
                    System Synchronized • Unit Allocated
                </motion.p>

                {/* Asymmetric Hero Visual */}
                <motion.div 
                    variants={itemVariants}
                    className="relative w-full aspect-[21/9] rounded-lg overflow-hidden bg-surface-container-low mb-12 border border-outline-variant/10 shadow-2xl"
                >
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vXj8jQd6e-QkWp8Mv5AstBoQx7f18r3LHUpgijtvASx4RO-fSoRg0R6syZaNYORshC4z9bZiBoplx6Gjhfi-VlpYq9S1DXYKxx9R2yVjo2WEyLzyuaxLnPJexnrNMmuo3XyKSzmwldy5a1gpCKxT3tutvBVxrnM21X0vsbAEMjGoFtbMaGEL6v4EgsXpMt8luUaRO-lRHb6cwEQglfW5N0l4bhnPzzgPmNMRcriBl_UPE0I97BObwSYLuSp7hQx_FQcSY9kLZAM" 
                        alt="Cyberpunk sleek supercar" 
                        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-left">
                        <span className="block text-primary font-black text-4xl italic tracking-tighter">CONFIRMED</span>
                        <span className="text-on-surface-variant text-xs uppercase tracking-[0.2em]">Batch 01 // Unit 4492-X</span>
                    </div>
                </motion.div>
            </motion.section>

            {/* Bento Grid Details */}
            <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mb-16"
            >
                {/* Order Status Card */}
                <motion.div 
                    variants={itemVariants}
                    className="md:col-span-8 bg-surface-container p-8 rounded-lg flex flex-col justify-between group transition-all duration-300 hover:bg-surface-bright border border-outline-variant/10"
                >
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h3 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Order Identification</h3>
                            <p className="text-3xl font-bold font-headline tracking-tight text-on-surface">{orderId}</p>
                        </div>
                        <div className="text-right">
                            <h3 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">Est. Delivery</h3>
                            <p className="text-3xl font-bold font-headline tracking-tight text-secondary">{estDelivery}</p>
                        </div>
                    </div>
                    <div className="relative h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '33%' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_15px_rgba(0,255,65,0.5)]"
                        ></motion.div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <span className="text-[10px] uppercase font-bold text-primary">Order Placed</span>
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant">Production</span>
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant">Logistics</span>
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant">Arrival</span>
                    </div>
                </motion.div>

                {/* Technical Data Card */}
                <motion.div 
                    variants={itemVariants}
                    className="md:col-span-4 bg-surface-container-low p-8 rounded-lg border border-outline-variant/10"
                >
                    <h3 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-6">Unit Specs</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                            <span className="text-on-surface-variant text-sm">Output</span>
                            <span className="text-secondary font-bold">1,020 HP</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                            <span className="text-on-surface-variant text-sm">0-60 MPH</span>
                            <span className="text-secondary font-bold">1.99s</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                            <span className="text-on-surface-variant text-sm">Colorway</span>
                            <span className="text-on-surface font-bold uppercase">Obsidian Matte</span>
                        </div>
                    </div>
                </motion.div>

                {/* Next Steps Glass Card */}
                <motion.div 
                    variants={itemVariants}
                    className="md:col-span-12 bg-surface-container-highest/50 backdrop-blur-xl p-8 rounded-lg border border-primary/10"
                >
                    <h3 className="text-primary text-sm uppercase tracking-[0.3em] font-black mb-8">System Pre-Activation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-outline-variant/10 hover:border-primary/40 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary">key</span>
                            </div>
                            <div>
                                <h4 className="text-on-surface font-bold text-lg mb-1">Digital Key Activation</h4>
                                <p className="text-on-surface-variant text-sm">Link your mobile device to the vehicle mainframe for biometric access.</p>
                            </div>
                            <span className="material-symbols-outlined text-on-surface-variant ml-auto group-hover:text-primary transition-colors">chevron_right</span>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-outline-variant/10 hover:border-secondary/40 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-secondary">shield</span>
                            </div>
                            <div>
                                <h4 className="text-on-surface font-bold text-lg mb-1">Insurance Sync</h4>
                                <p className="text-on-surface-variant text-sm">Connect your policy for real-time telemetry-based premium adjustments.</p>
                            </div>
                            <span className="material-symbols-outlined text-on-surface-variant ml-auto group-hover:text-secondary transition-colors">chevron_right</span>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Final CTAs */}
            <motion.section 
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col md:flex-row gap-4 justify-center items-center pb-20"
            >
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="w-full md:w-auto px-12 py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-black uppercase tracking-tighter text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,65,0.3)]"
                >
                    GO TO HANGAR
                </button>
                <button className="w-full md:w-auto px-12 py-5 rounded-xl bg-surface-container-highest border border-outline-variant/30 text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-bright transition-colors">
                    SHARE STATUS
                </button>
            </motion.section>
        </div>
    )
}

export default OrderConfirmation
