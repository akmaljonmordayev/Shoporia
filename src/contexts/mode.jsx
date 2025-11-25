import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (mode) => {
        set({ theme: mode });
        document.documentElement.classList.toggle("dark", mode === "dark");
      },
      toggleTheme: () =>
        set((state) => {
          const newMode = state.theme === "dark" ? "light" : "dark";

          document.documentElement.classList.toggle("dark", newMode === "dark");

          return { theme: newMode };
        }),
    }),
    {
      name: "mode",
    }
  )
);
