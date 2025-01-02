import React, { useState } from 'react';

const AddPurchase = () => {
    const [items, setItems] = useState([{ qty: 0, rate: 0, total: 0 }]);

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = field === 'qty' || field === 'rate' ? parseFloat(value) || 0 : value;
        newItems[index].total = newItems[index].qty * newItems[index].rate;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { qty: 0, rate: 0, total: 0 }]);
    };

    const deleteItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const calculateGrandTotal = () => {
        return items.reduce((sum, item) => sum + item.total, 0);
    };

    return (
        <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
        <div className='table-responsive active-projects style-1' >
            <h2 className='tbl-caption text-light' >Add Purchase</h2>
            <form>
                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="supplierName" className="form-label">Supplier Name *</label>
                        <select id="supplierName" className="form-select">
                            <option value="">Select option</option>
                            {/* Add supplier options here */}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="purchaseDate" className="form-label">Purchase Date *</label>
                        <input type="date" id="purchaseDate" className="form-control" value={new Date().toISOString().split('T')[0]} readOnly />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input type="date" id="expiryDate" className="form-control" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="invoiceNo" className="form-label">Invoice No *</label>
                        <input type="text" id="invoiceNo" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="details" className="form-label">Details</label>
                        <textarea id="details" className="form-control"></textarea>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="paymentType" className="form-label">Payment Type</label>
                    <select id="paymentType" className="form-select">
                        <option value="cash">Cash Payment</option>
                        <option value="credit">Credit Payment</option>
                    </select>
                </div>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Item Information *</th>
                            <th>Stock/Qty</th>
                            <th>Qty *</th>
                            <th>Rate *</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <select className="form-select">
                                        <option value="">Select option</option>
                                        {/* Add item options here */}
                                    </select>
                                </td>
                                <td>
                                    <input type="number" className="form-control" value={item.stock || 0} readOnly />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={item.qty}
                                        onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={item.rate}
                                        onChange={(e) => handleItemChange(index, 'rate', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input type="number" className="form-control" value={item.total.toFixed(2)} readOnly />
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button type="button" className="btn btn-success mb-3" onClick={addItem}>Add More Item</button>

                <div className="mb-3 row">
                    <div className="col-md-6 offset-md-6">
                        <div className="d-flex justify-content-between">
                            <span>Grand Total:</span>
                            <span>{calculateGrandTotal().toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Paid Amount:</span>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        </div>
    );
};

export default AddPurchase;
