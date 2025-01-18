import React from 'react';

const RawMaterialRateCard = () => {
  return (
    <div className="container mt-4">
      <h5 className="mb-3">Raw Material Details</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Name <span className="text-danger">*</span></th>
            <th scope="col">Unit <span className="text-danger">*</span></th>
            <th scope="col">Price</th>
            <th scope="col">Tax Applicable</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="2 Base"
                disabled
              />
            </td>
            <td>
              <select className="form-select">
                <option>Kg</option>
                <option>L</option>
                <option>Piece</option>
              </select>
            </td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <button className="btn btn-outline-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-primary">Clear All</button>
        <button className="btn btn-danger">Remove</button>
        <button className="btn btn-primary">Add New</button>
      </div>
    </div>
  );
};

export default RawMaterialRateCard;
