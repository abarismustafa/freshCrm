import React, { useState } from 'react';
import SalesHeader from '../SalePurchase/SalesHeader';

function EnterItem() {
  // Sample items with price for calculations
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  // State to manage rows
  const [rows, setRows] = useState([]);

  // Function to add a new row
  const addRow = () => {
    setRows([
      ...rows,
      { itemId: '', qty: '', amount: '', tax: '', description: '' },
    ]);
  };

  // Function to handle input change for each row
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Function to calculate Amount (Qty * Price) and Tax (10% as example)
  const calculate = () => {
    const updatedRows = rows.map((row) => {
      const item = items.find((item) => item.id === parseInt(row.itemId));
      if (item && row.qty) {
        const amount = item.price * parseInt(row.qty);
        const tax = amount * 0.1; // Example tax: 10%
        return { ...row, amount, tax };
      }
      return row;
    });
    setRows(updatedRows);
  };

  // Function to clear all rows
  const clearAll = () => {
    setRows([]);
  };

  return (
    <div className="card" style={{ marginTop: '10px', marginLeft: '4px', marginRight: '4px' }}>
      <div className="table-responsive active-projects style-1">
        <h3 className="tbl-caption text-light">
          Indent Management
          <SalesHeader />
        </h3>
      </div>
      <h5 className="mb-4">Enter Item to Get Calculation</h5>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={addRow}>
          Add New Row
        </button>
        <button className="btn btn-danger" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Amount</th>
            <th>Tax</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <select
                  className="form-control"
                  value={row.itemId}
                  onChange={(e) => handleInputChange(index, 'itemId', e.target.value)}
                >
                  <option value="">Select Item</option>
                  {items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter quantity"
                  value={row.qty}
                  onChange={(e) => handleInputChange(index, 'qty', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  value={row.amount || ''}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tax"
                  value={row.tax || ''}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter description"
                  value={row.description}
                  onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    const updatedRows = rows.filter((_, i) => i !== index);
                    setRows(updatedRows);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success" onClick={calculate}>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default EnterItem;
