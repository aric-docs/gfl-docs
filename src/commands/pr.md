# pr - 创建 Pull Request

创建 GitHub Pull Request。

## 使用方法

```bash
gfl pr [base-branch]
```

## 别名

```bash
gfl rv [base-branch]
```

## 说明

`pr` 命令在浏览器中打开 GitHub PR 创建页面，自动填充源分支和目标分支信息。

默认目标分支为配置的 `devBaseBranch`（默认为 `dev`）。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--open` | `-o` | 在浏览器中打开 PR 列表页面 |
| `--sync` | `-s` | 同步生产分支到开发分支 |

## 参数

| 参数 | 说明 |
|------|------|
| `base-branch` | 目标分支（可选，默认为 devBaseBranch） |

## 示例

### 基本使用

```bash
gfl pr
# 在浏览器中打开当前分支到 dev 的 PR 创建页面
```

### 指定目标分支

```bash
gfl pr main
# 创建到 main 分支的 PR
```

### 打开 PR 列表

```bash
gfl pr --open
# 在浏览器中打开仓库的 PR 列表
```

### 同步分支

```bash
gfl pr --sync
# 将 main 分支同步到 dev 分支
```

## 工作流程

1. 获取当前分支信息
2. 确定目标分支（参数或配置）
3. 在浏览器中打开 GitHub PR 创建页面

## 典型使用场景

```bash
# 1. 开始功能
gfl s new-feature

# 2. 开发和提交
git add .
git commit -m "feat: add new feature"

# 3. 发布分支
gfl p

# 4. 创建 PR
gfl pr --open
```

## 注意事项

- 需要配置 GitHub 远程仓库
- 确保已安装并配置 `gh` CLI 工具
- 分支需要先推送到远程（使用 `gfl publish`）

## 原理说明

`pr` 命令通过以下方式实现：

### 创建 PR

使用 GitHub CLI (`gh`) 创建 PR：

```bash
gh pr create --base dev --head feature/aric/feature-name
```

### 打开 PR 列表

使用 GitHub CLI 打开 PR 列表页面：

```bash
gh pr list
```

### 在浏览器中打开

构建 GitHub URL 并使用浏览器打开：

```
https://github.com/owner/repo/pulls
```

### 同步分支

将 main 分支同步到 dev 分支：

```bash
# 创建从 main 到 dev 的 PR
gh pr create --base dev --head main
```

## 相关命令

- [`start`](./start) - 开始新功能
- [`publish`](./publish) - 发布分支
- [`forward`](./forward) - 转发主分支
