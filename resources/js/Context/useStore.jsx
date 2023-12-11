import { create } from 'zustand';

const classDark = document.documentElement.classList.contains('dark');

let dark = false;

if (classDark) {
   dark = true;
} else {
   dark = false;
}

const useStore = create((set) => ({
   isDarkMode: dark,
   isExpanded: true,

   toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
   toggleExpanded: () => set((state) => ({ isExpanded: !state.isExpanded }))
}));

export { useStore };
