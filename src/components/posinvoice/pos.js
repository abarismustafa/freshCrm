import React, { useState } from "react";
import NewOrder from "./NewOrder";
import OnGoingOrder from "./OnGoingOrder";
import KitchenStatus from "./KitchenStatus";
import OnlineOrder from "./OnlineOrder";
import TodayOrder from "./TodayOrder";

function POSApp() {
  const [activeTab, setActiveTab] = useState("New Order");

  const renderTab = () => {
    switch (activeTab) {
      case "New Order":
        return <NewOrder />;
      case "On Going Order":
        return <OnGoingOrder />;
      case "Kitchen Status":
        return <KitchenStatus />;
      case "Online Order":
        return <OnlineOrder />;
      case "Today Order":
        return <TodayOrder />;
      default:
        return <NewOrder />;
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="col-md-12">
          <div className="d-flex gap-2 my-3">
            <button
              className={`btn m-0 ${activeTab === "New Order" ? "btn-success" : "btn-primary" }`}
              onClick={() => setActiveTab("New Order")}
            >
              New Order
            </button>
            <button
              className={`btn m-0 ${activeTab === "On Going Order" ? "btn-success" : "btn-primary" }`}
              onClick={() => setActiveTab("On Going Order")}
            >
              On Going Order
            </button>
            <button
              className={`btn m-0 ${activeTab === "Kitchen Status" ? "btn-success" : "btn-primary" }`}
              onClick={() => setActiveTab("Kitchen Status")}
            >
              Kitchen Status
            </button>
            <button
              className={`btn m-0 ${activeTab === "Online Order" ? "btn-success" : "btn-primary" }`}
              onClick={() => setActiveTab("Online Order")}
            >
              Online Order
            </button>
            <button
              className={`btn m-0 ${activeTab === "Today Order" ? "btn-success" : "btn-primary" }`}
              onClick={() => setActiveTab("Today Order")}
            >
              Today Order
            </button>
          </div>
    
          <div>{renderTab()}</div>
        </div>
      </div>
    </div>
  );
}

export default POSApp;
