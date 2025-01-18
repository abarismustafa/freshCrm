

function AddDesignation(){

  return (
    <div className="row m-2 m-lg-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Create Postion</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Position <i class="fa-solid fa-star" style={{color: "red", fontSize : "8px"}}></i></label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mt-2">
                                <label className="form-label">Details <i class="fa-solid fa-star" style={{color: "red", fontSize : "8px"}}></i></label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 align-items-end d-flex gap-2">
                            <button className="btn m-0 mt-4 btn-primary">Save</button>
                            <button className="btn m-0 mt-4 btn-danger">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AddDesignation;