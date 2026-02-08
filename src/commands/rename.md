# rename - 重命名分支

重命名本地和/或远程分支。

## 使用方法

```bash
gfl rename [old-branch] [new-branch] [flags]
```

## 别名

```bash
gfl mv [old-branch] [new-branch] [flags]
```

## 说明

`rename` 命令用于重命名分支。可以单独重命名本地分支或远程分支，也可以同时处理两者。

如果未指定 `--local` 或 `--remote` 标志，默认只重命名本地分支。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--local` | `-l` | 重命名本地分支 |
| `--remote` | `-r` | 重命名远程分支 |
| `--delete` | `-d` | 重命名后删除旧远程分支 |

## 参数

| 参数 | 说明 |
|------|------|
| `old-branch` | 旧分支名 |
| `new-branch` | 新分支名 |

## 示例

### 重命名本地分支（默认）

```bash
gfl rename feature/old-name feature/new-name
# 或
gfl rename feature/old-name feature/new-name --local
```

### 只重命名远程分支

```bash
gfl rename feature/old-name feature/new-name --remote
```

### 同时重命名本地和远程

```bash
gfl rename feature/old-name feature/new-name --local --remote --delete
```

### 快捷别名

```bash
gfl mv old-branch new-branch
```

## 工作流程

### 本地分支重命名

1. 重命名本地分支
2. 如果提供了 `--confirm` 全局标志，则执行删除操作

### 远程分支重命名

1. 推送新分支到远程
2. 删除旧的远程分支（如果指定了 `--delete`）

## 使用场景

### 修正分支命名

```bash
# 分支名有拼写错误
gfl rename feature/authentiction feature/authentication
```

### 统一分支命名规范

```bash
# 修改为使用 kebab-case
gfl rename feature/userAuthentication feature/user-authentication
```

## 注意事项

- 如果未指定任何标志，默认只操作本地分支
- 重命名远程分支需要推送到新分支并删除旧分支
- 不能重命名当前所在的分支，需要先切换到其他分支
- 重命名后需要更新本地的远程跟踪引用

## 原理说明

`rename` 命令通过以下 Git 命令实现：

### 重命名本地分支

```bash
git branch -m feature/old-name feature/new-name
```

### 重命名远程分支

```bash
# 1. 推送新分支到远程
git push origin feature/new-name

# 2. 删除旧的远程分支
git push origin --delete feature/old-name
```

完整的远程分支重命名流程：
1. 重命名本地分支
2. 推送新分支到远程
3. 删除旧远程分支
4. 设置新分支的上游跟踪

## 完整流程示例

```bash
# 1. 切换到其他分支
gfl checkout main

# 2. 重命名本地分支
gfl rename feature/old feature/new

# 3. 推送新分支并删除旧远程分支
gfl publish  # 推送新分支
git push origin --delete feature/old  # 删除旧分支
```

## 相关命令

- [`start`](./start) - 创建新分支
- [`copy`](./copy) - 复制分支
- [`sweep`](./sweep) - 删除分支
