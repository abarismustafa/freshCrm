import React from "react";

export default function Supervisor(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Supervisor Name</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Is Supervisor</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Supervisor Report</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            
        </div>
    )
}