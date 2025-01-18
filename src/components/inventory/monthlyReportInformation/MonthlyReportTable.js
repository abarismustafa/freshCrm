import React from "react";

const MonthlyReportTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table">
          <tr>
            <th rowSpan={"2"}>Month</th>
            <th colSpan="3">
              Total Purchase (₹)
            </th>
            <th colSpan="3">
              Total Sales (₹)
            </th>
            <th rowSpan={"2"}>Total Expense (₹)</th>
          </tr>
          <tr>
            <th>Purchase</th>
            <th>Cancel</th>
            <th>Total</th>
            <th>Sales</th>
            <th>Cancel</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <button className="btn btn-success me-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan="8">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyReportTable;
