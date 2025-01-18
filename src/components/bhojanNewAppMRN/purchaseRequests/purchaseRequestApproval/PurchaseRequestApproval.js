import React from "react";

function RequestForApproval() {
  return (
    <div className="container mt-4">
      {/* Search Filters */}
      <form>
        <div className="row g-3">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <label htmlFor="toFilter" className="form-label">
              Resturant
            </label>
            <select className="form-select" id="toFilter">
              <option value="">All</option>
              <option value="Supplier">Supplier</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              defaultValue="2023-06-13"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              defaultValue="2023-06-20"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="mt-3 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary me-2">
                Search
              </button>
              <button type="button" className="btn btn-primary">
                Show All
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default RequestForApproval;
