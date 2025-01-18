import React, { useState } from "react";

let table = [
  { id: 1, name: "Sprite" },
  { id: 2, name: "Tea" },
  { id: 3, name: "Watermelon Juice" },
];

let sideRadio = [
  { id: 1, lable: "2 Hours" },
  { id: 2, lable: "4 Hours" },
  { id: 3, lable: "8 Hours" },
  { id: 4, lable: "24 Hours" },
  { id: 5, lable: "Next Business Day" },
  { id: 6, lable: "Custom" },
];

const ItemTable = () => {
  const [showOffSidebar, setShowOffSidebar] = useState(false);

  const toggleOffSidebar = () => {
    setShowOffSidebar(!showOffSidebar);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Status</th>
              <th>Name</th>
              <th>Mark as</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>
                  <span
                    className="p-2 rounded-circle bg-success d-inline-block"
                    style={{ width: "16px", height: "16px" }}
                  ></span>
                </td>
                <td>
                  <span>{item.name}</span> <i className="fa-regular fa-eye"></i>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm m-0"
                      onClick={toggleOffSidebar}
                    >
                      Off
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm m-0"
                    >
                      On
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sidebar*/}
      {showOffSidebar && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1049,
            }}
            onClick={toggleOffSidebar} // Clicking on the overlay closes the sidebar
          ></div>
          <div
            className="position-fixed top-0 end-0 bg-light border-start p-3"
            style={{
              width: "400px",
              height: "100vh",
              zIndex: 1050,
              transform: showOffSidebar ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="d-flex justify-content-between align-items-center border-bottom">
              <h4>Mutton Korma</h4>
              <button
                className="btn btn-danger mb-3 btn-sm"
                onClick={toggleOffSidebar}
              >
                Close
              </button>
            </div>
            <div className="">
              <span className="text-primary">Note :</span>
              <p className="text-primary">
                Below are the paramoters to mark item off only
              </p>
            </div>

            <ul className="list-unstyled d-flex justify-content-between flex-wrap m-0 p-0">
              {sideRadio.map((item) => (
                <li key={item.id} className="py-2 px-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {item.lable}
                    </label>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="position-absolute end-0 start-0" style={{bottom: "10%"}}>
             <div className="border-top pt-3 d-flex align-items-center gap-3 px-3">
              <button
                type="button"
                className="btn btn-primary px-5 m-0 fw-bold"
              >
                Save Changes
              </button>
              <button type="button" className="btn btn-danger px-5 m-0 fw-bold">
                Cancel
              </button>
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default ItemTable;
