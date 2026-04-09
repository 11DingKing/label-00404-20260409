import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 部署需要 standalone 输出
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // 禁用图片优化，直接加载远程图片（避免 Docker 环境中的 DNS 问题）
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  // 启用实验性功能
  experimental: {
    optimizePackageImports: ["framer-motion", "react-syntax-highlighter"],
  },
  // 压缩
  compress: true,
  // 生产环境优化
  productionBrowserSourceMaps: false,
  // 严格模式
  reactStrictMode: true,
};

export default nextConfig;
