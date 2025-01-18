import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import SelectOption from "../../../common/selectOption";
import BusinessCompanyView from "../businessCompanyView/BusinessCompanyView";
import PeerComparison from "../peerComparison/PeerComparison";

export const BusinessView = () => {
  const [peerComparison, setPeerComparison]= useState(null)
  const navigate = useNavigate(); // Initialize the navigate function

  let options = [
    { id: 1, label: "2024-2025" },
    { id: 2, label: "2023-2024" },
  ];

  // Handle the button click event
  const handleButtonClick = () => {
    navigate("/degree-view"); // Replace with the desired route
  };

  return (
    <div className="">
      <div className="bg-black p-2 d-flex justify-content-between align-items-center mt-2">
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-outline-primary
            "
            onClick={handleButtonClick} // Attach the handler to the button
          >
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <h2 className="fs-4 text-light">Company</h2>
        </div>
        <div className="d-flex ">
          <button type="button" className="btn btn-outline-primary">
            <i className="fa-solid fa-download fs-4"></i>
          </button>
          <button type="button" className="btn btn-outline-primary">
            Month
          </button>
          <button type="button" className="btn btn-outline-primary">
            Quarter
          </button>
          <SelectOption options={options} combo="2023-2024" />
        </div>
      </div>

      {
        !peerComparison ? (
        <BusinessCompanyView 
        setPeerComparison={setPeerComparison} 
        peerComparison={peerComparison} 
        />
        ) :(
        <div className="row">
        <div className="col-lg-5 col-sm-12">
          <BusinessCompanyView 
             setPeerComparison={setPeerComparison} 
             peerComparison={peerComparison} 
          />
        </div>
        <div className="col-lg-7 col-sm-12">
          <PeerComparison />
        </div>
      </div>)
      }
      
      

      
    </div>
  );
};
