import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const bookingSchema = z.object({
  fullName: z.string().min(3, 'Identity name required'),
  email: z.string().email('Invalid biometric signature'),
  phone: z.string().min(10, 'Contact vector too short'),
  date: z.string().min(1, 'Target date required'),
  slot: z.string().min(1, 'Temporal slot required')
})

const Booking = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const carName = queryParams.get('carName') || 'KINETIC OBSIDIAN'

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            date: '24',
            slot: '11:00 AM'
        }
    })

    const selectedDate = watch('date')
    const selectedSlot = watch('slot')

    const dates = [
        { day: 'MON', date: '21' },
        { day: 'TUE', date: '22' },
        { day: 'WED', date: '23' },
        { day: 'THU', date: '24' },
        { day: 'FRI', date: '25' },
        { day: 'SAT', date: '26' },
        { day: 'SUN', date: '27' },
    ]

    const slots = [
        '09:00 AM', '10:00 AM', '11:00 AM',
        '01:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM'
    ]

    const onSubmit = async (data) => {
        // In a real app, we would save the booking here
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Booking Confirmed:', data)
        navigate('/order-confirmation')
    }

    return (
        <div className="min-h-screen pt-24 pb-32 px-6 max-w-lg mx-auto flex flex-col items-center">
            {/* Header section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex items-center justify-between mb-12"
            >
                <button 
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-surface-container-high hover:bg-surface-bright transition-colors"
                >
                    <span className="material-symbols-outlined text-primary">arrow_back</span>
                </button>
                <div className="text-right">
                    <h1 className="text-2xl font-black uppercase tracking-tighter text-on-background">TEST DRIVE</h1>
                    <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Synchronize Machine & Driver</p>
                </div>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-10">
                {/* Car Preview Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full bg-surface-container p-6 rounded-lg border border-primary/10 relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1 block">Selected Unit</span>
                        <h2 className="text-3xl font-black italic tracking-tighter text-on-surface mb-2 uppercase">{carName}</h2>
                        <div className="flex gap-4">
                            <span className="text-[10px] text-primary font-bold uppercase py-1 px-3 bg-primary/10 rounded-full border border-primary/20">Electric AWD</span>
                        </div>
                    </div>
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 blur-[60px]"></div>
                </motion.div>

                {/* Personal Info Fields */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-on-surface-variant tracking-widest ml-1">Identity Name</label>
                        <input 
                            {...register('fullName')}
                            type="text" 
                            placeholder="ALEXANDER KINETIC"
                            className={`w-full bg-surface-container-low border border-white/5 rounded-xl p-4 font-bold uppercase transition-all outline-none focus:ring-1 focus:ring-primary/40 ${errors.fullName ? 'border-error/50' : ''}`}
                        />
                        {errors.fullName && <p className="text-[10px] text-error font-bold uppercase mt-1 ml-1">{errors.fullName.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black text-on-surface-variant tracking-widest ml-1">Email Vector</label>
                            <input 
                                {...register('email')}
                                type="email" 
                                placeholder="name@kinetic.com"
                                className={`w-full bg-surface-container-low border border-white/5 rounded-xl p-4 font-bold normal-case transition-all outline-none focus:ring-1 focus:ring-primary/40 ${errors.email ? 'border-error/50' : ''}`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-black text-on-surface-variant tracking-widest ml-1">Contact Link</label>
                            <input 
                                {...register('phone')}
                                type="text" 
                                placeholder="+1 (555) 000-0000"
                                className={`w-full bg-surface-container-low border border-white/5 rounded-xl p-4 font-bold transition-all outline-none focus:ring-1 focus:ring-primary/40 ${errors.phone ? 'border-error/50' : ''}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Date Selection */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Select Mission Date</h3>
                    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                        {dates.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setValue('date', item.date, { shouldValidate: true })}
                                className={`min-w-[64px] h-24 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all border ${
                                    selectedDate === item.date 
                                    ? 'bg-primary text-on-primary border-primary shadow-[0_0_20px_rgba(0,255,65,0.3)]' 
                                    : 'bg-surface-container border-outline-variant/10 hover:border-primary/40'
                                }`}
                            >
                                <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${selectedDate === item.date ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                                    {item.day}
                                </span>
                                <span className="text-2xl font-black">{item.date}</span>
                            </div>
                        ))}
                    </div>
                    {errors.date && <p className="text-[10px] text-error font-bold uppercase mt-2">{errors.date.message}</p>}
                </div>

                {/* Time Slot Selection */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Coordinate Time</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {slots.map((slot, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setValue('slot', slot, { shouldValidate: true })}
                                className={`py-4 rounded-lg text-sm font-bold tracking-widest uppercase transition-all border ${
                                    selectedSlot === slot
                                    ? 'bg-secondary/20 border-secondary text-secondary shadow-[0_0_15px_rgba(0,227,253,0.2)]'
                                    : 'bg-surface-container-low border-outline-variant/10 text-on-surface-variant'
                                }`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                    {errors.slot && <p className="text-[10px] text-error font-bold uppercase mt-2">{errors.slot.message}</p>}
                </div>

                {/* CTA */}
                <div className="space-y-4 pt-6">
                    <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-black uppercase tracking-tighter text-xl rounded-xl shadow-[0_10px_30px_rgba(0,255,65,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                        {isSubmitting ? 'SYNCHRONIZING...' : 'INITIALIZE MISSION'}
                    </button>
                    <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest font-black opacity-60">
                        * NO PENALTY FOR RESCHEDULING WITHIN 24H WINDOW
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Booking
