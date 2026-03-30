import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  ArrowRight,
  Zap,
  Target,
  Shield,
  Rocket,
  Diamond,
  Hexagon,
  Star,
  MessageSquare,
} from "lucide-react";
import Button from "../components/ui/Button";
import CarCard from "../components/ui/CarCard";
import carsData from "../data/cars.json";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="bg-background text-on-surface overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section className="relative h-[110vh] w-full flex items-center justify-start px-6 lg:px-20 bg-surface-lowest">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <img
            src="/assets/showroom.png"
            alt="Hero Car"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
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
              <span className="text-primary font-poppins font-bold tracking-[0.4em] uppercase text-[0.65rem] animate-pulse">
                ENGINEERED PRECISION
              </span>
              <h1 className="text-6xl md:text-8xl font-poppins font-bold text-white leading-none tracking-tighter">
                THE PEAK OF <br />
                <span className="text-primary italic">VELOCITY.</span>
              </h1>
            </div>

            <p className="body-md text-xl max-w-xl text-on-surface-variant font-medium">
              Experience the raw mechanical power and surgical digital precision
              of our latest fleet. Curated for those who demand more than just
              transportation.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Link to="/listing">
                <Button
                  size="xl"
                  variant="primary"
                  className="group min-w-[240px]"
                >
                  START IGNITION
                  <Zap
                    size={18}
                    className="ml-3 transition-transform duration-500 group-hover:scale-125"
                  />
                </Button>
              </Link>
              <div className="w-full md:max-w-md relative group">
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-all duration-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="SEARCH ELITE INVENTORY..."
                  className="w-full glass-effect border border-white/5 rounded-2xl py-6 pl-16 pr-8 text-[0.75rem] font-poppins font-bold tracking-widest text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 transition-all outline-none"
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
            { value: "250MPH", label: "TOP VELOCITY" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="group cursor-default"
            >
              <div className="text-primary text-5xl font-poppins font-bold italic tracking-tighter transition-all duration-500 group-hover:tracking-normal">
                {stat.value}
              </div>
              <div className="text-on-surface-variant text-[0.6rem] uppercase font-bold tracking-[0.3em] mt-2 opacity-50">
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
            <div className="text-primary text-[0.65rem] font-poppins font-bold uppercase tracking-[0.5em] opacity-60">
              SELECTION 2024
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight uppercase">
              FEATURED{" "}
              <span className="text-on-surface-variant italic font-normal">
                CARS
              </span>
            </h2>
          </div>
          <Link to="/listing">
            <Button
              variant="tertiary"
              className="flex items-center gap-2 group"
            >
              View All Inventory
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
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
        <h3 className="text-center text-[0.65rem] uppercase tracking-[0.6em] font-poppins font-bold text-on-surface-variant mb-16 opacity-40">
          AUTHORIZED PARTNERS & GLOBAL AFFILIATES
        </h3>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {[
            { icon: Diamond, name: "EXOTICS" },
            { icon: Shield, name: "PREMIUM" },
            { icon: Rocket, name: "VELOCITY" },
            { icon: Target, name: "IONIC" },
            { icon: Hexagon, name: "CARBON" },
          ].map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer group"
            >
              <partner.icon
                className="text-primary transition-transform duration-500 group-hover:scale-110"
                size={32}
              />
              <span className="font-poppins font-bold text-2xl tracking-tighter text-white leading-none group-hover:tracking-normal transition-all duration-500">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-32 px-6 lg:px-20 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 p-12 md:p-16 glass-card relative overflow-hidden group">
            <div className="relative z-10 space-y-8">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl w-fit shadow-primary-glow/20">
                <Shield className="text-primary" size={40} />
              </div>
              <h4 className="text-4xl md:text-5xl font-poppins font-bold uppercase leading-[1.1] text-white">
                WHITE GLOVE <br />{" "}
                <span className="text-primary italic">INSPECTION</span>
              </h4>
              <p className="text-on-surface-variant text-[0.9rem] max-w-md font-medium leading-relaxed">
                Every vehicle undergoes a 300-point diagnostic check by our
                master technicians using proprietary telemetry technology.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:opacity-10 transition-all duration-1000 rotate-12 group-hover:rotate-0">
              <Zap size={450} className="text-white" />
            </div>
          </div>

          <div className="p-12 md:p-16 bg-primary-gradient rounded-[2rem] text-background space-y-8 flex flex-col justify-end group overflow-hidden relative shadow-primary-glow/20 border border-white/10">
            <div className="p-4 bg-background/20 backdrop-blur-md rounded-2xl w-fit drop-shadow-xl z-10 border border-white/10">
              <Hexagon size={40} />
            </div>
            <div className="z-10 space-y-4">
              <h4 className="text-3xl md:text-4xl font-poppins font-black uppercase leading-none">
                Precision <br /> Financing
              </h4>
              <p className="font-poppins font-bold uppercase tracking-widest text-[0.65rem] opacity-80">
                Bespoke structures for elite acquisitions.
              </p>
            </div>
            <div className="absolute -right-10 -top-10 opacity-20 transition-transform duration-1000 group-hover:-translate-x-10 scale-150">
              <Diamond size={200} />
            </div>
          </div>

          <div className="p-12 md:p-16 glass-card space-y-8 flex flex-col justify-end group">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-4 bg-secondary/10 border border-secondary/20 rounded-2xl w-fit shadow-secondary-glow/20"
            >
              <MessageSquare className="text-secondary" size={40} />
            </motion.div>
            <div className="space-y-4">
              <h4 className="text-3xl font-poppins font-bold uppercase leading-none text-white">
                24/7 Concierge
              </h4>
              <p className="text-on-surface-variant text-[0.9rem] font-medium leading-relaxed">
                Global support network available every second of every day for
                your peace of mind.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 p-12 md:p-16 glass-card flex flex-col md:flex-row items-center gap-16 overflow-hidden relative group">
            <div className="space-y-8 flex-1 relative z-10">
              <h4 className="text-4xl md:text-5xl font-poppins font-bold uppercase text-white leading-[1.1]">
                INSTANT <br />{" "}
                <span className="text-secondary italic">TELEMETRY</span>
              </h4>
              <p className="text-on-surface-variant text-[0.9rem] font-medium leading-relaxed max-w-sm">
                Track every performance metric of your vehicle in real-time
                through the dedicated Kinetic automotive app.
              </p>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="h-full bg-secondary shadow-secondary-glow"
                />
              </div>
            </div>
            <div className="relative flex-shrink-0 z-10">
              <div className="w-48 h-48 bg-surface-highest/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-secondary/20 shadow-secondary-glow/20">
                <div className="text-center group-hover:scale-110 transition-transform duration-700">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl font-poppins font-bold text-secondary italic tracking-tighter"
                  >
                    0.8s
                  </motion.div>
                  <div className="text-[0.6rem] uppercase font-bold tracking-[0.3em] text-on-surface-variant mt-1 opacity-50">
                    RESPONSE
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Driver Voices Section */}
      <section className="py-32 px-6 lg:px-20 bg-surface-lowest">
        <div className="mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white tracking-tight uppercase">
            DRIVER{" "}
            <span className="text-primary italic font-normal">VOICES</span>
          </h2>
        </div>

        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-16 px-4">
          {[
            {
              name: "Julian Vance",
              role: "Collector & Entrepreneur",
              text: "The acquisition process was seamless. Kinetic doesn't just sell cars; they curate a lifestyle of mechanical excellence. my Vantage S is a cinematic masterpiece.",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            },
            {
              name: "Elena Rodriguez",
              role: "Tech Founder",
              text: "White-glove service from the first inquiry to the moment it was delivered. The technical transparency they provide is unmatched in the industry.",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="min-w-[400px] md:min-w-[550px] glass-card p-12 md:p-16 space-y-10 border border-white/5 shadow-luxury hover:border-primary/20 transition-all duration-700"
            >
              <div className="flex gap-2 text-primary/80">
                {[1, 2, 3, 4, 5].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium italic text-on-surface leading-loose opacity-90 font-inter">
                "{review.text}"
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="w-14 h-14 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-luxury-float">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-poppins font-bold text-lg uppercase tracking-tight text-white mb-0.5">
                    {review.name}
                  </div>
                  <div className="text-[0.6rem] text-primary font-poppins font-bold uppercase tracking-[0.2em] opacity-60">
                    {review.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
