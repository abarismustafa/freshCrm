import React from "react";
import CustomInputField from "../../../../common/CustomInputField";
import SelectOption from "../../../../common/selectOption";
import BoostSearch from "../../boostSearch/BoostSearch";

const HaveNot = () => {
  let options = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                For the Period
              </label>
              <CustomInputField type={"date"} />
            </div>
          </div>
          <div className="col-4">
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
          <div className="col-4">
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
        </div>
      </div>
      <BoostSearch />
    </>
  );
};

export default HaveNot;
