import { create } from "zustand";

interface UserState {
  userRole: string ;
  setUserRole: (role: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userRole: "", 
  
  setUserRole: (role: string) => set({ userRole: role }),
}));
