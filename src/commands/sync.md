# sync - 同步远程仓库

同步远程仓库信息到本地。

## 使用方法

```bash
gfl sync
```

## 别名

```bash
gfl up
```

## 说明

`sync` 命令执行以下操作：
1. 从远程获取最新分支信息 (`git fetch origin`)
2. 更新远程引用并清理已删除的远程分支 (`git remote update origin --prune`)

## 示例

### 基本使用

```bash
gfl sync
```

### 快捷别名

```bash
gfl up
```

## 工作流程

1. 执行 `git fetch origin` - 获取远程仓库的最新信息
2. 执行 `git remote update origin --prune` - 更新远程引用并清理

## 使用场景

### 在开始新功能前同步

```bash
# 确保本地有最新的远程信息
gfl sync

# 然后开始新功能
gfl s new-feature
```

### 在创建 PR 前同步

```bash
gfl sync
gfl pr --open
```

### 定期同步

```bash
# 每天开始工作前同步一次
gfl sync
```

## 注意事项

- 此命令不会修改本地分支，只是更新远程引用信息
- `--prune` 选项会删除本地已不存在的远程分支引用
- 建议定期执行以保持远程引用的准确性

## 原理说明

`sync` 命令通过以下 Git 命令实现：

```bash
# 1. 获取远程仓库的最新信息
git fetch origin

# 2. 更新远程引用并清理已删除的分支
git remote update origin --prune
```

- `git fetch` 从远程获取所有分支和标签的最新信息
- `git remote update --prune` 更新远程引用并删除本地已不存在的远程分支引用

## 相关命令

- [`start`](./start) - 开始新功能开发
- [`rebase`](./rebase) - 变基分支
- [`publish`](./publish) - 发布分支
