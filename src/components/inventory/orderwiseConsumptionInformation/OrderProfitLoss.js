import React from "react";

const OrderProfitLoss = () => {
  return (
    <div className="d-flex align-items-center flex-wrap gap-5">
      <div className="">
        <div className="d-flex align-items-center gap-5">
        <strong>Profit/Loss of the day = </strong>
          <div class="d-flex flex-column">
            <span class="border-bottom pb-2">Total Sales - Total Cost</span>
            <span>Total Sales</span>
          </div>
          <span>x 100</span>
        </div>
      </div>
      <div >
        <div className="d-flex align-items-center gap-5">
          <span>=</span>
          <div class="d-flex flex-column">
            <span class="border-bottom pb-2">30 - 0</span>
            <span>30</span>
          </div>
          <span>x 100</span>
          <span>=</span>
          <span>
            <strong>100.00%</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderProfitLoss;
