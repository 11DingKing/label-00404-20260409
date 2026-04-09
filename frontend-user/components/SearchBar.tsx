"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1a1f3a]/50 dark:hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all text-gray-700 dark:text-gray-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <form
                onSubmit={handleSearch}
                className="bg-white dark:bg-[#1a1f3a] rounded-2xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,212,255,0.2)] border border-gray-200 dark:border-[#00d4ff]/30 overflow-hidden"
              >
                <div className="flex items-center p-4 space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-[#00d4ff] dark:to-[#00fff5] rounded-xl flex items-center justify-center flex-shrink-0 dark:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="搜索文章、标签、分类..."
                    className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-lg"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 dark:hover:from-[#00d4ff]/90 dark:hover:to-[#00fff5]/90 transition-all font-medium shadow-lg dark:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transform hover:-translate-y-0.5"
                  >
                    搜索
                  </button>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-[#0a0e27] rounded border border-gray-300 dark:border-[#00d4ff]/30">ESC</kbd>
                    <span>关闭</span>
                    <kbd className="px-2 py-1 bg-gray-100 dark:bg-[#0a0e27] rounded border border-gray-300 dark:border-[#00d4ff]/30 ml-2">Enter</kbd>
                    <span>搜索</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
