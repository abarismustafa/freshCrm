import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Tab Content Components
const DineInContent = () => {
  return(
    <div>
    <h3>Active Orders</h3>
    <p>Here are your currently active orders.</p>
  </div>
  )
};

const DeliveryContent = () => {
  return(
    <div>
    <h3>Completed Orders</h3>
    <p>Here is the list of orders you've completed.</p>
  </div>
  ) 
};

const PickUpContent = () => {
  return (
    <div>
      <h3>Cancelled Orders</h3>
      <p>Here are the orders you have cancelled.</p>
    </div>
  );
};

const KOTContent = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-2">
        <span className="fw-semibold">No</span>
        <span className="fw-semibold">Items</span>
      </div>
      <span className="d-block p-2 bg-success text-white fw-semibold">
        Delivery
      </span>
      <div className="bg-light d-flex justify-content-between align-items-center p-2">
        <span className="fw-semibold">7</span>
        <span className="fw-semibold">🅿️</span>
        <span className="fw-semibold">5</span>
      </div>
    </div>
  );
};

// Main Component
const RecentOrderTab = () => {
  const tabs = [
    { label: "Dine in", key: "DineIn", content: <DineInContent /> },
    { label: "Delivery", key: "Delivery", content: <DeliveryContent /> },
    { label: "Pick Up", key: "PickUp", content: <PickUpContent /> },
    { label: "KOT", key: "KOT", content: <KOTContent /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  useEffect(() => {
    if (!activeTab && tabs.length > 0) {
      setActiveTab(tabs[0].key);
    }
  }, [tabs, activeTab]);

  return (
    <div className="container mt-4">
      <div className="d-flex gap-2 mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`btn  px-lg-5 fw-semibold m-0 ${
              activeTab === tab.key ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="border bg-light p-3">
        {tabs.find((tab) => tab.key === activeTab)?.content || (
          <div>Please select a tab.</div>
        )}
      </div>
    </div>
  );
};

export default RecentOrderTab;
