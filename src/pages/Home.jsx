import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, ArrowRight, Zap, Target, Shield, Rocket, Diamond, Hexagon, Star, MessageSquare } from 'lucide-react'
import Button from '../components/ui/Button'
import CarCard from '../components/ui/CarCard'
import carsData from '../data/cars.json'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="bg-background text-on-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[110vh] w-full flex items-center justify-start px-6 lg:px-20 bg-surface-lowest">
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1621135802920-133df287f2a6?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Car"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm animate-pulse">
                Engineered Precision
              </span>
              <h1 className="display-lg text-white">
                THE PEAK OF <br/> 
                <span className="text-primary italic">VELOCITY.</span>
              </h1>
            </div>

            <p className="body-md text-xl max-w-xl text-on-surface-variant font-medium">
              Experience the raw mechanical power and surgical digital precision of our latest fleet. 
              Curated for those who demand more than just transportation.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Link to="/listing">
                <Button size="xl" className="group">
                  START IGNITION
                  <Zap size={20} className="ml-3 transition-transform group-hover:scale-125" />
                </Button>
              </Link>
              <div className="w-full md:max-w-md relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary transition-all" size={24} />
                <input 
                  type="text"
                  placeholder="Search your dream vehicle..."
                  className="w-full bg-surface-highest/40 backdrop-blur-2xl border-none rounded-2xl py-6 pl-16 pr-8 text-on-surface placeholder:text-on-surface-variant focus:ring-1 focus:ring-secondary transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Vertical Bar */}
        <div className="absolute bottom-32 right-12 lg:right-24 hidden lg:flex flex-col gap-12 text-right">
          {[
            { value: "1.9S", label: "0-60 MPH" },
            { value: "1200HP", label: "RAW POWER" },
            { value: "250MPH", label: "TOP VELOCITY" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
            >
              <div className="text-secondary text-5xl font-black italic tracking-tighter">{stat.value}</div>
              <div className="text-on-surface-variant text-[0.6rem] uppercase font-black tracking-widest mt-1 opacity-60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-32 px-6 lg:px-20 bg-background">
        <div className="flex justify-between items-end mb-16 px-4">
          <div className="space-y-4">
            <div className="text-primary text-[0.7rem] font-black uppercase tracking-[0.4em] kinetic-asymmetry">
              Selection 2024
            </div>
            <h2 className="headline-md text-white">
              FEATURED <span className="text-on-surface-variant italic">CARS</span>
            </h2>
          </div>
          <Link to="/listing">
            <Button variant="tertiary" className="flex items-center gap-2 group">
              View All Inventory
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-16 px-4 snap-x snap-mandatory">
          {carsData.map((car, idx) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="snap-center"
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Authorized Partners */}
      <section className="py-24 px-6 lg:px-20 bg-surface-medium border-y border-white/5">
        <h3 className="text-center text-[0.6rem] uppercase tracking-[0.6em] font-black text-on-surface-variant mb-16 opacity-50">
          AUTHORIZED PARTNERS & GLOBAL AFFILIATES
        </h3>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {[
            { icon: Diamond, name: "EXOTICS" },
            { icon: Shield, name: "PREMIUM" },
            { icon: Rocket, name: "VELOCITY" },
            { icon: Target, name: "IONIC" },
            { icon: Hexagon, name: "CARBON" }
          ].map((partner, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group"
            >
              <partner.icon className="text-on-surface transition-transform group-hover:scale-110" size={32} />
              <span className="font-black text-2xl tracking-tight leading-none">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-32 px-6 lg:px-20 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-16 bg-surface-highest/30 border border-white/5 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit shadow-primary-glow">
                <Shield className="text-primary" size={48} />
              </div>
              <h4 className="text-5xl font-black uppercase leading-none text-white">
                WHITE GLOVE <br/> <span className="text-primary italic">INSPECTION</span>
              </h4>
              <p className="body-md text-lg max-w-md text-on-surface-variant">
                Every vehicle undergoes a 300-point diagnostic check by our master technicians 
                using proprietary telemetry technology.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
              <Zap size={400} className="text-white" />
            </div>
          </div>

          <div className="p-16 bg-primary-gradient rounded-3xl text-on-primary space-y-8 flex flex-col justify-end group overflow-hidden relative">
            <div className="p-4 bg-white/20 rounded-2xl w-fit drop-shadow-xl z-10">
              <Hexagon size={48} />
            </div>
            <div className="z-10">
              <h4 className="text-4xl font-black uppercase leading-none mb-4">Precision <br/> Financing</h4>
              <p className="font-bold uppercase tracking-widest text-[0.7rem] opacity-90">
                Bespoke structures for elite acquisitions.
              </p>
            </div>
            <div className="absolute -right-10 -top-10 opacity-20 transition-transform group-hover:-translate-x-10 duration-700 scale-150">
              <Diamond size={200} />
            </div>
          </div>

          <div className="p-16 bg-surface-highest/20 border border-white/5 rounded-3xl space-y-8 flex flex-col justify-end group">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-4 bg-secondary/10 rounded-2xl w-fit shadow-secondary-glow"
            >
              <MessageSquare className="text-secondary" size={48} />
            </motion.div>
            <div>
              <h4 className="text-4xl font-black uppercase leading-none mb-4 text-white">24/7 Concierge</h4>
              <p className="body-md text-on-surface-variant font-medium">
                Global support network available every second of every day for your peace of mind.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 p-16 bg-surface-medium border border-white/5 rounded-3xl flex flex-col md:flex-row items-center gap-16 overflow-hidden">
            <div className="space-y-8 flex-1">
              <h4 className="text-5xl font-black uppercase text-white">
                INSTANT <br/> <span className="text-secondary italic">TELEMETRY</span>
              </h4>
              <p className="body-md text-lg text-on-surface-variant">
                Track every performance metric of your vehicle in real-time through the dedicated Kinetic automotive app.
              </p>
              <div className="h-2 w-full bg-surface-highest rounded-full overflow-hidden shadow-inner">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "85%" }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="h-full bg-secondary shadow-secondary-glow"
                />
              </div>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 bg-surface-highest/40 rounded-full flex items-center justify-center border-2 border-secondary/20 shadow-secondary-glow">
                <div className="text-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl font-black text-secondary italic"
                  >
                    0.8s
                  </motion.div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">
                    Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Voices Section */}
      <section className="py-32 px-6 lg:px-20 bg-surface-lowest">
        <div className="mb-20 px-4">
          <h2 className="headline-md text-white">
            DRIVER <span className="text-primary italic">VOICES</span>
          </h2>
        </div>
        
        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-16 px-4">
          {[
            {
              name: "Julian Vance",
              role: "Collector & Entrepreneur",
              text: "The acquisition process was seamless. Kinetic doesn't just sell cars; they curate a lifestyle of mechanical excellence. My Vantage S is a masterpiece.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
            },
            {
              name: "Elena Rodriguez",
              role: "Tech Founder",
              text: "White-glove service from the first inquiry to the moment it was delivered. The technical transparency they provide is unmatched in the industry.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
            }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="min-w-[400px] md:min-w-[600px] bg-surface-highest/20 backdrop-blur-3xl p-16 rounded-[2.5rem] border border-white/5 space-y-8"
            >
              <div className="flex gap-2 text-primary">
                {[1, 2, 3, 4, 5].map((_, j) => (
                  <Star key={j} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-2xl font-medium italic text-on-surface leading-loose opacity-90">
                "{review.text}"
              </p>
              <div className="flex items-center gap-6 pt-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-luxury-float">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-xl uppercase tracking-tight text-white mb-1">{review.name}</div>
                  <div className="text-[0.6rem] text-primary/80 uppercase font-black tracking-widest">
                    {review.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
