"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    快速链接: [
      { name: "首页", href: "/" },
      { name: "文章", href: "/posts" },
      { name: "分类", href: "/categories" },
      { name: "标签", href: "/tags" },
    ],
    关于: [
      { name: "关于我们", href: "/about" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-[#0a0e27] dark:via-[#0f1729] dark:to-[#0a0e27] border-t border-gray-200 dark:border-[#00d4ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block group">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-[#00d4ff] dark:to-[#00fff5] rounded-xl flex items-center justify-center shadow-md dark:shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:shadow-lg dark:group-hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-shadow">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] bg-clip-text text-transparent dark:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                  Tech Blog
                </h3>
              </motion.div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              分享技术知识，探索编程世界
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#00d4ff] transition-all text-sm"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-[#00d4ff] dark:to-[#00fff5] transition-all group-hover:w-full dark:shadow-[0_0_10px_rgba(0,212,255,0.6)]" />
                      </span>
                      {link.external && (
                        <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-[#00d4ff]/20">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Tech Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
