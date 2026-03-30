import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Settings, ArrowRight, Heart, PlusCircle, CheckCircle2 } from 'lucide-react'
import Button from './Button'
import useVehicleStore from '../../store/useVehicleStore'

const CarCard = ({ car }) => {
  const { wishlist, toggleWishlist, comparison, addToComparison, removeFromComparison } = useVehicleStore()
  
  const isWishlisted = wishlist.includes(car.id)
  const isComparing = comparison.includes(car.id)

  return (
    <div className="min-w-[320px] md:min-w-[420px] group relative overflow-hidden glass-card transition-all duration-700 hover:border-primary/30 hover:shadow-primary-glow/20">
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-transparent opacity-60"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-surface-lowest/60 backdrop-blur-md rounded-full text-[0.6rem] font-black uppercase tracking-widest text-primary border border-primary/20">
            {car.category}
          </span>
        </div>

        {/* Action Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => toggleWishlist(car.id)}
            className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-all ${isWishlisted ? 'bg-primary text-background border-primary' : 'bg-surface-lowest/40 text-white hover:bg-primary/20'}`}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={() => isComparing ? removeFromComparison(car.id) : addToComparison(car.id)}
            className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-all ${isComparing ? 'bg-secondary text-background border-secondary' : 'bg-surface-lowest/40 text-white hover:bg-secondary/20'}`}
          >
            {isComparing ? <CheckCircle2 size={16} /> : <PlusCircle size={16} />}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="text-xl md:text-2xl font-poppins font-bold tracking-tight uppercase group-hover:text-primary transition-colors duration-500">
              {car.name}
            </h4>
            <p className="text-on-surface-variant text-[0.65rem] font-medium uppercase tracking-[0.2em]">
              {car.brand} • {car.year}
            </p>
          </div>
          <div className="text-primary font-poppins font-bold text-lg md:text-xl tracking-tight">
            ${car.price.toLocaleString()}
          </div>
        </div>

        {/* Specs Highlights */}
        <div className="flex gap-6 pt-5 border-t border-white/5">
          <div className="flex items-center gap-2.5 text-[0.7rem] font-semibold text-on-surface-variant uppercase tracking-wider">
            <Zap size={14} className="text-primary" />
            <span>{car.power}</span>
          </div>
          <div className="flex items-center gap-2.5 text-[0.7rem] font-semibold text-on-surface-variant uppercase tracking-wider">
            <Settings size={14} className="text-secondary" />
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Action */}
        <Link to={`/cars/${car.id}`} className="block w-full">
          <Button variant="secondary" className="w-full group/btn">
            View Details
            <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CarCard
