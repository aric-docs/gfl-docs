# 命令参考

GFL 提供了丰富的命令来管理 GitHub Flow 工作流程。

## 命令概览

### 核心命令

| 命令 | 别名 | 说明 |
|------|------|------|
| [init](./init) | - | 初始化 GitHub Flow 配置 |
| [start](./start) | s | 开始新功能开发 |
| [publish](./publish) | p | 发布分支到远程 |
| [pr](./pr) | rv | 创建 Pull Request |
| [checkout](./checkout) | co | 交互式分支切换 |

### 修复命令

| 命令 | 别名 | 说明 |
|------|------|------|
| [hotfix](./hotfix) | hf, hot | 创建热修复分支 |
| [bugfix](./bugfix) | b, fix | 创建缺陷修复分支 |

### 发布管理

| 命令 | 别名 | 说明 |
|------|------|------|
| [release](./release) | rl | 创建发布分支 |
| [tag](./tag) | t | 创建版本标签 |

### 分支管理

| 命令 | 别名 | 说明 |
|------|------|------|
| [sync](./sync) | up | 同步远程仓库 |
| [sweep](./sweep) | clean, rm | 清理分支 |
| [rebase](./rebase) | rb | 变基分支 |
| [rename](./rename) | mv | 重命名分支 |
| [copy](./copy) | cp | 复制分支 |
| [restore](./restore) | r | 恢复文件 |
| [forward](./forward) | fwd | 转发主分支到开发分支 |

### 信息命令

| 命令 | 别名 | 说明 |
|------|------|------|
| [info](./info) | i | 显示仓库信息 |
| [config](./config) | c | 查看配置 |

## 全局标志

所有命令都支持以下全局标志：

| 标志 | 简写 | 说明 |
|------|------|------|
| `--confirm` | `-y` | 自动确认操作 |
| `--debug` | `-d` | 启用调试模式，显示详细日志 |
| `--help` | `-h` | 显示帮助信息 |
| `--version` | `-v` | 显示版本信息 |

## 使用示例

```bash
# 查看帮助
gfl --help
gfl start --help

# 启用调试模式
gfl --debug start new-feature

# 自动确认操作
gfl sweep feature --confirm
```
