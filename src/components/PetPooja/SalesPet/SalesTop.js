import React from 'react'
import { Link } from 'react-router-dom'
import FilterSales from './FilterSales'
import ListingForSales from './ListingForSales'

function SalesTop() {
    return (

        <div>
            <div className="card" style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
                <div className="table-responsive active-projects style-1">
                    <h3 className="tbl-caption text-light">
                        Sales
                        <Link
                            className="btn btn-primary btn-sm"
                            to="/add-new"
                            role="button"
                            aria-controls="offcanvasExample"
                            aria-label="Print"
                        >
                            + Add Sale
                        </Link>

                    </h3></div>
<FilterSales/>
            </div>
            <ListingForSales/>
        </div>


    )
}

export default SalesTop
