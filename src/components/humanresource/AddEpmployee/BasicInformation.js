import React from "react";

export default function BasicInformation(){
    return(
        <div className="mt-2 row">
            <div className="col-3">
                <div className="mt-2">
                    <label className="form-label">first Name </label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">Email Address </label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">Phone </label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">Countary</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">State</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">City</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="col-3">
            <div className="mt-2">
                    <label className="form-label">Zip Code</label>
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <h4 className="heading text-black fs-4 mt-2 mb-0 col-12">Login Info</h4>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">User Login Email</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"/>
                </div>
            </div>
        </div>
    )
}