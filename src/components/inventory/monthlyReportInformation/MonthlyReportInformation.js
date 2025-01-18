import React, { useState } from 'react'
import MonthlyReportForm from './MonthlyReportForm';
import MonthlyReportTable from './MonthlyReportTable';

const MonthlyReportInformation = () => {
    const [data, setData] = useState([])
    return (
        <div className="card m-2">
          <div className="bg-black text-light px-2 d-flex justify-content-between align-items-center p-1">
            <h2 className="fs-4">Monthly Report</h2>
            <button
              type="button"
              className="btn btn-primary"
            >
              <i className="fa-solid fa-file-export me-2"></i> Export
            </button>
          </div>
          <div className="mt-3">
            <MonthlyReportForm />
          </div>
          <div className="mt-3">
            <MonthlyReportTable data={data}/>
          </div>
        </div>
      );
}

export default MonthlyReportInformation