import React, { useState } from "react";

const AcceptOrder = () => {
  const [counter, setCounter] = useState(12);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container p-3 border rounded bg-light">
      <form>
        <div className="mb-3">
          <label className="form-label">
            Minimum Delivery Time (Minutes):
          </label>
          <div className="input-group col-4">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={decrementCounter}
            >
              -
            </button>
            <input
              type="number"
              className="form-control"
              value={counter}
              readOnly
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={incrementCounter}
              readOnly
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Preparation Time (Minutes):</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter preparation time"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Customer Note:</label>
          <textarea
            className="form-control"
            placeholder="Enter customer note"
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-danger">
            Save
          </button>
          <button type="button" className="btn btn-danger">
            Save & Print
          </button>
          <button type="button" className="btn btn-danger">
            Save & Bill
          </button>
          <button type="button" className="btn btn-secondary">
            KOT
          </button>
          <button type="button" className="btn me-0 btn-secondary">
            KOT & Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcceptOrder;
