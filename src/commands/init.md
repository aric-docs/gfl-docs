# init - 初始化配置

初始化 GitHub Flow 配置文件。

## 使用方法

```bash
gfl init [flags]
```

## 说明

`init` 命令会在当前项目目录创建两个配置文件：

- **`.gfl.config.yml`** - 全局配置文件，应提交到版本控制
- **`.gfl.config.local.yml`** - 本地配置文件，不提交到版本控制

自动将 `.gfl.config.local.yml` 添加到 `.gitignore` 文件。

## 标志

| 标志 | 简写 | 说明 |
|------|------|------|
| `--force` | `-f` | 强制覆盖已存在的配置文件 |
| `--nickname` | `-n` | 设置开发者标识 |

## 示例

### 基本使用

```bash
gfl init
```

### 设置开发者标识

```bash
gfl init --nickname john
```

### 强制覆盖配置

```bash
gfl init --force
```

## 生成的配置文件

### `.gfl.config.yml`（全局配置）

```yaml
devBaseBranch: dev
productionBranch: main
nickname: aric
debug: false
featurePrefix: feature
fixPrefix: fix
hotfixPrefix: hotfix
branchCaseFormat: original
```

### `.gfl.config.local.yml`（本地配置）

```yaml
nickname: ""
debug: false
```

## 最佳实践

1. **团队协作**：将 `.gfl.config.yml` 提交到版本控制，确保团队成员使用相同的基础配置
2. **个性化设置**：在 `.gfl.config.local.yml` 中设置个人 `nickname`，不提交此文件
3. **分支命名**：使用有意义的 `nickname` 来区分不同开发者的分支

## 原理说明

`init` 命令通过以下步骤实现：

1. 读取嵌入在程序中的默认配置模板
2. 根据命令行参数（如 `--nickname`）修改配置内容
3. 创建 `.gfl.config.yml` 文件（如果不存在或使用 `--force`）
4. 创建 `.gfl.config.local.yml` 文件
5. 将 `.gfl.config.local.yml` 添加到 `.gitignore` 文件

此命令不涉及 Git 操作，仅进行文件系统操作。

## 相关命令

- [`config`](./config) - 查看当前配置
- [`start`](./start) - 开始新功能开发
