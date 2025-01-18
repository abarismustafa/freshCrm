import React from 'react'

function SalesFilter() {
  return (
    <div>
   <form className='row'>
   <div className='col-lg-3 col-md-6 col-12'>
                            <label for="start" class="form-label mb-0">Start Date</label>
                            <input type="date" id="date" class="form-control" placeholder='' />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <label for="end" class="form-label mb-0">End Date</label>
                            <input type="date" id="date" class="form-control" placeholder='' />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                         <label for="exampleFormControlInput1" class="form-label">From: </label>
                            <select className='form-control'>
                                <option className='' value="--all--">--All--</option>
                                <option className='' value="">All</option>
                                <option className='' value="">Supplier</option>
                            </select>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <label for="end" class="form-label mb-0">Invoice</label>
                            <input type="text" id="date" class="form-control" placeholder='' />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                         <label for="exampleFormControlInput1" class="form-label">Payment: </label>
                            <select className='form-control'>
                                <option className='' value="--all--">--All--</option>
                                <option className='' value="">Paid</option>
                                <option className='' value="">Unpaid</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                         <label for="exampleFormControlInput1" class="form-label">Status: </label>
                            <select className='form-control'>
                                <option className='' value="--all--">--All--</option>
                                <option className='' value="">All</option>
                                <option className='' value="">Save</option>
                            </select>
                        </div>
                        
                        <div className='mt-2 text-center'>
      <button type="button" class="btn btn-success">Search</button>
     </div>
    </form>   
    </div>
  )
}

export default SalesFilter
