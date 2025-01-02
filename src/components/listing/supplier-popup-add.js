import React, { useState } from 'react';

function SupplierPopUp ()  {

    return (
        <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
        <div className='table-responsive active-projects style-1' >
            <h2 className='tbl-caption text-light' >Add Supplier
            </h2>
            <form>
                <div className="mb-3 row">
                    
                    
                    
                </div>

                <div className="mb-3 row">
                    <div className="col-md-6">
                        <label htmlFor="invoiceNo" className="form-label">Supplier Name *</label>
                        <input type="text" id="invoiceNo" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="invoiceNo" className="form-label">Email Address</label>
                        <input type="text" id="invoiceNo" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="invoiceNo" className="form-label">Mobile *</label>
                        <input type="text" id="invoiceNo" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="invoiceNo" className="form-label">Previous Credit Balance *</label>
                        <input type="text" id="invoiceNo" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea id="address" className="form-control"></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Reset</button>
                <button type="submit" className="btn btn-success">Add</button>
            </form>

        </div>
        </div>
    );
};

export default SupplierPopUp;
