import React from "react";

const FoodCostingForm = () => {
  return (
    <div className="row g-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Menu Item
        </label>
        <input type="text" placeholder="Menu Item" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          From Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          To Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Select Days
        </label>
        <div className="d-flex gap-3 align-items-center mt-2">
          <label>
            <input type="radio" />
            30
          </label>
          <label>
            <input type="radio" />
            45
          </label>
          <label>
            <input type="radio" />
            90
          </label>
        </div>
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-primary ">
          Search
        </button>
        <button type="button" className="btn btn-primary ">
          Show All
        </button>
      </div>
    </div>
  );
};

export default FoodCostingForm;
