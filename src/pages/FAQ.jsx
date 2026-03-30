import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle, Terminal, HelpCircle, Shield, CreditCard, Tool, Zap } from 'lucide-react';
import Button from '../components/ui/Button';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How is a Kinetic motor different?",
      answer: "Our propulsion systems utilize a patented Axial Flux architecture combined with room-temperature superconductive winding. This results in a 40% increase in power density over traditional radial flux motors while maintaining 98.7% thermal efficiency under maximum load.",
      category: "Performance",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "What is the wait time for a custom build?",
      answer: "Bespoke configurations currently have a trajectory of 12-16 weeks. This timeline ensures each unit undergoes our signature 48-hour continuous stress test and hand-finishing of all interior carbon components.",
      category: "Acquisition",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      question: "What charging networks are supported?",
      answer: "Kinetic vehicles are equipped with universal high-voltage rectifiers, compatible with all major global DC fast-charging networks. Our proprietary Kinetic Supercharge hubs provide a 10-80% delta in just 12 minutes.",
      category: "Maintenance",
      icon: <Tool className="w-5 h-5" />
    },
    {
      question: "Does Kinetic offer localized track support?",
      answer: "Yes. Our 'Track-Side Link' program provides real-time telemetry monitoring from our Hub Alpha engineers during your sessions, along with physical support teams available at major international circuits.",
      category: "Performance",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      question: "How does the quantum encryption protect my data?",
      answer: "All vehicle-to-cloud transmissions are secured using post-quantum cryptographic algorithms. This ensures your driving telemetry and personal identifiers remain invisible to external surveillance entities.",
      category: "Security",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover scale-105" 
            src="/assets/images/showroom.png" 
            alt="FAQ Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface/60">Systems Support</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="display-lg mb-8"
            >
              Knowledge <span className="text-primary">Base</span>
            </motion.h1>

            {/* Search Field */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl group"
            >
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-on-surface/40 group-focus-within:text-primary transition-colors">
                <Search size={22} strokeWidth={1.5} />
              </div>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/10 focus:border-primary/50 backdrop-blur-xl rounded-2xl py-6 pl-16 pr-8 text-on-surface placeholder:text-on-surface/40 transition-all outline-none body-lg" 
                placeholder="Search queries, technical specs, and protocols..." 
                type="text"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-6 mx-auto py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card p-8 rounded-3xl sticky top-32">
              <h3 className="headline-md mb-6">Quick Hubs</h3>
              <div className="space-y-4">
                {['Performance', 'Acquisition', 'Maintenance', 'Security'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSearchQuery(cat === searchQuery ? '' : cat)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${searchQuery.toLowerCase() === cat.toLowerCase() ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white/5 border-white/5 text-on-surface/60 hover:border-white/10 hover:text-on-surface'}`}
                  >
                    <span className="font-bold tracking-tight">{cat}</span>
                    <Plus size={16} />
                  </button>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-on-surface">Live Support</h4>
                </div>
                <p className="body-md mb-6">Our engineering team is active. Expect a response delta of &lt; 5 minutes.</p>
                <Button variant="outline" className="w-full bg-black/20">Initialize Chat</Button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${activeIndex === idx ? 'glass-card border-primary/30 bg-primary/5 shadow-primary/10' : 'bg-surface-highest/20 border-white/5 hover:border-white/10 cursor-pointer'}`}
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
              >
                <div className="p-8 flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-primary text-black' : 'bg-white/5 text-on-surface/40 group-hover:bg-white/10'}`}>
                    {faq.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="label-md opacity-40">{faq.category}</span>
                      {activeIndex === idx && <motion.div layoutId="dot" className="w-1 h-1 rounded-full bg-primary" />}
                    </div>
                    <h3 className="headline-md normal-case leading-tight text-on-surface">{faq.question}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-500 ${activeIndex === idx ? 'rotate-180 bg-primary/20 text-primary' : 'text-on-surface/40'}`}>
                    {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-10 ml-18 border-t border-white/5 pt-6">
                        <p className="body-lg text-on-surface/70">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 glass-card rounded-[3rem]"
              >
                <Terminal size={64} className="mx-auto mb-6 text-primary/20" />
                <h3 className="headline-md mb-2 text-on-surface">No results found</h3>
                <p className="body-lg opacity-40 italic">System failed to find entry for: "{searchQuery}"</p>
                <Button 
                  onClick={() => setSearchQuery('')}
                  variant="outline" 
                  className="mt-8"
                >
                  Reset Parameters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-6 mx-auto py-32 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-card p-12 md:p-24 rounded-[4rem] overflow-hidden group"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full group-hover:bg-primary/10 transition-colors duration-700"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full group-hover:bg-secondary/10 transition-colors duration-700"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-8 shadow-luxury-box">
              <MessageCircle size={40} className="text-primary" />
            </div>
            <h2 className="display-md mb-8 italic text-on-surface">Still have <br/><span className="text-primary not-italic">Questions?</span></h2>
            <p className="body-lg mb-12 text-on-surface/60">Our technical concierge team is available 24/7 to provide deep telemetry insights and configuration assistance for your machine.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto px-12 h-16 group">
                <span className="mr-2">Protocol Command</span>
                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 h-16 text-on-surface">
                Download Specs
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default FAQ;
