---
title: "Tailwind CSS 实用技巧"
excerpt: "掌握 Tailwind CSS 的高级技巧，提升开发效率，构建美观的用户界面。"
date: "2024-01-12"
category: "CSS"
tags: ["Tailwind CSS", "CSS", "前端开发", "UI设计"]
coverImage: "https://picsum.photos/800/400"
author: "Tech Blog Team"
---

# Tailwind CSS 实用技巧

Tailwind CSS 是一个功能强大的实用优先 CSS 框架。本文分享一些实用技巧。

## 自定义配置

扩展默认主题：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...
          900: '#0c4a6e',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
```

## 响应式设计

Tailwind 的响应式前缀非常直观：

```jsx
<div className="
  w-full 
  md:w-1/2 
  lg:w-1/3 
  xl:w-1/4
  p-4 
  md:p-6 
  lg:p-8
">
  响应式容器
</div>
```

## 深色模式

轻松实现深色模式：

```jsx
<div className="
  bg-white 
  dark:bg-gray-900 
  text-gray-900 
  dark:text-white
">
  支持深色模式的内容
</div>
```

## 组合类名

使用 `@apply` 创建可复用的组件类：

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg 
           hover:bg-blue-700 transition-colors;
  }
  
  .card {
    @apply bg-white dark:bg-gray-800 rounded-xl 
           shadow-lg p-6 border border-gray-200 
           dark:border-gray-700;
  }
}
```

## 动画和过渡

创建流畅的动画效果：

```jsx
<button className="
  transform 
  transition-all 
  duration-300 
  hover:scale-110 
  hover:shadow-xl
  active:scale-95
">
  悬停我
</button>
```

## 渐变背景

创建美丽的渐变：

```jsx
<div className="
  bg-gradient-to-r 
  from-purple-400 
  via-pink-500 
  to-red-500
  text-white 
  p-8 
  rounded-lg
">
  渐变背景
</div>
```

## 网格布局

使用 Grid 创建复杂布局：

```jsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-6
">
  <div className="col-span-1 md:col-span-2">宽列</div>
  <div>普通列</div>
  <div>普通列</div>
</div>
```

## 性能优化

使用 PurgeCSS 移除未使用的样式：

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
};
```

## 总结

Tailwind CSS 提供了一种高效的方式来构建现代 UI。通过这些技巧，你可以更好地利用 Tailwind 的强大功能。
