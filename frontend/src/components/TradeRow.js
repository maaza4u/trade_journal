import React, { useState } from 'react';
import BuyTable from './BuyTable';
import SellTable from './SellTable';
import TradeMeta from './TradeMeta';
import TradeStatusBadge from './TradeStatusBadge';
import AddLegButton from './AddLegButton';
import './TradeRow.css';

function TradeRow({
  trade,
  onAddBuyLeg,
  onAddSellLeg,
  onDeleteLeg,
  onUpdateTradeStatus
}) {
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [showSellForm, setShowSellForm] = useState(false);

  const isClosed = trade.status === 'CLOSED';

  const handleAddBuyLeg = (legData) => {
    onAddBuyLeg(trade.trade_id, legData);
    setShowBuyForm(false);
  };

  const handleAddSellLeg = (legData) => {
    onAddSellLeg(trade.trade_id, legData);
    setShowSellForm(false);
  };

  return (
    <div className={`trade-row trade-${trade.direction.toLowerCase()}`}>
      {/* BUY COLUMN */}
      <div className="trade-column buy-column">
        <div className="column-header">BUY</div>
        <BuyTable
          legs={trade.buy}
          tradeId={trade.trade_id}
          isClosed={isClosed}
          onDeleteLeg={onDeleteLeg}
        />
        <AddLegButton
          legType="buy"
          isOpen={showBuyForm}
          onToggle={() => setShowBuyForm(!showBuyForm)}
          onSubmit={handleAddBuyLeg}
          disabled={isClosed}
        />
      </div>

      {/* CENTER TRADE META */}
      <div className="trade-column trade-meta-column">
        <TradeMeta
          trade={trade}
          onStatusChange={(newStatus) =>
            onUpdateTradeStatus(trade.trade_id, newStatus)
          }
        />
      </div>

      {/* SELL COLUMN */}
      <div className="trade-column sell-column">
        <div className="column-header">SELL</div>
        <SellTable
          legs={trade.sell}
          tradeId={trade.trade_id}
          isClosed={isClosed}
          onDeleteLeg={onDeleteLeg}
        />
        <AddLegButton
          legType="sell"
          isOpen={showSellForm}
          onToggle={() => setShowSellForm(!showSellForm)}
          onSubmit={handleAddSellLeg}
          disabled={isClosed}
        />
      </div>
    </div>
  );
}

export default TradeRow;
