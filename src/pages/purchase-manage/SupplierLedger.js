import React from 'react';
import { BiSolidFileJson } from 'react-icons/bi';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SupplierToDate from '../../components/cards/SupplierToDate';
import PurchaseCard from '../../components/cards/purchse-item-card';

function SupplierLedger () {

    return (
        <div className='card' style={{marginTop:"10px", marginLeft: "4px", marginRight: "4px"}} >
            <div className='table-responsive active-projects style-1'>
                <h3 className='tbl-caption text-light' >
                Supplier List


            <div>
            <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
          <FaFilePdf /> PDF
        </Link>
        <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
          <BiSolidFileJson /> JSON
        </Link>
        <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
          <FaFileExcel /> Excel
        </Link>
            </div>
                </h3>
                </div> 
                <SupplierToDate/>
                <PurchaseCard/>
        </div>
    );
}

export default SupplierLedger ; 