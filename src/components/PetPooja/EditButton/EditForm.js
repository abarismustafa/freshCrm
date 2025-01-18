import React from 'react';
import AddFilters from '../AddPurchase/AddFilters';
import AddForms from '../AddPurchase/AddForms';
import RawMaterials from '../AddPurchase/RawMaterails';


function EditForm({ setShow, show }) {

  return (
    <div>
    <div className="card"style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className="table-responsive active-projects style-1">
        <h3 className="tbl-caption text-light">Edit Sale return</h3>
       </div>
       <AddFilters/>
    </div>
    <AddForms/>
    <RawMaterials/>
    </div>
  );
}

export default EditForm;
