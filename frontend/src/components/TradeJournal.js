import React, { useState } from 'react';
import TradeRow from './TradeRow';
import CreateTradeModal from './CreateTradeModal';
import './TradeJournal.css';

function TradeJournal({
  journalData,
  onAddBuyLeg,
  onAddSellLeg,
  onDeleteLeg,
  onUpdateTradeStatus,
  onCreateNewTrade
}) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="trade-journal">
      <div className="journal-controls">
        <button
          className="btn btn-primary"
          onClick={() => setShowCreateModal(true)}
        >
          + New Trade
        </button>
      </div>

      {showCreateModal && (
        <CreateTradeModal
          onClose={() => setShowCreateModal(false)}
          onCreate={(tradeData) => {
            onCreateNewTrade(tradeData);
            setShowCreateModal(false);
          }}
        />
      )}

      <div className="trades-container">
        {journalData.trades && journalData.trades.length > 0 ? (
          journalData.trades.map(trade => (
            <TradeRow
              key={trade.trade_id}
              trade={trade}
              onAddBuyLeg={onAddBuyLeg}
              onAddSellLeg={onAddSellLeg}
              onDeleteLeg={onDeleteLeg}
              onUpdateTradeStatus={onUpdateTradeStatus}
            />
          ))
        ) : (
          <div className="no-trades">
            <p>No trades yet. Create your first trade to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TradeJournal;
