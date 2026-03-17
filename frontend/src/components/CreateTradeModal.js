import React, { useState } from 'react';
import './CreateTradeModal.css';

function CreateTradeModal({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    symbol: '',
    direction: 'LONG',
    status: 'OPEN'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.symbol.trim()) {
      newErrors.symbol = 'Symbol is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onCreate({
      symbol: formData.symbol.toUpperCase(),
      direction: formData.direction,
      status: formData.status
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Trade</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="create-trade-form">
          <div className="form-group">
            <label htmlFor="symbol">Symbol *</label>
            <input
              id="symbol"
              type="text"
              name="symbol"
              placeholder="e.g., AAPL, BTC, GLD"
              value={formData.symbol}
              onChange={handleChange}
              className={errors.symbol ? 'input-error' : ''}
            />
            {errors.symbol && <span className="error-text">{errors.symbol}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="direction">Direction *</label>
              <select
                id="direction"
                name="direction"
                value={formData.direction}
                onChange={handleChange}
              >
                <option value="LONG">LONG</option>
                <option value="SHORT">SHORT</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status *</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="OPEN">OPEN</option>
                <option value="CLOSED">CLOSED</option>
              </select>
            </div>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Create Trade</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTradeModal;
