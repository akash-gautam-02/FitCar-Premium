import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Search } from 'lucide-react'

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-start px-6 lg:px-20 bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuFrzgTXBQsw8Vq--653RO2dxmu81mNxL_9QdqLCxVUKXOmlECaqael5JEKlR3m84Ym6yJpvndLqgsvfcU6foxjRQOH-u1_QWfsBbkhZGojRtyH7EI0457lTiflDzlHWdGWzM9noOr-GVn1Fj4yj79su42C9krcHuqWc115eYgSDFqYDXPlnMHHmlfx1OENSIbNqT3x7phLXfa5Gd-XOm1lY6-mHOGp-KZ2yA0VIRnjW3G1YTkysbw6_qGbY_FarZ9w0TEHnrP5p4" 
            alt="Premium Hypercar profile" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm block">
              Engineered Precision
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.85] tracking-[-0.04em] uppercase text-on-surface">
              THE PEAK OF <br/> 
              <span className="text-primary italic animate-pulse">VELOCITY.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-medium"
          >
            Experience the raw mechanical power and surgical digital precision of our latest fleet. Curated for those who demand more than just transportation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <button className="w-full md:w-auto group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-primary to-primary-container rounded-xl text-on-primary font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(156,255,147,0.3)]">
              START IGNITION
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
            <div className="w-full md:max-w-md relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search your dream vehicle..." 
                className="w-full bg-surface-container-highest/60 backdrop-blur-md border-none rounded-xl py-5 pl-12 pr-6 text-on-surface placeholder:text-on-surface-variant focus:ring-1 focus:ring-secondary transition-all"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-24 right-6 lg:right-20 hidden lg:flex flex-col gap-10 text-right">
          {[
            { label: '0-60 MPH', value: '1.9S' },
            { label: 'RAW POWER', value: '1200HP' },
            { label: 'TOP VELOCITY', value: '250MPH' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
            >
              <div className="text-secondary text-5xl font-black italic tracking-tighter">{stat.value}</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Section Placeholder */}
      <section className="py-32 px-6 lg:px-20">
        <div className="flex justify-between items-end mb-20">
          <div className="space-y-4">
            <div className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Selection 2026</div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              FEATURED <br/> <span className="text-on-surface-variant">CARS</span>
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1,2,3].map((i) => (
            <div key={i} className="aspect-[16/10] bg-surface-container-highest rounded-3xl animate-pulse" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
