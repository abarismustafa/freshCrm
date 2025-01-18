import React, { useState } from "react";
import {
  FaUser,
  FaUsers,
  FaPaintBrush,
  FaRocket,
  FaFilter,
} from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import BillingTabs from "../billingTab/BillingTabs";
import CustomerOrderList from "./CustomerOrderList";
import CutomerTotalBill from "./CutomerTotalBill";
import PaymentOption from "./PaymentOption";

const buttons = [
  { id: 1, label: "Dine In" },
  { id: 2, label: "Delivery" },
  { id: 3, label: "Pick Up" },
];

const BillingInformation = ({ tableNumber }) => {
  const [activeButton, setActiveButton] = useState(buttons[0].id);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="pt-3">
      <div className="d-flex justify-content-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`btn fw-bold ${
              activeButton === button.id
                ? "btn-danger"
                : "btn-outline-danger"
            } me-2`}
            style={{width:"100%"}}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Table Headers */}
      <BillingTabs tableNumber={tableNumber} />

      {/* Customer Order List */}
      <CustomerOrderList />

      <div className="mt-5">
        {/* Customer Total Bill */}
        <CutomerTotalBill />

        {/* Payment OPtion */}
        <PaymentOption />
      </div>

      <div>
        <button type="butotn" className="btn btn-danger">
          Save
        </button>
        <button type="butotn" className="btn btn-danger">
          Save & Print
        </button>
        <button type="butotn" className="btn btn-danger">
          Save & Bill
        </button>
        <button type="butotn" className="btn btn-dark">
          KOT
        </button>
        <button type="butotn" className="btn btn-dark">
          KOT & Print
        </button>
        <button type="butotn" className="btn btn-danger">
          Hold
        </button>
      </div>
    </div>
  );
};

export default BillingInformation;
