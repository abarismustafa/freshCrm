import React, { useState } from "react";
import MenuOrder from "./OrderMenu";

const OrderView = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("orderView");
  const [allTab, setAllTab] = useState("All");

  const handleTab = (text) =>{
      setAllTab(text)
  }


  return (
    <>
    <MenuOrder />
    <div className="card mt-3">
      {/* Top Navigation: Order View and Kot View */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <button
            className={`btn ${activeTab === "orderView" ? "btn-primary" : "btn-light"} fw-bold me-2`}
            style={{ border: "1px solid #dee2e6" }}
            onClick={() => setActiveTab("orderView")}
          >
            Order View
          </button>
          <button
            className={`btn ${activeTab === "kotView" ? "btn-primary" : "btn-light"} fw-bold`}
            style={{ border: "1px solid #dee2e6" }}
            onClick={() => setActiveTab("kotView")}
          >
            Kot View
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary mx-1">View Details</button>
          <button className="btn btn-outline-secondary mx-1">
            Foodready <span className="badge bg-danger">0</span>
          </button>
          <button className="btn btn-outline-secondary mx-1">
            Dispatch <span className="badge bg-danger">0</span>
          </button>
          <button className="btn btn-outline-secondary mx-1">
            Deliver <span className="badge bg-danger">0</span>
          </button>
          <button className="btn btn-outline-secondary mx-1">
            <i className="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      {/* Search Bar and Tabs */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex gap-2">
          <button className="p-2 btn btn-outline-dark" >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <ul className="nav flex-1 p-1 m-0 nav-tabs">
            <li className="nav-item">
              <button className={`nav-link ${allTab === "All" ? "active" : " "  }`} onClick={()=>handleTab("All")}>All</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${allTab === "Dine In" ? "active" : " "  }`} onClick={()=>handleTab("Dine In")}> Dine In </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${allTab === "Delivery" ? "active" : " "  }`} onClick={()=>handleTab("Delivery")}>Delivery</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${allTab === "Pick Up" ? "active" : " "  }`} onClick={()=>handleTab("Pick Up")}>Pick Up</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${allTab === "Online" ? "active" : " "  }`} onClick={()=>handleTab("Online")}>Online</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${allTab === "Zomato" ? "active" : " "  }`} onClick={()=>handleTab("Zemato")}>Zomato</button>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Enter order no."
            className="form-control mx-2"
            style={{ width: "200px" }}
          />
          <button className="btn btn-danger">MFR</button>
        </div>
      </div>
    <div className="">Total Orders <span>1</span></div>
      {/* Order View or Kot View Card based on active tab */}
      {activeTab === "orderView" ? (
        <div className="card p-0 col-4 shadow-sm" style={{ borderRadius: "10px", borderColor: "#f0f0f0" }}>
          <div className="">
            <div className="d-flex justify-content-between card-header align-items-center">
              <div>
                <h6 className="fw-bold mb-0">SURUCHI RESTAURANT</h6>
                <small className="text-muted">Bill: 482</small>
              </div>
              <span className="badge bg-danger" style={{ fontSize: "12px", padding: "0.4em 0.6em", borderRadius: "4px" }}>
                OTP: 2946
              </span>
            </div>
            <div className="d-flex card-body justify-content-between align-items-center mb-3">
              <span className="text-muted">Not Assigned</span>
              <button className="btn btn-light p-1" style={{ fontSize: "14px" }}>
                View Details
              </button>
            </div>
            <div className="d-flex card-footer justify-content-between align-items-center">
              <span>Prepare In: <strong>10:03</strong></span>
              <button className="btn text-white" style={{ backgroundColor: "#ff7b00", fontSize: "14px", borderRadius: "4px" }}>
                Food is Ready
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow-sm" style={{ borderRadius: "10px", borderColor: "#f0f0f0" }}>
          No Dta
        </div>
      )}
    </div>
    </>
  );
};

export default OrderView;
