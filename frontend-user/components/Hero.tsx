"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-[#0a0e27] dark:via-[#0f1729] dark:to-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-[#00d4ff] dark:to-[#00fff5] rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-[0_0_40px_rgba(0,212,255,0.4)]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-[#00d4ff] dark:via-[#00fff5] dark:to-[#14b8a6] bg-clip-text text-transparent dark:drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              探索技术
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:via-[#e0e0ff] dark:to-[#c0c0ff] bg-clip-text text-transparent dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">分享知识</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            一个专注于前端开发、编程技巧和最佳实践的现代化技术博客
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/posts"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl dark:shadow-[0_0_30px_rgba(0,212,255,0.4)] dark:hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                浏览文章
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-[#00fff5] dark:to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/about"
              className="group px-8 py-4 bg-white dark:bg-[#1a1f3a] text-gray-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl dark:shadow-[0_0_20px_rgba(0,212,255,0.2)] dark:hover:shadow-[0_0_40px_rgba(0,255,245,0.3)] transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 dark:border-[#00d4ff]/30 hover:border-blue-500 dark:hover:border-[#00fff5]"
            >
              <span className="flex items-center gap-2">
                了解更多
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-white/80 dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#0f1729] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-[#00d4ff]/30 dark:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:dark:shadow-[0_0_40px_rgba(0,212,255,0.35)] hover:dark:border-[#00d4ff]/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] bg-clip-text text-transparent mb-2 dark:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">技术文章</div>
            </div>
            <div className="bg-white/80 dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#0f1729] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-[#00fff5]/30 dark:shadow-[0_0_30px_rgba(0,255,245,0.15)] hover:dark:shadow-[0_0_40px_rgba(0,255,245,0.35)] hover:dark:border-[#00fff5]/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-[#00fff5] dark:to-[#14b8a6] bg-clip-text text-transparent mb-2 dark:drop-shadow-[0_0_20px_rgba(0,255,245,0.5)]">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">技术分类</div>
            </div>
            <div className="bg-white/80 dark:bg-gradient-to-br dark:from-[#1a1f3a] dark:to-[#0f1729] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-[#14b8a6]/30 dark:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:dark:shadow-[0_0_40px_rgba(20,184,166,0.35)] hover:dark:border-[#14b8a6]/50 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 dark:from-[#14b8a6] dark:to-[#10b981] bg-clip-text text-transparent mb-2 dark:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                17+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">技术标签</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-[#00d4ff]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-[#00fff5]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/10 dark:bg-[#00fff5]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern dark:dark-grid-pattern opacity-5 dark:opacity-20" />
    </section>
  );
}
