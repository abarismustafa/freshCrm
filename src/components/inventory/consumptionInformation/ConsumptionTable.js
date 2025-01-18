import React from 'react'

const ConsumptionTable = ({data}) => {
    return (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table">
              <tr>
                <th rowSpan={"2"}>Row Material</th>
                <th colSpan="3">
                  20 jun 2025
                </th>
                <th rowSpan={"2"}>Totel Consumption Qty</th>
                <th rowSpan={"2"}>Totel Consumption Cost</th>
              </tr>

              <tr>
                <th>Consumption</th>
                <th>Avg Purchase Price</th>
                <th>Consumption Cost</th>
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
                  <td colSpan="20">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
}

export default ConsumptionTable