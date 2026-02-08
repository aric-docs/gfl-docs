# checkout - 交互式分支切换

通过交互式界面切换 Git 分支。

## 使用方法

```bash
gfl checkout
```

## 别名

```bash
gfl co
```

## 说明

`checkout` 命令显示所有本地分支的交互式列表，允许你快速选择并切换到目标分支。

## 示例

### 基本使用

```bash
gfl checkout
# 或
gfl co
```

执行后会显示类似以下界面：

```
? 选择要切换的分支:
  ▸ main
    dev
    feature/aric/user-authentication
    feature/alice/payment-system
    hotfix/aric/critical-bug
```

## 工作流程

1. 获取所有本地分支列表
2. 显示交互式选择界面
3. 切换到选中的分支

## 注意事项

- 只显示本地分支
- 切换前请确保工作目录干净或已暂存更改
- 如果分支有未提交的更改，切换可能会失败

## 原理说明

`checkout` 命令通过以下方式实现：

### 获取分支列表

```bash
git branch
```

解析输出获取所有本地分支列表。

### 交互式选择

使用 Go 的 `survey` 库显示交互式选择界面。

### 切换分支

```bash
git checkout selected-branch
```

## 相关命令

- [`start`](./start) - 创建并切换到新分支
- [`sync`](./sync) - 同步远程分支
- [`sweep`](./sweep) - 清理分支
