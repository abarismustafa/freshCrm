

function AddgrandLoan() {

    return (
        <div className="row m-2 m-lg-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">Grand Loan</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Employee Name <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <select className="form-select shadow">
                                        <option>Online Order</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Permitted By <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <select className="form-select shadow">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">Loan Details</label>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">  Approve Date  <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <input type='date' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Repayment From <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <input type='date' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Amount  <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <input type='number' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Interest Percentage  <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <input type='number' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Installment Period  <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Repayment Total </label>
                                    <input type='number' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label"> Installment</label>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="mt-2">
                                    <label className="form-label">status  <i class="fa-solid fa-star" style={{ color: "red", fontSize: "8px" }}></i></label>
                                    <select className="form-select shadow">
                                        <option>Online Order</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 align-items-end d-flex gap-2">
                                <button className="btn m-0 mt-4 btn-primary">Reset</button>
                                <button className="btn m-0 mt-4 btn-danger">Grant</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddgrandLoan;