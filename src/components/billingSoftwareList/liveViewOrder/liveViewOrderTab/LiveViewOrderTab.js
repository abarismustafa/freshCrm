import React, { useState } from "react";
import LiveOrderCard from "./LiveOrderCard";

const headerIcon = [
  {
    id: 1,
    icons: <i className="bi bi-grid-fill fs-4"></i>,
    Title: "All",
    content: <LiveOrderCard />,
  },
  {
    id: 2,
    icons: <i className="fa-solid fa-utensils fs-4"></i>,
    Title: "Dine In",
    content: <div>Dine In Content</div>,
  },
  {
    id: 3,
    icons: <i className="bi bi-person-circle fs-4"></i>,
    Title: "Delivery",
    content: <div>Delivery Content</div>,
  },
  {
    id: 4,
    icons: <i className="bi bi-bag-fill fs-4"></i>,
    Title: "Pick Up",
    content: <div>Pick Up Content</div>,
  },
  {
    id: 5,
    icons: <i className="bi bi-wifi fs-4"></i>,
    Title: "Online",
    content: <div>Online Content</div>,
  },
  {
    id: 6,
    icons: <i className="bi bi-house-fill text-danger fs-4"></i>,
    Title: "Other",
    content: <div>Other Content</div>,
  },
  {
    id: 7,
    icons: <i className="fa-solid fa-globe fs-4"></i>,
    Title: "Home Website",
    content: <div>Home Website Content</div>,
  },
];

const LiveViewOrderTab = () => {
  const [activeItem, setActiveItem] = useState(headerIcon[0].id);

  const filterClickHandle = (id) => {
    setActiveItem(id);
  };

  return (
    <>
      <div className="bg-light p-3 rounded shadow-sm">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Filter Section */}
          <div className="d-flex align-items-center flex-wrap">
            <ul className="d-flex align-items-center gap-4 p-0 m-0 flex-wrap list-unstyled">
              {headerIcon.map((item) => (
                <li
                  key={item.id}
                  className={`d-flex flex-column align-items-center justify-content-center gap-1 mx-1 px-3 py-2 rounded bg-white shadow-sm ${
                    activeItem === item.id
                      ? "border-bottom border-3 border-danger box-sizing-content-box "
                      : ""
                  }`}
                  onClick={() => filterClickHandle(item.id)}
                  style={{
                    height: "70px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <span
                    className={`text-center text-dark ${
                      activeItem === item.id ? "text-danger" : ""
                    }`}
                  >
                    {item.icons}
                  </span>
                  <span
                    style={{ fontSize: "14px", fontWeight: "600" }}
                    className="text-secondary"
                  >
                    {item.Title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Search Section */}
          <div>
            <div className="d-flex align-items-center gap-3">
              <button type="button" className="btn btn-outline-secondary m-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Order no..."
              />
              <button type="button" className="btn btn-danger m-0">
                MFR
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Content Section */}
      <div className="mt-4">
        {headerIcon.find((item) => item.id === activeItem)?.content}
      </div>
    </>
  );
};

export default LiveViewOrderTab;
