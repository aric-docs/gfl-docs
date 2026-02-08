# restore - 恢复文件

将文件恢复到未修改状态。

## 使用方法

```bash
gfl restore [path...]
```

## 别名

```bash
gfl r [path...]
```

## 说明

`restore` 命令将指定路径的文件恢复到 Git 中的原始状态，丢弃所有未提交的更改。

等效于：
```bash
git restore [path...]
git checkout -- [path...]
```

## 参数

| 参数 | 说明 |
|------|------|
| `path` | 要恢复的文件或目录路径（可选） |

## 示例

### 恢复当前目录

```bash
gfl restore
# 恢复当前目录下的所有更改
```

### 恢复指定文件

```bash
gfl restore src/components/Button.vue
```

### 恢复多个路径

```bash
gfl restore src/components/Button.vue src/utils/helpers.js
```

### 恢复目录

```bash
gfl restore src/components
```

### 快捷别名

```bash
gfl r .
```

## 工作流程

1. 如果未提供路径，恢复当前目录
2. 如果提供了路径，依次恢复每个指定路径
3. 使用 `git restore` 命令执行恢复操作

## 使用场景

### 丢弃不需要的更改

```bash
# 修改了文件但决定放弃
vim config.js
# ... 错误的修改 ...
gfl restore config.js
```

### 批量恢复

```bash
# 恢复多个文件
gfl restore file1.js file2.ts file3.css
```

### 恢复整个目录

```bash
# 误修改了整个组件目录
gfl restore src/components
```

## 注意事项

- **不可逆操作**：恢复后更改无法恢复
- 只恢复未暂存的更改
- 已暂存的更改不受影响
- 如果文件尚未提交到 Git，此操作会删除文件

## 与 git reset 的区别

| 命令 | 作用 |
|------|------|
| `gfl restore file.js` | 恢复文件到未修改状态 |
| `git reset HEAD file.js` | 取消暂存，但保留更改 |

## 原理说明

`restore` 命令通过以下 Git 命令实现：

```bash
# 恢复单个文件
git restore file.js

# 恢复多个文件
git restore file1.js file2.ts

# 恢复目录
git restore src/components

# 恢复当前目录
git restore .
```

Git 会从暂存区或 HEAD 恢复文件内容，丢弃工作目录中的所有更改。

## 安全建议

### 先查看状态

```bash
# 查看哪些文件会被影响
git status

# 恢复特定文件
gfl restore specific-file.js
```

### 确认后恢复

```bash
# 预览要恢复的文件
git restore --dry-run file.js

# 确认后恢复
gfl restore file.js
```

## 相关命令

- [`start`](./start) - 开始新功能
- [`checkout`](./checkout) - 切换分支
- [`rebase`](./rebase) - 变基分支
