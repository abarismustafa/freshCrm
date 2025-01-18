import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import PaymentFormsFillter from '../PaymentMode/PaymentFormsFillter';
import { Button } from 'react-bootstrap';
import SalesHeader from '../SalePurchase/SalesHeader';

function ListingForSales() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
    
      <div className="table-responsive active-projects style-1">
        <h3 className="tbl-caption text-light">Sales  List</h3>
        <SalesHeader />
        
        <div className="container mt-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>From</th>
                  <th>Invoice Date</th>
                  <th>Invoice Number</th>
                  <th>Credit Note No.</th>
                  <th>Payment</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>apple</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div>
                      {/* Updated the Link component with 'to' attribute */}
                      <Link to="" className='btn btn-primary shadow btn-xs sharp me-1'>
                        <i className="fa fa-pencil"></i>
                      </Link>
                      <Link to="#" className='btn btn-primary shadow btn-xs sharp me-1'>
                        <i className="fa-regular fa-file-pdf"></i>
                      </Link>
                      <Button className='btn btn-primary shadow btn-xs sharp me-1'>
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
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Conditionally render PaymentFormsFillter if show is true */}
      <PaymentFormsFillter show={show} handleClose={handleClose} />
    </div>
  );
}

export default ListingForSales;
