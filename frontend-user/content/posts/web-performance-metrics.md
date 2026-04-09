---
title: "Web 性能指标详解"
excerpt: "深入了解 Core Web Vitals 和其他重要的 Web 性能指标，学习如何测量和优化网站性能。"
date: "2024-01-11"
category: "性能优化"
tags: ["性能优化", "Web Vitals", "前端开发", "用户体验"]
coverImage: "https://picsum.photos/800/400"
author: "Tech Blog Team"
---

# Web 性能指标详解

了解和优化 Web 性能指标对于提供良好的用户体验至关重要。

## Core Web Vitals

Google 定义的三个核心指标：

### LCP (Largest Contentful Paint)

最大内容绘制时间，衡量加载性能：

- **良好**：< 2.5 秒
- **需要改进**：2.5 - 4 秒
- **差**：> 4 秒

优化建议：
```javascript
// 使用 Next.js Image 组件
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // 优先加载
/>
```

### FID (First Input Delay)

首次输入延迟，衡量交互性：

- **良好**：< 100 毫秒
- **需要改进**：100 - 300 毫秒
- **差**：> 300 毫秒

优化建议：
```javascript
// 代码分割
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { ssr: false }
);
```

### CLS (Cumulative Layout Shift)

累积布局偏移，衡量视觉稳定性：

- **良好**：< 0.1
- **需要改进**：0.1 - 0.25
- **差**：> 0.25

优化建议：
```jsx
// 为图片和视频指定尺寸
<img 
  src="/image.jpg" 
  width="800" 
  height="600" 
  alt="Description"
/>

// 为动态内容预留空间
<div className="min-h-[200px]">
  {loading ? <Skeleton /> : <Content />}
</div>
```

## 其他重要指标

### TTFB (Time to First Byte)

首字节时间：

```javascript
// 优化服务器响应
export const revalidate = 60; // ISR

export async function generateStaticParams() {
  // 静态生成
  return posts.map(post => ({ slug: post.slug }));
}
```

### FCP (First Contentful Paint)

首次内容绘制：

```html
<!-- 预加载关键资源 -->
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin />
```

## 性能测量工具

### Lighthouse

```bash
# 使用 Lighthouse CLI
npm install -g lighthouse
lighthouse https://example.com --view
```

### Web Vitals 库

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  console.log(metric);
  // 发送到分析服务
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 优化策略

### 1. 资源优化

- 压缩图片和视频
- 使用现代格式（WebP、AVIF）
- 启用 CDN

### 2. 代码优化

- Tree shaking
- 代码分割
- 懒加载

### 3. 缓存策略

```javascript
// Next.js 缓存配置
export const dynamic = 'force-static';
export const revalidate = 3600; // 1小时
```

### 4. 预加载和预连接

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://api.example.com" />
```

## 监控和分析

持续监控性能指标：

```javascript
// 使用 Next.js Analytics
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

## 总结

Web 性能优化是一个持续的过程。通过理解和优化这些关键指标，你可以为用户提供更好的体验。
