import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, Terminal, MessageCircle } from 'lucide-react'
import Button from '../components/ui/Button'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')

    const faqs = [
        {
            question: "How is a Kinetic motor different?",
            answer: "Our propulsion systems utilize a patented Axial Flux architecture combined with room-temperature superconductive winding. This results in a 40% increase in power density over traditional radial flux motors while maintaining 98.7% thermal efficiency under maximum load.",
            category: "Performance"
        },
        {
            question: "What is the wait time for a custom build?",
            answer: "Bespoke configurations currently have a trajectory of 12-16 weeks. This timeline ensures each unit undergoes our signature 48-hour continuous stress test and hand-finishing of all interior carbon components.",
            category: "Acquisition"
        },
        {
            question: "What charging networks are supported?",
            answer: "Kinetic vehicles are equipped with universal high-voltage rectifiers, compatible with all major global DC fast-charging networks. Our proprietary Kinetic Supercharge hubs provide a 10-80% delta in just 12 minutes.",
            category: "Maintenance"
        },
        {
            question: "Does Kinetic offer localized track support?",
            answer: "Yes. Our 'Track-Side Link' program provides real-time telemetry monitoring from our Hub Alpha engineers during your sessions, along with physical support teams available at major international circuits.",
            category: "Performance"
        },
        {
            question: "How does the quantum encryption protect my data?",
            answer: "All vehicle-to-cloud transmissions are secured using post-quantum cryptographic algorithms. This ensures your driving telemetry and personal identifiers remain invisible to external surveillance entities.",
            category: "Security"
        }
    ]

    const filteredFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="bg-background text-white font-black overflow-hidden pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden bg-surface-container-lowest">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLkqO0OTt58i-qfiuaY9ICuQaM3pfinFdBUj6AiEOBbQTBx4klNTnim8MavdDO3XRmMnSowZR2XKKS9XrCf1vprDq5PQLP7Do21r54lG_O4w7y7WzwJ9IK-UbeJQ5b6DjRPFM558MdeBteNHzIdMB1mufclQklPzsdQP2YNAyCa7YPj6EGx2itpaB67x6KnngNCA08Nt8YOvV8vXMdAaMTzXUnjXraa40QOgCcVjO9aBfUJ4v7VD4yrWyd-7J-1uGmMgubOCzgqJQ" 
                        alt="FAQ Hero" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-block bg-primary/10 border border-primary/20 px-5 py-2 rounded-full mb-8">
                        <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">SYSTEMS SUPPORT</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-10 leading-none italic"
                    >
                        OPERATIONAL<br/>
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(0,252,64,0.4)]">GUIDANCE</span>
                    </motion.h2>

                    {/* Search Field */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                        className="w-full max-w-2xl relative"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={24} />
                        <input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface-container/60 backdrop-blur-xl border border-white/10 rounded-2xl py-7 pl-16 pr-8 text-on-surface placeholder:text-on-surface-variant focus:border-primary transition-all outline-none font-bold uppercase tracking-widest text-lg" 
                            placeholder="SEARCH KNOWLEDGE BASE..." 
                            type="text"
                        />
                    </motion.div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
                <div className="space-y-6">
                    {filteredFaqs.map((faq, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-3xl border-l-[6px] transition-all overflow-hidden ${activeIndex === idx ? 'bg-surface-container border-primary shadow-2xl' : 'bg-surface-container-low border-white/5 hover:border-primary/50 cursor-pointer'}`}
                            onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                        >
                            <div className="p-10 flex justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary opacity-60 font-black">{faq.category}</span>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic">{faq.question}</h3>
                                </div>
                                <div className={`p-4 rounded-2xl bg-white/5 transition-transform duration-500 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                                    {activeIndex === idx ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
                                </div>
                            </div>
                            
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <div className="px-10 pb-12 pt-4">
                                            <div className="p-[2px] bg-gradient-to-r from-primary/20 to-transparent mb-8"></div>
                                            <p className="text-on-surface-variant text-xl leading-relaxed max-w-4xl font-bold uppercase tracking-widest opacity-80 italic">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-20 opacity-40">
                            <Terminal size={64} className="mx-auto mb-6 text-primary" />
                            <p className="text-2xl uppercase tracking-tighter italic">NO DATA MATCHES FOUND FOR: "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-8 md:px-24 mb-20">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    className="bg-gradient-to-br from-surface-container-highest to-surface-container-lowest p-20 md:p-32 rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center shadow-2xl border border-white/5"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full"></div>
                    
                    <div className="relative z-10">
                        <MessageCircle size={80} className="text-primary mb-12 mx-auto drop-shadow-[0_0_20px_rgba(0,252,64,0.4)]" />
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none italic">STILL HAVE <br/><span className="text-primary">QUESTIONS?</span></h2>
                        <p className="text-on-surface-variant text-2xl max-w-2xl mb-16 font-bold uppercase tracking-widest opacity-60">Our engineering team is available 24/7 to provide technical telemetry and bespoke configuration assistance.</p>
                        <button className="bg-primary text-black font-black px-16 py-7 rounded-2xl text-xl tracking-widest uppercase hover:scale-[1.05] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,252,64,0.3)] flex items-center gap-4">
                            CONTACT CONCIERGE
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default FAQ
