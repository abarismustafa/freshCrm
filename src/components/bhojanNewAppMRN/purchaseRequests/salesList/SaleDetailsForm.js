import React from "react";

const SaleDetailsForm = () => {
  return (
    <div className="container mt-4">
      {/* Sale Details Section */}
      <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className='table-responsive active-projects style-1'>
          <h3 className='tbl-caption text-light'>Sale Details</h3>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">To</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="toOption"
                      id="supplierOption"
                    />
                    <label className="form-check-label" htmlFor="supplierOption">
                      Supplier/Third Party
                    </label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="toOption"
                      id="restaurantOption"
                    />
                    <label className="form-check-label" htmlFor="restaurantOption">
                      Restaurant
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="toOption"
                      id="kitchenOption"
                    />
                    <label className="form-check-label" htmlFor="kitchenOption">
                      Kitchen
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">Select Purchase Order</label>
                <button className="btn btn-outline-secondary w-100">Select</button>
              </div>
              <div className="col-md-4">
                <label className="form-label">MRN No.</label>
                <input type="text" className="form-control" placeholder="5" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Restaurant</label>
                <select className="form-select">
                  <option>Please select</option>
                  <option>Agra-VipinSingh-Demo</option>
                  {/* Add restaurant options here */}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>Please Select Category</option>
                  {/* Add category options here */}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Invoice Date</label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue="2023-06-20"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Invoice Number</label>
                <input type="text" className="form-control" placeholder="Enter Invoice Number" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Type Section */}
      <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className='table-responsive active-projects style-1'>
          <h3 className='tbl-caption text-light'>Payment Type</h3>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Payment Type</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentType"
                      id="unpaidOption"
                    />
                    <label className="form-check-label" htmlFor="unpaidOption">
                      Unpaid
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentType"
                      id="paidOption"
                    />
                    <label className="form-check-label" htmlFor="paidOption">
                      Paid
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Whether Tax Payable under Reverse Charge</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="taxPayable"
                      id="taxYes"
                    />
                    <label className="form-check-label" htmlFor="taxYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="taxPayable"
                      id="taxNo"
                    />
                    <label className="form-check-label" htmlFor="taxNo">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className='table-responsive active-projects style-1'>
      <h3 className='tbl-caption text-light'>Bank Details</h3>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Bank Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Bank Name"
              defaultValue="1234"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bank Branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Bank Branch"
              defaultValue="13"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">IFSC CODE</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter IFSC Code"
              defaultValue="123"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Account Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Account Number"
              defaultValue="123"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            rows="3"
            defaultValue="VILL+P.O- HASIM NAGAR, P.S - FALTA, DIST.- SOUTH 24 PGS. PIN - 743513
Karnataka,Bengaluru"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Terms & Conditions</label>
          <div className="border p-3">
            {/* This is where a rich text editor or simple textarea could be integrated */}
            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter terms and conditions here"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
    <div className="row mb-3">
    <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="checked"
                  name="paymentType"
                  id="paidOption"
                />
                <label className="form-check-label" htmlFor="paidOption">
                  Update Inventory Stock
                </label>
              </div>
              <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="checked"
                  name="paymentType"
                  id="paidOption"
                />
                <label className="form-check-label" htmlFor="paidOption">
                  Editable
                </label>
              </div>
              </div>
              </div>
                
                &nbsp;

      {/* Raw Material Details Section */}
      <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
        <div className='table-responsive active-projects style-1'>
          <h3 className='tbl-caption text-light'>Raw Material Details</h3>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name <span className="text-danger">*</span></th>
                  <th>Qty <span className="text-danger">*</span></th>
                  <th>Unit <span className="text-danger">*</span></th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Tax</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select className="form-select">
                      <option>Abc</option>
                      {/* Add more options here if needed */}
                    </select>
                    <small className="text-muted">Stock Qty: 22.54</small>
                  </td>
                  <td>
                    <input type="number" className="form-control" placeholder="Enter Qty" />
                  </td>
                  <td>
                    <select className="form-select">
                      <option>Kg</option>
                      {/* Add more options here if needed */}
                    </select>
                  </td>
                  <td>
                    <input type="number" className="form-control" placeholder="52" />
                  </td>
                  <td>
                    <input type="number" className="form-control" placeholder="0" disabled />
                  </td>
                  <td>
                    <input type="number" className="form-control" placeholder="0" />
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="Enter Description" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleDetailsForm;
