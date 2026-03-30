import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const checkoutSchema = z.object({
  cardName: z.string().min(3, 'Cardholder name required'),
  cardNumber: z.string().min(16, 'Full card number required').max(19),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry (MM/YY)'),
  cvv: z.string().min(3, 'CVV required').max(4),
  method: z.enum(['card', 'crypto', 'bank'])
})

const Checkout = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            method: 'card'
        }
    })

    const paymentMethod = watch('method')

    const onSubmit = async (data) => {
        // Simulate settlement process
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log('Payment Processed:', data)
        navigate('/order-confirmation')
    }

    const orderSummary = {
        carName: 'KINETIC OBSIDIAN',
        basePrice: 124900,
        performancePack: 15000,
        tax: 9800,
        destinationFee: 1200,
        total: 150900
    }

    return (
        <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Payment Information */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-12 xl:col-span-7"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-surface-container hover:bg-surface-bright transition-colors">
                            <span className="material-symbols-outlined text-primary">arrow_back</span>
                        </button>
                        <h1 className="text-4xl font-black uppercase tracking-tighter">SECURE SETTLEMENT</h1>
                    </div>

                    <div className="space-y-10">
                        {/* Payment Method Selector */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Execution Protocol</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { id: 'card', name: 'Credit Card', icon: 'credit_card' },
                                    { id: 'crypto', name: 'Crypto Wallet', icon: 'account_balance_wallet' },
                                    { id: 'bank', name: 'Bank Transfer', icon: 'account_balance' }
                                ].map((method) => (
                                    <div 
                                        key={method.id}
                                        onClick={() => setValue('method', method.id, { shouldValidate: true })}
                                        className={`p-5 rounded-xl border flex flex-col items-center gap-3 cursor-pointer transition-all ${
                                            paymentMethod === method.id 
                                            ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,252,64,0.1)]' 
                                            : 'bg-surface-container border-outline-variant/10 hover:border-primary/30'
                                        }`}
                                    >
                                        <span className={`material-symbols-outlined ${paymentMethod === method.id ? 'text-primary' : 'text-on-surface-variant'}`}>{method.icon}</span>
                                        <span className={`text-[10px] uppercase font-black tracking-widest ${paymentMethod === method.id ? 'text-primary' : 'text-on-surface-variant'}`}>{method.name}</span>
                                    </div>
                                ))}
                            </div>
                            {errors.method && <p className="text-[10px] text-error font-bold uppercase mt-2">{errors.method.message}</p>}
                        </div>

                        {/* Payment Form Shell */}
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-surface-container p-8 rounded-lg border border-outline-variant/10 space-y-6 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.1em]">Cardholder Identity</label>
                                    <input 
                                        {...register('cardName')}
                                        type="text" 
                                        placeholder="ALEXANDER KINETIC"
                                        className={`w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 font-bold text-on-surface focus:border-primary transition-all outline-none ${errors.cardName ? 'border-error/50' : ''}`}
                                    />
                                    {errors.cardName && <p className="text-[10px] text-error font-bold tracking-widest">{errors.cardName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.1em]">Card Core Number</label>
                                    <input 
                                        {...register('cardNumber')}
                                        type="text" 
                                        placeholder="0000 0000 0000 0000"
                                        className={`w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 font-bold text-on-surface focus:border-primary transition-all outline-none ${errors.cardNumber ? 'border-error/50' : ''}`}
                                    />
                                    {errors.cardNumber && <p className="text-[10px] text-error font-bold tracking-widest">{errors.cardNumber.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.1em]">Temporal Validity</label>
                                    <input 
                                        {...register('expiry')}
                                        type="text" 
                                        placeholder="MM / YY"
                                        className={`w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 font-bold text-on-surface focus:border-primary transition-all outline-none ${errors.expiry ? 'border-error/50' : ''}`}
                                    />
                                    {errors.expiry && <p className="text-[10px] text-error font-bold tracking-widest">{errors.expiry.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.1em]">Security Vector (CVV)</label>
                                    <input 
                                        {...register('cvv')}
                                        type="password" 
                                        placeholder="•••"
                                        className={`w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4 font-bold text-on-surface focus:border-primary transition-all outline-none ${errors.cvv ? 'border-error/50' : ''}`}
                                    />
                                    {errors.cvv && <p className="text-[10px] text-error font-bold tracking-widest">{errors.cvv.message}</p>}
                                </div>
                            </div>

                            <div className="pt-6">
                                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg mb-8">
                                    <span className="material-symbols-outlined text-primary text-sm">enhanced_encryption</span>
                                    <p className="text-[10px] text-primary uppercase font-bold tracking-[0.2em]">Quantum-encrypted session active. Data fully anonymized.</p>
                                </div>

                                <button 
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-5 bg-primary text-black font-black uppercase tracking-tighter text-2xl rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_40px_rgba(156,255,147,0.3)] disabled:opacity-50"
                                >
                                    {isSubmitting ? 'PROCESSING SETTLEMENT...' : 'CONFIRM INVESTMENT'}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Right Column: Order Summary (Consistent with previous implementation) */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-12 xl:col-span-5 h-full"
                >
                    <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-8 sticky top-32 overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-on-surface mb-8 italic">Investment Brief</h3>
                        
                        <div className="flex gap-6 mb-10 pb-10 border-b border-outline-variant/10">
                            <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-outline-variant/10">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vXj8jQd6e-QkWp8Mv5AstBoQx7f18r3LHUpgijtvASx4RO-fSoRg0R6syZaNYORshC4z9bZiBoplx6Gjhfi-VlpYq9S1DXYKxx9R2yVjo2WEyLzyuaxLnPJexnrNMmuo3XyKSzmwldy5a1gpCKxT3tutvBVxrnM21X0vsbAEMjGoFtbMaGEL6v4EgsXpMt8luUaRO-lRHb6cwEQglfW5N0l4bhnPzzgPmNMRcriBl_UPE0I97BObwSYLuSp7hQx_FQcSY9kLZAM" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Car Preview" />
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-on-surface uppercase tracking-tight italic">{orderSummary.carName}</h4>
                                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest mt-1">S-Tier Configuration</p>
                                <span className="text-[10px] text-primary font-black uppercase underline mt-2 block cursor-pointer">Modify Vector</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10 text-on-surface-variant text-sm font-bold uppercase tracking-widest">
                            <div className="flex justify-between">
                                <span>Core Allocation</span>
                                <span className="text-on-surface font-black">${orderSummary.basePrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-black text-secondary">
                                <span>Performance Matrix</span>
                                <span>+ ${orderSummary.performancePack.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Regulatory Tax</span>
                                <span className="text-on-surface">${orderSummary.tax.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Logistics Fee</span>
                                <span className="text-on-surface">${orderSummary.destinationFee.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-outline-variant/20">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-1 italic">Total Settlement</p>
                                    <h4 className="text-4xl font-black italic tracking-tighter text-on-surface">${orderSummary.total.toLocaleString()}</h4>
                                </div>
                                <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">VAT INCL.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Checkout
