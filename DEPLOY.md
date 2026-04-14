# Augenblick — 部署指南

## 一次性初始配置（约 15 分钟）

### 第 1 步：安装 Node.js（如尚未安装）

前往 https://nodejs.org 下载 LTS 版本并安装。

### 第 2 步：本地运行（可选，用于预览）

```bash
cd augenblick-blog
npm install
npm run dev
# 打开 http://localhost:4321 预览网站
```

### 第 3 步：上传到 GitHub

1. 前往 https://github.com/new 创建一个新仓库，命名为 `augenblick-blog`，设为 **Public**。
2. 在本地项目目录执行：

```bash
git init
git add .
git commit -m "init: Augenblick blog"
git branch -M main
git remote add origin https://github.com/你的用户名/augenblick-blog.git
git push -u origin main
```

### 第 4 步：部署到 Netlify

1. 前往 https://app.netlify.com → **Add new site** → **Import an existing project**
2. 选择 **GitHub**，授权后选择 `augenblick-blog` 仓库
3. 构建设置保持默认（Netlify 会自动检测 Astro）
4. 点击 **Deploy site**，等待约 1–2 分钟
5. 你会得到一个 `xxx.netlify.app` 的域名，可在 Site settings → Domain management 中改成 `augenblick.netlify.app`

### 第 5 步：开启 Decap CMS（浏览器编辑界面）

**在 Netlify 控制台：**

1. 进入你的网站 → **Integrations** → 搜索 **Identity** → 点击 **Enable**
2. 进入 **Identity** → **Settings** → **Registration** → 改为 **Invite only**（防止陌生人注册）
3. 在 **Identity** → **Settings** → **Services** → **Git Gateway** → 点击 **Enable Git Gateway**
4. 回到 **Identity** 页面 → **Invite users** → 输入你的邮箱，发送邀请
5. 打开邮件中的链接，设置密码

**完成后：**

访问 `https://augenblick.netlify.app/admin` → 用你的邮箱和密码登录 → 开始写作！

---

## 日常使用

- **写新文章**：访问 `/admin`，登录后选择对应栏目，点击「New」
- **保存草稿**：文章中打开「草稿」开关，不会显示在网站上
- **发布**：关闭「草稿」开关并点击「Publish」，Netlify 会在约 30 秒内自动重新构建网站
- **上传图片**：在编辑器中直接拖拽图片即可，自动上传到 `/public/uploads/`

## 引用歌词/台词（特殊视觉效果）

在 `.mdx` 文件中使用 `PullQuote` 组件：

```mdx
import PullQuote from '@/components/PullQuote.astro';

<PullQuote source="来源 / 歌名">
  这里放引用的文字
</PullQuote>
```

## LaTeX 公式（科研板块）

行内公式：`$E = mc^2$`

块级公式：
```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

## 书籍阅读笔记格式

在书籍的 `.mdx` 正文中，用二级标题分隔不同阅读阶段：

```markdown
## 第一章 · 2026-01-15

第一次阅读感想...

## 第三章 · 2026-01-22

继续的感想...
```
