import React from 'react';
import TradeStatusBadge from './TradeStatusBadge';
import './TradeMeta.css';

function TradeMeta({ trade, onStatusChange }) {
  const calculateAverageEntryPrice = () => {
    if (!trade.buy || trade.buy.length === 0) return 0;
    const totalCost = trade.buy.reduce((sum, leg) => sum + leg.price * leg.quantity, 0);
    const totalQuantity = trade.buy.reduce((sum, leg) => sum + leg.quantity, 0);
    return totalQuantity > 0 ? (totalCost / totalQuantity).toFixed(2) : 0;
  };

  const calculatePositionSize = () => {
    if (!trade.buy || trade.buy.length === 0) return 0;
    return trade.buy.reduce((sum, leg) => sum + leg.quantity, 0);
  };

  const calculateSoldSize = () => {
    if (!trade.sell || trade.sell.length === 0) return 0;
    return trade.sell.reduce((sum, leg) => sum + leg.quantity, 0);
  };

  const avgEntryPrice = calculateAverageEntryPrice();
  const positionSize = calculatePositionSize();
  const soldSize = calculateSoldSize();
  const remainingSize = positionSize - soldSize;

  return (
    <div className="trade-meta">
      <div className="trade-header">
        <h3 className="symbol">{trade.symbol}</h3>
        <TradeStatusBadge
          direction={trade.direction}
          status={trade.status}
        />
      </div>

      <div className="trade-info-grid">
        <div className="info-item">
          <label>Direction</label>
          <span className={`direction ${trade.direction.toLowerCase()}`}>
            {trade.direction}
          </span>
        </div>

        <div className="info-item">
          <label>Status</label>
          <select
            value={trade.status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="status-select"
          >
            <option value="OPEN">OPEN</option>
            <option value="CLOSED">CLOSED</option>
          </select>
        </div>

        <div className="info-item">
          <label>Opened</label>
          <span>{trade.opened_at}</span>
        </div>

        <div className="info-item">
          <label>Avg Entry</label>
          <span>${avgEntryPrice}</span>
        </div>

        <div className="info-item">
          <label>Position Size</label>
          <span>{positionSize}</span>
        </div>

        <div className="info-item">
          <label>Remaining</label>
          <span className={remainingSize > 0 ? 'positive' : 'neutral'}>
            {remainingSize}
          </span>
        </div>
      </div>

      <div className="trade-notes">
        <label>Notes</label>
        <textarea
          placeholder="Add trade notes..."
          defaultValue={trade.notes}
          readOnly
          className="notes-textarea"
        />
      </div>
    </div>
  );
}

export default TradeMeta;
