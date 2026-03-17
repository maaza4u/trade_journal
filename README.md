# 📊 Trade Journal Application

A professional full-stack trade journal application that allows traders to record, view, and manage trades with multiple buy/sell legs.

## 🎯 Features

- ✅ **Three-Column Layout**: BUY | TRADE | SELL
- ✅ **Trade Management**: Create, view, and manage trades
- ✅ **Multiple Legs**: Add multiple BUY and SELL legs per trade
- ✅ **Direction & Status**: LONG/SHORT with OPEN/CLOSED status
- ✅ **Trade Metrics**: Calculate average entry price, position size, remaining quantity
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Dark Theme UI**: Modern, professional interface
- ✅ **Real-time Updates**: Instant state updates without page reload

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with modern features
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **In-Memory Database** - Mock data storage

## 📋 Project Structure

```
trade-journal-app/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TradeJournal.js
│   │   │   ├── TradeRow.js
│   │   │   ├── BuyTable.js
│   │   │   ├── SellTable.js
│   │   │   ├── TradeMeta.js
│   │   │   ├── TradeStatusBadge.js
│   │   │   ├── AddLegButton.js
│   │   │   ├── CreateTradeModal.js
│   │   │   └── [CSS files]
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

#### 1. Clone/Extract the Repository
```bash
cd trade-journal-app
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Start the server
npm start
# or for development with auto-reload
npm run dev
```

The backend API will run on `http://localhost:5000`

#### 3. Frontend Setup (in a new terminal)

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will open at `http://localhost:3000`

## 📚 API Endpoints

### GET `/api/trades`
Fetch all trades with buy/sell legs
```bash
curl http://localhost:5000/api/trades
```

### GET `/api/trades/:tradeId`
Fetch a single trade
```bash
curl http://localhost:5000/api/trades/trade-001
```

### POST `/api/trades`
Create a new trade
```bash
curl -X POST http://localhost:5000/api/trades \
  -H "Content-Type: application/json" \
  -d '{
    "symbol": "AAPL",
    "direction": "LONG",
    "status": "OPEN"
  }'
```

### POST `/api/trades/:tradeId/buy`
Add a BUY leg to a trade
```bash
curl -X POST http://localhost:5000/api/trades/trade-001/buy \
  -H "Content-Type: application/json" \
  -d '{
    "price": 150.50,
    "quantity": 10,
    "date": "2025-05-25"
  }'
```

### POST `/api/trades/:tradeId/sell`
Add a SELL leg to a trade
```bash
curl -X POST http://localhost:5000/api/trades/trade-001/sell \
  -H "Content-Type: application/json" \
  -d '{
    "price": 155.75,
    "quantity": 5,
    "date": "2025-05-26"
  }'
```

### PATCH `/api/trades/:tradeId`
Update trade status or notes
```bash
curl -X PATCH http://localhost:5000/api/trades/trade-001 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "CLOSED",
    "notes": "Trade completed successfully"
  }'
```

### DELETE `/api/trades/:tradeId/:legType/:legId`
Delete a BUY or SELL leg
```bash
curl -X DELETE http://localhost:5000/api/trades/trade-001/buy/buy-001
```

## 🎨 UI Components

### TradeJournal
Main container component that manages trade collection

### TradeRow
Displays a single trade in three-column layout:
- **Buy Column**: List of buy legs with add button
- **Trade Meta**: Trade information and controls
- **Sell Column**: List of sell legs with add button

### TradeStatusBadge
Visual indicator for trade direction (LONG/SHORT) and status (OPEN/CLOSED)

### BuyTable & SellTable
Tabular display of buy/sell legs with:
- Price, Quantity, Date
- Delete action buttons
- Empty state handling

### TradeMeta
Central trade information panel showing:
- Symbol and direction
- Status selector
- Calculated metrics (avg entry, position size, remaining)
- Notes section

### AddLegButton
Inline form for adding new BUY/SELL legs with:
- Price input
- Quantity input
- Date picker
- Submit/Cancel actions

## 🎨 Design Features

- **Color Coding**: 
  - LONG trades: Green tint
  - SHORT trades: Red tint
  
- **Status Indicators**:
  - OPEN: Green badge
  - CLOSED: Red badge, disabled actions

- **Responsive Breakpoints**:
  - Desktop (1200px+): 3-column layout
  - Tablet (768px-1199px): 2-column layout
  - Mobile (<768px): Single column

## 💾 Data Model

```json
{
  "journal_id": "journal-2025-05",
  "trades": [
    {
      "trade_id": "trade-001",
      "symbol": "AAA",
      "direction": "LONG",
      "status": "OPEN",
      "setup": null,
      "opened_at": "2025-05-25",
      "buy": [
        {
          "leg_id": "buy-001",
          "price": 100,
          "quantity": 10,
          "date": "2025-05-25"
        }
      ],
      "sell": [
        {
          "leg_id": "sell-001",
          "price": 105,
          "quantity": 8,
          "date": "2025-05-27"
        }
      ],
      "notes": ""
    }
  ]
}
```

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full three-column layout with all details visible
- **Tablet**: Two-column layout with meta centered
- **Mobile**: Single column with stacked content

## 🔧 Development

### Adding a New Feature

1. Create component in `frontend/src/components/`
2. Add corresponding CSS file
3. Import in parent component
4. Add backend endpoint if needed

### Extending the Backend

1. Add new route in `backend/server.js`
2. Update frontend API calls in `App.js`
3. Handle errors appropriately

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend Deployment (Heroku/Railway/Render)

```bash
cd backend
# Update PORT in .env for production
# Deploy the server.js file
```

Update the frontend proxy URL after deployment:
```json
// frontend/package.json
"proxy": "https://your-deployed-backend.com"
```

## 📝 Notes

- Data is stored in memory and will reset on server restart
- For production, integrate with a database (MongoDB, PostgreSQL, etc.)
- Consider adding authentication and user-specific journals
- Optional: Implement localStorage for frontend persistence

## 🤝 Contributing

Feel free to fork, modify, and enhance this project!

## 📄 License

MIT

## ✉️ Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ for traders who want to stay organized**
