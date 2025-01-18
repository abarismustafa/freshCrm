import React from "react";

function RequestForPurchase() {
  return (
    <div className="container mt-4">
      {/* Success Message */}
      <div className="alert alert-success" role="alert">
        Record added successfully.
      </div>

      {/* Header Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="exportDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Export
          </button>
          <ul className="dropdown-menu" aria-labelledby="exportDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Export as PDF
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Export as Excel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Filters */}
      <form>
        <div className="row g-3">
          <div className="col-md-3">
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
          <div className="col-md-3">
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
          <div className="col-md-2">
            <label htmlFor="toFilter" className="form-label">
              To
            </label>
            <select className="form-select" id="toFilter">
              <option value="">All</option>
              <option value="Supplier">Supplier</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="requestNo" className="form-label">
              Request No.
            </label>
            <input
              type="text"
              className="form-control"
              id="requestNo"
              placeholder="Enter request no."
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="statusFilter" className="form-label">
              Status
            </label>
            <select className="form-select" id="statusFilter">
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3 d-flex">
          <button type="submit" className="btn btn-primary me-2">
            Search
          </button>
          <button type="button" className="btn btn-primary">
            Show All
          </button>
        </div>
      </form>
    </div>
  );
}
export default RequestForPurchase;
