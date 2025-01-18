import React, { useState } from "react";
import { FaTrashAlt, FaFileInvoiceDollar, FaEdit } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import AddComplete from "./AddComplete";

function OnGoingOrder() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow (true) };
  const orders = [
    {
      table: "Table-3",
      orderNumber: "0681",
      waiter: "Online Order",
      time: "01:07:22",
    },
    {
      table: "Table-2D",
      orderNumber: "0680",
      waiter: "Pravin Meshram",
      time: "01:19:07",
    },
  ];

  return (
    <div className="mt-2">
      <AddComplete  show={show} handleClose={handleClose}/>
      <div className="mb-3">
        <div className="row">
          <div className="col-3">
            <select className="form-select shadow">
              <opto>All</opto>
              <opto></opto>
            </select>
          </div>
          <div className="col-3">
            <select className="form-select shadow">
              <opto>All</opto>
              <opto></opto>
            </select>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-success">Merge Order</button>
          </div>
        </div>
      </div>

      <div className="row gap-2">
        {orders.map((order, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card p-0 overflow-hidden">
              <div className="card-body bg-light">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">{order.table}</h5>
                  <div className="d-flex align-items-center">
                    <FaEdit
                      className="text-warning me-2"
                      style={{ cursor: "pointer" }}
                    />
                    <input type="checkbox" className="form-check-input" />
                  </div>
                </div>
                <p className="text-start">Order Number: {order.orderNumber}</p>
                <p className="text-start">Waiter: {order.waiter}</p>
                <p className="text-start">Before Time: {order.time}</p>
                <div className="d-flex mt-1 gap-1">
                  <button className="btn m-0 btn-success btn-sm" onClick={handleShow}>Complete</button>
                  <button className="btn m-0 btn-primary btn-sm">Split</button>
                  <button className="btn m-0 btn-danger btn-sm">
                    <FaTrashAlt />
                  </button>
                  <button className="btn m-0 btn-secondary btn-sm">
                    <FaFileInvoiceDollar onClick={handleShow}/>
                  </button>
                  <button className="btn m-0 btn-info btn-sm">
                    <FaFileInvoiceDollar />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnGoingOrder;
