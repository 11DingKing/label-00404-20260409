import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebVitals } from "@/components/WebVitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Blog - 技术博客",
  description: "一个现代化的技术博客，分享前端开发、编程技巧和最佳实践",
  keywords: ["技术博客", "前端开发", "React", "Next.js", "编程"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <WebVitals />
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white dark:from-[#0a0e27] dark:via-[#0f1729] dark:to-[#0a0e27] transition-colors duration-500">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
