import React from "react";

export default function BiographicalInfo(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
                <div className="mt-2">
                    <label className="form-label">Date of Birth <i class="fa-solid fa-star" style={{color: "red", fontSize : "8px"}}></i></label>
                    <input type="data" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Gender <i class="fa-solid fa-star" style={{color: "red", fontSize : "8px"}}></i></label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Marital Status</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Ethnic Group</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">EEO Class</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">SSN</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Work in State</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Live in State</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Citizenship</label>
                    <select className="form-select shadow">
                        <option ></option>
                    </select>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Citizenship</label>
                    <input className="form-control" type="file"/>
                </div>
            </div>
        </div>
    )
}