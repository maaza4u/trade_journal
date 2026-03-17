# 🚀 Trade Journal - Quick Start Guide

## What's Included

This is a complete full-stack Trade Journal application with:
- **Frontend**: React with modern CSS styling
- **Backend**: Node.js Express API
- **Documentation**: Comprehensive README files

## ⚡ 5-Minute Setup

### Prerequisites
- Node.js v14+ installed
- npm or yarn

### Step 1: Navigate to project
```bash
cd trade-journal-app
```

### Step 2: Start Backend (Terminal 1)
```bash
cd backend
npm install
npm start
```
✅ Backend running on `http://localhost:5000`

### Step 3: Start Frontend (Terminal 2)
```bash
cd frontend
npm install
npm start
```
✅ Frontend running on `http://localhost:3000` (opens automatically)

## 🎯 What You Can Do

1. **View Trades** - See all trades in a 3-column layout
2. **Add Legs** - Click "+ Buy" or "+ Sell" to add trade legs
3. **Create Trades** - Click "New Trade" button
4. **Update Status** - Change trade status from OPEN to CLOSED
5. **Delete Legs** - Remove legs with the ✕ button
6. **View Metrics** - See calculated average entry price and position size

## 📁 Project Structure

```
trade-journal-app/
├── backend/
│   ├── server.js           (REST API)
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/index.html
│   ├── src/
│   │   ├── components/     (React components)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md               (Full documentation)
└── QUICK_START.md          (This file)
```

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/trades` | Get all trades |
| POST | `/api/trades` | Create trade |
| POST | `/api/trades/:id/buy` | Add buy leg |
| POST | `/api/trades/:id/sell` | Add sell leg |
| PATCH | `/api/trades/:id` | Update trade |
| DELETE | `/api/trades/:id/:type/:legId` | Delete leg |

## 🎨 Color Coding

- **LONG Trades** 🟢 Green
- **SHORT Trades** 🔴 Red
- **OPEN Status** 🟢 Green
- **CLOSED Status** 🔴 Red

## 💡 Key Features

✅ Three-column layout (BUY | TRADE | SELL)
✅ Add multiple legs per trade
✅ Track average entry price
✅ View position size and remaining quantity
✅ Responsive design (desktop/tablet/mobile)
✅ Real-time updates
✅ Dark modern UI

## 🐛 Troubleshooting

### Port already in use?
```bash
# Change backend port in backend/.env
PORT=5001
# Update frontend proxy in frontend/package.json
```

### Backend connection error?
1. Make sure backend is running on port 5000
2. Check `CORS` is enabled in server.js
3. Verify no firewall blocking

### Styles not loading?
```bash
# In frontend directory
npm start --reset-cache
```

## 📚 Learn More

- **Full README**: See `README.md`
- **Backend API**: See `backend/README.md`
- **Frontend Docs**: See `frontend/README.md`

## 🚀 Next Steps

1. ✅ Get it running locally
2. 📖 Read the full README.md
3. 🎨 Explore the components
4. 🔧 Extend with new features
5. 🚀 Deploy to production

## 📝 Sample Trade Data

The application comes with sample trades:
- **AAA** - LONG trade with buy/sell legs
- **MSFT** - SHORT trade
- **ALPHA** - LONG trade with no legs

Try adding legs to these trades!

## 🎯 Stretch Goals

- Add PnL calculations
- Export to CSV
- Charts and statistics
- Local persistence
- Search and filtering

## ✉️ Need Help?

1. Check the README files
2. Review console for error messages
3. Check Network tab in DevTools

---

**Happy trading! 📊**
