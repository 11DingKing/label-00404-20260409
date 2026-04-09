"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // 调试信息
    console.log("ThemeToggle mounted, theme:", theme, "resolvedTheme:", resolvedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log("Theme changed to:", theme, "resolvedTheme:", resolvedTheme);
      console.log("HTML class:", document.documentElement.className);
    }
  }, [theme, resolvedTheme, mounted]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-[#1a1f3a] animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        console.log("Switching theme from", theme, "to", newTheme);
        setTheme(newTheme);
        // 强制更新 HTML 类
        setTimeout(() => {
          console.log("After switch - HTML class:", document.documentElement.className);
        }, 100);
      }}
      className="relative p-2 rounded-xl bg-gray-100 dark:bg-[#1a1f3a] hover:bg-gray-200 dark:hover:bg-[#1a1f3a]/80 dark:hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5 text-yellow-500 dark:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5 text-blue-600 dark:text-[#00d4ff] dark:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
