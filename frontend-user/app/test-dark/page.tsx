"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TestDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          暗色模式测试页面
        </h1>

        <div className="bg-white dark:bg-[#1a1f3a] p-6 rounded-xl border border-gray-200 dark:border-[#00d4ff]/20">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            主题信息
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>当前主题: {theme}</p>
            <p>解析后的主题: {resolvedTheme}</p>
            <p>HTML class: {typeof document !== 'undefined' ? document.documentElement.className : 'N/A'}</p>
          </div>
        </div>

        <div className="space-x-4">
          <button
            onClick={() => setTheme("light")}
            className="px-6 py-3 bg-white text-gray-900 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-all"
          >
            浅色模式
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="px-6 py-3 bg-[#1a1f3a] text-white rounded-xl border-2 border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all"
          >
            暗色模式
          </button>
          <button
            onClick={() => setTheme("system")}
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-xl border-2 border-gray-400 hover:border-gray-600 transition-all"
          >
            跟随系统
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500 dark:bg-[#00d4ff] p-6 rounded-xl text-white">
            <h3 className="font-bold mb-2">蓝色卡片</h3>
            <p>这个卡片在暗色模式下应该是霓虹青色</p>
          </div>
          <div className="bg-purple-500 dark:bg-[#b537f2] p-6 rounded-xl text-white">
            <h3 className="font-bold mb-2">紫色卡片</h3>
            <p>这个卡片在暗色模式下应该是霓虹紫色</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-[#00d4ff] dark:to-[#b537f2] p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-2">渐变测试</h3>
          <p>这个渐变在暗色模式下应该从青色到紫色</p>
        </div>

        <div className="p-6 bg-white dark:bg-[#1a1f3a] rounded-xl border border-gray-200 dark:border-[#00d4ff]/20 dark:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white dark:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
            发光效果测试
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            这个卡片在暗色模式下应该有霓虹发光边框和发光文字效果
          </p>
        </div>
      </div>
    </div>
  );
}
