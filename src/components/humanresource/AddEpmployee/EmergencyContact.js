import React from "react";

export default function EmergencyContact(){
    return(
        <div className="mt-2 row">
        <div className="col-6">
            <div className="mt-2">
                <label className="form-label">Emergency Contact</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Emergency Home Phone</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Emergency Work Phone</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Emergency Contact Relation</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Alter Emergency Contact</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Alt Emergency Home Phone</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
        <div className="col-6">
        <div className="mt-2">
                <label className="form-label">Alt Emergency Work Phone</label>
                <input type="number" className="form-control"/>
            </div>
        </div>
    </div>
    )
}