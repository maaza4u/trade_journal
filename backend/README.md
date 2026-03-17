# Trade Journal - Backend API

Express.js REST API for the Trade Journal application.

## 🚀 Quick Start

```bash
npm install
npm start
```

Server runs on `http://localhost:5000`

## 📦 Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables

## 📁 Files

- `server.js` - Main API server
- `.env` - Environment configuration
- `package.json` - Dependencies

## 🔌 API Endpoints

All endpoints return JSON and handle errors gracefully.

### Trades Collection

#### GET /api/trades
Returns all trades with their legs
```json
{
  "journal_id": "journal-2025-05",
  "trades": [...]
}
```

#### GET /api/trades/:tradeId
Returns a single trade by ID
```json
{
  "trade_id": "trade-001",
  "symbol": "AAA",
  ...
}
```

#### POST /api/trades
Create a new trade
```json
{
  "symbol": "AAPL",
  "direction": "LONG",
  "status": "OPEN"
}
```

#### PATCH /api/trades/:tradeId
Update trade status or notes
```json
{
  "status": "CLOSED",
  "notes": "Trade notes here"
}
```

### Buy Legs

#### POST /api/trades/:tradeId/buy
Add a BUY leg to a trade
```json
{
  "price": 150.50,
  "quantity": 10,
  "date": "2025-05-25"
}
```

### Sell Legs

#### POST /api/trades/:tradeId/sell
Add a SELL leg to a trade
```json
{
  "price": 155.75,
  "quantity": 5,
  "date": "2025-05-26"
}
```

### Delete Leg

#### DELETE /api/trades/:tradeId/:legType/:legId
Delete a specific leg
- `legType`: "buy" or "sell"
- `legId`: leg ID to delete

## ⚙️ Configuration

Edit `.env` file:

```
PORT=5000
NODE_ENV=development
```

## 🗄️ Data Structure

Trades are stored in memory with the following structure:

```javascript
{
  trade_id: "trade-001",
  symbol: "AAA",
  direction: "LONG",      // LONG or SHORT
  status: "OPEN",         // OPEN or CLOSED
  setup: null,
  opened_at: "2025-05-25",
  buy: [
    { leg_id, price, quantity, date }
  ],
  sell: [
    { leg_id, price, quantity, date }
  ],
  notes: ""
}
```

## 🔒 Validation

- Cannot add legs to CLOSED trades
- Prices and quantities default to 0 if not provided
- Dates default to today if not provided
- Symbol is required for new trades

## 🐛 Error Handling

API returns appropriate HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad request
- `404`: Not found
- `500`: Server error

## 💡 Future Enhancements

- Add database persistence (MongoDB, PostgreSQL)
- Implement user authentication
- Add trade calculations (PnL, risk/reward)
- Add trade filtering and searching
- Add audit logging
