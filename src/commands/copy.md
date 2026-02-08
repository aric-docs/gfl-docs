# copy - 复制分支

从当前分支创建新的分支副本。

## 使用方法

```bash
gfl copy [new-branch-name]
```

## 别名

```bash
gfl cp [new-branch-name]
```

## 说明

`copy` 命令从当前分支创建一个新的分支副本。如果不提供新分支名，会自动生成名称（在当前分支名后添加 `-copyed` 后缀）。

自动生成名称时必须使用 `--confirm` 标志。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--confirm` | `-y` | 确认使用自动生成的分支名 |

## 参数

| 参数 | 说明 |
|------|------|
| `new-branch-name` | 新分支名（可选） |

## 示例

### 手动指定新分支名

```bash
# 当前在 feature/aric/user-auth 分支
gfl copy feature/aric/user-auth-v2
# 创建新分支: feature/aric/user-auth-v2
```

### 自动生成分支名

```bash
# 当前在 feature/aric/user-auth 分支
gfl copy --confirm
# 自动创建: feature/aric/user-auth-copyed
```

### 快捷别名

```bash
gfl cp new-branch-name
```

## 工作流程

1. 检查工作目录是否干净（无未提交更改）
2. 确定新分支名（手动指定或自动生成）
3. 验证当前分支在远程存在
4. 检查新分支名是否已存在
5. 从当前分支的远程版本创建新分支
6. 切换到新分支

## 使用场景

### 创建功能变体

```bash
# 基于现有功能创建改进版本
gfl start original-feature
# ... 开发 ...
gfl copy improved-feature
```

### 实验性分支

```bash
# 创建实验性副本
gfl copy experimental-branch --confirm
```

### 保留工作状态

```bash
# 当前分支有未完成的工作
# 快速创建副本继续工作
gfl copy wip-branch --confirm
```

## 注意事项

- **工作目录必须干净**：不能有未提交的更改
- 当前分支必须在远程存在
- 新分支名不能与现有分支冲突
- 自动生成名称时必须使用 `--confirm` 标志
- 复制的分支基于当前分支的远程版本，而非本地未推送的更改

## 原理说明

`copy` 命令通过以下 Git 命令实现：

```bash
# 1. 检查工作目录状态
git status --porcelain

# 2. 从当前分支的远程版本创建新分支
git checkout -b feature/aric/feature-name-copyed origin/feature/aric/feature-name
```

执行流程：
1. 检查工作目录是否干净（`git status --porcelain`）
2. 获取当前分支名
3. 生成新分支名（手动指定或自动添加 `-copyed` 后缀）
4. 验证当前分支在远程存在
5. 从远程分支创建新分支

## 错误处理

### 工作目录不干净

```bash
$ gfl copy
Error: Working directory is not clean. Please commit or stash changes first.
```

### 分支已存在

```bash
$ gfl copy existing-branch
Error: Branch 'existing-branch' already exists locally.
```

### 自动生成需要确认

```bash
$ gfl copy
Warning: Copying from 'feature/auth' to 'feature/aric/auth-copyed'
Use -y flag to confirm.
```

## 相关命令

- [`start`](./start) - 创建新功能分支
- [`rename`](./rename) - 重命名分支
- [`checkout`](./checkout) - 切换分支
