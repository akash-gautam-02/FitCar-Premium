import { create } from "zustand";
import { persist } from "zustand/middleware";

const useVehicleStore = create(
  persist(
    (set) => ({
      wishlist: [],
      comparison: [],

      toggleWishlist: (carId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(carId)
            ? state.wishlist.filter((id) => id !== carId)
            : [...state.wishlist, carId],
        })),

      addToComparison: (carId) =>
        set((state) => {
          if (state.comparison.length >= 3) return state; // Max 3 for comparison
          if (state.comparison.includes(carId)) return state;
          return { comparison: [...state.comparison, carId] };
        }),

      removeFromComparison: (carId) =>
        set((state) => ({
          comparison: state.comparison.filter((id) => id !== carId),
        })),

      clearComparison: () => set({ comparison: [] }),
    }),
    {
      name: "kinetic-vehicle-storage",
    },
  ),
);

export default useVehicleStore;
