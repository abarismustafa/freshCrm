import React from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { matchColor } from "./restaurantData";

const TableViewHeader = () => {
  return (
    <>
    {/* Main TableViwa Header */}
      <div className="bg-black d-flex justify-content-between align-items-center">
        <h2 className="fs-4 text-light p-2">Table View</h2>
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="btn btn-primary m-0 fw-semibold px-4">
            <LuRefreshCcw size={"20"} className="text-light" />
          </button>
          <button type="button" className="btn btn-primary m-0 fw-semibold px-4">
            Delivery
          </button>
          <button type="button" className="btn btn-primary m-0 fw-semibold px-4">
            Pick Up
          </button>
          <button type="button" className="btn btn-primary m-0 fw-semibold px-4 me-3">
            + Add Table
          </button>
        </div>
      </div>

    {/* Secondary TableView Header  */}
      <div className="d-flex align-items-center justify-content-between p-2 flex-wrap bg-light">
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-danger me-2 m-0 fw-semibold">
            + Contactless
          </button>
          <button className="btn btn-outline-danger me-2 m-0 fw-semibold">
            <i className="bi bi-exclamation-circle"></i> Reconnect Bridge
            Service
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary ms-auto me-2 fw-semibold">
            Move KOT / Items
          </button>

          <ul className="d-flex align-items-center flex-wrap gap-3 style-listed m-0 p-0">
            {matchColor.map((item) => (
              <li key={item.color} className="d-flex align-items-center gap-1">
                <span
                  className={`bg-${item.color} p-2 rounded-circle d-inline-block `}
                ></span>
                <span className="fw-semibold">{item.lable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TableViewHeader;
