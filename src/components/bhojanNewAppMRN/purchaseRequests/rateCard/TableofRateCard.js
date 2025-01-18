import React from "react";

const TableRateCard = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th>Name</th>
                <th>To</th>
                <th>Status</th>
                <th>Created/Modified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>Test_St</td>
                <td>
                  A TO Z BAZAR [Supplier], aditya daryaganj [Supplier]
                </td>
                <td>Active</td>
                <td>Created: 21-Jun-2023 13:42:23</td>
                <td>
                  <button className="btn btn-link">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-link">
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>yash@12345</td>
                <td></td>
                <td>Inactive</td>
                <td>Modified: 21-Jun-2023 13:41:26</td>
                <td>
                  <button className="btn btn-link">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="btn btn-link">
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableRateCard;
