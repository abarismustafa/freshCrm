import React from 'react'

function TopAddNew() {
  return (
    <div>
      <h5 className="border-bottom">Sales Details</h5>
      <form className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="salesType"
            id="supplierThirdParty"
          />
          <label className="form-check-label" htmlFor="supplierThirdParty">
            Supplier/Third Party
          </label>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="salesType"
            id="restaurant"
          />
          <label className="form-check-label" htmlFor="restaurant">
            Restaurant
          </label>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="salesType"
            id="kitchen"
          />
          <label className="form-check-label" htmlFor="kitchen">
            Kitchen
          </label>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="restaurantSelect" className="form-label">Restaurant:</label>
          <select className="form-control" id="restaurantSelect">
            <option value="--all--">--All--</option>
            <option value="cafe">Cafe</option>
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="categorySelect" className="form-label">Category:</label>
          <select className="form-control" id="categorySelect">
            <option value="--all--">--All--</option>
            <option value="cafe">Cafe</option>
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="mrnNo" className="form-label mb-0">MRN No</label>
          <input type="text" id="mrnNo" className="form-control" placeholder="" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="invoiceDate" className="form-label mb-0">Invoice Date</label>
          <input type="date" id="invoiceDate" className="form-control" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="invoiceNumber" className="form-label mb-0">Invoice Number</label>
          <input type="text" id="invoiceNumber" className="form-control" placeholder="" />
        </div>

        <h5 className="border-bottom">Payment</h5>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="paymentStatus"
            id="paid"
          />
          <label className="form-check-label" htmlFor="paid">
            Paid
          </label>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="paymentStatus"
            id="unPaid"
          />
          <label className="form-check-label" htmlFor="unPaid">
            UnPaid
          </label>
        </div>

        <h5 className="border-bottom">Whether Tax Payable Under Reverse Charge</h5>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="reverseCharge"
            id="yes"
          />
          <label className="form-check-label" htmlFor="yes">
            Yes
          </label>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            className="form-check-input"
            type="radio"
            name="reverseCharge"
            id="no"
          />
          <label className="form-check-label" htmlFor="no">
            No
          </label>
        </div>

        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="bankName" className="form-label mb-0">Bank Name</label>
          <input type="text" id="bankName" className="form-control" placeholder="" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="bankBranch" className="form-label mb-0">Bank Branch</label>
          <input type="text" id="bankBranch" className="form-control" placeholder="" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="ifscCode" className="form-label mb-0">IFSC Code</label>
          <input type="text" id="ifscCode" className="form-control" placeholder="" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="accountNumber" className="form-label mb-0">Account Number</label>
          <input type="text" id="accountNumber" className="form-control" placeholder="" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <label htmlFor="address" className="form-label mb-0">Address</label>
          <input type="text" id="address" className="form-control" placeholder="" />
        </div>
      </form>
    </div>
  );
}

export default TopAddNew;
