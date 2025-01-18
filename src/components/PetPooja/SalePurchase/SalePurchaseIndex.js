import React  from 'react'
import { Link } from 'react-router-dom'
import SalesFilter from './SalesFilter'
import SalesReturnListing from './SalesReturnListing'


function SalePurchaseIndex() {
  
  return (
    <div>
       <div>
       <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
                <div className="table-responsive active-projects style-1">
                    <h3 className="tbl-caption text-light">
                   Sales Return
                        <Link
                                className="btn btn-primary btn-sm"
                               to="/add-button"
                                role="button"
                                aria-controls="offcanvasExample"
                                aria-label="Print"
                                  >
                               + Add Sale Return
                              </Link>
                             
                       </h3></div>
                 <SalesFilter/>
                     
                        </div>
    </div>
  <SalesReturnListing/>
    </div>
  )
}

export default SalePurchaseIndex
