import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Navbar />
      
      <main className="flex-grow pt-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
