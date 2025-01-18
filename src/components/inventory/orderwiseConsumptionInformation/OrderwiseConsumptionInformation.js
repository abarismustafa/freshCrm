import React, { useState } from 'react'
import OrderwiseConsumptionForm from './OrderwiseConsumptionForm';
import OrderwiseConsumptionTable from './OrderwiseConsumptionTable';
import OrderProfitLoss from './OrderProfitLoss';

const OrderwiseConsumptionInformation = () => {
    const [data, setData] = useState([])
    return (
      <div className="card m-2">
        <div className="bg-black text-light px-2 d-flex justify-content-between align-items-center p-1">
          <h2 className="fs-4">Orderwise Consumption Report </h2>
          <button
            type="button"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-file-export me-2"></i> Export
          </button>
        </div>
        <div className="mt-3">
          <OrderwiseConsumptionForm />
        </div>
        <div className='mt-3'>
          <OrderProfitLoss />
        </div>
        <div className="mt-3">
          <OrderwiseConsumptionTable data={data}/>
        </div>
      </div>
    );
}

export default OrderwiseConsumptionInformation