import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Mail,
  Search,
  Sparkles,
  BookOpen,
  Layers,
  Newspaper,
  ChevronRight,
} from "lucide-react";
import blogs from "../data/blogs.json";
import Button from "../components/ui/Button";

const Blog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Technology",
    "Engineering",
    "Design",
    "Performance",
    "Lifestyle",
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="relative mb-32 overflow-hidden rounded-[4rem] glass-card p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 group">
          <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-luxury-box">
                <BookOpen size={24} />
              </div>
              <span className="label-md text-primary opacity-60">
                The Kinetic Journal
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="display-lg normal-case italic leading-none text-on-surface">
                Engineering <br />{" "}
                <span className="text-secondary not-italic">Discourse</span>
              </h1>
              <p className="body-lg text-on-surface/40 max-w-md leading-relaxed">
                Exploration of the bleeding edge in automotive architecture,
                neural propulsion, and the future of human mobility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                className="px-10 h-16 rounded-2xl flex items-center gap-3 group/btn"
              >
                Scan Latest Dossier{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>
          </div>

          <div className="relative z-10 lg:w-1/2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-[3rem] border border-white/5 space-y-6 max-w-sm ml-auto backdrop-blur-2xl"
            >
              <span className="label-sm text-secondary opacity-40 uppercase tracking-[0.2em] italic">
                Current Edition
              </span>
              <h4 className="headline-sm normal-case text-on-surface">
                Solid-State Synthesis: Terminal Velocity
              </h4>
              <div className="flex items-center gap-4 text-on-surface/30 label-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> May 24, 2024
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> 12 MIN READ
                </span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full bg-primary"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Categories & Filter */}
        <section className="mb-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-6 border-b border-white/5">
            <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 custom-scrollbar">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-2xl label-md font-bold uppercase whitespace-nowrap transition-all border ${
                    activeCategory === cat
                      ? "bg-primary text-black border-primary shadow-luxury-neon"
                      : "bg-white/5 text-on-surface/40 hover:text-primary hover:border-primary/40 border-white/5"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 label-sm text-on-surface/30 uppercase tracking-widest">
                <Layers size={14} />
                <span>Sorting:</span>
                <span className="text-on-surface">Newest First</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-on-surface/20 cursor-pointer hover:text-primary transition-colors">
                <Search size={18} />
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 glass-card border-none relative group-hover:shadow-primary/5 transition-all">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    src={blog.image}
                    alt={blog.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all"></div>
                  <div className="absolute top-6 left-6">
                    <span className="label-sm bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10 text-secondary uppercase tracking-widest leading-none">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="px-4 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-on-surface/20 label-sm uppercase tracking-tighter">
                    <span className="flex items-center gap-1.5 font-bold">
                      {blog.readTime}
                    </span>
                    <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                    <span className="flex items-center gap-1.5 font-bold italic">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="headline-sm normal-case text-on-surface group-hover:text-primary transition-colors leading-[1.3] flex-1">
                    {blog.title}
                  </h3>

                  <p className="body-md text-on-surface/40 line-clamp-2 leading-relaxed h-12">
                    {blog.excerpt}
                  </p>

                  <div className="pt-6 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="label-md uppercase tracking-[0.2em] text-primary">
                      Initialize Read
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      <ArrowRight
                        size={18}
                        className="translate-x-[-2px] group-hover:translate-x-0 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </AnimatePresence>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 p-16 glass-card rounded-[4rem] relative overflow-hidden group hover:border-primary/20 transition-all flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full group-hover:bg-primary/10 transition-all duration-700"></div>

          <div className="relative z-10 lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Newspaper className="text-primary w-6 h-6" />
              <span className="label-md text-primary opacity-60">
                Neural Network Feed
              </span>
            </div>
            <h2 className="display-md normal-case italic text-on-surface leading-none">
              Subscribe to{" "}
              <span className="text-secondary not-italic">The Grid</span>
            </h2>
            <p className="body-lg text-on-surface/40 max-w-md">
              Priority access to technical whitepapers, prototype unveils, and
              encrypted event invitations.
            </p>
          </div>

          <div className="relative z-10 lg:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white/5 rounded-2xl px-6 py-5 flex items-center border border-white/5 focus-within:border-primary/40 transition-all backdrop-blur-xl">
                <Mail className="w-5 h-5 text-on-surface/20 mr-4" />
                <input
                  className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface/20 body-md font-bold uppercase tracking-widest w-full outline-none"
                  placeholder="IDENTITY@UPLINK.NET"
                  type="email"
                />
              </div>
              <Button
                size="lg"
                className="px-10 h-16 rounded-2xl shadow-luxury-neon flex items-center gap-3 whitespace-nowrap"
              >
                Initialize Uplink <Sparkles size={16} />
              </Button>
            </form>
            <div className="flex items-center gap-2 mt-6 ml-6 opacity-30">
              <CheckCircle2 size={12} className="text-primary" />
              <span className="label-sm uppercase tracking-widest">
                End-to-end Encrypted Feed
              </span>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 opacity-[0.02] rotate-12 group-hover:rotate-[20deg] transition-transform duration-1000 hidden lg:block">
            <Newspaper size={500} className="text-primary" />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Helper for checkcircle icon which is not imported
const CheckCircle2 = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Blog;
