import React from "react";
import { Link } from "react-router-dom";

const POItems = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <input type="checkbox" className="form-check-input me-2" />
              <span>Items requested in PO that needs to be prepared</span>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check-input me-2" />
                      Ajinomoto
                    </td>
                    <td>87 Kg</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check-input me-2" />
                      Amul Garlic Butter
                    </td>
                    <td>11 no</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <input type="checkbox" className="form-check-input me-2" />
              <span>Raw materials required to prepare the items in PO</span>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Raw Material</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check-input me-2" />
                      Thermal Ribbon
                    </td>
                    <td>10,000 Piece</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check-input me-2" />
                      Bar Code Labels
                    </td>
                    <td>10,000 Piece</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" ">
            <div className="mt-3 d-flex justify-content-end">
                <Link to="/add-purchasemrn">
              <button type="button" className="btn btn-primary">
                Raise Request For Purchase
              </button>
              </Link>
            </div>
            </div>
      </div>
    </div>
  );
};

export default POItems;
