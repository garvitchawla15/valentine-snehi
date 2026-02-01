#!/bin/bash

echo "🚀 Deploying Valentine's page to GitHub Pages..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Navigate to the directory with files
cd "$(dirname "$0")"

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "couple_photo.jpeg" ]; then
    echo "❌ Files not found. Make sure index.html and couple_photo.jpeg are in the same folder."
    exit 1
fi

# Initialize git if not already
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Configure git (update with your email)
echo "⚙️  Configuring git..."
git config user.name "garvitchawla15"
read -p "Enter your email: " email
git config user.email "$email"

# Add files
echo "📄 Adding files..."
git add index.html couple_photo.jpeg

# Commit
echo "💾 Committing files..."
git commit -m "Add Valentine's Day page for Snehi 💕"

# Set main branch
echo "🌿 Setting up main branch..."
git branch -M main

# Add remote (if not already added)
if ! git remote | grep -q "origin"; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/garvitchawla15/valentine-snehi.git
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "📝 Next steps:"
echo "1. Go to: https://github.com/garvitchawla15/valentine-snehi/settings/pages"
echo "2. Under 'Source', select 'main' branch from the dropdown"
echo "3. Click 'Save'"
echo "4. Wait 1-2 minutes for deployment"
echo ""
echo "🔗 Your site will be live at:"
echo "   https://garvitchawla15.github.io/valentine-snehi"
echo ""
echo "💕 Good luck with Snehi!"
