import React, { useState } from 'react';

function SupplierToDate  () {
    return (
            <form>
                <div className="mb-3 row">
                    <div className="col-md-12">
                        <label htmlFor="supplierName" className="form-label">Supplier Name *</label>
                        <select id="supplierName" className="form-select">
                            <option value="">Select option</option>
                            <option value="">A Supplier Testing </option>
                            <option value="">Test Canada Supplier    </option>
                            <option value="">Al hadji musa </option>
                            <option value="">Coca Cola </option>
                            <option value="">Vanesa </option>
                            {/* Add supplier options here */}
                        </select>
                    </div>
                    <div class="mb-3 col-6">
  <label for="exampleFormControlInput1" class="form-label">Form </label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder="date"/>
</div>
<div class="mb-3 col-6">
  <label for="exampleFormControlInput1" class="form-label">To</label>
  <input type="date" class="form-control" id="exampleFormControlInput1"
   placeholder="date"/>
</div>
                </div>


                

                <button type="generate" className="btn btn-success">Generate</button>
                <button type="print" className="btn btn-primary">Print</button>
            </form>

    );
};

export default SupplierToDate;
