# forward - 转发主分支

通过 PR 将生产分支转发到开发分支。

## 使用方法

```bash
gfl forward [flags]
```

## 别名

```bash
gfl fwd [flags]
```

## 说明

`forward` 命令创建一个从 `productionBranch` 到 `devBaseBranch` 的 Pull Request，用于将生产环境的更改同步到开发环境。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--title` | `-t` | 自定义 PR 标题 |
| `--body` | `-b` | 自定义 PR 描述 |

## 示例

### 基本使用

```bash
gfl forward
# 创建 PR: main → dev
# 自动生成的标题和描述
```

### 自定义 PR 信息

```bash
gfl forward --title "Sync main to dev" --body "This PR includes hotfixes"
```

### 快捷别名

```bash
gfl fwd
```

## 默认 PR 内容

### 默认标题

```
chore: forward main to dev (2025-01-15 Wed 14:30)
```

### 默认描述

```
✨ Automated forward from `main` to `dev`.

_Powered by [gfl](https://github.com/aric-go/gfl) 🚀_
```

## 工作流程

1. 检查 `productionBranch` 和 `devBaseBranch` 是否相同
2. 同步远程仓库获取最新信息
3. 验证两个分支在远程都存在
4. 生成 PR 标题和描述
5. 使用 `gh` CLI 创建 PR

## 使用场景

### 热修复后同步

```bash
# 1. 创建并合并热修复
gfl hotfix critical-bug
gfl pr main --open
# ... PR 合并到 main ...

# 2. 将热修复同步到 dev
gfl forward
```

### 定期同步

```bash
# 定期将 main 的更改同步到 dev
gfl forward --title "Weekly sync: main → dev"
```

## 注意事项

- 需要安装 [GitHub CLI](https://cli.github.com/) (`gh`)
- `productionBranch` 和 `devBaseBranch` 不能相同
- 两个分支必须在远程存在
- 确保在执行前已同步远程仓库

## 安装 gh CLI

```bash
# macOS
brew install gh

# Linux
# 访问 https://github.com/cli/releases

# 登录
gh auth login
```

## 原理说明

`forward` 命令通过 GitHub CLI (`gh`) 实现：

```bash
# 同步远程仓库
git fetch origin

# 使用 gh 创建 PR
gh pr create --base dev --head main --title "chore: forward main to dev" --body "✨ Automated forward..."
```

参数说明：
- `--base dev` PR 的目标分支
- `--head main` PR 的源分支
- `--title` PR 标题
- `--body` PR 描述

## 错误处理

### 分支相同

```bash
$ gfl forward
Error: Production branch and dev branch cannot be the same
```

### 分支不存在

```bash
$ gfl forward
Error: Dev branch 'develop' does not exist in remote
```

### gh 未安装

```bash
$ gfl forward
Error: GitHub CLI (gh) is not installed
```

## 相关命令

- [`hotfix`](./hotfix) - 创建热修复分支
- [`pr`](./pr) - 创建 Pull Request
- [`sync`](./sync) - 同步远程仓库
