# Git Commands for Repository Setup

## Initial Setup (if not already done)

```bash
# Initialize git repository
git init

# Add remote repository
git remote add origin https://github.com/iceplantengineering/planetsystem.git

# Set default branch name
git branch -M main
```

## Commit and Push Commands

```bash
# Add all files to staging
git add .

# Commit with message
git commit -m "Initial commit: Solar system visualization app with interactive planetary motion"

# Push to GitHub
git push -u origin main
```

## Alternative: If repository already exists

```bash
# Clone the repository first
git clone https://github.com/iceplantengineering/planetsystem.git
cd planetsystem

# Copy your files to the cloned directory
# Then add, commit, and push
git add .
git commit -m "Add solar system visualization application"
git push origin main
```

## Detailed Commit Message (Optional)

```bash
git commit -m "Add interactive solar system visualization

Features:
- Real-time planetary orbit simulation following Kepler's laws
- Interactive planet exploration with detailed specifications
- Educational content about orbital mechanics
- Planet comparison tool
- Modern glassmorphism UI with cosmic theme
- Responsive design for desktop and mobile

Tech stack: React 18, TypeScript, Material-UI v6, Vite"
```