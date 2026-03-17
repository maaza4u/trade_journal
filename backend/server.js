const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (mock data)
let journalData = {
  journal_id: 'journal-2025-05',
  trades: [
    {
      trade_id: 'trade-001',
      symbol: 'AAA',
      direction: 'LONG',
      status: 'OPEN',
      setup: null,
      opened_at: '2025-05-25',
      buy: [
        { leg_id: 'buy-001', price: 100, quantity: 10, date: '2025-05-25' },
        { leg_id: 'buy-002', price: 98, quantity: 5, date: '2025-05-26' }
      ],
      sell: [
        { leg_id: 'sell-001', price: 105, quantity: 8, date: '2025-05-27' }
      ],
      notes: ''
    },
    {
      trade_id: 'trade-002',
      symbol: 'MSFT',
      direction: 'SHORT',
      status: 'OPEN',
      setup: null,
      opened_at: '2025-09-09',
      buy: [
        { leg_id: 'buy-003', price: 3, quantity: 3, date: '2025-09-09' }
      ],
      sell: [],
      notes: ''
    },
    {
      trade_id: 'trade-003',
      symbol: 'ALPHA',
      direction: 'LONG',
      status: 'OPEN',
      setup: null,
      opened_at: '2025-10-10',
      buy: [],
      sell: [],
      notes: ''
    }
  ]
};

// Routes

// Get all trades
app.get('/api/trades', (req, res) => {
  res.json(journalData);
});

// Get single trade
app.get('/api/trades/:tradeId', (req, res) => {
  const trade = journalData.trades.find(t => t.trade_id === req.params.tradeId);
  if (!trade) {
    return res.status(404).json({ error: 'Trade not found' });
  }
  res.json(trade);
});

// Add a BUY leg to a trade
app.post('/api/trades/:tradeId/buy', (req, res) => {
  const { price, quantity, date } = req.body;
  const trade = journalData.trades.find(t => t.trade_id === req.params.tradeId);

  if (!trade) {
    return res.status(404).json({ error: 'Trade not found' });
  }

  if (trade.status === 'CLOSED') {
    return res.status(400).json({ error: 'Cannot add leg to closed trade' });
  }

  const newLeg = {
    leg_id: `buy-${Date.now()}`,
    price: parseFloat(price) || 0,
    quantity: parseFloat(quantity) || 0,
    date: date || new Date().toISOString().split('T')[0]
  };

  trade.buy.push(newLeg);
  res.status(201).json(trade);
});

// Add a SELL leg to a trade
app.post('/api/trades/:tradeId/sell', (req, res) => {
  const { price, quantity, date } = req.body;
  const trade = journalData.trades.find(t => t.trade_id === req.params.tradeId);

  if (!trade) {
    return res.status(404).json({ error: 'Trade not found' });
  }

  if (trade.status === 'CLOSED') {
    return res.status(400).json({ error: 'Cannot add leg to closed trade' });
  }

  const newLeg = {
    leg_id: `sell-${Date.now()}`,
    price: parseFloat(price) || 0,
    quantity: parseFloat(quantity) || 0,
    date: date || new Date().toISOString().split('T')[0]
  };

  trade.sell.push(newLeg);
  res.status(201).json(trade);
});

// Create new trade
app.post('/api/trades', (req, res) => {
  const { symbol, direction, status } = req.body;

  if (!symbol || !direction || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newTrade = {
    trade_id: `trade-${Date.now()}`,
    symbol,
    direction,
    status,
    setup: null,
    opened_at: new Date().toISOString().split('T')[0],
    buy: [],
    sell: [],
    notes: ''
  };

  journalData.trades.push(newTrade);
  res.status(201).json(newTrade);
});

// Update trade status
app.patch('/api/trades/:tradeId', (req, res) => {
  const { status, notes } = req.body;
  const trade = journalData.trades.find(t => t.trade_id === req.params.tradeId);

  if (!trade) {
    return res.status(404).json({ error: 'Trade not found' });
  }

  if (status) trade.status = status;
  if (notes !== undefined) trade.notes = notes;

  res.json(trade);
});

// Delete a leg
app.delete('/api/trades/:tradeId/:legType/:legId', (req, res) => {
  const { tradeId, legType, legId } = req.params;
  const trade = journalData.trades.find(t => t.trade_id === tradeId);

  if (!trade) {
    return res.status(404).json({ error: 'Trade not found' });
  }

  if (legType === 'buy') {
    trade.buy = trade.buy.filter(leg => leg.leg_id !== legId);
  } else if (legType === 'sell') {
    trade.sell = trade.sell.filter(leg => leg.leg_id !== legId);
  }

  res.json(trade);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Trade Journal API running on port ${PORT}`);
});
