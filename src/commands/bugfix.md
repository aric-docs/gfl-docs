# bugfix - 创建缺陷修复分支

从开发分支创建缺陷修复分支。

## 使用方法

```bash
gfl bugfix [bug-name]
```

## 别名

```bash
gfl b [bug-name]
gfl fix [bug-name]
```

## 说明

`bugfix` 命令从配置的 `devBaseBranch`（默认为 `dev`）创建缺陷修复分支，用于修复开发或测试环境发现的缺陷。

分支命名格式：
- 有 nickname：`{fixPrefix}/{nickname}/{bug-name}`
- 无 nickname：`{fixPrefix}/{bug-name}`

## 参数

| 参数 | 说明 |
|------|------|
| `bug-name` | 缺陷名称或描述 |

## 示例

### 基本使用

```bash
gfl bugfix login-validation-error
# 创建分支: fix/aric/login-validation-error
```

### 快捷别名

```bash
gfl b display-issue
gfl fix memory-leak
```

## 工作流程

1. 从远程获取最新信息 (`git fetch origin`)
2. 从 `devBaseBranch` 创建修复分支
3. 切换到新创建的修复分支

## 与 hotfix 的区别

| 命令 | 基础分支 | 用途 |
|------|----------|------|
| `bugfix` | devBaseBranch | 修复开发/测试环境的缺陷 |
| `hotfix` | productionBranch | 修复生产环境的紧急问题 |

## 典型使用流程

```bash
# 1. 创建修复分支
gfl bugfix navbar-alignment

# 2. 修复缺陷
vim src/components/Navbar.vue
git add .
git commit -m "fix: correct navbar alignment"

# 3. 发布并创建 PR
gfl p
gfl pr --open
```

## 注意事项

- 缺陷修复分支从 `devBaseBranch` 创建
- 生产环境的紧急修复应使用 `hotfix` 命令
- 确保缺陷描述清晰，便于识别问题

## 原理说明

`bugfix` 命令通过以下 Git 命令实现：

```bash
# 1. 同步远程仓库
git fetch origin

# 2. 从开发分支创建修复分支
git checkout -b fix/aric/login-validation-error origin/dev
```

与 `hotfix` 的区别：
- `bugfix` 从 `devBaseBranch` 创建（用于开发/测试环境问题）
- `hotfix` 从 `productionBranch` 创建（用于生产环境紧急问题）

## 相关命令

- [`hotfix`](./hotfix) - 创建热修复分支
- [`start`](./start) - 开始功能开发
- [`publish`](./publish) - 发布分支
