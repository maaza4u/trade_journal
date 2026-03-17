import React, { useState } from 'react';
import './AddLegButton.css';

function AddLegButton({ legType, isOpen, onToggle, onSubmit, disabled }) {
  const [formData, setFormData] = useState({
    price: '',
    quantity: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      price: '',
      quantity: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="add-leg-button-container">
      <button
        className={`btn btn-add-leg ${legType}`}
        onClick={onToggle}
        disabled={disabled}
      >
        + {legType === 'buy' ? 'Buy' : 'Sell'}
      </button>

      {isOpen && !disabled && (
        <form className="leg-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={`${legType}-price`}>Price</label>
            <input
              id={`${legType}-price`}
              type="number"
              name="price"
              placeholder="0.00"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${legType}-quantity`}>Quantity</label>
            <input
              id={`${legType}-quantity`}
              type="number"
              name="quantity"
              placeholder="0"
              step="1"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`${legType}-date`}>Date</label>
            <input
              id={`${legType}-date`}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-submit">Add</button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={onToggle}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddLegButton;
