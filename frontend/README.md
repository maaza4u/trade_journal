# Trade Journal - Frontend

React application for managing and visualizing trades.

## 🚀 Quick Start

```bash
npm install
npm start
```

Application opens at `http://localhost:3000`

## 📦 Dependencies

- **react**: UI library
- **react-dom**: React rendering
- **react-scripts**: Build tools
- **axios**: HTTP client

## 📁 Project Structure

```
src/
├── components/
│   ├── TradeJournal.js/css      - Main journal container
│   ├── TradeRow.js/css          - Single trade display
│   ├── BuyTable.js/css          - Buy legs table
│   ├── SellTable.js/css         - Sell legs table
│   ├── TradeMeta.js/css         - Trade info panel
│   ├── TradeStatusBadge.js/css  - Status indicator
│   ├── AddLegButton.js/css      - Add leg form
│   └── CreateTradeModal.js/css  - Create trade modal
├── App.js                        - Main app component
├── App.css                       - App styles
├── index.js                      - React entry point
└── index.css                     - Global styles
```

## 🎨 Components

### App
- Manages global state
- Fetches trades from backend
- Handles API calls
- Error handling

### TradeJournal
- Renders trade list
- Controls for creating trades
- Manages trade rendering

### TradeRow
- Three-column layout: BUY | TRADE | SELL
- Manages leg forms for each column
- Color-coded by direction

### TradeMeta
- Central trade information
- Trade status selector
- Calculated metrics
- Notes display

### BuyTable / SellTable
- Tabular display of legs
- Delete buttons
- Empty state handling

### AddLegButton
- Inline form for adding legs
- Price, quantity, date inputs
- Form submission

### CreateTradeModal
- Modal dialog for new trades
- Symbol, direction, status inputs
- Validation

## 🔌 API Integration

Backend URL: `http://localhost:5000`

### Environment

Update proxy in `package.json` for production:

```json
"proxy": "https://your-backend-url.com"
```

### API Calls

All API interactions in `App.js`:

```javascript
axios.get('http://localhost:5001/api/trades')
axios.post('/api/trades/:id/buy', legData)
axios.post('/api/trades/:id/sell', legData)
axios.delete('/api/trades/:id/:type/:legId')
axios.patch('/api/trades/:id', { status })
```

## 🎨 Styling

- **Color Scheme**: Dark theme (Tailwind-inspired)
- **Responsive**: Mobile-first design
- **CSS Variables**: Easy theme customization

### Color Palette

- **LONG**: Green (#10b981)
- **SHORT**: Red (#ef4444)
- **OPEN**: Green (#10b981)
- **CLOSED**: Red (#ef4444)
- **Background**: Dark slate (#0f172a)

## 📱 Responsive Breakpoints

- **Desktop** (1200px+): 3-column layout
- **Tablet** (768px-1199px): 2-column with centered meta
- **Mobile** (<768px): Single column

## 🛠️ Development

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

Creates optimized build in `build/` folder

### Debugging

Use React DevTools browser extension for component debugging

## 🔄 State Management

Uses React hooks:
- `useState` - Component state
- `useEffect` - Side effects (API calls)

Data flows:
```
App (state) 
  → TradeJournal 
    → TradeRow 
      → BuyTable/SellTable
      → AddLegButton
      → TradeMeta
```

## 📝 Key Features

- ✅ Real-time updates without page reload
- ✅ Form validation with error messages
- ✅ Disabled actions for closed trades
- ✅ Calculated metrics (avg price, position size)
- ✅ Responsive design
- ✅ Smooth animations and transitions
- ✅ Empty state handling

## 🚀 Deployment

### Vercel

```bash
vercel deploy
```

### Netlify

```bash
npm run build
# Deploy build folder to Netlify
```

### Environment Variables

Create `.env` or `.env.local`:

```
REACT_APP_API_URL=https://your-backend-url.com
```

Use in code:

```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
```

## 💡 Future Enhancements

- Add trade search and filtering
- Export trades to CSV/PDF
- Charts and analytics
- Trade statistics dashboard
- Local storage persistence
- Real-time WebSocket updates
- User authentication
- Multi-journal support

## 🐛 Troubleshooting

### Backend not connecting

1. Ensure backend is running on port 5000
2. Check CORS is enabled
3. Verify proxy in package.json

### Forms not submitting

1. Check browser console for errors
2. Verify input validation
3. Check API endpoint in DevTools Network tab

### Styling issues

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check CSS files are loaded in DevTools

## 📚 Resources

- [React Documentation](https://react.dev)
- [Axios Documentation](https://axios-http.com)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid)
