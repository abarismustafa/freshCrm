import React from "react";
import { tableData } from "./restaurantData";
import { useNavigate } from "react-router-dom";

const TableInformationView = () => {
  const navigate = useNavigate();

  const handleTableClick = (tableNumber) => {
    navigate(`/billing/${tableNumber}`);
  };

  return (
    <>
      {tableData.map((section, index) => (
        <div key={index} className="my-4">
          <h4 className="text-danger fs-6">{section.section}</h4>
          <div className="d-flex flex-wrap gap-4 ms-3">
            {section.tables.map((table) => (
              <div
                key={table.tableNumber}
                onClick={() =>
                  handleTableClick(table.tableNumber, table.section)
                }
                className={`bg-light d-flex justify-content-center align-items-center cursor-pointer position-relative`}
                style={{
                  width: "80px",
                  height: "70px",
                  cursor: "pointer",
                  border: "2px dashed #cccc",
                  borderRadius: "5px",
                }}
              >
                <>
                  <div>
                    <p className="mb-0 fw-semibold">{table.tableNumber}</p>
                  </div>
                  <div className="position-absolute d-flex align-items-center gap-2 top-100 start-50 translate-middle z-3">
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-0 px-1 m-0"
                    >
                      <i className="fa-solid fa-print"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary p-0 px-1 m-0"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TableInformationView;
