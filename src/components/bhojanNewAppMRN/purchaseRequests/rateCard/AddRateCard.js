import React from "react";
import RawMaterialRateCard from "./RawMaterial";

const AddRateCard = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5>Rate Card Details</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                {/* Rate Card Name */}
                <div className="mb-3">
                  <label htmlFor="rateCardName" className="form-label">
                    Rate Card Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="rateCardName"
                    className="form-control"
                    placeholder="Enter rate card name"
                  />
                </div>

                {/* Type */}
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="supplier"
                        name="type"
                        className="form-check-input"
                      />
                      <label htmlFor="supplier" className="form-check-label">
                        Supplier
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="restaurant"
                        name="type"
                        className="form-check-input"
                        defaultChecked
                      />
                      <label htmlFor="restaurant" className="form-check-label">
                        Restaurant
                      </label>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select id="category" className="form-select">
                    <option>All Category</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                {/* Status */}
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    <input
                      type="checkbox"
                      id="status"
                      className="form-check-input me-2"
                    />
                    Status
                  </label>
                </div>

                {/* Restaurant */}
                <div className="mb-3">
                  <label htmlFor="restaurant" className="form-label">
                    Restaurant <span className="text-danger">*</span>
                  </label>
                  <select id="restaurant" className="form-select">
                    <option>Please select restaurant</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <RawMaterialRateCard/>
      </div>
    </div>
  );
};

export default AddRateCard;
