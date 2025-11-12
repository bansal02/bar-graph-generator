# GitHub Setup Guide

This guide will help you push your Bar Graph Generator project to GitHub.

## 📋 Prerequisites

- Git installed on your computer
- A GitHub account
- GitHub CLI (optional, but recommended) or Git configured with your credentials

## 🚀 Step-by-Step Instructions

### Option 1: Using GitHub CLI (Recommended)

1. **Initialize Git repository** (if not already done):
```bash
cd /Users/apollofinvest/frontend
git init
```

2. **Add all files to Git**:
```bash
git add .
```

3. **Commit your changes**:
```bash
git commit -m "Initial commit: Bar Graph Generator with React, Material UI, and React Router"
```

4. **Create a new GitHub repository and push** (GitHub CLI will create the repo for you):
```bash
gh repo create bar-graph-generator --public --source=. --push
```

### Option 2: Manual Setup (Using GitHub Website)

1. **Initialize Git repository** (if not already done):
```bash
cd /Users/apollofinvest/frontend
git init
```

2. **Add all files to Git**:
```bash
git add .
```

3. **Commit your changes**:
```bash
git commit -m "Initial commit: Bar Graph Generator with React, Material UI, and React Router"
```

4. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `bar-graph-generator` (or your preferred name)
   - Description: "Interactive bar graph generator with React and Material UI"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (you already have these)
   - Click "Create repository"

5. **Link your local repository to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/bar-graph-generator.git
```

6. **Push your code**:
```bash
git branch -M main
git push -u origin main
```

## 📝 Adding a License (Optional but Recommended)

Create a LICENSE file in your project root:

```bash
# For MIT License (most common for open source)
# You can get the full text from: https://opensource.org/licenses/MIT
```

Then commit and push:
```bash
git add LICENSE
git commit -m "Add MIT license"
git push
```

## 🌐 Sharing Your Repository

After pushing, share your repository URL:
```
https://github.com/YOUR_USERNAME/bar-graph-generator
```

### What others need to do to run your project:

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/bar-graph-generator.git
cd bar-graph-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 🔄 Making Updates Later

When you make changes:

```bash
# Check what files changed
git status

# Add specific files or all changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## 📊 Good Commit Message Examples

- "Add responsive design for mobile devices"
- "Fix button alignment issue on GraphPage"
- "Update README with installation instructions"
- "Refactor bar rendering logic for better performance"
- "Add hover effects to bar chart"

## 🎯 Setting Up GitHub Pages (Optional)

To deploy your app on GitHub Pages:

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/bar-graph-generator"
}
```

3. Update `vite.config.js` to include the base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/bar-graph-generator/',
})
```

4. Deploy:
```bash
npm run deploy
```

Your app will be live at: `https://YOUR_USERNAME.github.io/bar-graph-generator`

## 🛡️ Important Notes

- **Never commit sensitive information** (API keys, passwords, etc.)
- The `.gitignore` file already excludes `node_modules/` and `dist/`
- Always test your app locally before pushing
- Write clear commit messages for better collaboration

## ❓ Troubleshooting

### Issue: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin YOUR_NEW_URL
```

### Issue: "Permission denied"
Make sure you're authenticated with GitHub:
```bash
# For HTTPS
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Or use SSH keys (recommended)
# Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Issue: "Updates were rejected"
```bash
# Pull changes first, then push
git pull origin main --rebase
git push
```

---

Need more help? Check out:
- [GitHub Documentation](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)

