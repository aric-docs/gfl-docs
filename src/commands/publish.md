# publish - 发布分支

将当前分支推送到远程仓库。

## 使用方法

```bash
gfl publish
```

## 别名

```bash
gfl p
```

## 说明

`publish` 命令将当前分支推送到远程仓库，并设置上游跟踪分支。

等效于：
```bash
git push -u origin HEAD
```

## 示例

### 基本使用

```bash
# 当前分支: feature/aric/user-authentication
gfl publish
# 推送到: origin/feature/aric/user-authentication
```

### 快捷别名

```bash
gfl p
```

## 工作流程

1. 执行 `git push -u origin HEAD` 推送当前分支
2. 设置上游跟踪关系，后续可以直接使用 `git push`

## 典型使用场景

```bash
# 1. 开始新功能
gfl s new-feature

# 2. 进行开发和提交
git add .
git commit -m "feat: add new feature"

# 3. 发布分支
gfl p

# 4. 创建 PR
gfl pr --open
```

## 注意事项

- 确保当前有更改需要推送
- 如果远程分支已存在且有冲突，需要先处理冲突
- 推送前建议先同步远程仓库：`gfl sync`

## 原理说明

`publish` 命令实际执行以下 Git 命令：

```bash
git push -u origin HEAD
```

参数说明：
- `-u` 设置上游跟踪分支，后续可以直接使用 `git push`
- `origin` 远程仓库名称
- `HEAD` 表示当前分支

## 相关命令

- [`start`](./start) - 开始新功能
- [`pr`](./pr) - 创建 Pull Request
- [`sync`](./sync) - 同步远程仓库
