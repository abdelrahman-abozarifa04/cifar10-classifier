# 🚀 GitHub Upload Guide

Follow these steps to upload your CIFAR-10 classifier to GitHub:

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process

## Step 2: Create a New Repository

1. **Log in to GitHub**
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - **Repository name**: `cifar10-classifier` (or any name you prefer)
   - **Description**: `AI-powered image classification using CNN trained on CIFAR-10 dataset`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. **Click "Create repository"**

## Step 3: Initialize Git in Your Project (First Time Only)

Open PowerShell or Command Prompt in your project folder and run:

```powershell
# Navigate to your project directory
cd "D:\LEVEL_4\First_Term\Computational_Cognitive_system\sheets\Task_1"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: CIFAR-10 CNN Classifier with Flask UI"
```

## Step 4: Connect to GitHub Repository

After creating the repository on GitHub, you'll see commands. Use these:

```powershell
# Add GitHub as remote origin (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/cifar10-classifier.git

# Set the main branch name
git branch -M main

# Push to GitHub
git push -u origin main
```

### Example:
If your GitHub username is "johndoe", the command would be:
```powershell
git remote add origin https://github.com/johndoe/cifar10-classifier.git
```

## Step 5: Authenticate

When you push for the first time, GitHub will ask for authentication:

### Option A: GitHub CLI (Recommended)
```powershell
gh auth login
```
Follow the prompts to authenticate.

### Option B: Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy the token
5. Use it as your password when git asks

### Option C: GitHub Desktop
1. Download GitHub Desktop from [desktop.github.com](https://desktop.github.com)
2. Sign in with your GitHub account
3. Add your local repository
4. Publish to GitHub

## Step 6: Verify Upload

1. Go to your GitHub repository URL
2. Refresh the page
3. You should see all your files uploaded!

## 🔄 Making Updates Later

After making changes to your code:

```powershell
# Check status
git status

# Add changed files
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## ⚠️ Important Notes

1. **Large Files**: The model file (`cifar10_cnn_model.keras`) might be too large for GitHub
   - GitHub has a 100MB file size limit
   - If your model is larger, use [Git LFS](https://git-lfs.github.com/)

2. **Sensitive Data**: Make sure `.gitignore` is working
   - Check that `.env` files are ignored
   - Verify no API keys are in the code

3. **Virtual Environment**: The `.venv` folder is already ignored by `.gitignore`

## 🎯 Quick Commands Reference

```powershell
# Check if git is installed
git --version

# See current status
git status

# View commit history
git log --oneline

# See remote repositories
git remote -v
```

## 🆘 Troubleshooting

### "git is not recognized"
Install Git from [git-scm.com](https://git-scm.com/download/win)

### "Permission denied"
Use GitHub CLI or create a Personal Access Token

### "Large file detected"
Install Git LFS:
```powershell
git lfs install
git lfs track "*.keras"
git add .gitattributes
git commit -m "Add Git LFS"
git push
```

## ✅ Success!

Once pushed, share your repository:
```
https://github.com/YOUR_USERNAME/cifar10-classifier
```

---

**Need help?** Check the [GitHub Docs](https://docs.github.com/en/get-started/quickstart)
