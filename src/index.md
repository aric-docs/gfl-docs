---
layout: home

hero:
  name: 'GFL'
  text: '简化 GitHub Flow 工作流的强大命令行工具'
  tagline: '让团队协作更加高效，让分支管理更加简单'
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 命令参考
      link: /commands/
    - theme: alt
      text: GitHub
      link: https://github.com/afeiship/gfl

features:
  - icon: 🔧
    title: 智能分支管理
    details: 自动化的分支创建、命名和切换，遵循 GitHub Flow 最佳实践
  - icon: 🚀
    title: 快速工作流
    details: 简化 GitHub Flow 的每个步骤，从功能开发到版本发布一键完成
  - icon: 🔀
    title: PR 创建
    details: 一键创建 Pull Request 并在浏览器中打开，支持自动填充模板
  - icon: 📦
    title: 版本管理
    details: 语义化版本控制和发布管理，自动创建版本标签和 GitHub Release
  - icon: 🧹
    title: 分支清理
    details: 智能清理已合并和过期的分支，保持仓库整洁
  - icon: ⚙️
    title: 灵活配置
    details: 支持全局和本地配置文件，满足不同项目和团队的个性化需求
  - icon: 🎯
    title: 交互式界面
    details: 友好的命令行交互体验，提供清晰的反馈和提示
  - icon: 🔍
    title: 调试支持
    details: 详细的执行日志和调试模式，方便问题排查
---

## 什么是 GFL？

**GFL (GitHub Flow CLI)** 是一个用 Go 编写的强大命令行工具，旨在简化和标准化 GitHub Flow 工作流程。它提供了一组完整的命令来管理 Git 分支、创建 Pull Request、处理版本发布等操作。

## 为什么选择 GFL？

- **标准化工作流** - 确保团队成员遵循统一的分支命名和协作规范
- **提高效率** - 减少重复性操作，将多个 Git 命令组合成一个简单命令
- **减少错误** - 自动化复杂流程，避免人为失误
- **易于上手** - 直观的命令设计和详细的文档支持

## 典型使用场景

```bash
# 1. 初始化项目
gfl init --nickname yourname

# 2. 开始新功能开发
gfl s user-authentication

# 3. 发布分支
gfl p

# 4. 创建 Pull Request
gfl pr --open

# 5. 清理已合并的分支
gfl sweep feature --confirm
```

## 核心概念

GFL 遵循 [GitHub Flow](https://guides.github.com/introduction/flow/) 工作流程：

1. **main 分支** - 生产环境的可发布代码
2. **dev 分支** - 开发集成的基准分支（可配置）
3. **feature 分支** - 从 dev 分支创建，用于功能开发
4. **hotfix 分支** - 从 main 分支创建，用于紧急修复
5. **Pull Request** - 代码审查和讨论的主要机制

## 适用项目

GFL 适用于任何使用 Git 和 GitHub 的项目，特别适合：

- 需要严格工作流规范的团队项目
- 频繁进行功能迭代的产品项目
- 需要快速响应 bug 修复的生产环境项目
- 多人协作的开源项目

---

<div style="text-align: center; margin-top: 3rem;">
  <p style="font-size: 1.1em;">准备好开始了吗？查看 <a href="/guide/quick-start">快速开始指南</a> 了解详情！</p>
</div>
