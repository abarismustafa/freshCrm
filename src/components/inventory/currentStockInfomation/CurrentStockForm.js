import React from "react";

const CurrentStockForm = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Row Material
        </label>
        <input type="text" placeholder="Row Material" className="form-control" />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Category
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Stock Level
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-primary px-5">
          Search
        </button>
        <button type="button" className="btn btn-primary px-5">
          Show All
        </button>
        <button type="button" className="btn btn-primary px-5">
        <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
};

export default CurrentStockForm;
