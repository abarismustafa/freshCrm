import React from "react";

export default function Custom(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
                <div className="mt-2">
                    <label className="form-label">Custom Field Name</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Custom Field Type</label>
                    <select className="form-select shadow">
                        <option></option>
                    </select>
                </div>
            </div>
            <div className="col-12">
            <div className="mt-2">
                    <label className="form-label">Custom Value</label>
                    <input type="phone" className="form-control"/>
                </div>
            </div>
        </div>
    )
}