import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ArrowLeft, Calendar, Clock, User, Mail, Phone, 
  Sparkles, CheckCircle2, ChevronRight, MapPin, ShieldCheck
} from 'lucide-react';
import Button from '../components/ui/Button';

const bookingSchema = z.object({
  fullName: z.string().min(3, 'Identity name required'),
  email: z.string().email('Invalid biometric signature'),
  phone: z.string().min(10, 'Contact vector too short'),
  date: z.string().min(1, 'Target date required'),
  slot: z.string().min(1, 'Temporal slot required')
});

const Booking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const carName = queryParams.get('carName') || 'KINETIC OBSIDIAN';
    
    const [step, setStep] = useState(1);

    const { register, handleSubmit, setValue, watch, trigger, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            date: '24',
            slot: '11:00 AM'
        }
    });

    const formData = watch();
    const selectedDate = watch('date');
    const selectedSlot = watch('slot');

    const nextStep = async () => {
        let fieldsToValidate = [];
        if (step === 1) fieldsToValidate = ['fullName', 'email', 'phone'];
        if (step === 2) fieldsToValidate = ['date', 'slot'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const dates = [
        { day: 'MON', date: '21' },
        { day: 'TUE', date: '22' },
        { day: 'WED', date: '23' },
        { day: 'THU', date: '24' },
        { day: 'FRI', date: '25' },
        { day: 'SAT', date: '26' },
        { day: 'SUN', date: '27' },
    ];

    const slots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM'
    ];

    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate('/order-confirmation');
    };

    return (
        <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6">
            <div className="max-w-xl mx-auto">
                {/* Header section with Progress */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-8">
                        <motion.button 
                            whileHover={{ x: -4 }}
                            onClick={() => step > 1 ? prevStep() : navigate(-1)}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-on-surface/60 hover:text-primary transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </motion.button>
                        <div className="text-right">
                            <span className="label-sm text-primary opacity-60 tracking-[0.3em] uppercase">Phase 0{step}</span>
                            <h1 className="headline-md normal-case text-on-surface italic">
                                {step === 1 ? 'Identity Check' : step === 2 ? 'Temporal Grid' : 'Final Sync'}
                            </h1>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex gap-3 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        {[1, 2, 3].map((s) => (
                            <div 
                                key={s} 
                                className={`h-full flex-1 transition-all duration-700 rounded-full ${s <= step ? 'bg-primary shadow-luxury-neon' : 'bg-white/5'}`}
                            ></div>
                        ))}
                    </div>
                </motion.header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-12"
                            >
                                {/* Car Preview Card */}
                                <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group">
                                    <div className="relative z-10 space-y-4">
                                       <div className="flex items-center gap-2 text-primary opacity-60">
                                          <Sparkles size={14} />
                                          <span className="label-sm uppercase tracking-widest">Active Selection</span>
                                       </div>
                                       <h2 className="display-md normal-case leading-none text-on-surface">{carName}</h2>
                                    </div>
                                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-all duration-700"></div>
                                </div>

                                <section className="space-y-8">
                                    <div className="flex items-center gap-3 opacity-40">
                                       <User size={16} />
                                       <h3 className="label-md uppercase tracking-widest">Personal Identification</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="group space-y-2">
                                           <input 
                                              {...register('fullName')}
                                              type="text" 
                                              placeholder="IDENTITY NAME"
                                              className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface placeholder:text-on-surface/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none ${errors.fullName ? 'border-error/50 bg-error/5' : ''}`}
                                           />
                                           {errors.fullName && <p className="label-sm text-error/80 ml-2">{errors.fullName.message}</p>}
                                        </div>
                                        <div className="group space-y-2">
                                           <input 
                                              {...register('email')}
                                              type="email" 
                                              placeholder="UPLINK EMAIL"
                                              className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface placeholder:text-on-surface/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none ${errors.email ? 'border-error/50 bg-error/5' : ''}`}
                                           />
                                           {errors.email && <p className="label-sm text-error/80 ml-2">{errors.email.message}</p>}
                                        </div>
                                        <div className="group space-y-2">
                                           <input 
                                              {...register('phone')}
                                              type="text" 
                                              placeholder="CONTACT VECTOR"
                                              className={`w-full bg-white/5 border border-white/10 rounded-2xl p-6 body-lg text-on-surface placeholder:text-on-surface/20 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all outline-none ${errors.phone ? 'border-error/50 bg-error/5' : ''}`}
                                           />
                                           {errors.phone && <p className="label-sm text-error/80 ml-2">{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                </section>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-12"
                            >
                                <section className="space-y-8">
                                    <div className="flex items-center gap-3 opacity-40">
                                       <Calendar size={16} />
                                       <h3 className="label-md uppercase tracking-widest">Select Temporal Window</h3>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                                        {dates.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ y: -4 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setValue('date', item.date, { shouldValidate: true })}
                                                className={`min-w-[80px] h-28 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                                                    selectedDate === item.date 
                                                    ? 'bg-primary text-black border-primary shadow-luxury-neon' 
                                                    : 'bg-white/5 border-white/5 text-on-surface/40 hover:border-primary/40'
                                                }`}
                                            >
                                                <span className="label-sm font-bold uppercase mb-2 tracking-tighter">{item.day}</span>
                                                <span className="display-sm font-black text-2xl leading-none">{item.date}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>

                                <section className="space-y-8">
                                    <div className="flex items-center gap-3 opacity-40">
                                       <Clock size={16} />
                                       <h3 className="label-md uppercase tracking-widest">Coordinate Grid Time</h3>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {slots.map((slot, idx) => (
                                            <motion.button
                                                key={idx}
                                                type="button"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setValue('slot', slot, { shouldValidate: true })}
                                                className={`py-5 rounded-2xl label-md font-bold transition-all border ${
                                                    selectedSlot === slot
                                                    ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_20px_rgba(0,227,253,0.15)]'
                                                    : 'bg-white/5 border-white/5 text-on-surface/30 hover:border-secondary/40'
                                                }`}
                                            >
                                                {slot}
                                            </motion.button>
                                        ))}
                                    </div>
                                </section>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="glass-card p-10 rounded-[3rem] border border-white/5 space-y-10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 opacity-40">
                                           <MapPin size={16} />
                                           <h3 className="label-md uppercase tracking-widest">Transmission Dossier</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                                <span className="body-md text-on-surface/40">Unit Model</span>
                                                <span className="headline-sm italic text-on-surface">{carName}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                                <span className="body-md text-on-surface/40">Identity</span>
                                                <span className="body-lg text-primary">{formData.fullName}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-4 border-b border-white/5">
                                                <span className="body-md text-on-surface/40">Coordinates</span>
                                                <span className="body-lg text-on-surface">{formData.email}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-4">
                                                <span className="body-md text-on-surface/40">Temporal Window</span>
                                                <span className="body-lg text-secondary">{selectedDate} NOV @ {selectedSlot}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-4">
                                        <CheckCircle2 className="text-primary shrink-0" size={24} />
                                        <p className="label-sm text-primary/60 uppercase tracking-widest leading-relaxed">
                                            Identity verification required upon arrival at the manufacturing hub.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Actions */}
                    <div className="pt-12 space-y-6">
                        {step < 3 ? (
                            <Button 
                                type="button"
                                onClick={nextStep}
                                size="lg"
                                className="w-full h-20 rounded-2xl shadow-luxury-neon flex items-center justify-center gap-3 text-xl font-bold tracking-tight group"
                            >
                                Continue Protocol <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        ) : (
                            <Button 
                                disabled={isSubmitting}
                                type="submit"
                                size="lg"
                                className="w-full h-20 rounded-2xl shadow-luxury-neon flex items-center justify-center gap-3 text-xl font-bold tracking-tight group"
                            >
                                {isSubmitting ? 'Initializing...' : 'Confirm Mission Sync'}
                                {!isSubmitting && <CheckCircle2 size={20} className="group-hover:scale-110 transition-all" />}
                            </Button>
                        )}
                        
                        <div className="flex items-center justify-center gap-2 opacity-30">
                           <ShieldCheck size={12} className="text-primary" />
                           <p className="label-sm uppercase tracking-[0.2em]">Quantum SSL Encrypted Transaction</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
