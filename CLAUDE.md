# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for **GFL (GitHub Flow CLI)**, a command-line tool that simplifies GitHub Flow workflows. The documentation is built with VitePress.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Architecture

### Documentation Structure

The documentation is organized into three main sections:

1. **Guide** (`src/guide/`) - Narrative documentation for users
   - `quick-start.md` - Getting started guide
   - `configuration.md` - Configuration options and priority
   - `best-practices.md` - Team workflows and best practices

2. **Commands** (`src/commands/`) - Reference documentation for all GFL commands
   - Organized by category: Core, Fixes, Release Management, Branch Management, Info
   - Each command has its own markdown file with usage, flags, examples

3. **Home** (`src/index.md`) - Landing page with project overview

### VitePress Configuration

- **Main config**: `.vitepress/config.mts`
  - Manual sidebar configuration (not using auto-generation)
  - Chinese language only (removed English support for this project)
  - Custom navigation for GFL-specific sections

- **PWA config**: `.vitepress/pwa.config.ts`
  - Service worker for offline support
  - Auto-update registration

- **Custom theme**: `.vitepress/theme/`
  - Extends default VitePress theme
  - Adds PWA reload prompt component

### Sidebar Organization

Sidebar is manually structured (not auto-generated):

- `/guide/` - Guide pages
- `/commands/` - Command reference with categorized subgroups
- `/` - Home page with overview

### Environment Variables

- Use `.env` file for environment variables
- Variables must be prefixed with `VITE_` to be read by VitePress's `loadEnv`
- Key variable: `VITE_BASE_URL` - sets the base path for deployment (e.g., `/gfl-docs/` for GitHub Pages)

### Deployment

- **GitHub Actions**: `.github/workflows/deploy.yml`
  - Triggers on push to `main` branch
  - Uses Node.js 22, pnpm 9
  - Deploys to GitHub Pages from the `dist` directory
  - Outputs deployment URL in workflow summary

### Package Configuration

- **No `vitepress-sidebar` dependency** - removed in favor of manual sidebar config
- **PWA support** via `vite-plugin-pwa`

## Template Variable Replacement

The project uses `rif.config.yaml` for template variable replacement. When creating new documentation projects:

1. Update variables in `rif.config.yaml`
2. Run `rifc` to replace placeholders in specified files

Key variables:
- `PROJECT_NAME` - package.json name
- `SITE_TITLE` - Site title displayed in header/nav
- `SITE_DESCRIPTION` - Site description
- `GITHUB_USERNAME` - GitHub username for links
- `AUTHOR_NAME` - Author name for footer

## Content Guidelines

- Use clear, concise Chinese language
- Include practical examples for all commands
- Show command aliases alongside full commands
- Document all flags and parameters
- Provide "Related commands" links at the end of each command doc
- Use code blocks with language tags for syntax highlighting

## Images and Static Assets

Place in `public/` directory and reference with `/filename` path.
