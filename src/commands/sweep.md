# sweep - 清理分支

删除包含特定关键词的本地或远程分支。

## 使用方法

```bash
gfl sweep [keyword] [flags]
```

## 别名

```bash
gfl clean [keyword] [flags]
gfl rm [keyword] [flags]
```

## 说明

`sweep` 命令用于批量清理包含特定关键词的分支，可以清理本地分支、远程分支或两者。

**必须指定 `--local` 或 `--remote` 标志之一（或两者）。**

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--local` | `-l` | 清理本地分支 |
| `--remote` | `-r` | 清理远程分支 |
| `--exact` | `-e` | 精确匹配分支名（而非包含） |
| `--force` | `-f` | 强制删除本地分支（使用 -D 而非 -d） |
| `--confirm` | `-y` | 确认执行删除操作 |

## 参数

| 参数 | 说明 |
|------|------|
| `keyword` | 要匹配的关键词 |

## 示例

### 清理本地功能分支

```bash
gfl sweep feature --local --confirm
# 删除所有包含 "feature" 的本地分支
```

### 清理远程已合并分支

```bash
gfl sweep merged --remote --confirm
# 删除所有包含 "merged" 的远程分支
```

### 同时清理本地和远程

```bash
gfl sweep hotfix --local --remote --confirm
# 删除本地和远程所有包含 "hotfix" 的分支
```

### 精确匹配分支名

```bash
gfl sweep "feature/aric/specific-branch" --local --exact --confirm
# 只删除完全匹配此名称的分支
```

### 强制删除本地分支

```bash
gfl sweep feature --local --force --confirm
# 使用 git branch -D 强制删除
```

### 快捷别名

```bash
gfl clean feature -l -y
gfl rm hotfix -r -y
```

## 工作流程

### 本地分支清理

1. 获取本地分支列表
2. 匹配包含关键词的分支
3. 使用 `git branch -d`（安全）或 `git branch -D`（强制）删除

### 远程分支清理

1. 获取远程分支列表
2. 匹配包含关键词的分支
3. 使用 `git push origin --delete` 删除

## 安全建议

### 不带 --confirm 预览

```bash
gfl sweep feature --local --remote
# 只显示将要删除的分支，不实际删除
```

### 使用 --exact 避免误删

```bash
# 可能误删: feature/user-auth、feature/user-profile
gfl sweep feature/user --local

# 精确匹配: 只删除 feature/user
gfl sweep "feature/user" --local --exact
```

## 典型使用场景

### 清理已合并的功能分支

```bash
# 1. 确保本地已同步
gfl sync

# 2. 先预览
gfl sweep feature --local

# 3. 确认后删除
gfl sweep feature --local --confirm
```

### 清理远程分支

```bash
# 清理远程已合并的 hotfix 分支
gfl sweep hotfix --remote --confirm
```

### 定期清理

```bash
# 每周清理一次已完成的分支
gfl sweep feature --local --remote --confirm
gfl sweep fix --local --remote --confirm
```

## 注意事项

- **必须**指定 `--local` 或 `--remote` 标志
- 删除操作不可逆，建议先不带 `--confirm` 预览
- 本地分支使用 `-d` 标志（安全删除），未合并的分支无法删除
- 使用 `--force` 可强制删除未合并的本地分支
- 不能删除当前所在的分支

## 原理说明

`sweep` 命令通过以下 Git 命令实现：

### 清理本地分支

```bash
# 获取本地分支列表
git branch

# 安全删除分支（已合并的）
git branch -d feature/aric/old-feature

# 强制删除分支（未合并的）
git branch -D feature/aric/old-feature
```

### 清理远程分支

```bash
# 获取远程分支列表
git branch -r

# 删除远程分支
git push origin --delete feature/aric/old-feature
```

匹配逻辑：
- 使用字符串包含匹配（默认）
- 使用精确匹配（`--exact` 标志）

## 相关命令

- [`checkout`](./checkout) - 切换分支
- [`start`](./start) - 创建分支
- [`sync`](./sync) - 同步远程仓库
