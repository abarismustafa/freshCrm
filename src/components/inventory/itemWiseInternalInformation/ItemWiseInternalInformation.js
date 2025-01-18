import React, { useState } from 'react'
import ItemWiseInternalTable from './ItemWiseInternalTable';
import ItemWiseInternalForm from './ItemWiseInternalForm';

const ItemWiseInternalInformation = () => {
    const [data, setData] = useState([])
    return (
      <div className="card m-2">
        <div className="bg-black text-light px-2 d-flex justify-content-between align-items-center p-1">
          <h2 className="fs-4"> Item Wise Internal Transfer Report</h2>
          <button
            type="button"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-file-export me-2"></i> Export
          </button>
        </div>
        <div className="mt-3">
          <ItemWiseInternalForm />
        </div>
        <div className="mt-3">
          <ItemWiseInternalTable data={data}/>
        </div>
      </div>
    );
}

export default ItemWiseInternalInformation