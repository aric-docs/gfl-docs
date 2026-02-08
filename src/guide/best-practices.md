# 最佳实践

本指南提供使用 GFL 的最佳实践，帮助你和团队更高效地使用 GitHub Flow 工作流程。

## 工作流程概览

### 标准功能开发流程

```
┌─────────────────────────────────────────────────────────────┐
│                    1. 开始开发前                            │
│  gfl sync                      # 同步远程仓库                │
│  gfl info                      # 查看当前状态                │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    2. 创建功能分支                          │
│  gfl s feature-name            # 创建并切换分支              │
│  # 或使用操作前缀                                          │
│  gfl s feat:authentication     # feat/your-nickname/auth    │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    3. 开发和提交                            │
│  git add .                                                    │
│  git commit -m "feat: add user authentication"              │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    4. 发布分支                              │
│  gfl p                        # 推送到远程                  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    5. 创建 PR                               │
│  gfl pr --open                 # 在浏览器中打开 PR           │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    6. 代码审查和合并                         │
│  # 在 GitHub 上进行代码审查                                  │
│  # 审查通过后合并 PR                                        │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    7. 清理分支                              │
│  gfl checkout dev                # 切换回 dev 分支           │
│  gfl sweep feature --confirm     # 清理已合并的分支         │
└─────────────────────────────────────────────────────────────┘
```

### 热修复流程

```
┌─────────────────────────────────────────────────────────────┐
│                    1. 创建热修复分支                        │
│  gfl hotfix critical-bug        # 从 main 创建              │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    2. 修复和测试                            │
│  # 快速修复紧急问题                                          │
│  git add .                                                   │
│  git commit -m "fix: resolve critical bug"                  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    3. 发布到 main                           │
│  gfl p                        # 推送分支                    │
│  gfl pr main --open            # 创建到 main 的 PR          │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    4. 合并到 main                           │
│  # 紧急合并到生产分支                                        │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    5. 同步回 dev                            │
│  gfl checkout dev                                            │
│  git pull origin main           # 将热修复同步到 dev        │
│  gfl p                         # 推送同步                   │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    6. 清理                                  │
│  gfl sweep hotfix --confirm    # 清理热修复分支             │
└─────────────────────────────────────────────────────────────┘
```

## 团队协作规范

### 1. 分支命名规范

使用清晰、一致的分支命名：

```bash
# 好的命名示例
gfl s user-authentication
gfl s payment-integration
gfl s refactor-api-client
gfl s update-dependencies

# 使用操作前缀区分类型
gfl s feat:user-auth          # 功能开发
gfl s fix:login-bug          # 缺陷修复
gfl s refactor:code-style     # 重构
gfl s test:add-unit-tests     # 添加测试
gfl s docs:update-readme      # 文档更新
gfl s chore:upgrade-deps      # 升级依赖
```

### 2. 提交消息规范

使用语义化提交消息：

```bash
# 功能
git commit -m "feat: add user authentication"
git commit -m "feat: implement OAuth2 login"

# 缺陷修复
git commit -m "fix: resolve login validation error"
git commit -m "fix: correct navbar alignment"

# 重构
git commit -m "refactor: simplify API client code"

# 文档
git commit -m "docs: update API documentation"

# 测试
git commit -m "test: add unit tests for auth module"

# 构建/工具
git commit -m "chore: upgrade dependencies"
```

### 3. 分支策略

#### 小型团队（2-5 人）

```yaml
# .gfl.config.yml
devBaseBranch: dev
productionBranch: main
nickname: ""  # 不使用 nickname，简化分支名
featurePrefix: feature
fixPrefix: fix
hotfixPrefix: hotfix
```

分支命名：`feature/user-auth`、`fix/login-bug`

#### 中大型团队（5+ 人）

```yaml
# .gfl.config.yml (团队共享)
devBaseBranch: develop
productionBranch: main
featurePrefix: feat
fixPrefix: bug
hotfixPrefix: hot
branchCaseFormat: kebab

# .gfl.config.local.yml (个人配置)
nickname: john.doe
```

分支命名：`feat/john.doe/user-auth`、`bug/john.doe/login-issue`

### 4. PR 审查规范

#### PR 标题规范

```
feat: add user authentication
fix: resolve login validation error
refactor: optimize database queries
docs: update API documentation
```

#### PR 描述模板

