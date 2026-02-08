# GFL Documentation

GFL (GitHub Flow CLI) 的官方文档站点。

## 关于 GFL

GFL 是一个强大的命令行工具，简化 GitHub Flow 工作流程。它提供了一组完整的命令来管理 Git 分支、创建 Pull Request、处理版本发布等操作。

- [GitHub 仓库](https://github.com/aric-go/gfl)
- [在线文档](https://afeiship.github.io/gfl-docs/)

## 本地开发

### 前置要求

- Node.js 22+
- pnpm 9+

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
pnpm build
```

构建产物会输出到 `dist/` 目录。

### 预览生产构建

```bash
pnpm preview
```

## 项目结构

```
├── .vitepress/              # VitePress 配置
│   ├── config.mts           # 主配置文件
│   ├── pwa.config.ts        # PWA 配置
│   └── theme/               # 自定义主题组件
├── src/                     # 文档源目录
│   ├── commands/            # 命令参考文档
│   ├── guide/               # 使用指南
│   └── index.md             # 首页
├── public/                  # 静态资源
├── .env                     # 环境变量
├── .github/workflows/       # GitHub Actions 工作流
├── package.json
└── pnpm-lock.yaml
```

## 文档内容

- **快速开始** - 5 分钟上手指南
- **命令参考** - 所有 GFL 命令的详细文档
  - 核心命令：init, start, publish, pr, checkout
  - 修复命令：hotfix, bugfix
  - 发布管理：release, tag
  - 分支管理：sync, sweep, rebase, rename, copy, restore, forward
  - 信息命令：info, config
- **配置指南** - 配置选项和最佳实践
- **最佳实践** - 团队协作和工作流程建议

## 更新文档

### 添加新命令文档

在 `src/commands/` 目录创建对应的 `.md` 文件，并在 `src/commands/index.md` 和 `.vitepress/config.mts` 的侧边栏配置中添加链接。

### 更新指南

在 `src/guide/` 目录下创建或修改 `.md` 文件。

## 配置

### 环境变量

编辑 `.env` 文件配置部署路径：

```bash
VITE_BASE_URL=/
```

对于 GitHub Pages 项目站点：

```bash
VITE_BASE_URL=/gfl-docs/
```

**注意：** 环境变量必须以 `VITE_` 开头才能被 VitePress 的 `loadEnv` 读取。

### PWA 配置

编辑 `.vitepress/pwa.config.ts` 自定义 PWA 行为。

## 部署

文档会自动部署到 GitHub Pages。推送代码到 `main` 分支时会触发部署。

### 手动触发部署

在 GitHub Actions 页面选择 "Deploy VitePress Site to GitHub Pages" 工作流，点击 "Run workflow"。

### 部署配置

修改 `.github/workflows/deploy.yml` 可自定义部署行为：

- 修改 Node.js 版本
- 修改 pnpm 版本
- 更改部署目录

## License

MIT

---

**Built with [VitePress](https://vitepress.dev/)**
