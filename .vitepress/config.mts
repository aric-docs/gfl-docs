import { defineConfig, loadEnv } from "vitepress";
import { VitePWA } from "vite-plugin-pwa";
import { pwaConfig } from "./pwa.config";

const env = loadEnv("", process.cwd());

export default defineConfig({
  srcDir: "./src",
  base: env.VITE_BASE_URL || "/",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  ],
  title: "GFL",
  description: "A powerful command-line tool that simplifies GitHub Flow workflows",
  outDir: "./dist",
  vite: {
    plugins: [VitePWA(pwaConfig)],
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "GFL",
      description: "简化 GitHub Flow 工作流的强大命令行工具",
      themeConfig: {
        logo: "/favicon.svg",
        lastUpdated: {
          text: "更新时间",
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        outline: {
          label: "大纲",
          level: [2, 3],
        },
        nav: [
          { text: "首页", link: "/" },
          { text: "快速开始", link: "/guide/quick-start" },
          { text: "命令参考", link: "/commands/" },
          { text: "配置指南", link: "/guide/configuration" },
          { text: "最佳实践", link: "/guide/best-practices" },
        ],
        sidebar: {
          "/guide/": [
            {
              text: "指南",
              items: [
                { text: "快速开始", link: "/guide/quick-start" },
                { text: "配置指南", link: "/guide/configuration" },
                { text: "最佳实践", link: "/guide/best-practices" },
              ],
            },
          ],
          "/commands/": [
            {
              text: "命令参考",
              items: [
                { text: "概述", link: "/commands/" },
                {
                  text: "核心命令",
                  collapsed: false,
                  items: [
                    { text: "init - 初始化配置", link: "/commands/init" },
                    { text: "start - 开始功能开发", link: "/commands/start" },
                    { text: "publish - 发布分支", link: "/commands/publish" },
                    { text: "pr - 创建 Pull Request", link: "/commands/pr" },
                    { text: "checkout - 交互式分支切换", link: "/commands/checkout" },
                  ],
                },
                {
                  text: "修复命令",
                  collapsed: false,
                  items: [
                    { text: "hotfix - 创建热修复分支", link: "/commands/hotfix" },
                    { text: "bugfix - 创建缺陷修复分支", link: "/commands/bugfix" },
                  ],
                },
                {
                  text: "发布管理",
                  collapsed: false,
                  items: [
                    { text: "release - 创建发布分支", link: "/commands/release" },
                    { text: "tag - 创建版本标签", link: "/commands/tag" },
                  ],
                },
                {
                  text: "分支管理",
                  collapsed: false,
                  items: [
                    { text: "sync - 同步远程仓库", link: "/commands/sync" },
                    { text: "sweep - 清理分支", link: "/commands/sweep" },
                    { text: "rebase - 变基分支", link: "/commands/rebase" },
                    { text: "rename - 重命名分支", link: "/commands/rename" },
                    { text: "copy - 复制分支", link: "/commands/copy" },
                    { text: "restore - 恢复文件", link: "/commands/restore" },
                    { text: "forward - 转发主分支", link: "/commands/forward" },
                  ],
                },
                {
                  text: "信息命令",
                  collapsed: false,
                  items: [
                    { text: "info - 显示仓库信息", link: "/commands/info" },
                    { text: "config - 查看配置", link: "/commands/config" },
                  ],
                },
              ],
            },
          ],
          "/": [
            {
              text: "开始使用",
              items: [
                { text: "简介", link: "/" },
                { text: "快速开始", link: "/guide/quick-start" },
                { text: "命令参考", link: "/commands/" },
                { text: "配置指南", link: "/guide/configuration" },
                { text: "最佳实践", link: "/guide/best-practices" },
              ],
            },
          ],
        },
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
        socialLinks: [
          { icon: "github", link: "https://github.com/aric-go/gfl" },
        ],
        footer: {
          message: "基于 MIT 许可发布",
          copyright: "Copyright © 2019-present aric.zheng",
        },
      },
    },
  },
});
