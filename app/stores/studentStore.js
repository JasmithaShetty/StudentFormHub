import { use } from "react";
import { create } from "zustand";

const useStore = create((set) => ({
    activeStudent: {},
    setActiveStudent: (student) => set({ activeStudent: student}),


}))

export default useStore;