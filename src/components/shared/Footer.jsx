import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-neutral-800/30 pt-16 pb-12">
      <div className="container mx-auto px-6 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-poppins font-bold text-on-surface tracking-tighter uppercase transition-all duration-500 hover:text-primary group-hover:tracking-normal cursor-pointer">
                KINETIC
              </h2>
            </Link>
            <p className="text-on-surface-variant text-[0.8rem] leading-relaxed max-w-xs font-inter font-medium">
              Redefining the automotive experience through digital excellence and curated luxury. Engineered precision, tailored for those who demand the peak of velocity.
            </p>
            <div className="flex gap-6">
              <Instagram className="text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110" size={18} />
              <Twitter className="text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110" size={18} />
              <Facebook className="text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110" size={18} />
              <Youtube className="text-on-surface-variant cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110" size={18} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-[0.65rem] font-poppins font-bold text-white uppercase tracking-[0.25em]">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Listing', 'Compare', 'Wishlist', 'Dashboard'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-on-surface-variant text-[0.75rem] font-poppins font-bold uppercase tracking-[0.1em] hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary transition-all duration-500 group-hover:w-4"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Company</h3>
            <ul className="space-y-4">
              {['About', 'Contact', 'FAQ', 'Blog', 'Terms'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-[0.65rem] font-poppins font-bold text-white uppercase tracking-[0.25em]">Newsletter</h3>
            <p className="text-on-surface-variant text-[0.8rem] leading-relaxed font-inter font-medium">
              Subscribe to get latest fleet updates and velocity news.
            </p>
            <div className="flex bg-surface-highest/20 border border-white/5 rounded-xl overflow-hidden group focus-within:border-primary transition-all duration-500 min-h-[56px] p-1 shadow-inner">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent px-5 py-3 text-[0.7rem] font-poppins font-bold text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none w-full tracking-widest"
              />
              <button className="px-8 bg-primary text-background font-poppins font-black text-[0.6rem] uppercase tracking-widest hover:shadow-primary-glow transition-all duration-500 rounded-lg">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-800/30 text-center">
          <p className="text-neutral-500 text-xs tracking-widest uppercase">
            © 2026 KINETIC MOTORS. ALL RIGHTS RESERVED. ENGINEERED FOR VELOCITY.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
