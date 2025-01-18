import React from "react";
import { Link } from "react-router-dom";

function HeaderofCard() {
  return (
    <div className="container mt-4">
         <div className="col-sm-12  ">
            <div className="mt-3 d-flex justify-content-end">
                <Link to="/add-ratecard">
              <button type="submit" className="btn btn-danger me-2" >
                Add Rate Card
              </button>
              </Link>
              <Link to="/raw-material-card">
              <button type="button" className="btn btn-primary" to="">
                Rate Card Mapped Materials 
              </button>
              </Link>
            </div>
            </div>
      {/* Search Filters */}
      <form>
        <div className="row g-3">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <label htmlFor="startDate" className="form-label">
              To 
            </label>
            <select className="form-select" id="toFilter">
              <option value="">All</option>
              <option value="Supplier">Supplier</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Kitchen">Kitchen</option>
            </select>   
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <label htmlFor="endDate" className="form-label">
              Status
            </label>
            <select className="form-select" id="toFilter">
              <option value="">All</option>
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
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

export default HeaderofCard;
