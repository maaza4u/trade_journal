import React from 'react';
import './LegTables.css';

function BuyTable({ legs, tradeId, isClosed, onDeleteLeg }) {
  return (
    <div className="leg-table">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Setup</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {legs && legs.length > 0 ? (
            legs.map(leg => (
              <tr key={leg.leg_id} className="leg-row">
                <td></td>
                <td>{leg.price.toFixed(2)}</td>
                <td>{leg.quantity}</td>
                <td>-</td>
                <td>{leg.date}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => onDeleteLeg(tradeId, 'buy', leg.leg_id)}
                    disabled={isClosed}
                    title="Delete leg"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="empty-cell">
                No buy legs
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuyTable;
