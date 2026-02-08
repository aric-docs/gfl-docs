# 快速开始

本指南将帮助你在 5 分钟内上手 GFL，开始使用 GitHub Flow 工作流程。

## 安装

### 从源码安装

```bash
go install github.com/afeiship/gfl@latest
```

### 下载二进制文件

访问 [GitHub Releases](https://github.com/afeiship/gfl/releases) 下载适合你操作系统的二进制文件。

### 验证安装

```bash
gfl --version
```

你应该看到类似的输出：
```
GFL version 1.0.8
```

## 初始化项目

在开始使用 GFL 之前，需要先初始化项目配置：

```bash
cd your-project
gfl init --nickname yourname
```

这个命令会创建两个配置文件：

- **`.gfl.config.yml`** - 全局配置文件（可提交到版本控制）
- **`.gfl.config.local.yml`** - 本地配置文件（不提交，用于个性化设置）

### 配置文件说明

初始化后，你可以根据需要修改配置文件：

```yaml
# .gfl.config.yml
devBaseBranch: dev          # 开发基准分支
productionBranch: main      # 生产环境分支
nickname: aric              # 开发者标识
debug: false                # 调试模式

# 分支前缀配置
featurePrefix: feature      # 功能分支前缀
fixPrefix: fix              # 修复分支前缀
hotfixPrefix: hotfix        # 热修复分支前缀

# 分支命名格式
branchCaseFormat: original  # 支持: lower, upper, snake, camel, pascal, kebab, original
```

## 基本工作流程

### 1. 开始新功能开发

使用 `start` 命令（别名 `s`）创建新的功能分支：

```bash
gfl s user-authentication
```

这将创建并切换到新分支 `feature/aric/user-authentication`。

**其他方式：**

```bash
# 不使用 nickname
gfl s feature-name

# 指定基础分支
gfl s feature-name --base main
```

### 2. 开发和提交

在新分支上进行开发，正常使用 Git 命令提交代码：

```bash
git add .
git commit -m "feat: add user authentication"
```

### 3. 发布分支

完成开发后，使用 `publish` 命令（别名 `p`）推送分支到远程：

```bash
gfl p
```

等效于：
```bash
git push -u origin feature/aric/user-authentication
```

### 4. 创建 Pull Request

使用 `pr` 命令（别名 `rv`）创建 Pull Request：

```bash
gfl pr --open
```

这会：
- 在浏览器中打开 GitHub PR 创建页面
- 自动填充标题和描述
- 设置正确的源分支和目标分支

### 5. 代码审查和合并

在 GitHub 上进行代码审查，审查通过后合并 PR。

### 6. 清理分支

合并完成后，使用 `sweep` 命令清理已合并的分支：

```bash
gfl sweep feature --confirm
```

## 热修复流程

对于生产环境的紧急修复，使用 `hotfix` 命令：

```bash
# 从 main 分支创建热修复分支
gfl hotfix critical-bug

# 开发、测试、发布
gfl p
gfl pr main --open

# 合并到 main 后，别忘了同步到 dev
gfl checkout dev
git pull origin main
```

## 常用命令速查

| 命令 | 别名 | 说明 |
|------|------|------|
| `gfl init` | - | 初始化配置 |
| `gfl config` | `c` | 查看配置 |
| `gfl start` | `s` | 开始新功能 |
| `gfl publish` | `p` | 发布分支 |
| `gfl pr` | `rv` | 创建 PR |
| `gfl checkout` | `co` | 交互式切换分支 |
| `gfl hotfix` | `hf` | 创建热修复分支 |
| `gfl bugfix` | `b` | 创建修复分支 |
| `gfl sync` | `up` | 同步远程仓库 |
| `gfl sweep` | `clean` | 清理分支 |
| `gfl info` | `i` | 显示仓库信息 |

## 下一步

- 📖 查看 [命令参考](/commands/) 了解所有命令的详细用法
- ⚙️ 阅读 [配置指南](/guide/configuration) 自定义 GFL 行为
- 💡 学习 [最佳实践](/guide/best-practices) 提升团队协作效率

## 遇到问题？

- 在 GitHub 上提 [Issue](https://github.com/afeiship/gfl/issues)
- 使用 `gfl --help` 查看命令帮助
- 启用调试模式：`gfl --debug command`