```markdown
## 变更类型
- [ ] 新功能
- [ ] 缺陷修复
- [ ] 重构
- [ ] 文档更新
- [ ] 性能优化

## 变更说明
<!-- 描述这个 PR 做了什么 -->

## 测试
- [ ] 已添加单元测试
- [ ] 已进行手动测试
- [ ] 所有测试通过

## 截图（如适用）
<!-- 添加截图说明 UI 变更 -->

## 相关 Issue
Closes #(issue number)
```

## 常见场景处理

### 场景 1: 功能开发一半需要切换

```bash
# 1. 查看当前状态
gfl info

# 2. 暂存当前工作
git stash save "WIP: user authentication"

# 3. 切换到其他分支
gfl checkout main
# 或
gfl s urgent-fix

# 4. 完成紧急任务后恢复
gfl checkout feature/user-auth
git stash pop
```

### 场景 2: PR 有冲突需要更新

```bash
# 1. 切换到功能分支
gfl checkout feature/user-auth

# 2. 同步远程仓库
gfl sync

# 3. 变基到最新的 dev
gfl rebase

# 4. 如果有冲突，解决后
git add .
git rebase --continue

# 5. 强制推送（谨慎使用）
git push --force-with-lease

# 或使用 publish 重新推送
gfl p
```

### 场景 3: 实验性功能开发

```bash
# 1. 创建功能分支
gfl s experimental-feature

# 2. 开发过程中想创建变体
gfl copy experimental-v2 --confirm

# 3. 如果决定放弃 v2
gfl checkout experimental-feature
git branch -D experimental-v2
```

### 场景 4: 发布新版本

```bash
# 1. 确保所有功能已合并到 dev
gfl checkout dev
gfl sync

# 2. 创建发布分支
gfl release --type minor

# 3. 准备发布
# 更新 CHANGELOG.md
# 更新版本号

# 4. 推送发布分支
git add .
git commit -m "chore: prepare for release v1.1.0"
git push

# 5. 创建 PR 并合并到 main
# （通过 GitHub 完成合并）

# 6. 创建版本标签
gfl tag --type minor

# 7. 合并 main 回 dev
gfl forward --title "chore: merge v1.1.0 back to dev"

# 8. 清理
gfl checkout main
git pull
gfl checkout dev
git pull
git branch -d releases/release-1.1.0
```

## 安全最佳实践

### 1. 定期清理

```bash
# 每周清理一次
gfl sync
gfl sweep feature --local --confirm
gfl sweep fix --local --confirm
```

### 2. 推送前检查

```bash
# 1. 查看状态
gfl info

# 2. 检查将要推送的内容
git diff origin/dev

# 3. 推送
gfl p
```

### 3. 使用 --confirm 标志

```bash
# 删除操作前总是预览
gfl sweep feature --local

# 确认后再删除
gfl sweep feature --local --confirm
```

### 4. 工作目录保持干净

```bash
# 切换分支前检查状态
git status

# 如有必要，暂存或提交更改
git stash
# 或
git add . && git commit -m "WIP"
```

## 性能优化建议

### 1. 使用别名

在 shell 配置中添加快捷别名：

```bash
# ~/.zshrc 或 ~/.bashrc
alias gs='gfl s'
alias gp='gfl p'
alias gco='gfl checkout'
alias gpr='gfl pr --open'
alias gsw='gfl sweep feature --local --confirm'
```

### 2. 批量操作

```bash
# 同时清理本地和远程分支
gfl sweep feature --local --remote --confirm
```

### 3. 定期同步

```bash
# 每天开始工作前同步
gfl sync
```

## 故障排查

### 问题 1: 分支创建失败

```bash
# 错误: base branch not found
# 解决: 检查远程分支是否存在
git branch -r

# 如果不存在，先创建 dev 分支
git checkout -b dev
git push -u origin dev
```

### 问题 2: PR 创建失败

```bash
# 确保 gh CLI 已安装
gh --version

# 如未安装，安装 gh
brew install gh  # macOS

# 登录 GitHub
gh auth login
```

### 问题 3: 变基冲突

```bash
# 1. 中止变基
git rebase --abort

# 2. 使用合并代替变基
git merge origin/dev

# 3. 解决冲突
git add .
git commit
```

## 推荐资源

- [GitHub Flow 官方指南](https://guides.github.com/introduction/flow/)
- [语义化版本控制](https://semver.org/lang/zh-CN/)
- [约定式提交](https://www.conventionalcommits.org/zh-hans/)
- [GitHub CLI 文档](https://cli.github.com/manual/)
