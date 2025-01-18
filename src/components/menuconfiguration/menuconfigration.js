
import React from "react";
import { Link } from "react-router-dom";
function MenuConfigration() {

  return (
    <div className="container mt-4">
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mb-3 rounded-top">
        <h4 className="text-light">Menu Configuration</h4>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="card p-0" >
           <Link to="/ItemListing" className="text-decoration-none text-black">
            <div className="card-body">
              <h5 className="card-title m-0">Item Management</h5>
            </div>
            </Link>
          </div>
        </div>
        <div className="col-3">
          <div className="card p-0" >
          <Link to="/" className="text-decoration-none text-black">
            <div className="card-body">
              <h5 className="card-title m-0">Special Note Management</h5>
            </div>
            </Link>
          </div>
        </div>
        <div className="col-3">
          <div className="card p-0" >
          <Link to="/" className="text-decoration-none text-black">
            <div className="card-body">
              <h5 className="card-title m-0">Area Management</h5>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuConfigration;
