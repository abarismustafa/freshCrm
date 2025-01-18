import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DayEndOverview from "./datasummery";
import CashCalculations from "./cashcalulation";
import FinalizeDayEnd from "./finalizedayend";
const Header = () => {
  const [tab , SetTab] = useState (0)

  const handleTab =(num)=>{
    SetTab(num)
  }
  return(
    <div className="card m-2">
   
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="mb-0">Day End Summary</h4>
      <p className="mb-0 text-center w-100">
        Date: <strong>2024-01-22</strong> | Invoice Range: <strong>7 - 330</strong>
      </p>
      <button className="btn btn-outline-secondary">Back</button>
    </div>

   
    <div className="bg-dark text-white p-3 shadow-sm mb-4">
      <div className="d-flex justify-content-between">
        <Link onClick={()=>handleTab(0)}  className="text-white text-decoration-none">
          Day End Overview
        </Link>
        <span>&gt;</span>
        <Link onClick={()=>handleTab(1)} className="text-white text-decoration-none">
          Cash Calculations
        </Link>
        <span>&gt;</span>
        <Link onClick={()=>handleTab(2)} className="text-white text-decoration-none">
          Finalize Day-End
        </Link>
      </div>
    </div>
    <div>
      <div className={tab === 0 ? "d-block" : "d-none"}>
        <DayEndOverview />
      </div>
      <div className={tab === 1 ? "d-block" : "d-none"}>
        <CashCalculations />
      </div>
      <div className={tab === 2 ? "d-block" : "d-none"}>
        <FinalizeDayEnd />
      </div>
    </div>
  </div>
  )
}

export default Header;
