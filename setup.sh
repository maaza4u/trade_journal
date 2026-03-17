#!/bin/bash

echo "🚀 Trade Journal - Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v14+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Backend setup
echo "📦 Setting up Backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"
cd ..
echo ""

# Frontend setup
echo "📦 Setting up Frontend..."
cd frontend
npm install
echo "✅ Frontend dependencies installed"
cd ..
echo ""

echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Open two terminal windows"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd backend"
echo "  npm start"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd frontend"
echo "  npm start"
echo ""
echo "🌐 Frontend will open at http://localhost:3000"
echo "📡 Backend API at http://localhost:5001"
echo ""
echo "📚 For more info, see README.md or QUICK_START.md"
