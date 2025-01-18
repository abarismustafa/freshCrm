import React from "react";

export default function PositionInfo(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
                <div className="mt-2">
                    <label className="form-label">Division </label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Designation </label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Duty Type</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Hire Date  </label>
                    <input type="date" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Original Hire Date </label>
                    <input type="date" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Termination Date</label>
                    <input type="date" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Termination Reason</label>
                    <textarea className="form-control" style={{height: "24px"}}/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Voluntary Termination</label>
                    <select className="form-select shadow">
                        <option ></option>
                        <option >Yes</option>
                        <option >No</option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Rate Type </label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Rate </label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Pay Frequency </label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Hourly rate2</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Hourly rate3</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Home Department</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Department Text</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
        </div>
    )
}