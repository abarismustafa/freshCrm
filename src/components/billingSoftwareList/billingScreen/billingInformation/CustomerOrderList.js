import React, { useState } from "react";

const CustomerOrderList = () => {
    const [data, setData] = useState([])
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table">
          <tr>
            <th>ITEMS</th>
            <th>CHECK ITEMS</th>
            <th>QTY.</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody className="">
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td></td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan="5">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrderList;
