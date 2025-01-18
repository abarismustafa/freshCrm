import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ChooseItem({ show, handleClose, selectedItem }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">{selectedItem}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5 className="fs-5">Variation</h5>
            <div className="d-flex align-items-center fles-wrap">
              <button
                type="button"
                className="btn btn-danger d-flex flex-col align-items-center px-4 text-white"
              >
                <span className="fw-semibold">Oll</span>
                <span className="fw-semibold">₹ 300</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary d-flex flex-col align-items-center px-4 text-white"
              >
                <span className="fw-semibold">Butter</span>
                <span className="fw-semibold">₹ 400</span>
              </button>
            </div>

            <div className="mt-3">
              <label htmlFor="employee" className="form-label">
                addon Item
              </label>
              <input
                type="text"
                placeholder="addon Item"
                className="form-control"
              />
            </div>

            <div className="mt-3 ">
              <h5 className="fs-5">Sides</h5>
              <div className="d-flex gap-4 align-items-center flex-wrap">
                <div
                  className={`border-start border-success border-5 bg-light`}
                  style={{ width: "150px" }}
                >
                  <div className="d-flex align-items-center r p-2 py-3 flex-col">
                    <p className="mb-0 fw-semibold text-black">Oninons</p>
                    <span className="fw-bold">₹ 25</span>
                  </div>
                </div>
                <div
                  className={`border-start border-success border-5 bg-light`}
                  style={{ width: "150px" }}
                >
                  <div className="d-flex align-items-center r p-2 py-3 flex-col">
                    <p className="mb-0 fw-semibold text-black">Oninons</p>
                    <span className="fw-bold">₹ 25</span>
                  </div>
                </div>
                <div
                  className={`border-start border-success border-5 bg-light`}
                  style={{ width: "150px" }}
                >
                  <div className="d-flex align-items-center r p-2 py-3 flex-col">
                    <p className="mb-0 fw-semibold text-black">Oninons</p>
                    <span className="fw-bold">₹ 25</span>
                  </div>
                </div>
                <div
                  className={`border-start border-success border-5 bg-light`}
                  style={{ width: "150px" }}
                >
                  <div className="d-flex align-items-center r p-2 py-3 flex-col">
                    <p className="mb-0 fw-semibold text-black">Oninons</p>
                    <span className="fw-bold">₹ 25</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <span className="fw-bold text-black">₹ 300,00</span>
          <button
            variant="secondary"
            className="btn btn-danger px-5"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button variant="primary" className="btn btn-primary px-5">
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChooseItem;
