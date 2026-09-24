# Website Frontend Documentation

This is the **Arduino Day Philippines** website repository project for the Arduino community in the Philippines.

---

## 📌 Table of Contents

- [Website Frontend Documentation](#website-frontend-documentation)
  - [📌 Table of Contents](#-table-of-contents)
  - [🛠 Tech Stack](#-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
  - [📁 Project Structure](#-project-structure)
  - [Issue \& Project Workflow](#issue--project-workflow)
      - [1. Find an Issue](#1-find-an-issue)
      - [2. Create a Branch](#2-create-a-branch)
      - [3. Submit a Pull Request (PR)](#3-submit-a-pull-request-pr)
      - [4. Code Review \& Merge](#4-code-review--merge)
  - [Branching \& Git Workflow](#branching--git-workflow)
    - [Branch Naming Convention](#branch-naming-convention)
      - [1. Switch to develop branch](#1-switch-to-develop-branch)
      - [2. Create a feature branch linked to an issue](#2-create-a-feature-branch-linked-to-an-issue)
      - [3. Make your changes in the code](#3-make-your-changes-in-the-code)
      - [4. Once you're done with your changes, commit](#4-once-youre-done-with-your-changes-commit)
      - [5. Push to remote branch](#5-push-to-remote-branch)
      - [6. Create a pull request (PR)](#6-create-a-pull-request-pr)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Message Format](#commit-message-format)
    - [Allowed Commit Types](#allowed-commit-types)
      - [Examples](#examples)
  - [📋 Pull Request Guidelines](#-pull-request-guidelines)
    - [PR Title Format:](#pr-title-format)
    - [PR Description Template](#pr-description-template)

---

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/-Next.js-555555?style=for-the-badge&logo=Next.js)&nbsp;
![React](https://img.shields.io/badge/-React-555555?style=for-the-badge&logo=react)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-555555?style=for-the-badge&logo=TailwindCSS)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-555555?style=for-the-badge&logo=typescript)&nbsp;

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **TypeScript** (strict)
- **three.js** for the interactive 3D hardware model

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) (v10+)

1. Create a New folder where you can store the project file to be referred as the **Project Folder**

2. Open command prompt, change current directory to as the **Project Folder**

```bash
cd <PATH TO PROJECT FOLDER>
```

3. Clone the repository, add `.` on the end to extract files to current directory.

```bash
git clone https://github.com/ArduinoDayPhilippines/adph-website.git .
```

4. Install dependencies

```bash
pnpm install
```

5. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```
📦 adph-website
├── 📂 .next
├── 📂 node_modules
├── 📂 public               # Static assets
├── 📂 src
│   ├── 📂 app              # Next.js app directory (routing & pages)
│   │   ├── 📂 components   # Reusable UI components
│   │   │   ├── 📂 features # Feature-specific components
│   │   │   └── 📂 ui       # Generic, reusable UI components
│   │   ├── 📂 data         # Static content (sponsors, FAQs)
│   │   ├── 📂 lib          # Utility functions and hooks
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs      # Tailwind CSS v4 via @tailwindcss/postcss
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
├── .prettierrc.json        # Prettier configuration
├── pnpm-lock.yaml

```

---

## Issue & Project Workflow

We use **GitHub Projects** to manage tasks and issues. Follow these steps when working on issues:

#### 1. Find an Issue

- Go to the [GitHub Issues](https://github.com/ArduinoDayPH2025/arduino-ph-2025/issues) page.
- Assign issue to yourself.
- Move the issue to "In Progress" in the project board.

#### 2. Create a Branch

- Use the [branching convention](#branching--git-workflow).
- Start coding!

#### 3. Submit a Pull Request (PR)

- Reference the issue in the PR description (e.g., `Closes #123`).
- Move the issue to "Review" in the project board.

#### 4. Code Review & Merge

- Once approved, the PR gets merged into `develop`.
- The issue is moved to "Done."

---

## Branching & Git Workflow

### Branch Naming Convention

| Branch Type     | Naming Convention               | Example                 |
| --------------- | ------------------------------- | ----------------------- |
| **Main**        | `main`                          | `main`                  |
| **Development** | `dev`                           | `dev`                   |
| **Feature**     | `feature/ISSUE-ID-feature-name` | `feature/123-add-auth`  |
| **Bugfix**      | `bugfix/ISSUE-ID-issue-name`    | `bugfix/234-fix-footer` |
| **Hotfix**      | `hotfix/ISSUE-ID-critical-fix`  | `hotfix/345-fix-login`  |

#### 1. Switch to develop branch

```bash
git checkout dev
git pull origin dev
```

#### 2. Create a feature branch linked to an issue

```bash
git checkout -b feature/ISSUE-ID-feature-name
```

Example:

```bash
git checkout -b feature/123-add-login-auth
```

#### 3. Make your changes in the code

#### 4. Once you're done with your changes, commit

```bash
git add .
git commit -m "feat(auth): add login authentication (Closes #123)"
```

#### 5. Push to remote branch

```bash
git push origin feature/ISSUE-ID-feature-name
```

#### 6. Create a pull request (PR)

- Go to GitHub
- Open a new PR from feature/ISSUE-ID-feature-name → develop
- Use the [PR Template](<(#pull-request-description-format)>) below

---

## Commit Message Guidelines

### Commit Message Format

```
<type>(<scope>): <description>
```

### Allowed Commit Types

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

| Type         | Description                                           |
| ------------ | ----------------------------------------------------- |
| **feat**     | A new feature                                         |
| **fix**      | A bug fix                                             |
| **docs**     | Documentation changes                                 |
| **style**    | Code style changes (formatting, etc.)                 |
| **refactor** | Code changes that neither fix a bug nor add a feature |
| **perf**     | Performance improvements                              |
| **test**     | Adding or modifying tests                             |
| **chore**    | Maintenance and other minor tasks                     |

#### Examples

```
git commit -m "feat(auth): add user authentication with JWT "
git commit -m "fix(navbar): resolve mobile responsiveness issue "
git commit -m "docs(readme): update contribution guide "
```

---

## 📋 Pull Request Guidelines

### PR Title Format:

```
<type>(<scope>): <short description>
```

Example

```
feat(auth): add user login functionality
fix(navbar): resolve mobile responsiveness issue
```

### PR Description Template

```
✨ What’s New?
- [x] Briefly explain what was added

📷 Screenshots of website (IMPORTANT)
_Add relevant screenshots/gifs_

🔗 Related Issues
Closes #ISSUE_NUMBER

✅ Checklist (from issue)
- [ ] Code follows project conventions
- [ ] Linted & formatted
- [ ] Tested locally
```
