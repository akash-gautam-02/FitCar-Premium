import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      wishlist: [],
      compareList: [],

      toggleWishlist: (carId) => {
        const { wishlist } = get();
        if (wishlist.includes(carId)) {
          set({ wishlist: wishlist.filter((id) => id !== carId) });
        } else {
          set({ wishlist: [...wishlist, carId] });
        }
      },

      addToCompare: (car) => {
        const { compareList } = get();
        if (compareList.length >= 3) return; // Limit to 3 cars for comparison
        if (!compareList.find((c) => c.id === car.id)) {
          set({ compareList: [...compareList, car] });
        }
      },

      removeFromCompare: (carId) => {
        const { compareList } = get();
        set({ compareList: compareList.filter((c) => c.id !== carId) });
      },

      clearCompare: () => set({ compareList: [] }),
    }),
    {
      name: "kinetic-motors-storage",
    },
  ),
);

export default useStore;
