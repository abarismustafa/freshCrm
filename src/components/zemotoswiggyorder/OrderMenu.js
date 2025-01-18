import React from "react";

const MenuOrder = () => {
  return (
    <div className="card">
    <div className="d-flex justify-content-between align-items-center p-2 bg-light border-bottom">
      {/* Support Call */}
      <div className="d-flex align-items-center">
        <i className="fas fa-phone me-2 text-danger"></i>
        <span>Call For Support</span>
        <span className="ms-2 text-danger fw-bold">9099912483</span>
      </div>

      {/* Icons */}
      <div className="d-flex align-items-center gap-3">
        <i className="fas fa-file-alt text-secondary"></i>
        <i className="fas fa-car text-secondary"></i>
        <i className="fas fa-bell text-secondary"></i>
        <i className="fas fa-user text-secondary"></i>
        <i className="fas fa-clock text-secondary"></i>
        <i className="fas fa-arrow-right text-secondary"></i>
      </div>
    </div>
    </div>
  );
};

export default MenuOrder;
