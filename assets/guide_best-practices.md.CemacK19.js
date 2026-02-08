import{_ as a,o as i,c as n,af as l}from"./chunks/framework.BUY-S7nA.js";const F=JSON.parse('{"title":"最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"guide/best-practices.md","filePath":"guide/best-practices.md","lastUpdated":1770540131000}'),p={name:"guide/best-practices.md"};function h(e,s,t,k,r,d){return i(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h1><p>本指南提供使用 GFL 的最佳实践，帮助你和团队更高效地使用 GitHub Flow 工作流程。</p><h2 id="工作流程概览" tabindex="-1">工作流程概览 <a class="header-anchor" href="#工作流程概览" aria-label="Permalink to &quot;工作流程概览&quot;">​</a></h2><h3 id="标准功能开发流程" tabindex="-1">标准功能开发流程 <a class="header-anchor" href="#标准功能开发流程" aria-label="Permalink to &quot;标准功能开发流程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    1. 开始开发前                            │</span></span>
<span class="line"><span>│  gfl sync                      # 同步远程仓库                │</span></span>
<span class="line"><span>│  gfl info                      # 查看当前状态                │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    2. 创建功能分支                          │</span></span>
<span class="line"><span>│  gfl s feature-name            # 创建并切换分支              │</span></span>
<span class="line"><span>│  # 或使用操作前缀                                          │</span></span>
<span class="line"><span>│  gfl s feat:authentication     # feat/your-nickname/auth    │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    3. 开发和提交                            │</span></span>
<span class="line"><span>│  git add .                                                    │</span></span>
<span class="line"><span>│  git commit -m &quot;feat: add user authentication&quot;              │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    4. 发布分支                              │</span></span>
<span class="line"><span>│  gfl p                        # 推送到远程                  │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    5. 创建 PR                               │</span></span>
<span class="line"><span>│  gfl pr --open                 # 在浏览器中打开 PR           │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    6. 代码审查和合并                         │</span></span>
<span class="line"><span>│  # 在 GitHub 上进行代码审查                                  │</span></span>
<span class="line"><span>│  # 审查通过后合并 PR                                        │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    7. 清理分支                              │</span></span>
<span class="line"><span>│  gfl checkout dev                # 切换回 dev 分支           │</span></span>
<span class="line"><span>│  gfl sweep feature --confirm     # 清理已合并的分支         │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h3 id="热修复流程" tabindex="-1">热修复流程 <a class="header-anchor" href="#热修复流程" aria-label="Permalink to &quot;热修复流程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    1. 创建热修复分支                        │</span></span>
<span class="line"><span>│  gfl hotfix critical-bug        # 从 main 创建              │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    2. 修复和测试                            │</span></span>
<span class="line"><span>│  # 快速修复紧急问题                                          │</span></span>
<span class="line"><span>│  git add .                                                   │</span></span>
<span class="line"><span>│  git commit -m &quot;fix: resolve critical bug&quot;                  │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    3. 发布到 main                           │</span></span>
<span class="line"><span>│  gfl p                        # 推送分支                    │</span></span>
<span class="line"><span>│  gfl pr main --open            # 创建到 main 的 PR          │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    4. 合并到 main                           │</span></span>
<span class="line"><span>│  # 紧急合并到生产分支                                        │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    5. 同步回 dev                            │</span></span>
<span class="line"><span>│  gfl checkout dev                                            │</span></span>
<span class="line"><span>│  git pull origin main           # 将热修复同步到 dev        │</span></span>
<span class="line"><span>│  gfl p                         # 推送同步                   │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                           │</span></span>
<span class="line"><span>                           ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│                    6. 清理                                  │</span></span>
<span class="line"><span>│  gfl sweep hotfix --confirm    # 清理热修复分支             │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="团队协作规范" tabindex="-1">团队协作规范 <a class="header-anchor" href="#团队协作规范" aria-label="Permalink to &quot;团队协作规范&quot;">​</a></h2><h3 id="_1-分支命名规范" tabindex="-1">1. 分支命名规范 <a class="header-anchor" href="#_1-分支命名规范" aria-label="Permalink to &quot;1. 分支命名规范&quot;">​</a></h3><p>使用清晰、一致的分支命名：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 好的命名示例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user-authentication</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> payment-integration</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refactor-api-client</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-dependencies</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用操作前缀区分类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feat:user-auth</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 功能开发</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix:login-bug</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 缺陷修复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refactor:code-style</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 重构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:add-unit-tests</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 添加测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:update-readme</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 文档更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chore:upgrade-deps</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 升级依赖</span></span></code></pre></div><h3 id="_2-提交消息规范" tabindex="-1">2. 提交消息规范 <a class="header-anchor" href="#_2-提交消息规范" aria-label="Permalink to &quot;2. 提交消息规范&quot;">​</a></h3><p>使用语义化提交消息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: add user authentication&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: implement OAuth2 login&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缺陷修复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fix: resolve login validation error&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fix: correct navbar alignment&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;refactor: simplify API client code&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文档</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;docs: update API documentation&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;test: add unit tests for auth module&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建/工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: upgrade dependencies&quot;</span></span></code></pre></div><h3 id="_3-分支策略" tabindex="-1">3. 分支策略 <a class="header-anchor" href="#_3-分支策略" aria-label="Permalink to &quot;3. 分支策略&quot;">​</a></h3><h4 id="小型团队-2-5-人" tabindex="-1">小型团队（2-5 人） <a class="header-anchor" href="#小型团队-2-5-人" aria-label="Permalink to &quot;小型团队（2-5 人）&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .gfl.config.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">devBaseBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dev</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">productionBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nickname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 不使用 nickname，简化分支名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">featurePrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">feature</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fixPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hotfixPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hotfix</span></span></code></pre></div><p>分支命名：<code>feature/user-auth</code>、<code>fix/login-bug</code></p><h4 id="中大型团队-5-人" tabindex="-1">中大型团队（5+ 人） <a class="header-anchor" href="#中大型团队-5-人" aria-label="Permalink to &quot;中大型团队（5+ 人）&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .gfl.config.yml (团队共享)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">devBaseBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">develop</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">productionBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">featurePrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">feat</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fixPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bug</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hotfixPrefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hot</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">branchCaseFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kebab</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .gfl.config.local.yml (个人配置)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nickname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">john.doe</span></span></code></pre></div><p>分支命名：<code>feat/john.doe/user-auth</code>、<code>bug/john.doe/login-issue</code></p><h3 id="_4-pr-审查规范" tabindex="-1">4. PR 审查规范 <a class="header-anchor" href="#_4-pr-审查规范" aria-label="Permalink to &quot;4. PR 审查规范&quot;">​</a></h3><h4 id="pr-标题规范" tabindex="-1">PR 标题规范 <a class="header-anchor" href="#pr-标题规范" aria-label="Permalink to &quot;PR 标题规范&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>feat: add user authentication</span></span>
<span class="line"><span>fix: resolve login validation error</span></span>
<span class="line"><span>refactor: optimize database queries</span></span>
<span class="line"><span>docs: update API documentation</span></span></code></pre></div><h4 id="pr-描述模板" tabindex="-1">PR 描述模板 <a class="header-anchor" href="#pr-描述模板" aria-label="Permalink to &quot;PR 描述模板&quot;">​</a></h4><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 变更类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 新功能</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 缺陷修复</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 重构</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 文档更新</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 性能优化</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 变更说明</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 描述这个 PR 做了什么 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 已添加单元测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 已进行手动测试</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 所有测试通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 截图（如适用）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 添加截图说明 UI 变更 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 相关 Issue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Closes #(issue number)</span></span></code></pre></div><h2 id="常见场景处理" tabindex="-1">常见场景处理 <a class="header-anchor" href="#常见场景处理" aria-label="Permalink to &quot;常见场景处理&quot;">​</a></h2><h3 id="场景-1-功能开发一半需要切换" tabindex="-1">场景 1: 功能开发一半需要切换 <a class="header-anchor" href="#场景-1-功能开发一半需要切换" aria-label="Permalink to &quot;场景 1: 功能开发一半需要切换&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看当前状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 暂存当前工作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;WIP: user authentication&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 切换到其他分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> urgent-fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 完成紧急任务后恢复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-auth</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span></code></pre></div><h3 id="场景-2-pr-有冲突需要更新" tabindex="-1">场景 2: PR 有冲突需要更新 <a class="header-anchor" href="#场景-2-pr-有冲突需要更新" aria-label="Permalink to &quot;场景 2: PR 有冲突需要更新&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 切换到功能分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-auth</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 同步远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 变基到最新的 dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 如果有冲突，解决后</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --continue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 强制推送（谨慎使用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force-with-lease</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或使用 publish 重新推送</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p</span></span></code></pre></div><h3 id="场景-3-实验性功能开发" tabindex="-1">场景 3: 实验性功能开发 <a class="header-anchor" href="#场景-3-实验性功能开发" aria-label="Permalink to &quot;场景 3: 实验性功能开发&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 创建功能分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experimental-feature</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 开发过程中想创建变体</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experimental-v2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 如果决定放弃 v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experimental-feature</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> experimental-v2</span></span></code></pre></div><h3 id="场景-4-发布新版本" tabindex="-1">场景 4: 发布新版本 <a class="header-anchor" href="#场景-4-发布新版本" aria-label="Permalink to &quot;场景 4: 发布新版本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 确保所有功能已合并到 dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 创建发布分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 准备发布</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新 CHANGELOG.md</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新版本号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 推送发布分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: prepare for release v1.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 创建 PR 并合并到 main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># （通过 GitHub 完成合并）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. 创建版本标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> minor</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. 合并 main 回 dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> forward</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;chore: merge v1.1.0 back to dev&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8. 清理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> releases/release-1.1.0</span></span></code></pre></div><h2 id="安全最佳实践" tabindex="-1">安全最佳实践 <a class="header-anchor" href="#安全最佳实践" aria-label="Permalink to &quot;安全最佳实践&quot;">​</a></h2><h3 id="_1-定期清理" tabindex="-1">1. 定期清理 <a class="header-anchor" href="#_1-定期清理" aria-label="Permalink to &quot;1. 定期清理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每周清理一次</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span></code></pre></div><h3 id="_2-推送前检查" tabindex="-1">2. 推送前检查 <a class="header-anchor" href="#_2-推送前检查" aria-label="Permalink to &quot;2. 推送前检查&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 检查将要推送的内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 推送</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p</span></span></code></pre></div><h3 id="_3-使用-confirm-标志" tabindex="-1">3. 使用 --confirm 标志 <a class="header-anchor" href="#_3-使用-confirm-标志" aria-label="Permalink to &quot;3. 使用 --confirm 标志&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除操作前总是预览</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确认后再删除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span></code></pre></div><h3 id="_4-工作目录保持干净" tabindex="-1">4. 工作目录保持干净 <a class="header-anchor" href="#_4-工作目录保持干净" aria-label="Permalink to &quot;4. 工作目录保持干净&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换分支前检查状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如有必要，暂存或提交更改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;WIP&quot;</span></span></code></pre></div><h2 id="性能优化建议" tabindex="-1">性能优化建议 <a class="header-anchor" href="#性能优化建议" aria-label="Permalink to &quot;性能优化建议&quot;">​</a></h2><h3 id="_1-使用别名" tabindex="-1">1. 使用别名 <a class="header-anchor" href="#_1-使用别名" aria-label="Permalink to &quot;1. 使用别名&quot;">​</a></h3><p>在 shell 配置中添加快捷别名：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.zshrc 或 ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gfl s&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gfl p&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gco</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gfl checkout&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gpr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gfl pr --open&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gsw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gfl sweep feature --local --confirm&#39;</span></span></code></pre></div><h3 id="_2-批量操作" tabindex="-1">2. 批量操作 <a class="header-anchor" href="#_2-批量操作" aria-label="Permalink to &quot;2. 批量操作&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同时清理本地和远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sweep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --local</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --confirm</span></span></code></pre></div><h3 id="_3-定期同步" tabindex="-1">3. 定期同步 <a class="header-anchor" href="#_3-定期同步" aria-label="Permalink to &quot;3. 定期同步&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每天开始工作前同步</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gfl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync</span></span></code></pre></div><h2 id="故障排查" tabindex="-1">故障排查 <a class="header-anchor" href="#故障排查" aria-label="Permalink to &quot;故障排查&quot;">​</a></h2><h3 id="问题-1-分支创建失败" tabindex="-1">问题 1: 分支创建失败 <a class="header-anchor" href="#问题-1-分支创建失败" aria-label="Permalink to &quot;问题 1: 分支创建失败&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 错误: base branch not found</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解决: 检查远程分支是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果不存在，先创建 dev 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h3 id="问题-2-pr-创建失败" tabindex="-1">问题 2: PR 创建失败 <a class="header-anchor" href="#问题-2-pr-创建失败" aria-label="Permalink to &quot;问题 2: PR 创建失败&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确保 gh CLI 已安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如未安装，安装 gh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # macOS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 登录 GitHub</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre></div><h3 id="问题-3-变基冲突" tabindex="-1">问题 3: 变基冲突 <a class="header-anchor" href="#问题-3-变基冲突" aria-label="Permalink to &quot;问题 3: 变基冲突&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 中止变基</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abort</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 使用合并代替变基</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 解决冲突</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span></span></code></pre></div><h2 id="推荐资源" tabindex="-1">推荐资源 <a class="header-anchor" href="#推荐资源" aria-label="Permalink to &quot;推荐资源&quot;">​</a></h2><ul><li><a href="https://guides.github.com/introduction/flow/" target="_blank" rel="noreferrer">GitHub Flow 官方指南</a></li><li><a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noreferrer">语义化版本控制</a></li><li><a href="https://www.conventionalcommits.org/zh-hans/" target="_blank" rel="noreferrer">约定式提交</a></li><li><a href="https://cli.github.com/manual/" target="_blank" rel="noreferrer">GitHub CLI 文档</a></li></ul>`,61)])])}const g=a(p,[["render",h]]);export{F as __pageData,g as default};
