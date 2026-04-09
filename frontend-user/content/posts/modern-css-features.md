---
title: "现代 CSS 特性指南"
excerpt: "探索最新的 CSS 特性，包括容器查询、层叠层、CSS Grid 等，让你的样式代码更加强大和灵活。"
date: "2024-01-10"
category: "CSS"
tags: ["CSS", "前端开发", "Web设计", "现代特性"]
coverImage: "https://picsum.photos/800/400"
author: "Tech Blog Team"
---

# 现代 CSS 特性指南

CSS 在不断进化，让我们看看一些令人兴奋的现代特性。

## 容器查询

根据容器大小而非视口大小应用样式：

```css
.container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## CSS 层叠层

更好地控制样式优先级：

```css
@layer reset, base, components, utilities;

@layer reset {
  * {
    margin: 0;
    padding: 0;
  }
}

@layer components {
  .button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
}
```

## CSS Grid 子网格

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.grid-item {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

## :has() 选择器

父选择器终于来了：

```css
/* 选择包含图片的卡片 */
.card:has(img) {
  padding: 0;
}

/* 选择后面跟着段落的标题 */
h2:has(+ p) {
  margin-bottom: 0.5rem;
}
```

## CSS 嵌套

原生支持嵌套语法：

```css
.card {
  padding: 1rem;
  
  & .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
}
```

## 颜色函数

更强大的颜色处理：

```css
.element {
  /* 相对颜色 */
  background: oklch(from blue l c h / 0.5);
  
  /* 颜色混合 */
  color: color-mix(in srgb, blue 50%, red);
  
  /* 对比色 */
  color: color-contrast(white vs black, blue, red);
}
```

## 滚动驱动动画

基于滚动的动画：

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

## 视图过渡 API

平滑的页面过渡：

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation-name: fade-out;
}

::view-transition-new(root) {
  animation-name: fade-in;
}
```

## 逻辑属性

支持不同书写方向：

```css
.element {
  /* 传统方式 */
  margin-left: 1rem;
  padding-right: 2rem;
  
  /* 逻辑属性 */
  margin-inline-start: 1rem;
  padding-inline-end: 2rem;
}
```

## 自定义属性增强

```css
@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.element {
  --gradient-angle: 45deg;
  background: linear-gradient(var(--gradient-angle), blue, red);
  transition: --gradient-angle 0.3s;
}

.element:hover {
  --gradient-angle: 90deg;
}
```

## 总结

这些现代 CSS 特性让我们能够编写更简洁、更强大的样式代码。虽然有些特性还需要考虑浏览器兼容性，但它们代表了 CSS 的未来方向。
