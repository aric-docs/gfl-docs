# tag - 创建版本标签

为发布分支创建版本标签和 GitHub Release。

## 使用方法

```bash
gfl tag [flags]
```

## 别名

```bash
gfl t [flags]
```

## 说明

`tag` 命令基于最新版本标签创建新的版本标签，并推送到远程。如果安装了 `gh` CLI，还会自动创建 GitHub Release。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--type` | `-t` | 版本类型：major、minor、patch（默认：patch） |

## 版本类型说明

| 类型 | 示例 | 说明 |
|------|------|------|
| `major` | 1.0.0 → 2.0.0 | 重大更改 |
| `minor` | 1.0.0 → 1.1.0 | 新功能 |
| `patch` | 1.0.0 → 1.0.1 | 缺陷修复 |

## 示例

### 基本使用（patch 版本）

```bash
# 当前最新版本: v1.0.0
gfl tag
# 创建标签: v1.0.1
```

### 创建 minor 版本

```bash
gfl tag --type minor
# 创建标签: v1.1.0
```

### 创建 major 版本

```bash
gfl tag --type major
# 创建标签: v2.0.0
```

### 快捷别名

```bash
gfl t --type patch
```

## 工作流程

1. 获取最新版本标签
2. 根据类型计算新版本号
3. 显示版本信息
4. 切换到对应的发布分支 `releases/release-{version}`
5. 从远程获取标签信息
6. 创建带注释的标签
7. 推送标签到远程
8. 如果安装了 `gh` CLI，创建 GitHub Release

## 与 release 命令的区别

| 命令 | 作用 |
|------|------|
| `release` | 创建发布分支 `releases/release-x.x.x` |
| `tag` | 创建版本标签 `vx.x.x` 和 GitHub Release |

## 典型发布流程

```bash
# 1. 创建发布分支
gfl release --type minor

# 2. 进行发布准备
# （更新 CHANGELOG、版本号等）

# 3. 推送发布分支
git push

# 4. 合并发布分支到 main
# （通过 GitHub PR 完成）

# 5. 创建版本标签
gfl tag --type minor

# 6. 清理发布分支
gfl checkout main
git pull
git branch -d releases/release-1.1.0
```

## 注意事项

- 执行 `tag` 命令前需要先创建对应的发布分支
- 如果未安装 `gh` CLI，只会创建和推送标签，不会创建 GitHub Release
- 标签创建后会自动推送到远程仓库

## GitHub Release

如果安装了 [GitHub CLI](https://cli.github.com/)，`tag` 命令会自动创建 GitHub Release 并生成变更说明。

要安装 `gh` CLI：

```bash
# macOS
brew install gh

# Linux
# 访问 https://github.com/cli/cli/releases
```

## 原理说明

`tag` 命令通过以下 Git 和 GitHub 命令实现：

```bash
# 1. 切换到发布分支
git checkout releases/release-1.1.0

# 2. 获取远程标签
git fetch --tags

# 3. 创建带注释的标签
git tag -a v1.1.0 -m 'Release-v1.1.0'

# 4. 推送标签到远程
git push origin v1.1.0

# 5. 创建 GitHub Release（如果安装了 gh）
gh release create v1.1.0 --generate-notes
```

`--generate-notes` 参数让 GitHub 自动生成 release notes。

## 相关命令

- [`release`](./release) - 创建发布分支
