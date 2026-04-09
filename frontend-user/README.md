# Tech Blog - 现代化技术博客

一个基于 Next.js 15+ 构建的现代化技术博客平台，提供优雅的阅读体验和丰富的功能特性。

## ✨ 主要特性

- 🎨 **现代化设计** - 采用 Tailwind CSS 4.0 构建，支持深色/浅色主题切换
- ⚡ **高性能** - 基于 Next.js 16 App Router，支持 SSR 和静态生成
- 📝 **Markdown 支持** - 使用 gray-matter 和 react-markdown 渲染文章内容
- 🔍 **搜索功能** - 内置文章搜索，快速找到感兴趣的内容
- 🏷️ **分类和标签** - 支持按分类和标签浏览文章
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🎭 **动画效果** - 使用 Framer Motion 提供流畅的交互动画
- 📊 **性能监控** - 集成 Web Vitals 监控页面性能
- 🎯 **SEO 优化** - 完善的元数据和语义化标签

## 🛠️ 技术栈

- **框架**: Next.js 16.1.3 (React 19)
- **样式**: Tailwind CSS 4.0
- **状态管理**: Zustand 5.0
- **主题**: next-themes 0.4
- **动画**: Framer Motion 12.26
- **Markdown**: react-markdown + remark-gfm
- **代码高亮**: react-syntax-highlighter
- **类型检查**: TypeScript 5

## 📦 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
frontend-user/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于页面
│   ├── categories/        # 分类页面
│   ├── posts/             # 文章详情页
│   ├── search/            # 搜索页面
│   ├── tags/              # 标签页面
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页横幅
│   ├── PostCard.tsx       # 文章卡片
│   ├── PostContent.tsx    # 文章内容渲染
│   ├── FeaturedPosts.tsx  # 精选文章
│   ├── SearchBar.tsx      # 搜索栏
│   ├── ThemeToggle.tsx    # 主题切换
│   └── ...
├── content/               # Markdown 文章内容
│   └── posts/            # 博客文章
├── lib/                   # 工具函数
│   └── posts.ts          # 文章数据处理
└── public/               # 静态资源
```

## 📝 添加文章

在 `content/posts/` 目录下创建 Markdown 文件：

```markdown
---
title: "文章标题"
date: "2024-01-17"
excerpt: "文章摘要"
category: "分类"
tags: ["标签1", "标签2"]
author: "作者名"
---

文章内容...
```

## 🎨 主题定制

项目使用 `next-themes` 实现主题切换，支持：
- 浅色模式：清新简洁的白色主题
- 深色模式：科技感十足的深蓝渐变主题

可在 `app/globals.css` 中自定义主题样式。

## 🚀 部署

项目支持多种部署方式：

- **Vercel**: 推荐，零配置部署
- **Docker**: 使用提供的 Dockerfile
- **传统服务器**: 构建后使用 Node.js 运行

## 📄 许可证

本项目仅供学习和参考使用。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**开发时间**: 2024-2026  
**技术支持**: Next.js + React + TypeScript
