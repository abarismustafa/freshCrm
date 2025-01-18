import React from 'react'

const MonthlyReportForm = () => {
  return (
    <div className="row g-3">
    <div className="col-md-6 col-sm-12">
    <label htmlFor="downline" className="form-label">
          Year
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
    </div>

    <div className="col-md-6 col-sm-12">
    <label htmlFor="downline" className="form-label">
          Months
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
    </div>

    <div className="text-center">
      <button type="button" className="btn btn-primary ">
        Search
      </button>
    </div>
  </div>
  )
}

export default MonthlyReportForm