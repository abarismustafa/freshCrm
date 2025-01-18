import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MenuItem from "./menuItem/MenuItem";
import BillingInformation from "./billingInformation/BillingInformation";

const BillingScreen = () => {
  
  const { tableNumber } = useParams();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  return (
    <div className="card bg-light m-2">
      <div className="d-flex justify-content-between align-items-center bg-black p-2">
        <h3 className="text-white">billing</h3>
        <button
          onClick={() => navigate("/table-view")}
          className="btn btn-primary px-5"
        >
          Back
        </button>
      </div>

      <div className="row">
        <div className="col-lg-6 col-12">
         <MenuItem />
        </div>

        <div className="col-lg-6 col-12">
          <BillingInformation  
          tableNumber={tableNumber} />
        </div>
      </div>
    </div>
  );
};

export default BillingScreen;
