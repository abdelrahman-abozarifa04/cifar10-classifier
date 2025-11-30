@echo off
echo ======================================
echo   GitHub Upload Helper
echo ======================================
echo.
echo This script will help you upload your project to GitHub
echo.
echo BEFORE RUNNING THIS SCRIPT:
echo 1. Create a new repository on GitHub.com
echo 2. Copy the repository URL (should look like: https://github.com/USERNAME/REPO_NAME.git)
echo.
pause
echo.

REM Initialize git if not already done
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Check if remote already exists
git remote -v 2>nul | find "origin" >nul
if %errorlevel% == 0 (
    echo Remote 'origin' already exists.
    echo.
) else (
    echo Please enter your GitHub repository URL:
    echo Example: https://github.com/username/cifar10-classifier.git
    echo.
    set /p REPO_URL="Repository URL: "
    echo.
    echo Adding remote origin...
    git remote add origin %REPO_URL%
    echo.
)

REM Add all files
echo Adding all files to git...
git add .
echo.

REM Commit
echo Committing files...
git commit -m "Initial commit: CIFAR-10 CNN Classifier with Flask UI"
echo.

REM Set main branch
echo Setting main branch...
git branch -M main
echo.

REM Push to GitHub
echo Pushing to GitHub...
echo You may be asked to authenticate...
git push -u origin main
echo.

if %errorlevel% == 0 (
    echo ======================================
    echo   SUCCESS! Your code is on GitHub!
    echo ======================================
) else (
    echo.
    echo There was an error. Please check:
    echo - You have created the repository on GitHub
    echo - You have internet connection
    echo - You are authenticated (use GitHub CLI: gh auth login)
)
echo.
pause
