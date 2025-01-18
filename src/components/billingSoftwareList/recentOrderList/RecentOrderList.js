import React from "react";
import { useNavigate } from "react-router-dom"; 
import RecentOrderTab from "./recentOrderTab/RecentOrderTab";

const RecentOrderList = () => {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate("/billing/:tableNumber"); 
  };

  return (
    <div className="card m-2">
      <div className="bg-black p-2 d-flex align-items-center justify-content-between">
        <h4 className="text-light fs-4">Recent Order</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBackClick} 
        >
          Back
        </button>
      </div>
      <RecentOrderTab />
    </div>
  );
};

export default RecentOrderList;
