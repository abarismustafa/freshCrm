import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DemoTableMRN = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = [
    {
      to: "Ahmedabad-Central kitchen-Demo [Kitchen]",
      date: "20 Jun 2023",
      requestNumber: "PO004678846",
      total: "0.00",
      payment: "0.00",
      createdBy: "Demo",
      createdOn: "20-Jun-2023 17:53:02",
      status: "Saved",
    },
    {
      to: "Ahmedabad-Central kitchen-Demo [Kitchen]",
      date: "20 Jun 2023",
      requestNumber: "PO004678846",
      total: "0.00",
      payment: "0.00",
      createdBy: "Demo",
      createdOn: "20-Jun-2023 17:53:02",
      status: "Saved",
    },
    {
      to: "Ahmedabad-Central kitchen-Demo [Kitchen]",
      date: "20 Jun 2023",
      requestNumber: "PO004678846",
      total: "0.00",
      payment: "0.00",
      createdBy: "Demo",
      createdOn: "20-Jun-2023 17:53:02",
      status: "Saved",
    },
    {
      to: "Ahmedabad-Central kitchen-Demo [Kitchen]",
      date: "20 Jun 2023",
      requestNumber: "PO004678846",
      total: "0.00",
      payment: "0.00",
      createdBy: "Demo",
      createdOn: "20-Jun-2023 17:41:57",
      status: "Saved",
    },
  ];

  return (
    <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>To</th>
            <th>Date</th>
            <th>Request Number</th>
            <th>Total (₹)</th>
            <th>Payment</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.to}</td>
              <td>{row.date}</td>
              <td>{row.requestNumber}</td>
              <td>{row.total}</td>
              <td>{row.payment}</td>
              <td>
                {row.createdBy} <br />
                <small>Created: {row.createdOn}</small>
              </td>
              <td>
                <span className="badge bg-success">{row.status}</span>
              </td>
              <td>
                    <div>
                      {/* Updated the Link component with 'to' attribute */}
                      <Link to="/edit-button" className='btn btn-primary shadow btn-xs sharp me-1'>
                        <i className="fa fa-pencil"></i>
                      </Link>
                      <Link to="#" className='btn btn-primary shadow btn-xs sharp me-1'>
                        <i className="fa-regular fa-file-pdf"></i>
                      </Link>
                      <Button className='btn btn-primary shadow btn-xs sharp me-1'onClick={handleShow   }>
                        <i className="fa-solid fa-money-bill"></i>
                      </Button>
                      <Link className='btn btn-primary shadow btn-xs sharp me-1' >
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                      <Link to="#" className='btn btn-primary shadow btn-xs sharp me-1'>
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                        <i className="fa fa-trash"></i>
                      </Link>
                    </div>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DemoTableMRN;
