import React from 'react'
import TopAddNew from '../../../components/PetPooja/AddNewButton/TopAddNew'
import RawMaterialList from '../../../components/PetPooja/AddNewButton/RawMaterialList'

function AddButton() {
  return (
    <div className=''>
    <div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
          <div className="table-responsive active-projects style-1">
                            <h3 className="tbl-caption text-light">
                                Add Sales  </h3></div>
        
      <TopAddNew/>
    </div>
    <RawMaterialList/>
    </div>
  )
}

export default AddButton
