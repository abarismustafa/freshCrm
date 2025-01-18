import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AcceptCalls() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card-footer bg-light d-flex align-items-center justify-content-between">
        <button
          type="button"
          className="btn btn-danger m-0 btn-md fw-semibold px-5"
        >
          Rejected
        </button>
        <button
          variant="primary"
          type="button"
          className="btn btn-success m-0 btn-md fw-semibold px-5"
          onClick={handleShow}
        >
          Accept
        </button>
      </div>

      <Modal show={show} onHide={handleClose} style={{ marginTop: "200px" }}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Home Website - PP2152671707215497
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* Minimum Delivery Time */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <span>Minimum Delivery Time (Minutes):</span>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-secondary">-</button>
                <input
                  type="number"
                  className="form-control text-center"
                  style={{ width: "100px" }}
                  defaultValue={0}
                />
                <button className="btn btn-outline-secondary">+</button>
              </div>
            </div>

            {/* Preparation Time */}
            <div className="d-flex align-items-center justify-content-between">
              <span>Preparation Time (Minutes):</span>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-secondary">-</button>
                <input
                  type="number"
                  className="form-control text-center"
                  style={{ width: "100px" }}
                  defaultValue={0}
                />
                <button className="btn btn-outline-secondary">+</button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary">Save</button>
          <button className="btn btn-primary">Save & Print</button>
          <button className="btn btn-primary">Save & EBill</button>
          <button className="btn btn-outline-secondary">KOT</button>
          <button className="btn btn-outline-secondary">KOT & PRINT</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AcceptCalls;
