import React from "react";

const StoreOfForm = () => {
  return (
    <div className="row g-3 mt-3">
      <div className="col-12">
        <h5>Close From</h5>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Select Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Select Hours
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Select Main
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-12">
        <h5>Close To</h5>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Select Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Select Hours
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Select Main
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="mt-3 text-center">
        <button type="button" className="btn btn-primary px-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StoreOfForm;
