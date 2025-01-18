import React from "react";

function PurchaseRequestForm() {
  return (
    <div className="container mt-4">
      <h3>Request for Purchase Details</h3>
      <form>
        <div className="row">
          {/* To: Supplier / Kitchen */}
          <div className="col-md-6 mb-3">
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
                  Supplier
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

          {/* MRN No. */}
          <div className="col-md-6 mb-3">
            <label htmlFor="mrnNo" className="form-label">
              MRN No.
            </label>
            <input
              type="text"
              className="form-control"
              id="mrnNo"
              placeholder="Enter MRN No."
              value="3"
              readOnly
            />
          </div>
        </div>

        <div className="row">
          {/* Kitchen */}
          <div className="col-md-6 mb-3">
            <label htmlFor="kitchen" className="form-label">
              Kitchen
            </label>
            <select className="form-select" id="kitchen">
              <option value="">Petpooja Tutorials Demo Central Kitchen</option>
              {/* Add more options if needed */}
            </select>
          </div>

          {/* Date */}
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              value="2023-07-20"
              readOnly
            />
          </div>
        </div>

        <div className="row">
          {/* Category */}
          <div className="col-md-6 mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select className="form-select" id="category">
              <option value="">Please Select Category</option>
              <option value="hygiene" selected>
                Hygiene
              </option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>

        <div className="row">
          {/* Terms of Payment */}
          <div className="col-md-6 mb-3">
            <label htmlFor="termsPayment" className="form-label">
              Terms of Payment
            </label>
            <textarea
              className="form-control"
              id="termsPayment"
              rows="2"
              placeholder="Enter terms of payment"
            ></textarea>
          </div>

          {/* Terms of Delivery */}
          <div className="col-md-6 mb-3">
            <label htmlFor="termsDelivery" className="form-label">
              Terms of Delivery
            </label>
            <textarea
              className="form-control"
              id="termsDelivery"
              rows="2"
              placeholder="Enter terms of delivery"
            ></textarea>
          </div>
        </div>
        <div className="row">
          {/* Payment Type */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Payment Type</label>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="toOption"
                  id="supplierOption"
                />
                <label className="form-check-label" htmlFor="supplierOption">
                  Unpaid
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
                  Paid
                </label>
              </div>
            </div>
          </div>


        </div>



        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PurchaseRequestForm;
