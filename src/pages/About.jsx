import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Shield, Award } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Gear Shift Latency", value: "0.02s" },
    { label: "Curb Weight Target", value: "1200kg" },
    { label: "Power Output", value: "1.2 MW" },
    { label: "Downforce", value: "850kg" },
  ];

  const principles = [
    {
      icon: <Zap className="text-primary" />,
      title: "Innovation",
      desc: "Pioneering propulsion systems that redefine what is possible in the electric and hybrid era.",
    },
    {
      icon: <Target className="text-secondary" />,
      title: "Precision",
      desc: "Components machined with aerospace tolerance to ensure reliability at extreme thermal limits.",
    },
    {
      icon: <Shield className="text-white" />,
      title: "Exclusivity",
      desc: "Limited production runs for collectors who value rarity as much as performance metrics.",
    },
  ];

  const leaders = [
    {
      name: "Erik Vance",
      role: "Chief Executive",
      color: "primary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu7X2NEZDkh_epMUas3XuRJUdifhUs7JvxLSuhLoMk3ItngIpX7cjdolCwW44SZNZigq-d689qN5IjfUywp7sUpx6h1qCukXJuWnEzLr1YpC1fCfALhiJZzuIoaLg4YiBe7v-ccHBpaBR8VNHiIO267a_50EhoEcPJYd6dqvX2WTFXlSQ0qi_QfnrkBaj5dhLSt8tm1leJVStJOwP8PpR8E93ZZ5v0qtgccmcrKeCQtJmAV5SuJr7W4iwtC_GBcAEfwxnDhBzwWN8",
    },
    {
      name: "Elena Kross",
      role: "Lead Propulsion",
      color: "secondary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX5K32QfB8ThSBx3c4w8M45WV0UTEzEj9s8U59hI-BbjvgXw88RmD2ROgvfUxsrpd8OfDlCgVrwoOXp8HqXYGFRN0-q_lnFMEggoheGYs8UebqnIlXAtRBkmpzAr7tCQMPWjRrvqHD0Lx9yCVxWRYcNc5nPnrC9rg-nXpTrFHEtV2Li-h4el8QZcG1xWxtArBxazlmh4J8bsrtgt__NJw0FM7K94ZzEEqGi6US_JDMkqQNZHDiRlnocBVP7XY2muEvmz7_Jv10edc",
    },
    {
      name: "Julian Thorne",
      role: "Design Director",
      color: "primary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2l0i1GHYqjTFGC_ckdbphpamNq06RcaBk8JMpKhvP8VY3-q6liT4CEtjIOhgLtU2h8BekRjy8TrpUjNS1gu4rQ5D3gOkZKRSNNJw4O7XUapgDmNbK6fNSyZsX3Fa2yiGhsnM2cilAZj6PyxQv58bbjCDNisjMFtwfIJxQnCAJ71uUWujtFcrFwrNiVqWRwtt9O1vM2A9soaKDNKTYhbVkG4krgRR9q-qmd4JKynyGT2NtIUWqyvbx7uk3_gtOU7wv27BUq4klktw",
    },
    {
      name: "Marcus Reid",
      role: "Operations Head",
      color: "secondary",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi5KQOyDJ_ufj3gvlRUFttunQ7ALH9BF_ZUotwmglsUOITKu2xyunJ9RIfxIgORtF2x6ltK-eaxolZewgtOF9HSWz8PFkcGY-2m8SyWBRVIUUGfV790btZmgprQt7QpeclCyPxAmND3Ss0UOze51nWSwcDZOi6C0Yr_hR9G_oPwjX7-Tn_nhqyFJeLm_xrKaHUsRW-UBzku9XRyEL9qriBYUbBWOQ2uwsKTjNRbv5Gy93geyZ1Ej7HpOlkOgqu26nrpCtnw3gDB7w",
    },
  ];

  return (
    <div className="bg-background text-white font-inter overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/modern_automotive_showroom.png"
            className="w-full h-full object-cover scale-105"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="relative z-10 px-8 md:px-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block mb-8 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
          >
            <span className="label-md text-primary tracking-[0.5em]">
              SINCE 2024
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="display-lg mb-10"
          >
            OUR MISSION: <br />
            <span className="text-primary italic">BEYOND VELOCITY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="body-lg max-w-2xl opacity-70"
          >
            We don't just build cars. We engineer visceral experiences that
            bridge the gap between human intuition and mechanical perfection.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-40 px-8 bg-surface-container-low border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-1 bg-primary/50 mb-12"></div>
            <h2 className="display-md mb-10">
              THE PRECISION <br />
              <span className="text-primary italic">NARRATIVE.</span>
            </h2>
            <div className="space-y-8 body-lg opacity-70">
              <p>
                Kinetic Motors was born from a singular obsession: the pursuit
                of the perfect drive. In an era of digital disconnection, we
                sought to restore the tactile, raw energy of the open road
                through surgical engineering.
              </p>
              <p>
                Every curve of our chassis is sculpted by aerodynamics; every
                piston stroke is measured in microns. We believe that velocity
                is not just a measurement of speed, but a state of being where
                machine and pilot become a singular, focused entity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5 mt-12">
              {stats.slice(0, 2).map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-5xl font-poppins font-bold text-primary tracking-tighter mb-2 italic leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] font-poppins font-bold text-on-surface-variant opacity-40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-luxury-float">
              <img
                src="/assets/luxury_lifestyle_supercar.png"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                alt="Engineering Lab"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-12 hidden md:block max-w-sm">
              <p className="font-poppins font-bold text-2xl text-primary leading-tight lowercase italic">
                "The difference between a machine and a soul is the sound it
                makes at 9,000 RPM."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-48 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary font-poppins font-bold tracking-[0.5em] uppercase text-[0.65rem] mb-6 block opacity-60">
              PHILOSOPHICAL DNA
            </span>
            <h2 className="text-6xl md:text-7xl font-poppins font-bold uppercase tracking-tighter leading-none">
              CORE <span className="text-primary italic">PRINCIPLES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {principles.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="glass-card p-12 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-12 w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {React.cloneElement(p.icon, {
                    size: 32,
                    className: "text-primary",
                  })}
                </div>
                <h3 className="text-3xl font-poppins font-bold mb-6 uppercase tracking-tight italic">
                  {p.title}
                </h3>
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed opacity-60 group-hover:opacity-90 transition-opacity">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-48 px-8 bg-surface-container/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="space-y-4">
              <span className="text-on-surface-variant font-poppins font-bold tracking-[0.4em] uppercase text-[0.65rem] opacity-40">
                THE VISIONARIES
              </span>
              <h2 className="text-6xl font-poppins font-bold uppercase tracking-tighter leading-none">
                ARCHITECTS <br />
                <span className="text-white/30">OF SPEED.</span>
              </h2>
            </div>
            <p className="max-w-md text-on-surface-variant font-medium text-lg leading-relaxed opacity-50 italic">
              Bringing decades of heritage from F1 and aerospace engineering to
              the streets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="flex flex-col items-center group text-center"
              >
                <div
                  className={`w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-10 border border-white/10 group-hover:border-primary/30 transition-all duration-500 relative shadow-2xl`}
                >
                  <img
                    src={leader.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    alt={leader.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h4 className="text-2xl font-poppins font-bold uppercase tracking-tight mb-2">
                  {leader.name}
                </h4>
                <span className="text-[0.6rem] uppercase tracking-[0.4em] font-poppins font-bold text-primary opacity-60">
                  {leader.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
