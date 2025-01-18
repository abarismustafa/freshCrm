import React from "react";
import AcceptCalls from "./AcceptCalls";

const DeliveryCalls = () => {
  return (
    <div className="bg-light">
      <div className="row mb-3">
        <div className="col-lg-4 col-md-6 col-sm-12 bg-white p-0">
          <div className="card border rounded shadow-sm">
            <div className="card-header bg-info text-white">
              <h5 className="">Home Website</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                <span>8435978654239</span>
                <span>4:12 pm</span>
                <span>1370</span>
              </div>
              <ul className="d-flex justify-content-between align-items-center flex-wrap gap-2 list-unstyled m-0 p-0 mt-2">
                <li className="p-0" style={{width: "49%"}}>
                  <span className="bg-light d-block p-2">
                    fgdfgdfglsdf
                  </span>
                </li>
                <li className="p-0" style={{width: "49%"}}>
                  <span className="bg-light d-block p-2">
                    fgdfgdfglsdf
                  </span>
                </li>
                <li className="p-0" style={{width: "49%"}}>
                  <span className="bg-light d-block p-2">
                    fgdfgdfglsdf
                  </span>
                </li>
                <li className="p-0" style={{width: "49%"}}>
                  <span className="bg-light d-block p-2">
                    fgdfgdfglsdf
                  </span>
                </li>
              </ul>
            </div>
            <AcceptCalls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCalls;
