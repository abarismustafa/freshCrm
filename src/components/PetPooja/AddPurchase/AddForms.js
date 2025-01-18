import React from 'react'

function AddForms() {
  return (
    <div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <h5 className='border-bottom'>Invoice Details</h5>
      <form className='row'>
      <div className='col-lg-3 col-md-6 col-12'>
                            <label for="end" class="form-label mb-0">Invoice Date</label>
                            <input type="date" id="date" class="form-control" placeholder='' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <label for="no" class="form-label mb-0">Invoice Number</label>
                            <input type="text" id="date" class="form-control" placeholder='' />
                        </div>  <div className='col-lg-3 col-md-6 col-12'>
                            <label for="no" class="form-label mb-0">GST Number</label>
                            <input type="text" id="date" class="form-control" placeholder='' />
                        </div>
                        <h5 className='border-bottom'>Payment</h5>
                        <div className="col-lg-3 col-md-6 col-12">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"

                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Paid
                    </label>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"

                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        UnPaid
                    </label>
                </div>
      </form>
    </div>
  )
}

export default AddForms
