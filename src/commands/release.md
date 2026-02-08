# release - 创建发布分支

基于最新版本标签创建发布分支。

## 使用方法

```bash
gfl release [flags]
```

## 别名

```bash
gfl rl [flags]
```

## 说明

`release` 命令基于最新版本标签，按照语义化版本规则创建新的发布分支。

发布分支命名格式：`releases/release-{version}`

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--type` | `-t` | 版本类型：major、minor、patch（默认：patch） |
| `--hotfix` | `-x` | 从生产分支创建（而非开发分支） |

## 版本类型说明

| 类型 | 示例 | 说明 |
|------|------|------|
| `major` | 1.0.0 → 2.0.0 | 重大更改，可能包含破坏性更新 |
| `minor` | 1.0.0 → 1.1.0 | 新功能，向后兼容 |
| `patch` | 1.0.0 → 1.0.1 | 缺陷修复 |

## 示例

### 基本使用（patch 版本）

```bash
# 当前最新版本: v1.0.0
gfl release
# 创建分支: releases/release-1.0.1
```

### 创建 minor 版本

```bash
# 当前最新版本: v1.0.0
gfl release --type minor
# 创建分支: releases/release-1.1.0
```

### 创建 major 版本

```bash
# 当前最新版本: v1.0.0
gfl release --type major
# 创建分支: releases/release-2.0.0
```

### 创建 hotfix 发布分支

```bash
gfl release --hotfix
# 从 productionBranch 创建而非 devBaseBranch
```

### 快捷别名

```bash
gfl rl --type minor
```

## 工作流程

1. 获取最新版本标签
2. 根据类型计算新版本号
3. 显示旧版本和新版本信息
4. 从远程获取最新分支
5. 创建发布分支
6. 推送发布分支到远程

## 典型发布流程

```bash
# 1. 创建发布分支
gfl release --type minor

# 2. 进行发布准备工作（更新 CHANGELOG 等）
vim CHANGELOG.md
git add .
git commit -m "chore: prepare for release v1.1.0"

# 3. 推送更改
git push

# 4. 创建版本标签
gfl tag --type minor

# 5. 合并发布分支到 main 和 dev
# （通过 PR 完成合并）
```

## 注意事项

- 确保有版本标签存在，如果没有任何标签，请先创建初始标签
- 发布分支创建后可以在此分支上进行发布前的最后调整
- 使用 `tag` 命令创建实际的版本标签和 GitHub Release

## 原理说明

`release` 命令通过以下 Git 命令实现：

```bash
# 1. 同步远程仓库
git fetch origin

# 2. 创建发布分支
git checkout -b releases/release-1.1.0 origin/dev

# 3. 推送发布分支
git push -u origin releases/release-1.1.0
```

版本号计算：
1. 获取最新的版本标签（如 `v1.0.0`）
2. 根据 `--type` 参数递增版本号
   - `patch`: 1.0.0 → 1.0.1
   - `minor`: 1.0.0 → 1.1.0
   - `major`: 1.0.0 → 2.0.0

## 相关命令

- [`tag`](./tag) - 创建版本标签
- [`hotfix`](./hotfix) - 创建热修复分支
