import React from "react";

const mainHeader = [
  { id: 1, btn: "Dine In Item On/Of" },
  { id: 2, btn: "Auto Accept/MRF" },
  { id: 3, btn: "Addon On/Of" },
  { id: 4, btn: "Store On/Of" },
  { id: 5, btn: "Configuration" },
  { id: 6, btn: "Back" },
];

const ItemOnOfHeader = () => {
  return (
    <div className="border rounded px-3 py-3 bg-white shadow-sm mb-3 ">
      <ul className="d-flex flex-wrap align-items-center justify-content-end m-0 p-0 list-unstyled">
        
        {mainHeader.reverse().map((elem) => (
          <li>
            <button 
              key={elem.id}
              type="button"
              className="btn btn-outline-danger fw-bold btn-md px-5" // Added `me-2` for spacing between buttons
            >
              {elem.btn}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemOnOfHeader;
