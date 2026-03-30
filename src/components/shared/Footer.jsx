import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-neutral-800/30 pt-16 pb-12">
      <div className="container mx-auto px-6 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-on-surface tracking-tighter uppercase transition-colors hover:text-primary cursor-pointer">
              KINETIC MOTORS
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Experience the future of automotive excellence. Engineered precision, tailored for those who demand the peak of velocity.
            </p>
            <div className="flex gap-4">
              <Instagram className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
              <Twitter className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
              <Facebook className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
              <Youtube className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Listing', 'Compare', 'Wishlist', 'Dashboard'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-on-surface-variant text-sm hover:text-primary transition-colors">
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
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Newsletter</h3>
            <p className="text-on-surface-variant text-sm">
              Subscribe to get latest fleet updates and velocity news.
            </p>
            <div className="flex bg-surface-container-highest border border-outline-variant/20 rounded-xl overflow-hidden group focus-within:ring-1 focus-within:ring-primary transition-all">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none w-full"
              />
              <button className="px-6 bg-primary text-on-primary font-bold text-xs uppercase hover:bg-primary-container transition-colors">
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
