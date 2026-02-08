# rebase - 变基分支

将当前分支变基到开发基准分支。

## 使用方法

```bash
gfl rebase
```

## 别名

```bash
gfl rb
```

## 说明

`rebase` 命令将当前分支变基到配置的 `devBaseBranch`（默认为 `dev`）的最新版本。

等效于：
```bash
git rebase origin/dev
```

## 示例

### 基本使用

```bash
# 当前在 feature/aric/new-feature 分支
gfl rebase
# 将当前分支变基到 origin/dev
```

### 快捷别名

```bash
gfl rb
```

## 工作流程

1. 读取配置获取 `devBaseBranch`
2. 检查当前分支（避免在目标分支上执行）
3. 执行变基操作

## 使用场景

### 在创建 PR 前变基

```bash
# 确保功能分支包含最新的 dev 更改
gfl sync
gfl rebase

# 然后创建 PR
gfl pr --open
```

### 解决冲突后变基

```bash
# 变基过程中出现冲突
# 解决冲突后
git add .
git rebase --continue

# 或放弃变基
git rebase --abort
```

## 注意事项

- 不能在 `devBaseBranch` 自身上执行此命令
- 变基会改写历史，避免对已推送的公共分支执行
- 如果发生冲突，需要手动解决后继续
- 变基前建议先执行 `gfl sync` 获取最新信息

## 变基 vs 合并

| 操作 | 优点 | 缺点 |
|------|------|------|
| **变基** (rebase) | 线性历史，更清晰 | 改写历史，不能用于公共分支 |
| **合并** (merge) | 保留完整历史 | 历史图形复杂 |

## 原理说明

`rebase` 命令通过以下 Git 命令实现：

```bash
git rebase origin/dev
```

实际执行流程：
1. 读取配置获取 `devBaseBranch`（默认为 `dev`）
2. 检查当前分支（避免在目标分支上执行）
3. 执行 `git rebase origin/{devBaseBranch}`

变基过程：
1. 临时保存当前分支的所有提交
2. 切换到目标分支（`origin/dev`）
3. 逐个应用保存的提交
4. 返回到当前分支

## 相关命令

- [`sync`](./sync) - 同步远程仓库
- [`start`](./start) - 开始新功能
- [`pr`](./pr) - 创建 Pull Request
