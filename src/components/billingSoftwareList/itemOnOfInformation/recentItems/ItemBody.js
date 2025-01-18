import React, { useState } from "react";
import ItemTable from "./ItemTable";


// Sidebar items array
const sidetab = [
  { id: 1, title: "Beverages" },
  { id: 2, title: "Main Course" },
  { id: 3, title: "Western Desserts" },
];

const colorSample = [
  {color: "danger", lable:"Off"},
  {color: "primary", lable:"Partial Changes"},
  {color: "success", lable:"On"},
  {color: "warning", lable:"Unschoduiod"},
  {color: "info", lable:"Queued"},
]

const ItemBody = () => {
  const [selectedElem, setSelectedElem] = useState("Beverages");

  // Handle click for sidebar items
  const handleClick = (title) => {
    setSelectedElem(title);
  };

  return (
    <div className="row mt-3">
      {/* Sidebar */}
      <div className="col-3">
        <ul className="list-unstyled border p-2">
          {sidetab.map((item) => (
            <li
              key={item.id}
              className={`py-2 px-3 ${
                selectedElem === item.title
                  ? "text-danger border-start border-3 border-danger bg-light"
                  : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.title)}
            >
              <span className="fw-semibold">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="col-9">
        <div className="border p-2">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between">
            <h4>{selectedElem}</h4>
            <ul className="d-flex align-items-center gap-3 style-listed">
              {
                colorSample.map((item) => (
                  <li key={item.color} className="d-flex align-items-center gap-1">
                      <span className={`bg-${item.color} p-2 rounded-circle d-inline-block `}></span>
                      <span className="fw-semibold">{item.lable}</span>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Item Table */}
          <div className="mt-3">
              <ItemTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBody;
