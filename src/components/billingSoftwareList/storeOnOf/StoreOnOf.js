import React from "react";
import { useNavigate } from "react-router-dom";
import StoreOfForm from "./StoreOfForm";

const StoreOnOf = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/billing/:tableNumber");
  };

  return (
    <div className="card m-2">
      <div className="bg-black p-2 d-flex align-items-center justify-content-between">
        <h4 className="text-light fs-4">Store On/Off Status</h4>
        <button
          type="button"
          className="btn btn-primary px-5"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-light p-2 mt-3">
        <p className="fw-semibold">
          Update all stores makes it easy & fast to keep all outlet's
          information up-to-date in one place.
        </p>
        <button
          type="button"
          className="btn btn-danger text-nowrap m-0 fw-semibold"
        >
          Update All Stores
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center bg-light p-2 mt-3">
        <div className="d-flex align-items-center gap-2">
          <i className="fa-solid fa-globe fs-4 text-primary"></i>
          <span className="fw-bold">Whitelabel</span>
        </div>
        <div className="d-flex align-items-center gap-2 ">
          <button type="button" className="btn btn-danger m-0 fw-semibold px-5">
            off
          </button>
          <button
            type="button"
            className="btn btn-success m-0 fw-semibold px-5"
          >
            on
          </button>
        </div>
      </div>
      <StoreOfForm />
    </div>
  );
};

export default StoreOnOf;
