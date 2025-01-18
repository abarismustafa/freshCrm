import { Link } from "react-router-dom";

function EmpoyeePay(){
  
  return (
    <div className="row m-2 m-lg-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0"><i class="fa-solid fa-house"></i> Manage Employees</h4>
                        <div className="d-flex gap-1">
                            <div><input className="form-control" style={{height : "30px"}} placeholder="Search"/></div>
                            <Link className="btn btn-primary btn-sm m-1"  role="button" aria-controls="offcanvasExample">Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EmpoyeePay;