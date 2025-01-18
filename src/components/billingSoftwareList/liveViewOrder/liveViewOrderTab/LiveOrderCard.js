import React from "react";

const liveData = [
  {
    id: 1,
    kotNo: 7,
    bill: 330,
    time: "00:51",
    delivery: "COD",
    deliveryDetails: "Self Delivery Order",
    fleetDetails: "Deliver with own fleet",
    price: "1370",
    preparationTime: "16:00",
    btnLabel: "Food Is Ready",
  },
  {
    id: 2,
    kotNo: 2,
    bill: 300,
    time: "05:40",
    delivery: "COD",
    deliveryDetails: "Pickup from store",
    fleetDetails: "Deliver using partner fleet",
    price: "1200",
    preparationTime: "20:00",
    btnLabel: "Order Ready",
  },
];

const LiveOrderCard = () => {
  return (
    <div className="mt-3">
      <h4 className="text-danger">Total Orders: {liveData.length}</h4>
      <div className="row">
        {liveData.map((item) => (
          <div className="col-lg-4 col-md-6 col-12" key={item.id}>
            <div className="card border rounded shadow-sm">
              {/* Card Header */}
              <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="m-0">L&D-DohiniTri...</h6>
                  <small>
                    KOT: {item.kotNo} | BILL: ₹{item.bill}
                  </small>
                </div>
                <div>
                  <span className="badge bg-light text-dark me-2">
                    {item.time}
                  </span>
                  <span className="badge bg-light text-dark">
                    {item.delivery}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <ul className="list-unstyled mb-3">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-truck me-2"></i>
                    <span>{item.deliveryDetails}</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person-check me-2"></i>
                    <span>{item.fleetDetails}</span>
                  </li>
                </ul>
                <button className="btn btn-outline-secondary btn-sm">
                  View Details
                </button>
                <div className="text-end mt-3">
                  <h5 className="m-0">₹{item.price}</h5>
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-footer bg-light d-flex justify-content-between align-items-center">
                <div>
                  <small>Prepare In:</small>
                  <span className="text-danger ms-2 fw-bold">
                    {item.preparationTime}
                  </span>
                </div>
                <button className="btn btn-warning btn-sm">
                  {item.btnLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveOrderCard;
