# Tech Blog - 现代化技术博客

一个功能完善的技术博客网站，使用 Next.js 16 和 React 19 构建，具有出色的性能、美观的界面和流畅的动画效果。

---

## How to Run

### 使用 Docker Compose（推荐）

```bash
# 构建并启动所有服务
docker-compose up --build -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

**访问地址**：服务启动后，在浏览器中访问 http://localhost:8081

> **说明**：虽然容器内显示 `http://localhost:3000`，但这是容器内部端口。通过 Docker 端口映射 `8081:3000`，外部应使用 `8081` 端口访问。

### 本地开发

```bash
# 进入用户端项目目录
cd frontend-user

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build
npm start
```

---

## Services

| 服务名称 | 描述 | 端口 | 技术栈 |
|---------|------|------|--------|
| frontend-user | 用户端 - 技术博客 | 8081 | Next.js 16, React 19, TypeScript, Tailwind CSS |

### 服务访问地址

- **用户端（技术博客）**: http://localhost:8081

> **注意**：Docker 容器内显示 `http://localhost:3000` 是正常的，这是容器内部的端口。外部通过 `8081` 端口访问（Docker 端口映射 `8081:3000`）。

---

## 测试账号

当前项目为静态博客系统，无需登录账号即可访问所有功能。

| 角色 | 账号 | 密码 | 说明 |
|------|------|------|------|
| 游客 | - | - | 无需登录，可浏览所有文章 |

---

## 题目内容

使用 Next.js 和 React 框架开发一个功能完善的技术博客网站。该博客应参考互联网上优秀的技术博客设计案例，在性能优化、界面美观度和动画过渡效果方面达到行业领先水平。

### 具体要求

#### 1. 性能优化
- ✅ 实现图片懒加载和优化处理
- ✅ 应用代码分割和按需加载
- ✅ 确保首屏加载时间不超过2秒
- ✅ 实现服务端渲染(SSR)或静态站点生成(SSG)以提升首屏加载速度和SEO表现
- ✅ 优化核心Web指标(Core Web Vitals)，确保LCP、FID和CLS达到良好水平

#### 2. 界面美观
- ✅ 设计符合现代UI趋势的视觉风格
- ✅ 建立清晰的排版层次结构，确保良好的可读性
- ✅ 实现响应式设计，适配桌面端、平板和移动设备
- ✅ 设计合理的色彩方案，确保内容与背景的对比度符合WCAG标准
- ✅ 提供深色/浅色模式切换功能

#### 3. 动画过渡
- ✅ 实现页面间的平滑过渡动画
- ✅ 添加元素进入/离开视口时的微动画效果
- ✅ 为交互元素(按钮、链接等)添加悬停状态动画
- ✅ 确保所有动画流畅且性能友好，避免卡顿或掉帧
- ✅ 实现滚动触发的动画效果，增强页面交互体验

#### 4. 功能要求
- ✅ 文章列表页(支持分页或无限滚动)
- ✅ 文章详情页(支持代码高亮、目录导航)
- ✅ 分类和标签功能
- ✅ 搜索功能
- ✅ 响应式导航栏
- ✅ 相关文章推荐功能

#### 5. 技术栈
- ✅ Next.js (最新稳定版本) - v16.1.3
- ✅ React (最新稳定版本) - v19.2.3
- ✅ 状态管理方案 - Zustand
- ✅ CSS解决方案 - Tailwind CSS v4
- ✅ 动画库 - Framer Motion

---

## 项目结构

```
tech-blog/
├── frontend-user/          # 用户端 - 技术博客
│   ├── app/                # Next.js App Router
│   ├── components/         # React 组件
│   ├── content/posts/      # Markdown 文章
│   ├── lib/                # 工具函数
│   ├── public/             # 静态资源
│   ├── Dockerfile          # Docker 构建文件
│   ├── package.json        # 依赖配置
│   └── next.config.ts      # Next.js 配置
├── docker-compose.yml      # Docker Compose 配置
├── .gitignore              # Git 忽略文件
└── README.md               # 项目说明
```

---

## 主要特性

### 🚀 性能优化
- 图片自动优化（AVIF/WebP 格式）
- 代码分割和按需加载
- 静态站点生成（SSG）
- Core Web Vitals 监控

### 🎨 界面设计
- 现代化 UI 设计
- 蓝-青-绿色调主题
- 响应式布局
- 深色/浅色模式切换

### ✨ 动画效果
- Framer Motion 动画库
- 滚动触发动画
- 悬停交互效果
- 平滑页面过渡

### 📝 博客功能
- Markdown 文章支持
- 代码语法高亮
- 目录导航
- 分类和标签系统
- 全文搜索
- 相关文章推荐

---

## 技术栈详情

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.3 | React 框架 |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | 4.x | CSS 样式 |
| Framer Motion | 12.x | 动画效果 |
| next-themes | 0.4.6 | 主题切换 |
| react-syntax-highlighter | 16.x | 代码高亮 |
| gray-matter | 4.x | Markdown 解析 |

---

## Docker 部署说明

### 镜像特性
- 多阶段构建，镜像体积小
- 支持 AMD64 和 ARM64 架构
- 非 root 用户运行，安全性高
- 健康检查配置

### 环境变量
| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| NODE_ENV | production | 运行环境 |
| NEXT_TELEMETRY_DISABLED | 1 | 禁用遥测 |

---

## 许可证

MIT License

---

**Tech Blog** - 用心打造的现代化技术博客 ❤️
