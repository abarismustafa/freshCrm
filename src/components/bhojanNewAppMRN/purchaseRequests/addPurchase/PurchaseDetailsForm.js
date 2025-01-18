import React from "react";

function PurchaseDetailsForm() {
  return (
    <div className="container mt-4">
      <h4>Request for Purchase Details</h4>
      <form>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">To</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="to"
                    id="supplier"
                    value="Supplier"
                  />
                  <label className="form-check-label" htmlFor="supplier">
                    Supplier
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="to"
                    id="restaurant"
                    value="Restaurant"
                  />
                  <label className="form-check-label" htmlFor="restaurant">
                    Restaurant
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="to"
                    id="kitchen"
                    value="Kitchen"
                  />
                  <label className="form-check-label" htmlFor="kitchen">
                    Kitchen
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="kitchenSelect" className="form-label">
                Kitchen
              </label>
              <select className="form-select" id="kitchenSelect">
                <option value="">Select Kitchen</option>
                <option value="kitchen1">Kitchen 1</option>
                <option value="kitchen2">Kitchen 2</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="termsOfPayment" className="form-label">
                Terms Of Payment
              </label>
              <input
                type="text"
                className="form-control"
                id="termsOfPayment"
                placeholder="Enter terms of payment"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Type</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="unpaid"
                    value="Unpaid"
                  />
                  <label className="form-check-label" htmlFor="unpaid">
                    Unpaid
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    id="paid"
                    value="Paid"
                  />
                  <label className="form-check-label" htmlFor="paid">
                    Paid
                  </label>
                </div>
              </div>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="editable"
              />
              <label className="form-check-label" htmlFor="editable">
                Editable
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="mrnNo" className="form-label">
                MRN No.
              </label>
              <input
                type="text"
                className="form-control"
                id="mrnNo"
                placeholder="Enter MRN No."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                defaultValue="2023-06-20"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="termsOfDelivery" className="form-label">
                Terms Of Delivery
              </label>
              <input
                type="text"
                className="form-control"
                id="termsOfDelivery"
                placeholder="Enter terms of delivery"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PurchaseDetailsForm;
