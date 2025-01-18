import { Link } from "react-router-dom";

function EmpoyeeDesignation(){
  
  return (
    <div className="row m-2 m-lg-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0"><i class="fa-solid fa-house"></i> Employees</h4>
                        <div>
                            <Link className="btn btn-primary btn-sm m-1" to="/adddesignation"  role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-plus"></i> Add Positon</Link>
                            <Link className="btn btn-primary btn-sm m-1"  role="button" aria-controls="offcanvasExample">Manage Position</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EmpoyeeDesignation;