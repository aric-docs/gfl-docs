# 配置指南

GFL 支持灵活的配置系统，允许你通过全局配置文件、本地配置文件和环境变量来自定义工具行为。

## 配置文件优先级

GFL 按照以下优先级读取配置（从高到低）：

1. **环境变量指定的配置文件** - `GFL_CONFIG_FILE` 环境变量指向的文件
2. **本地配置文件** - `.gfl.config.local.yml`（项目根目录）
3. **全局配置文件** - `.gfl.config.yml`（项目根目录）
4. **默认值** - 内置的默认配置值

### 配置优先级示例

假设你同时有多个配置源：

```bash
# 全局配置 .gfl.config.yml
nickname: aric
devBaseBranch: dev

# 本地配置 .gfl.config.local.yml
nickname: myname
```

在这种情况下，`nickname` 将使用 `myname`（本地配置优先），而 `devBaseBranch` 将使用 `dev`（继承全局配置）。

## 配置文件结构

### 完整配置示例

```yaml
# .gfl.config.yml

# ===== 基础设置 =====
# 开发基准分支，功能分支从此分支创建
devBaseBranch: dev

# 生产环境分支，hotfix 分支从此分支创建
productionBranch: main

# 开发者标识，用于分支命名
nickname: aric

# 调试模式，显示详细执行日志
debug: false

# ===== 分支前缀配置 =====
# 功能分支前缀
featurePrefix: feature

# 修复分支前缀
fixPrefix: fix

# 热修复分支前缀
hotfixPrefix: hotfix

# 分支命名格式
# 支持: lower, upper, snake, camel, pascal, kebab, original
branchCaseFormat: original
```

### 本地配置示例

```yaml
# .gfl.config.local.yml
# 本地配置会覆盖全局配置的相同字段

# 不同的开发者昵称
nickname: john

# 启用调试模式（仅用于开发）
debug: true
```

## 配置项详解

### 基础设置

#### `devBaseBranch`

开发基准分支，所有功能分支从此分支创建。

- **类型**: `string`
- **默认值**: `dev`
- **示例**:
  ```yaml
  devBaseBranch: develop
  ```

#### `productionBranch`

生产环境分支，热修复分支从此分支创建。

- **类型**: `string`
- **默认值**: `main`
- **示例**:
  ```yaml
  productionBranch: master
  ```

#### `nickname`

开发者标识，用于分支命名。设置为空字符串则不在分支名中包含 nickname。

- **类型**: `string`
- **默认值**: `aric`
- **示例**:
  ```yaml
  nickname: john
  # 分支名: feature/john/user-authentication

  nickname: ""
  # 分支名: feature/user-authentication
  ```

#### `debug`

启用调试模式，显示详细的执行日志。

- **类型**: `boolean`
- **默认值**: `false`
- **示例**:
  ```yaml
  debug: true
  ```

### 分支前缀配置

#### `featurePrefix`

功能分支的前缀。

- **类型**: `string`
- **默认值**: `feature`
- **示例**:
  ```yaml
  featurePrefix: feat
  # 结果: feat/nickname/name
  ```

#### `fixPrefix`

修复分支的前缀。

- **类型**: `string`
- **默认值**: `fix`
- **示例**:
  ```yaml
  fixPrefix: bugfix
  # 结果: bugfix/nickname/name
  ```

#### `hotfixPrefix`

热修复分支的前缀。

- **类型**: `string`
- **默认值**: `hotfix`
- **示例**:
  ```yaml
  hotfixPrefix: emergency
  # 结果: emergency/nickname/name
  ```

### 分支命名格式

#### `branchCaseFormat`

控制功能名称的格式转换。

- **类型**: `string`
- **默认值**: `original`
- **可选值**:

  | 值 | 输入 | 输出 |
  |---|---|---|
  | `original` | `User Auth` | `User Auth` |
  | `lower` | `User Auth` | `user auth` |
  | `upper` | `User Auth` | `USER AUTH` |
  | `snake` | `User Auth` | `user_auth` |
  | `camel` | `User Auth` | `userAuth` |
  | `pascal` | `User Auth` | `UserAuth` |
  | `kebab` | `User Auth` | `user-auth` |

## 环境变量

你可以使用环境变量来覆盖配置：

### `GFL_CONFIG_FILE`

指定自定义配置文件的路径。

```bash
export GFL_CONFIG_FILE=/path/to/custom-config.yml
gfl s new-feature
```

这对于以下场景很有用：
- 在 CI/CD 流程中使用特殊配置
- 在不同环境中使用不同的配置
- 测试新的配置而不修改现有文件

### `GFL_LANG`

设置 GFL CLI 的界面语言。

```bash
# 使用英文
GFL_LANG=en-US gfl --help

# 使用中文（默认）
gfl --help
# 或
GFL_LANG=zh-CN gfl --help
```

支持的语言：
- `en-US` - 英文
- `zh-CN` - 中文简体（默认）

**永久设置语言：**

在 shell 配置文件中添加（如 `~/.zshrc` 或 `~/.bashrc`）：

```bash
# 使用英文界面
export GFL_LANG=en-US

# 然后重新加载配置
source ~/.zshrc
```

## 查看当前配置

使用 `config` 命令查看当前有效的配置：

```bash
gfl config
```

输出示例：

```
配置信息 (按优先级排序):
┌─────────────────────┬───────────────┬─────────────────┐
│ 配置项              │ 值            │ 来源            │
├─────────────────────┼───────────────┼─────────────────┤
│ devBaseBranch       │ dev           │ 默认值          │
│ productionBranch    │ main          │ 默认值          │
│ nickname            │ john          │ 本地配置        │
│ debug               │ true          │ 本地配置        │
│ featurePrefix       │ feature       │ 全局配置        │
│ fixPrefix           │ fix           │ 默认值          │
│ hotfixPrefix        │ hotfix        │ 默认值          │
└─────────────────────┴───────────────┴─────────────────┘
```

## 团队协作建议

### 1. 提交全局配置

将 `.gfl.config.yml` 提交到版本控制，确保团队成员使用相同的基础配置：

```bash
git add .gfl.config.yml
git commit -m "chore: add gfl configuration"
```

### 2. 忽略本地配置

将 `.gfl.config.local.yml` 添加到 `.gitignore`：

```bash
echo ".gfl.config.local.yml" >> .gitignore
```

### 3. 使用 nickname 区分开发者

每个团队成员设置自己的 nickname：

```yaml
# John 的本地配置
nickname: john

# Alice 的本地配置
nickname: alice
```

这样可以清楚看到谁在开发哪个功能：
- `feature/john/user-authentication`
- `feature/alice/payment-system`

### 4. 统一分支命名规范

在全局配置中定义团队统一的分支前缀：

```yaml
# 团队统一配置
featurePrefix: feature
fixPrefix: fix
hotfixPrefix: hotfix
branchCaseFormat: kebab
```

## 配置示例场景

### 场景 1: 小型团队

```yaml
# .gfl.config.yml
devBaseBranch: develop
productionBranch: main
nickname: ""  # 不使用 nickname
featurePrefix: feature
```

### 场景 2: 大型团队

```yaml
# .gfl.config.yml (团队共享)
devBaseBranch: dev
productionBranch: master
featurePrefix: feat
fixPrefix: bug
hotfixPrefix: hot
branchCaseFormat: kebab

# .gfl.config.local.yml (个人配置)
nickname: john.doe  # 个人标识
debug: false
```

### 场景 3: 微服务项目

```yaml
# .gfl.config.yml
devBaseBranch: staging
productionBranch: production
nickname: service-name  # 服务名作为标识
featurePrefix: feature
hotfixPrefix: emergency
```
