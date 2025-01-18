import React from "react";

const StockSummaryTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table">
          <tr>
            <th style={{ width: '400px' }}>Category</th>
            <th style={{ width: '200px' }}>Item Name</th>
            <th style={{ width: '200px' }}>Opening Stock (A)</th>
            <th style={{ width: '200px' }}>Purchase / Sales Return (B)</th>
            <th style={{ width: '200px' }}>Excess of Raw Material (C)</th>
            <th style={{ width: '200px' }}>Total Stock (A+B+C)</th>
            <th style={{ width: '200px' }}>Stock Consumed (D)</th>
            <th style={{ width: '200px' }}>Wastage (e)</th>
            <th style={{ width: '200px' }}>Normal Loss (F)</th>
            <th style={{ width: '200px' }}>Sales / Internal Transfer / Purchase Return (G)</th>
            <th style={{ width: '200px' }}>Shortage Of Raw Material (H)</th>
            <th style={{ width: '200px' }}>Effect due to Conversion (I)</th>
            <th style={{ width: '200px' }}>Total Consumed (D+E+F+G+H)</th>
            <th style={{ width: '200px' }}>Net Stock System</th>
            <th style={{ width: '200px' }}>Net Stock Calculate (A+B+C+D+E+F+G+H+I)</th>
            <th style={{ width: '200px' }}>Difference</th>
          </tr>
        </thead>
        <tbody>
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
                {/* Add item details for the body of the table */}
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan="16">No records found</td> {/* Adjust colSpan to match column count */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockSummaryTable;
