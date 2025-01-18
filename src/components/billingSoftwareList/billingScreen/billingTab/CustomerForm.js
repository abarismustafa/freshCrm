import React from 'react'

const CustomerForm = () => {
  return (
    <div className="row g-3">

    <div className="col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Mobile
      </label>
      <input type="number" placeholder="number" className="form-control" />
    </div>

    <div className="col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Name
      </label>
      <input type="text" placeholder="Name" className="form-control" />
    </div>

    <div className="col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Address
      </label>
      <input type="text" placeholder="Address" className="form-control" />
    </div>

    <div className="col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Locality
      </label>
      <input type="text" placeholder="Locality" className="form-control" />
    </div>

    <div className="col-md-6 col-sm-12">
      <label htmlFor="employee" className="form-label">
        Extra Information
      </label>
      <input type="text" placeholder="Extra Information" className="form-control" />
    </div>

  </div>
  )
}

export default CustomerForm