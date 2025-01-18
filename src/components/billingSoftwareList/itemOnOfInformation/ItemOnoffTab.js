import React, { useState } from 'react'
import RecentItems from './recentItems/RecentItems';

const itemTab = [
    {
      id: 1,
      icons: <i className="fa-solid fa-recycle fs-4"></i>,
      Title: "Recent",
      content: <RecentItems />,
    },
    {
      id: 2,
      icons: <i className="bi bi-grid-fill fs-4"></i>,
      Title: "All",
      content: <div>All Items Content</div>,
    },
    {
      id: 3,
      icons: <i className="fa-solid fa-globe fs-4"></i>,
      Title: "WhiteTabel",
      content: <div>WhiteTabel Content</div>,
    },
  ];

const ItemOnoffTab = () => {
    const [itemActive, setItemActive] = useState(1);

    function tabClickHandle(id) {
      setItemActive(id);
    }
  
    return (
      <>
        <div className="bg-light shadow-sm rounded">
          <div className="d-flex align-items-center flex-wrap px-3 py-2">
            <ul className="d-flex align-items-center gap-4 p-0 m-0 flex-wrap list-unstyled">
              {itemTab.map((item) => (
                <li
                  key={item.id}
                  className={`d-flex flex-column align-items-center justify-content-center gap-1 mx-1 px-3 py-2 rounded bg-white shadow-sm ${
                    itemActive === item.id
                      ? "border-bottom border-3 border-danger box-sizing-content-box"
                      : ""
                  }`}
                  onClick={() => tabClickHandle(item.id)}
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
                    className={`text-center ${
                      itemActive === item.id ? "text-danger" : "text-dark"
                    }`}
                  >
                    {item.icons}
                  </span>
                  <span
                    style={{ fontSize: "14px", fontWeight: "600" }}
                    className={`text-secondary`}
                  >
                    {item.Title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border p-3 mt-3">
          {itemTab.find((item) => item.id === itemActive)?.content}
        </div>
      </>
    );
}

export default ItemOnoffTab