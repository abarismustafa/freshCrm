import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RequestTable = () => {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Request Number</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petpooja-Tutorials-Demo</td>
              <td>Petpooja Tutorials Demo Central Kitchen [Kitchen]</td>
              <td>PO0048127095</td>
              <td>₹1,000.00</td>
              <td>20 Jul 2023</td>
              <td>
                <span className="badge bg-danger text-light">
                  Pending For Approval
                </span>
              </td>
              <td>
                Swayam Thakkar
                <br />
                <small>
                  Created: 20-Jul-2023 14:50:45
                  <br />
                  Modified: 20-Jul-2023 14:50:45
                </small>
              </td>
              <td>
                <Link to={"/edit-purchase-request"}>
                <button className="btn btn-light border">
                  <i className="bi bi-pencil primary"></i>
                </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-3">
          Showing 1 to 1 of 1 records
        </div>
      </div>
    </div>
  );
};

export default RequestTable;
