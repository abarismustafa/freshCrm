import React from "react";
import BoostSearch from "../../boostSearch/BoostSearch";

const DropOff = () => {
  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Filter Customers By
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Who Have Bot Billed
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                For the Period
              </label>
              <input type="date" className="form-control"></input>
            </div>
          </div>

          <div className="col-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                For the Period
              </label>
              <input type="date" className="form-control"></input>
            </div>
          </div>
        </div>
      </div>
      <BoostSearch />
    </>
  );
};

export default DropOff;
