import React, { useState } from 'react';

function RawMaterials() {
  // State to manage rows in the table
  const [rows, setRows] = useState([]);

  // Function to add a new row
  const addRow = () => {
    setRows([
      ...rows,
      { name: '', qty: '', unit: '', price: '', amount: '', tax: '', description: '' },
    ]);
  };

  // Function to remove a specific row
  const removeRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  // Function to handle input changes for each row
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Function to clear all rows
  const clearAll = () => {
    setRows([]);
  };

  return (
    <div className="card"style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <h5 className="mb-4 border-bottom">Raw Material</h5>

      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={addRow}>Add New</button>
        <button className="btn btn-danger" onClick={clearAll}>Clear All</button>
      </div>

      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Price</th>
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
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
                  type="text"
                  className="form-control"
                  placeholder="Enter unit"
                  value={row.unit}
                  onChange={(e) => handleInputChange(index, 'unit', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter price"
                  value={row.price}
                  onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  value={row.amount}
                  onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter tax"
                  value={row.tax}
                  onChange={(e) => handleInputChange(index, 'tax', e.target.value)}
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
                  onClick={() => removeRow(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RawMaterials;
