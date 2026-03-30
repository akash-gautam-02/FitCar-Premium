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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <span className="label-md text-primary opacity-60 tracking-[0.5em]">
              KINETIC INVENTORY
            </span>
            <h1 className="display-lg leading-none">
              ELITE <br/>
              <span className="text-primary italic">MACHINES.</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="SEARCH TERMINAL..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="glass-effect border border-white/5 rounded-2xl px-8 py-5 w-full md:w-80 label-md text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 transition-all outline-none"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors duration-500" size={18} />
             </div>
             
             <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-5 rounded-2xl glass-effect border border-white/5 text-primary transition-all active:scale-95"
             >
                <Filter size={24} />
             </button>

             <div className="hidden md:flex glass-effect px-8 py-5 rounded-2xl border border-white/5 items-center gap-4">
                <span className="text-primary font-poppins font-bold text-lg italic leading-none">{filteredCars.length}</span>
                <span className="text-on-surface-variant text-[0.6rem] uppercase font-poppins font-bold tracking-[0.2em] leading-none opacity-50">Units Detected</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Sidebar */}
          <aside className={`w-full lg:w-80 shrink-0 space-y-12 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Price Filter */}
            <section className="space-y-6">
              <h3 className="label-md text-[0.65rem] text-on-surface-variant flex justify-between items-center glass-effect p-5 rounded-xl border border-white/5">
                Price Matrix
                <span className="text-primary italic tracking-tight">${(priceRange[1]/1000).toFixed(0)}K MAX</span>
              </h3>
              <div className="px-2">
                <input 
                  type="range" 
                  min="80000" 
                  max="700000" 
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </section>

            {/* Brand Filter */}
            <section className="space-y-6">
              <h3 className="label-md text-[0.65rem] text-on-surface-variant px-2">Strategic Brands</h3>
              <div className="grid grid-cols-2 gap-3">
                {brands.map(brand => (
                  <button 
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`px-4 py-3.5 rounded-xl label-md text-[0.65rem] border transition-all duration-500 ${selectedBrands.includes(brand) ? 'bg-primary text-background border-primary italic shadow-primary-glow/20' : 'glass-effect text-on-surface-variant border-white/5 hover:border-white/20 hover:text-white'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </section>

            {/* Transmission Filter */}
            <section className="space-y-6">
              <h3 className="label-md text-[0.65rem] text-on-surface-variant px-2">Drive Type</h3>
              <div className="flex flex-col gap-2.5">
                {['All', 'Dual Clutch', 'PDK', 'Seamless Shift'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setSelectedTransmission(type)}
                    className={`text-left px-6 py-4.5 rounded-xl label-md text-[0.65rem] border transition-all duration-500 ${selectedTransmission === type ? 'bg-primary text-background border-primary italic shadow-primary-glow/20' : 'glass-effect text-on-surface-variant border-white/5 hover:border-white/20 hover:text-white'}`}
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
                   className="text-center py-48 glass-card border-dashed border-white/10"
                 >
                    <SlidersHorizontal className="mx-auto text-primary/20 mb-8" size={64} />
                    <h2 className="text-4xl font-poppins font-bold uppercase text-white tracking-tighter mb-4">Zero Matches</h2>
                    <p className="text-on-surface-variant uppercase tracking-[0.2em] text-[0.65rem] font-bold opacity-50">ADJUST TELEMETRY PARAMETERS FOR BETTER RESULTS.</p>
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
