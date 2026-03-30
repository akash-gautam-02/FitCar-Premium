import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Zap, Timer, Gauge, Shield, Table, X, Plus, 
  RotateCcw, Download, Info, Check, Search as SearchIcon,
  Sparkles, Layers, Box, Cpu, Activity
} from 'lucide-react';
import useStore from '../store/useStore';
import carsData from '../data/cars.json';
import Button from '../components/ui/Button';

const Compare = () => {
    const navigate = useNavigate();
    const { compareList, removeFromCompare, clearCompare, addToCompare } = useStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);

    const filteredCars = carsData.filter(car => 
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !compareList.find(c => c.id === car.id)
    );

    const specRows = [
        { label: 'Category', key: 'category', icon: Box },
        { label: 'Power Unit', key: 'engine', icon: Zap },
        { label: 'Peak Output', key: 'power', icon: Cpu },
        { label: '0-60 Velocity', key: 'acceleration', icon: Timer },
        { label: 'Terminal Speed', key: 'topSpeed', icon: Gauge },
        { label: 'Gearbox', key: 'transmission', icon: Activity },
        { label: 'Operational Price', key: 'price', format: (val) => `$${val.toLocaleString()}`, highlight: true, icon: Shield },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-luxury-box">
                              <Layers size={24} />
                           </div>
                           <span className="label-md text-primary opacity-60">Comparative Analytics</span>
                        </div>
                        <h1 className="display-lg normal-case leading-none mb-6 text-on-surface">
                          Matrix <span className="text-secondary italic">Analysis</span>
                        </h1>
                        <p className="body-lg text-on-surface/40 max-w-xl">
                          Synchronizing telemetry across <span className="text-on-surface font-bold">{compareList.length}</span> active units. Real-time engineering dossiers compiled for side-by-side evaluation.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4"
                    >
                        {compareList.length > 0 && (
                            <Button 
                                variant="outline"
                                onClick={clearCompare}
                                className="px-8 h-14 rounded-2xl border-white/10 text-on-surface/60 hover:text-error hover:border-error/30"
                            >
                                Reset Matrix
                            </Button>
                        )}
                        <Link to="/listing">
                            <Button size="lg" className="px-10 h-14 rounded-2xl flex items-center gap-2 group">
                                <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                                Add Unit
                            </Button>
                        </Link>
                    </motion.div>
                </header>

                {/* Selection Slots */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                    {[0, 1, 2].map((idx) => {
                        const car = compareList[idx];
                        return (
                            <div key={idx} className="relative">
                                <AnimatePresence mode="wait">
                                    {car ? (
                                        <motion.div 
                                            key={`slot-${car.id}`}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ scale: 0.9, opacity: 0 }}
                                            className="glass-card p-8 rounded-[3rem] border border-primary/20 relative overflow-hidden group hover:shadow-primary/5 transition-all"
                                        >
                                            <div className="absolute top-6 right-6 z-20">
                                                <motion.button 
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => removeFromCompare(car.id)}
                                                    className="w-10 h-10 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface-variant hover:bg-error hover:text-white transition-all shadow-xl"
                                                >
                                                    <X size={18} />
                                                </motion.button>
                                            </div>
                                            
                                            <div className="relative z-10 flex flex-col items-center">
                                                <div className="h-40 flex items-center justify-center mb-8 relative w-full">
                                                    <img 
                                                       src={car.image} 
                                                       alt={car.name} 
                                                       className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 drop-shadow-luxury" 
                                                    />
                                                </div>
                                                <div className="text-center space-y-1">
                                                   <span className="label-md text-secondary opacity-40 italic tracking-widest">UNIT_0{idx + 1}</span>
                                                   <h3 className="headline-md normal-case text-on-surface">{car.name}</h3>
                                                   <p className="label-md opacity-30">{car.brand}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-all"></div>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key={`empty-${idx}`}
                                            className="p-8 rounded-[3rem] border border-dashed border-white/10 bg-white/2 flex flex-col items-center justify-center min-h-[320px] relative transition-all duration-500 hover:border-primary/40 hover:bg-white/5"
                                        >
                                            {!isSearchActive ? (
                                                <div className="flex flex-col items-center gap-6 text-center">
                                                    <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/5 flex items-center justify-center text-on-surface/20 group-hover:text-primary transition-colors">
                                                        <Plus size={32} />
                                                    </div>
                                                    <div className="space-y-2">
                                                       <p className="label-md text-on-surface/30 tracking-widest uppercase">Await Selection</p>
                                                       <Button 
                                                          variant="ghost"
                                                          onClick={() => setIsSearchActive(true)}
                                                          className="text-primary hover:text-primary transition-all rounded-full h-10 px-6 border-white/5"
                                                       >
                                                          Uplink Machine
                                                       </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="w-full space-y-4">
                                                    <div className="relative">
                                                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                                                        <input 
                                                            autoFocus
                                                            type="text" 
                                                            placeholder="SEARCH_MODEL..." 
                                                            className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-4 label-md text-on-surface focus:ring-1 focus:ring-primary transition-all outline-none"
                                                            onChange={(e) => setSearchTerm(e.target.value)}
                                                            onBlur={() => !searchTerm && setIsSearchActive(false)}
                                                        />
                                                    </div>
                                                    <div className="max-h-48 overflow-y-auto custom-scrollbar space-y-2 p-1">
                                                        {filteredCars.map(c => (
                                                            <button 
                                                                key={c.id} 
                                                                onClick={() => {
                                                                    addToCompare(c);
                                                                    setSearchTerm('');
                                                                    setIsSearchActive(false);
                                                                }}
                                                                className="w-full p-3 rounded-xl bg-white/5 hover:bg-primary/20 hover:text-primary transition-all text-left flex items-center gap-3 border border-white/5"
                                                            >
                                                                <img src={c.image} className="w-10 h-10 object-contain p-1 bg-black/40 rounded-lg border border-white/5" alt="icon" />
                                                                <div className="flex flex-col">
                                                                    <span className="label-md text-on-surface">{c.name}</span>
                                                                    <span className="label-sm opacity-40 uppercase tracking-tighter">{c.brand}</span>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <Button 
                                                        variant="ghost"
                                                        onClick={() => setIsSearchActive(false)}
                                                        className="w-full text-on-surface/40 hover:text-error h-10 rounded-xl"
                                                    >
                                                        Abort
                                                    </Button>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Comparison Matrix */}
                {compareList.length > 0 ? (
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3 }}
                       className="relative overflow-x-auto custom-scrollbar glass-card rounded-[3.5rem] border border-white/5"
                    >
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/2">
                                    <th className="p-8 md:p-12 w-1/4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                                <Table size={20} />
                                            </div>
                                            <h3 className="headline-sm normal-case text-on-surface">Spec <span className="text-primary italic">Matrix</span></h3>
                                        </div>
                                    </th>
                                    {compareList.map((car, idx) => (
                                        <th key={car.id} className="p-8 md:p-12 text-center border-l border-white/5">
                                            <div className="space-y-2">
                                                <span className="label-sm text-secondary opacity-40 italic tracking-[0.2em] uppercase text-[10px]">UNIT_0{idx + 1}</span>
                                                <h4 className="headline-sm normal-case text-on-surface truncate max-w-[180px] mx-auto leading-tight">{car.name}</h4>
                                            </div>
                                        </th>
                                    ))}
                                    {[...Array(Math.max(0, 3 - compareList.length))].map((_, i) => (
                                        <th key={`h-e-${i}`} className="p-8 md:p-12 text-center border-l border-white/5 opacity-10">
                                            <span className="label-md uppercase tracking-widest text-[10px]">Awaiting Unit</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {specRows.map((row, rIdx) => {
                                    const RowIcon = row.icon;
                                    return (
                                        <tr key={row.key} className={`group/row transition-all hover:bg-white/[0.03] ${rIdx !== specRows.length - 1 ? 'border-b border-white/5' : ''}`}>
                                            <td className="p-8 md:p-10 px-12">
                                                <div className="flex items-center gap-4 opacity-50 group-hover/row:opacity-100 transition-opacity">
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover/row:bg-secondary/10 group-hover/row:text-secondary group-hover/row:border group-hover/row:border-secondary/20 transition-all">
                                                       <RowIcon size={18} />
                                                    </div>
                                                    <span className="label-md text-on-surface text-[13px] font-bold group-hover/row:text-primary transition-colors">{row.label}</span>
                                                </div>
                                            </td>
                                            {compareList.map((car) => (
                                                <td key={car.id} className={`p-8 md:p-10 text-center border-l border-white/5 transition-all group-hover/row:bg-primary/[0.01] ${row.highlight ? 'text-primary font-black display-sm text-2xl tracking-tighter' : 'text-on-surface body-lg'}`}>
                                                    {row.format ? row.format(car[row.key]) : car[row.key]}
                                                </td>
                                            ))}
                                            {[...Array(Math.max(0, 3 - compareList.length))].map((_, i) => (
                                                <td key={`d-e-${i}`} className="p-8 md:p-10 text-center border-l border-white/5 opacity-5 font-mono">—</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-48 flex flex-col items-center justify-center glass-card rounded-[4rem] border border-dashed border-white/10"
                    >
                        <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center mb-10 text-on-surface/10">
                            <Table size={48} />
                        </div>
                        <div className="text-center space-y-4 max-w-sm">
                           <h3 className="display-md normal-case italic text-on-surface">Matrix Offline</h3>
                           <p className="body-lg text-on-surface/30">
                              Initialize at least two machine units to start comparative signal analysis and engineering cross-references.
                           </p>
                        </div>
                    </motion.div>
                )}

                {/* Export Dossier Section */}
                <motion.section 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="mt-32 p-16 glass-card rounded-[4rem] relative overflow-hidden group hover:border-primary/20 transition-all flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-all duration-700"></div>
                    
                    <div className="relative z-10 space-y-4 text-center lg:text-left">
                       <div className="flex items-center justify-center lg:justify-start gap-4">
                          <Download className="text-primary w-5 h-5" />
                          <span className="label-md text-primary opacity-60">Data Extraction</span>
                       </div>
                       <h4 className="display-md normal-case italic text-on-surface">Generate <span className="text-secondary not-italic">Dossier</span></h4>
                       <p className="body-lg text-on-surface/40 max-w-md">
                          Export complete performance specifications and engineering logs for all selected units in a encrypted PDF format.
                       </p>
                    </div>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                       <Button 
                          size="lg"
                          className="px-12 h-16 rounded-2xl shadow-luxury-neon flex items-center gap-3"
                       >
                          <Download className="w-5 h-5" /> Export PDF
                       </Button>
                       <Button 
                          variant="outline" 
                          className="px-12 h-16 rounded-2xl border-white/10 text-on-surface/60"
                          onClick={() => navigate('/contact')}
                       >
                          Consult Engineering
                       </Button>
                    </div>

                    <div className="absolute -right-20 -bottom-20 opacity-[0.02] rotate-12 group-hover:rotate-[20deg] transition-transform duration-1000 hidden lg:block">
                       <Table size={500} className="text-primary" />
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Compare;
