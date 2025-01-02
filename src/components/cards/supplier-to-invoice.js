import React, { useState } from 'react';

function SupplieToInvoice  () {
    return (
            <form>
                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="supplierName" className="form-label">Supplier Name *</label>
                        <select id="supplierName" className="form-select">
                            <option value="">Select option</option>
                            {/* Add supplier options here */}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="supplierName" className="form-label">Invoice :</label>
                        <select id="supplierName" className="form-select">
                            <option value="">Select option</option>
                            {/* Add supplier options here */}
                        </select>
                    </div>
                   
                </div>


                

                <button type="submit" className="btn btn-primary">Search</button>
            </form>

    );
};

export default SupplieToInvoice;
