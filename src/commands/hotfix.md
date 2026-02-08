# hotfix - 创建热修复分支

从生产分支创建热修复分支。

## 使用方法

```bash
gfl hotfix [hotfix-name]
```

## 别名

```bash
gfl hf [hotfix-name]
gfl hot [hotfix-name]
```

## 说明

`hotfix` 命令从配置的 `productionBranch`（默认为 `main`）创建热修复分支，用于生产环境的紧急修复。

分支命名格式：
- 有 nickname：`{hotfixPrefix}/{nickname}/{hotfix-name}`
- 无 nickname：`{hotfixPrefix}/{hotfix-name}`

## 参数

| 参数 | 说明 |
|------|------|
| `hotfix-name` | 热修复名称 |

## 示例

### 基本使用

```bash
gfl hotfix critical-security-bug
# 创建分支: hotfix/aric/critical-security-bug
```

### 快捷别名

```bash
gfl hf critical-bug
gfl hot urgent-fix
```

## 工作流程

1. 从远程获取最新信息 (`git fetch origin`)
2. 从 `productionBranch` 创建热修复分支
3. 切换到新创建的热修复分支

## 典型热修复流程

```bash
# 1. 创建热修复分支
gfl hotfix login-bug

# 2. 修复并测试
vim src/login.js
git add .
git commit -m "fix: resolve login issue"

# 3. 发布并创建 PR 到 main
gfl p
gfl pr main --open

# 4. 合并到 main 后，同步到 dev
gfl checkout dev
git pull origin main

# 5. 清理热修复分支
gfl sweep hotfix --confirm
```

## 注意事项

- 热修复分支从 `productionBranch` 创建，而不是 `devBaseBranch`
- 热修复合并到 main 后，记得同步回 dev 分支
- 热修复应该小而聚焦，避免包含其他更改

## 原理说明

`hotfix` 命令通过以下 Git 命令实现：

```bash
# 1. 同步远程仓库
git fetch origin

# 2. 从生产分支创建热修复分支
git checkout -b hotfix/aric/critical-bug origin/main
```

与 `start` 命令的区别：
- `start` 从 `devBaseBranch` 创建
- `hotfix` 从 `productionBranch` 创建

## 相关命令

- [`bugfix`](./bugfix) - 创建缺陷修复分支
- [`start`](./start) - 开始功能开发
- [`release`](./release) - 创建发布分支
