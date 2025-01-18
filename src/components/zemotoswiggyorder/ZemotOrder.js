import React, { useState } from "react";
import OrderZemoto from "./OrderZemoto";
import MenuOrder from "./OrderMenu";

const ZemotoOrder = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // Define the array for table numbers
    const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16];

    return (
        <div className="container mt-4">
            <OrderZemoto show={show} handleClose={handleClose}/>
            <MenuOrder />
            {/* Header Section */}
            <div className="card p-2 col-4 mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <span className="badge bg-danger me-2">Zomato</span>
                    </div>
                    <div>
                        <span>Delivery: Rider Will Come</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span className="d-block">4882339636</span>
                        <div>
                            <span>12:42 PM</span>
                            <span className="ms-4">₹184</span>
                        </div>
                    </div>
                </div>
                <div className="text-start">
                    <p className="text-start p-1">1 x Punjabi Economy Thali</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn-outline-danger me-2">Reject</button>
                    <button className="btn btn-success" onClick={handleShow}>Accept</button>
                </div>
            </div>

            {/* Table View Section */}
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5>Table View</h5>
                    <div>
                        <button className="btn btn-danger me-2">Delivery</button>
                        <button className="btn btn-danger me-2">Pick Up</button>
                        <button className="btn btn-danger">+ Add Table</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-end align-items-center mb-3">
                        <button className="btn btn-outline-secondary me-3">Move KOT / Items</button>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-light text-dark me-2">Blank Table</span>
                            <span className="badge bg-primary text-white me-2">Running Table</span>
                            <span className="badge bg-success text-white me-2">Printed Table</span>
                            <span className="badge bg-warning text-dark me-2">Paid Table</span>
                            <span className="badge bg-danger text-white">Running KOT Table</span>
                        </div>
                    </div>
                    <div className="row g-3">
                        {tableNumbers.map((tableNumber) => (
                            <div className="col-1" key={tableNumber}>
                                <button className="btn py-3 btn-outline-secondary w-100">
                                    {tableNumber}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZemotoOrder;
