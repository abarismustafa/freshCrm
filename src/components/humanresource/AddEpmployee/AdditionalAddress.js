import React from "react";

export default function AdditionalAddress(){
    return(
        <div className="mt-2 row">
            <div className="col-6">
                <div className="mt-2">
                    <label className="form-label">Home Email</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Business Email</label>
                    <input type="email" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Home Phone</label>
                    <input type="phone" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Business Phone</label>
                    <input type="phone" className="form-control"/>
                </div>
            </div>
            <div className="col-6">
            <div className="mt-2">
                    <label className="form-label">Cell Phone</label>
                    <input type="phone" className="form-control"/>
                </div>
            </div>
        </div>
    )
}