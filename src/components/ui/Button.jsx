import React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-poppins font-bold uppercase tracking-widest transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95"
  
  const variants = {
    primary: "bg-primary text-background shadow-primary-glow hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(156,255,147,0.4)]",
    secondary: "bg-surface-highest/40 backdrop-blur-md text-on-surface border border-white/10 hover:bg-surface-highest/60 hover:border-white/20 hover:scale-[1.02]",
    outline: "bg-transparent text-on-surface border border-white/20 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(156,255,147,0.2)]",
    ghost: "bg-transparent text-on-surface-variant hover:text-primary hover:bg-white/5",
    glass: "glass-effect text-on-surface hover:bg-white/10 border border-white/5",
    tertiary: "p-0 text-on-surface-variant hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
  }

  const sizes = {
    sm: "px-5 py-2.5 text-[0.7rem] rounded-lg",
    md: "px-8 py-4 text-[0.8rem] rounded-xl",
    lg: "px-10 py-5 text-[0.9rem] rounded-2xl",
    xl: "px-12 py-6 text-[1rem] rounded-3xl"
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
