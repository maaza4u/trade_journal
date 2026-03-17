import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradeJournal from './components/TradeJournal';
import './App.css';

function App() {
  const [journalData, setJournalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch trades on component mount
  useEffect(() => {
    fetchTrades();
  }, []);

  const fetchTrades = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5001/api/trades');
      setJournalData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching trades:', err);
      setError('Failed to load trades. Make sure backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const addBuyLeg = async (tradeId, legData) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/trades/${tradeId}/buy`,
        legData
      );
      updateTradeInState(response.data);
    } catch (err) {
      console.error('Error adding buy leg:', err);
      setError('Failed to add buy leg');
    }
  };

  const addSellLeg = async (tradeId, legData) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/trades/${tradeId}/sell`,
        legData
      );
      updateTradeInState(response.data);
    } catch (err) {
      console.error('Error adding sell leg:', err);
      setError('Failed to add sell leg');
    }
  };

  const deleteLeg = async (tradeId, legType, legId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/trades/${tradeId}/${legType}/${legId}`
      );
      updateTradeInState(response.data);
    } catch (err) {
      console.error('Error deleting leg:', err);
      setError('Failed to delete leg');
    }
  };

  const updateTradeStatus = async (tradeId, status) => {
    try {
      const response = await axios.patch(
        `http://localhost:5001/api/trades/${tradeId}`,
        { status }
      );
      updateTradeInState(response.data);
    } catch (err) {
      console.error('Error updating trade status:', err);
      setError('Failed to update trade status');
    }
  };

  const createNewTrade = async (tradeData) => {
    try {
      const response = await axios.post(
        'http://localhost:5001/api/trades',
        tradeData
      );
      setJournalData({
        ...journalData,
        trades: [...journalData.trades, response.data]
      });
    } catch (err) {
      console.error('Error creating trade:', err);
      setError('Failed to create trade');
    }
  };

  const updateTradeInState = (updatedTrade) => {
    setJournalData({
      ...journalData,
      trades: journalData.trades.map(t =>
        t.trade_id === updatedTrade.trade_id ? updatedTrade : t
      )
    });
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading Trade Journal...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📊 Trade Journal</h1>
        <p>Manage your trades with precision</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      {journalData && (
        <TradeJournal
          journalData={journalData}
          onAddBuyLeg={addBuyLeg}
          onAddSellLeg={addSellLeg}
          onDeleteLeg={deleteLeg}
          onUpdateTradeStatus={updateTradeStatus}
          onCreateNewTrade={createNewTrade}
        />
      )}
    </div>
  );
}

export default App;
