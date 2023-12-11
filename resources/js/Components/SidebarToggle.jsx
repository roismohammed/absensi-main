import { create } from 'zustand';

const useSidebarToggle = create((set) => ({
   isExpanded: false,
   setExpand: () => set((state) => ({ isExpanded: !state.isExpanded }))
}));

export default useSidebarToggle;
