import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X, ChevronDown, SlidersHorizontal } from 'lucide-react'
import CarCard from '../components/ui/CarCard'
import Button from '../components/ui/Button'
import carsData from '../data/cars.json'

const Listing = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([80000, 700000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedTransmission, setSelectedTransmission] = useState('All')
  const [selectedFuel, setSelectedFuel] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const brands = useMemo(() => [...new Set(carsData.map(car => car.brand))], [])
  const fuelTypes = useMemo(() => [...new Set(carsData.map(car => car.fuelType))], [])

  const filteredCars = useMemo(() => {
    return carsData.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(car.brand)
      const matchesTrans = selectedTransmission === 'All' || car.transmission.toLowerCase().includes(selectedTransmission.toLowerCase())
      const matchesFuel = selectedFuel.length === 0 || selectedFuel.includes(car.fuelType)
      
      return matchesSearch && matchesPrice && matchesBrand && matchesTrans && matchesFuel
    })
  }, [searchQuery, priceRange, selectedBrands, selectedTransmission, selectedFuel])

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleFuel = (fuel) => {
    setSelectedFuel(prev => 
      prev.includes(fuel) ? prev.filter(f => f !== fuel) : [...prev, fuel]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setPriceRange([80000, 700000])
    setSelectedBrands([])
    setSelectedTransmission('All')
    setSelectedFuel([])
  }

  return (
    <div className="bg-background pt-24 pb-32 px-6 lg:px-20 min-h-screen relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-secondary font-black text-[0.7rem] uppercase tracking-[0.4em] kinetic-asymmetry">
              Kinetic Inventory
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.8] italic">
              MACHINES
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="SEARCH TERMINAL..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-surface-highest/10 border border-white/5 rounded-full px-8 py-4 w-full md:w-80 text-sm focus:ring-1 focus:ring-secondary transition-all outline-none font-black tracking-widest text-on-surface uppercase"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-secondary transition-colors" size={18} />
             </div>
             
             <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-4 rounded-full bg-surface-highest/10 border border-white/5 text-secondary transition-all active:scale-95"
             >
                <Filter size={24} />
             </button>

             <div className="hidden md:flex bg-surface-highest/10 px-6 py-4 rounded-full border border-white/5 items-center gap-3">
                <span className="text-primary font-black text-sm italic">{filteredCars.length}</span>
                <span className="text-on-surface-variant text-[0.6rem] uppercase font-black tracking-widest leading-none">Units Detected</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Sidebar */}
          <aside className={`w-full lg:w-80 shrink-0 space-y-12 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Price Filter */}
            <section className="space-y-6">
              <h3 className="text-[0.65rem] uppercase font-black tracking-[0.2em] text-on-surface-variant flex justify-between items-center bg-surface-highest/5 p-4 rounded-xl border border-white/5">
                Price Matrix
                <span className="text-secondary italic">${(priceRange[1]/1000).toFixed(0)}K MAX</span>
              </h3>
              <div className="px-2">
                <input 
                  type="range" 
                  min="80000" 
                  max="700000" 
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-surface-highest/20 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </section>

            {/* Brand Filter */}
            <section className="space-y-6">
              <h3 className="text-[0.65rem] uppercase font-black tracking-[0.2em] text-on-surface-variant">Strategic Brands</h3>
              <div className="grid grid-cols-2 gap-3">
                {brands.map(brand => (
                  <button 
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`px-4 py-3 rounded-xl text-[0.6rem] font-black uppercase tracking-widest border transition-all ${selectedBrands.includes(brand) ? 'bg-primary text-background border-primary italic' : 'bg-surface-highest/5 text-on-surface-variant border-white/5 hover:border-white/20'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </section>

            {/* Transmission Filter */}
            <section className="space-y-6">
              <h3 className="text-[0.65rem] uppercase font-black tracking-[0.2em] text-on-surface-variant">Drive Type</h3>
              <div className="flex flex-col gap-2">
                {['All', 'Dual Clutch', 'PDK', 'Seamless Shift'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setSelectedTransmission(type)}
                    className={`text-left px-6 py-4 rounded-xl text-[0.65rem] font-black uppercase tracking-widest border transition-all ${selectedTransmission === type ? 'bg-secondary text-background border-secondary italic' : 'bg-surface-highest/5 text-on-surface-variant border-white/5 hover:border-white/20'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </section>

            {/* Reset Button */}
            <Button 
              variant="outline" 
              className="w-full border-dashed border-white/10 text-on-surface-variant hover:text-white hover:border-white/20"
              onClick={clearFilters}
            >
              RESET PARAMETERS
            </Button>
          </aside>

          {/* Results Area */}
          <div className="flex-1">
             <AnimatePresence mode='popLayout'>
               {filteredCars.length > 0 ? (
                 <motion.div 
                   layout
                   className="grid grid-cols-1 xl:grid-cols-2 gap-10"
                 >
                   {filteredCars.map((car) => (
                     <motion.div
                       key={car.id}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       transition={{ duration: 0.4 }}
                     >
                       <CarCard car={car} />
                     </motion.div>
                   ))}
                 </motion.div>
               ) : (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="text-center py-48 bg-surface-highest/5 rounded-[4rem] border border-dashed border-white/10"
                 >
                    <SlidersHorizontal className="mx-auto text-on-surface-variant/20 mb-8" size={80} />
                    <h2 className="text-4xl font-black uppercase text-white italic tracking-tighter mb-4">Zero Matches Detected</h2>
                    <p className="text-on-surface-variant uppercase tracking-widest text-[0.7rem] font-bold opacity-60">Adjust your telemetry parameters for better results.</p>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
