import React from 'react'

const SupplierReportTable = ({data}) => {
    return (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table">
              <tr>
                <th>Supplier</th>
                <th>Totel Purchase</th>
                <th>Remaining Amount</th>
                <th>Totel Paid</th>
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
                  <td colSpan="4">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
}

export default SupplierReportTable