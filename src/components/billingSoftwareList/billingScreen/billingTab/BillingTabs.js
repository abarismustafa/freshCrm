import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUser,
  FaUsers,
  FaPaintBrush,
  FaRocket,
  FaFilter,
} from "react-icons/fa";
import CustomerForm from "./CustomerForm";

const BillingTabs = ({ tableNumber }) => {
  const [tabs, setTabs] = useState([
    {
      id: "1",
      icon: <FaFilter size={20} />,
      label: "Filter",
      content: "This is the Filter tab content.",
    },
    {
      id: "2",
      icon: <FaUser size={20} />,
      label: "User",
      content: <CustomerForm />,
    },
    {
      id: "3",
      icon: <FaUsers size={20} />,
      label: "Group",
      content: "This is the Group tab content.",
    },
    {
      id: "4",
      icon: <FaPaintBrush size={20} />,
      label: "Paint",
      content: "This is the Paint tab content.",
    },
    {
      id: "5",
      icon: <FaRocket size={20} />,
      label: "Rocket",
      content: "This is the Rocket tab content.",
    },
  ]);

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(tabs[0].id); 
  }, [tabs]);

  return (
    <div className="mt-4">
      {/* Tab Buttons */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 mb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`btn ${
                activeTab === tab.id ? "btn-primary m-0 me-3" : "btn-outline-secondary m-0 me-3"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-danger">{tab.id === "1" ? tableNumber : ""}</span>
              <span>{tab.icon}</span>
            </button>
          ))}
        </div>
        <button className="btn btn-warning px-3 m-0">{tableNumber}</button>
      </div>

      {/* Tab Content */}
      <div >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="border p-3">
                <h5>{tab.label}</h5>
                <p>{tab.content}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default BillingTabs;
