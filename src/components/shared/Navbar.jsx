import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart, User } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Listing", path: "/listing" },
    { name: "Compare", path: "/compare" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-surface-lowest/80 backdrop-blur-2xl py-4 shadow-luxury-float border-b border-white/5"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1920px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-poppins font-bold tracking-tighter text-primary uppercase select-none transition-all duration-500 group-hover:tracking-normal group-hover:shadow-primary-glow/10">
            KINETIC
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[0.7rem] font-poppins font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-primary",
                location.pathname === link.path
                  ? "text-primary shadow-primary-glow/20"
                  : "text-on-surface-variant",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <Link
            to="/search"
            className="text-on-surface hover:text-primary transition-colors"
          >
            <Search size={22} />
          </Link>
          <Link
            to="/wishlist"
            className="text-on-surface hover:text-primary transition-colors hidden sm:block"
          >
            <Heart size={22} />
          </Link>
          <Link
            to="/settings"
            className="text-on-surface hover:text-primary transition-colors"
          >
            <User size={22} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-surface/95 backdrop-blur-2xl z-40 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-black uppercase tracking-tighter transition-all",
                  location.pathname === link.path
                    ? "text-primary scale-110"
                    : "text-on-surface-variant",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
