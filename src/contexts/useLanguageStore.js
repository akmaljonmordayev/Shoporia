import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "uz",
      setLanguage: (lang) => {
        set({ language: lang });
      },
      toggleLanguage: () =>
        set((state) => {
          const order = ["uz", "ru", "en"];
          const currentIndex = order.indexOf(state.language);
          const nextLanguage = order[(currentIndex + 1) % order.length];
          return { language: nextLanguage };
        }),
    }),
    {
      name: "language-storage",
    }
  )
);
