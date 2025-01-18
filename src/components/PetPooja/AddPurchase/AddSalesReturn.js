import React from 'react'
import AddFilters from './AddFilters'
import AddForms from './AddForms'
import RawMaterials from './RawMaterails'

function AddSalesReturn() {
  return (
    <div>
     < div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
          <div className="table-responsive active-projects style-1">
                    <h3 className="tbl-caption text-light">
               Add Sales Return
              </h3> </div>
              <AddFilters/>
              </div>
              <AddForms/>
              <RawMaterials/>
    </div>
  )
}

export default AddSalesReturn
