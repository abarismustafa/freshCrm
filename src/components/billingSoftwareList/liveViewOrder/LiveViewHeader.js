import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";

// const headerIcon = [
//   { id: 1, icons: <i className="bi bi-grid-fill fs-4"></i>, Title: "All" },
//   {
//     id: 2,
//     icons: <i className="fa-solid fa-utensils fs-4"></i>,
//     Title: "Dine In",
//   },
//   {
//     id: 3,
//     icons: <i className="bi bi-person-circle fs-4"></i>,
//     Title: "Delivery",
//   },
//   { id: 4, icons: <i className="bi bi-bag-fill fs-4"></i>, Title: "Pick Up" },
//   { id: 5, icons: <i className="bi bi-wifi fs-4"></i>, Title: "Online" },
//   {
//     id: 6,
//     icons: <i className="bi bi-house-fill text-danger fs-4"></i>,
//     Title: "Other",
//   },
//   {
//     id: 7,
//     icons: <i className="fa-solid fa-globe fs-4"></i>,
//     Title: "Home Website",
//   },
// ];

const LiveViewHeader = () => {
  // const [activeItem, setActiveItem] = useState(null);
  // function filterClickHandle(id) {
  //   setActiveItem(id);
  // }

  return (
    <>
      {/* Main Header */}
      <div className="border rounded px-3 py-3 bg-white shadow-sm mb-3">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-md-6 col-lg-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center flex-wrap gap-3">
              <div className="d-flex align-items-center gap-3 me-md-5">
                <FaShoppingCart className="text-primary fs-4" />
                <span className="fw-bold text-dark">Order View</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <MdLockPerson className="text-secondary fs-4" />
                <span className="fw-bold text-dark">Kot View</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 col-lg-8">
            <div className="d-flex align-items-center justify-content-end flex-wrap gap-3">
              {/* View Details Toggle */}
              <div className="me-3">
                <div className="form-check form-switch d-flex align-items-center gap-2">
                  <label
                    className="form-check-label m-0 fw-semibold text-dark"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    View Details
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </label>
                </div>
              </div>

              {/* Status Filters */}
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="d-flex align-items-center border rounded bg-light">
                    <div className="border-end">
                      <i className="fa-solid fa-filter p-3 text-secondary"></i>
                    </div>
                    <div className="border-end px-3 py-2">
                      <span className="fw-semibold text-dark">
                        Dispatch{" "}
                        <span
                          className="rounded-circle bg-danger text-white d-inline-flex justify-content-center align-items-center"
                          style={{ width: "25px", height: "25px" }}
                        >
                          1
                        </span>
                      </span>
                    </div>
                    <div className="border-end px-3 py-2">
                      <span className="fw-semibold text-dark">
                        Foodready{" "}
                        <span
                          className="rounded-circle bg-danger text-white d-inline-flex justify-content-center align-items-center"
                          style={{ width: "25px", height: "25px" }}
                        >
                          0
                        </span>
                      </span>
                    </div>
                    <div className="px-3 py-2">
                      <span className="fw-semibold text-dark">
                        Deliver{" "}
                        <span
                          className="rounded-circle bg-danger text-white d-inline-flex justify-content-center align-items-center"
                          style={{ width: "25px", height: "25px" }}
                        >
                          0
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div>
                  <button className="btn btn-outline-primary me-2">
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </button>
                  <button className="btn btn-danger px-4">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveViewHeader;
