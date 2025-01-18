import React from "react";

export default function Benefits(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
                <div className="mt-2">
                    <label className="form-label">Benifite Class code</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Benifit Description</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Benifit Accrual Date</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Benifite Status</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
        </div>
    )
}