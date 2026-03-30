import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, Timer, Gauge, Shield, Table, X, Plus, 
  RotateCcw, Download, Info, Check, Search as SearchIcon
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
        { label: 'Category', key: 'category', icon: Info },
        { label: 'Power Unit', key: 'engine', icon: Zap },
        { label: 'Peak HP', key: 'power', icon: Shield },
        { label: '0-60 Velocity', key: 'acceleration', icon: Timer },
        { label: 'Terminal Speed', key: 'topSpeed', icon: Gauge },
        { label: 'Gearbox', key: 'transmission', icon: Table },
        { label: 'Operational Price', key: 'price', format: (val) => `$${val.toLocaleString()}`, highlight: true },
    ];

    return (
        <div className="bg-background text-on-surface min-h-screen font-body selection:bg-primary pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8">
                {/* Header & Control Segment */}
                <section className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <span className="text-[0.7rem] font-black text-secondary tracking-[0.4em] uppercase mb-4 italic block">TELEMETRY_ANALYTICS</span>
                            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
                                COMPARE_<span className="text-primary italic">MACHINES</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-wrap gap-4"
                        >
                            {compareList.length > 0 && (
                                <button 
                                    onClick={clearCompare}
                                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-surface-container-high border border-outline-variant/10 text-xs font-black tracking-widest text-on-surface-variant hover:text-error hover:border-error/30 transition-all uppercase"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                    RESET_GRID
                                </button>
                            )}
                            <Link to="/listing" className="hidden md:block">
                                <Button variant="ghost" className="px-10 py-4 rounded-full border-outline-variant/20 hover:border-primary text-xs font-black tracking-widest uppercase">
                                    MANAGE_INVENTORY
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Selection Slots (Hangar) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[0, 1, 2].map((idx) => {
                            const car = compareList[idx];
                            return (
                                <div key={idx} className="relative group">
                                    <AnimatePresence mode="wait">
                                        {car ? (
                                            <motion.div 
                                                key={`slot-${car.id}`}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ scale: 0.9, opacity: 0 }}
                                                className="bg-surface-container-low/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-primary/20 relative overflow-hidden group/card shadow-2xl"
                                            >
                                                <div className="absolute top-0 right-0 p-4 z-20">
                                                    <button 
                                                        onClick={() => removeFromCompare(car.id)}
                                                        className="w-10 h-10 rounded-full bg-surface-container-highest/60 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:bg-error hover:text-white transition-all shadow-lg"
                                                    >
                                                        <X size={18} />
                                                    </button>
                                                </div>
                                                
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className="h-40 flex items-center justify-center mb-6 relative w-full">
                                                        <img 
                                                           src={car.image} 
                                                           alt={car.name} 
                                                           className="w-full h-full object-contain grayscale group-hover/card:grayscale-0 transition-all duration-700 scale-110 group-hover/card:scale-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                                                    </div>
                                                    <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 italic">IDENT_UNIT_0{idx + 1}</span>
                                                    <h3 className="text-2xl font-black tracking-tighter uppercase text-center italic">{car.name}</h3>
                                                </div>
                                                
                                                {/* Decorative Glow */}
                                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover/card:bg-primary/10 transition-all"></div>
                                            </motion.div>
                                        ) : (
                                            <motion.div 
                                                key={`empty-${idx}`}
                                                className="bg-surface-container-low/20 p-8 rounded-[2.5rem] border border-dashed border-outline-variant/30 flex flex-col items-center justify-center min-h-[280px] relative transition-all duration-500 hover:border-primary/40 hover:bg-surface-container-low/30"
                                            >
                                                {!isSearchActive ? (
                                                    <div className="flex flex-col items-center gap-4 text-center">
                                                        <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant/10 flex items-center justify-center text-on-surface-variant mb-2">
                                                            <Plus size={32} />
                                                        </div>
                                                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">INITIALIZE_SELECT</p>
                                                        <button 
                                                           onClick={() => setIsSearchActive(true)}
                                                           className="text-xs font-bold text-primary hover:underline hover:scale-110 transition-all"
                                                        >
                                                            ACTIVATE_SEARCH
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="w-full space-y-4">
                                                        <div className="relative">
                                                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                                                            <input 
                                                                autoFocus
                                                                type="text" 
                                                                placeholder="SEARCH_MODEL..." 
                                                                className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-xl pl-12 pr-4 py-4 text-xs font-black tracking-widest text-on-surface uppercase focus:ring-1 focus:ring-primary transition-all"
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                onBlur={() => !searchTerm && setIsSearchActive(false)}
                                                            />
                                                        </div>
                                                        <div className="max-h-40 overflow-y-auto custom-scrollbar space-y-2">
                                                            {filteredCars.map(c => (
                                                                <button 
                                                                    key={c.id} 
                                                                    onClick={() => {
                                                                        addToCompare(c);
                                                                        setSearchTerm('');
                                                                        setIsSearchActive(false);
                                                                    }}
                                                                    className="w-full p-3 rounded-lg bg-surface-container-highest/40 hover:bg-primary/20 hover:text-primary transition-all text-left flex items-center gap-3 border border-outline-variant/5"
                                                                >
                                                                    <img src={c.image} className="w-8 h-8 object-cover rounded-full border border-outline-variant/20" alt="icon" />
                                                                    <div className="flex flex-col">
                                                                        <span className="text-[10px] font-black uppercase tracking-tight">{c.name}</span>
                                                                        <span className="text-[8px] text-on-surface-variant font-bold uppercase">{c.brand}</span>
                                                                    </div>
                                                                </button>
                                                            ))}
                                                        </div>
                                                        <button 
                                                            onClick={() => setIsSearchActive(false)}
                                                            className="w-full text-center text-xs font-black tracking-widest text-on-surface-variant hover:text-primary transition-all uppercase py-2"
                                                        >
                                                            CANCEL_X
                                                        </button>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Comparison Matrix (Table) */}
                {compareList.length > 0 ? (
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3 }}
                       className="relative overflow-x-auto custom-scrollbar shadow-[0_30px_100px_rgba(0,0,0,0.5)] rounded-[3rem] border border-outline-variant/10 group"
                    >
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-surface-container-low/60 backdrop-blur-3xl border-b border-outline-variant/10">
                                    <th className="p-10 w-1/4">
                                        <div className="flex items-center gap-4">
                                            <Table className="text-primary w-6 h-6" />
                                            <h3 className="text-xl font-black italic tracking-tighter uppercase font-headline">PERFORMANCE_<span className="text-primary">DOSSIER</span></h3>
                                        </div>
                                    </th>
                                    {compareList.map((car, idx) => (
                                        <th key={car.id} className="p-10 text-center border-l border-outline-variant/10">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-black text-secondary tracking-[0.2em] italic uppercase">UNIT_IDENT_0{idx + 1}</span>
                                                <h4 className="text-2xl font-black italic tracking-tighter text-on-surface uppercase leading-none">{car.name}</h4>
                                            </div>
                                        </th>
                                    ))}
                                    {[...Array(Math.max(0, 3 - compareList.length))].map((_, i) => (
                                        <th key={`h-e-${i}`} className="p-10 text-center border-l border-outline-variant/10 opacity-20 italic">
                                            <span className="text-[10px] font-black tracking-widest uppercase">EMPTY_CHANNEL</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {specRows.map((row, rIdx) => {
                                    const RowIcon = row.icon;
                                    return (
                                        <tr key={row.key} className={`group/row transition-all hover:bg-primary/5 ${rIdx !== specRows.length - 1 ? 'border-b border-outline-variant/10' : ''}`}>
                                            <td className="p-8 px-10">
                                                <div className="flex items-center gap-4">
                                                    <RowIcon className="w-4 h-4 text-secondary group-hover/row:scale-125 transition-transform" />
                                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant group-hover/row:text-on-surface">{row.label}</span>
                                                </div>
                                            </td>
                                            {compareList.map((car) => (
                                                <td key={car.id} className={`p-8 text-center border-l border-outline-variant/10 font-black italic tracking-tighter ${row.highlight ? 'text-primary text-2xl' : 'text-on-surface text-lg'}`}>
                                                    {row.format ? row.format(car[row.key]) : car[row.key]}
                                                </td>
                                            ))}
                                            {[...Array(Math.max(0, 3 - compareList.length))].map((_, i) => (
                                                <td key={`d-e-${i}`} className="p-8 text-center border-l border-outline-variant/5 opacity-10">—</td>
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
                        className="py-48 flex flex-col items-center justify-center bg-surface-container-low/30 backdrop-blur-md rounded-[3rem] border border-dashed border-outline-variant/20 italic"
                    >
                        <div className="w-24 h-24 rounded-full bg-surface-container-highest border border-outline-variant/10 flex items-center justify-center mb-8">
                            <Table className="w-12 h-12 text-on-surface-variant opacity-40" />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-on-surface mb-2">TELEMETRY_OFFLINE</h3>
                        <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-black max-w-sm text-center leading-relaxed">
                            Initialize at least one machine unit to start comparative signal analysis.
                        </p>
                    </motion.div>
                )}

                {/* Final Dossier Actions */}
                <motion.section 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="mt-24"
                >
                    <div className="p-12 md:p-16 bg-surface-container-low/40 rounded-[3rem] border border-outline-variant/10 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden backdrop-blur-xl group hover:border-primary/20 transition-all">
                        <div className="relative z-10 space-y-4 text-center lg:text-left">
                            <h4 className="text-4xl font-black uppercase italic tracking-tighter leading-none">GENERATE_TECHNICAL_<span className="text-primary">DOSSIER</span></h4>
                            <p className="text-on-surface-variant max-w-md text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">
                                Complete performance specifications and engineering logs for all selected units. Initialized for export via encrypted data-link.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                           <Button className="px-12 py-5 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_10px_30px_rgba(156,255,147,0.3)] flex items-center justify-center gap-3">
                               <Download className="w-4 h-4" /> EXPORT_REPORT_PDF
                           </Button>
                           <Button variant="ghost" className="px-12 py-5 rounded-full border-outline-variant/20 hover:border-primary text-xs font-black tracking-widest uppercase flex items-center justify-center gap-3">
                               <Info className="w-4 h-4" /> CONTACT_SPEC_CENTER
                           </Button>
                        </div>
                        {/* Decorative Background Icon */}
                        <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Table size={240} className="text-primary rellax" />
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Compare;
