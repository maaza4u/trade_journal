import React from 'react';
import './TradeStatusBadge.css';

function TradeStatusBadge({ direction, status }) {
  return (
    <div className={`status-badge ${direction.toLowerCase()} ${status.toLowerCase()}`}>
      <span className="direction-label">{direction}</span>
      <span className="status-label">{status}</span>
    </div>
  );
}

export default TradeStatusBadge;
