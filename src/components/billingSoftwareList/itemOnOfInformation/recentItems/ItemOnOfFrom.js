import React from "react";

const ItemOnOfFrom = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Name
        </label>
        <input type="text" placeholder="Name" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Online Display Name
        </label>
        <input
          type="text"
          placeholder="Online Display Name"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          All Categorys
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          All
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-primary px-5">
          Show
        </button>
        <button type="button" className="btn btn-danger px-5">
          Clear
        </button>
        <button type="button" className="btn btn-danger px-5">
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ItemOnOfFrom;
