# start - 开始功能开发

创建并切换到新的功能分支。

## 使用方法

```bash
gfl start [feature-name]
gfl start [action]:[feature-name]
```

## 别名

```bash
gfl s [feature-name]
```

## 说明

`start` 命令从配置的 `devBaseBranch`（默认为 `dev`）创建新的功能分支。

分支命名格式：
- 有 nickname：`{featurePrefix}/{nickname}/{feature-name}`
- 无 nickname：`{featurePrefix}/{feature-name}`

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--base` | `-b` | 指定基础分支（使用 `@` 表示当前分支） |

## 参数

| 参数 | 说明 |
|------|------|
| `feature-name` | 功能名称 |
| `action:feature-name` | 自定义操作类型和功能名称 |

## 示例

### 基本使用

```bash
gfl start user-authentication
# 创建分支: feature/aric/user-authentication
```

### 使用操作前缀

```bash
gfl start feat:user-authentication
gfl start feature:user-authentication
gfl start test:add-unit-tests
```

### 指定基础分支

```bash
# 从 main 分支创建
gfl start new-feature --base main

# 从当前分支创建
gfl start experimental-feature --base @
```

### 快捷别名

```bash
gfl s user-authentication
```

## 工作流程

1. 从远程获取最新分支信息 (`git fetch origin`)
2. 验证基础分支在远程是否存在
3. 从基础分支创建并切换到新分支

## 注意事项

- 确保 `devBaseBranch` 在远程存在
- 功能名称会根据 `branchCaseFormat` 配置进行格式化
- 如果基础分支在远程不存在，命令会失败并提示

## 原理说明

`start` 命令通过以下 Git 命令实现：

```bash
# 1. 同步远程仓库信息
git fetch origin

# 2. 从远程基础分支创建新分支
git checkout -b feature/aric/feature-name origin/dev
```

实际执行流程：
1. 读取配置获取 `devBaseBranch`（默认为 `dev`）
2. 验证基础分支在远程是否存在
3. 生成符合命名规范的分支名
4. 执行 `git checkout -b` 创建并切换到新分支

## 相关命令

- [`publish`](./publish) - 发布分支
- [`pr`](./pr) - 创建 Pull Request
- [`hotfix`](./hotfix) - 创建热修复分支
