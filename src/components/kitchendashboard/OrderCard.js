import React from "react";

export default function OrderCard() {
    return (
        <div className="mt-2">
            <div className="container mt-5">
                <div className="card p-0">
                    <div className="card-header bg-danger text-white">
                        <div className="d-flex aling-items-center justify-content-between">
                            <div>
                                <span className="d-block">Table:</span>
                                <span className="d-block">Token: 13</span>
                                <span className="d-block">Customer name: Walkin</span>
                            </div>
                            <div>
                                <span className="d-block">Order: #25</span></div>
                        </div>

                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Cooking Time:</h5>
                        <div className="d-flex align-items-center mb-3">
                            <input type="checkbox" className="form-check-input me-2" />
                            <div className="flex-grow-1">
                                <span>Shwarma</span>
                                <span className="ms-2 d-block text-muted">1:1</span>
                            </div>
                            <span>1X</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                    <div className="d-flex gap-2 align-items-center">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label m-0">All</label>
                        </div>
                        <div className="d-flex gap-2">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
