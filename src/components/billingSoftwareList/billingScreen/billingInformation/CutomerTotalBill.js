import React from "react";
import { LuRefreshCcw } from "react-icons/lu";

const CutomerTotalBill = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-black py-2">
      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-danger">
          Bogo Offer
        </button>
        <button type="button" className="btn btn-danger">
          Split
        </button>
        <div className="form-check">
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="checkbox" class="form-check-input" />
            Sales Return
          </label>
        </div>
      </div>
      <div className="d-flex">
        <button type="button" className="btn btn-danger">
          <LuRefreshCcw size={"20"} className="text-light" />
        </button>
        <div className="">
          <span className="text-white fs-5 me-2">Total</span>
          <span className="text-danger fs-4 me-2 ">750</span>
        </div>
      </div>
    </div>
  );
};

export default CutomerTotalBill;
