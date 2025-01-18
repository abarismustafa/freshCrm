import React, { useState } from "react";
import b1 from "../../assets/images/b1.png";
import Sidebar from "./Sidebar";
import WaiterModal from "./Waitermodal";
import CalculatorCall from "./calculator";
import AddCustomer from "./AddCustomer";
import OrderItem from "./OrderItem";
import { YourOrder } from "./YourOrder";

function NewOrder() {
  const [orderDetails, setOrderDetails] = useState({
    customerName: "",
    customerType: "Dine In Customer",
    waiter: "",
    table: "",
    cookingTime: "00:00:00",
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCustomerPopup, setShowCustomerPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [calculatorShow, setShowCalculator] = useState(false);
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(false);
  const [myorder , setMyOrder] = useState (false)

  const handleClose = () => setShow(false);
  const handleorderClose = () => setOrder(false);
  const handleShow = () => setShow(true);
  const handleorderShow = () => {setOrder(true); setMyOrder(true); };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleAddItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const [modalShow, setModalShow] = useState(false);
  const modalOpen = () => {
    setModalShow(true);
  };
  const toggleCalculator = () => {
    setShowCalculator((prev) => !prev);
  };

  const menuItems = [
    { id: 1, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 2, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 3, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 4, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 5, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 6, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 7, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
    { id: 8, image: b1, name: "Bangla Set Menu Rice Boarta", price: 15.99 },
  ];

  return (
    <div className="mt-1" style={{ paddingBottom: "150px", position: "relative " }}>
      <AddCustomer show={show} handleClose={handleClose} />
      <OrderItem order={order} handleorderClose={handleorderClose} />
      <div className="row position-relative">
        <div className="col-8">
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products..."
            />
          </div>
          <div className="row mt-3">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <div className="row">
                {menuItems.map((item) => (
                  <div className="col-md-3 col-5 p-1" key={item.id}>
                    <div
                      className="card text-center bg-dark"
                      onClick={handleorderShow}
                      style={{
                        cursor: "pointer",
                        padding: "2px",
                        marginBottom: "10px",
                        height: "180px",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center bg-light"
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        className="card-body p-2"
                        style={{
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <h6 className="card-title m-0">{item.name} (1:2)</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div
            className="card p-3"
            style={{ overflowY: "auto" }}
          >
            <h5>Filter</h5>
            <div className="row">
              <div className="col-12 mb-3 position-relative">
                <label htmlFor="customerName">Customer Name <span className="text-red">*</span></label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="customerName"
                    className="form-control"
                    placeholder="Enter customer name"
                    value={orderDetails.customerName}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-primary ms-2"
                    onClick={handleShow}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="customerType">Customer Type <span className="text-red">*</span></label>
                <div className="input-group">
                  <select
                    id="customerType"
                    className="form-control"
                    value={orderDetails.customerType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Dine In Customer">
                      Dine In Customer
                    </option>
                    <option value="Take Away Customer">
                      Take Away Customer
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 mb-3 position-relative">
                <label htmlFor="waiter">Waiter <span className="text-red">*</span></label>
                <div className="d-flex">
                  <input
                    type="text"
                    id="waiter"
                    className="form-control"
                    placeholder="Enter waiter name"
                    value={orderDetails.waiter}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="table">Table <span className="text-red">*</span></label>
                <div className="input-group">
                  <input
                    type="text"
                    id="table"
                    className="form-control"
                    placeholder="Enter table number"
                    value={orderDetails.table}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12 form-group mb-3">
                <label htmlFor="cookingTime">Cooking Time</label>
                <input
                  type="text"
                  id="cookingTime"
                  className="form-control"
                  placeholder="Enter cooking time"
                  value={orderDetails.cookingTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {myorder && <div className="mt-2">
            <YourOrder />
          </div>}
        </div>
        <div
          className="fixedclasspos"
          style={{
            position: "fixed",
            bottom: 0,
            width: "84%",
            right: 0,
            zIndex: 4,
            backgroundColor: "#fff",
            padding: "10px",
            borderTop: "2px solid #dee2e6",
          }}
        >
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-sm-4">
              <table
                className="table table-bordered footersumtotal mb-0"
                style={{ width: "250px" }}
              >
                <tbody>
                  <tr>
                    <td style={{ height: "35px" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="mb-0">CGT/Tax:</label>
                        <strong>
                          <span>0.00</span>
                        </strong>
                      </div>
                    </td>
                    <td style={{ height: "35px" }} rowSpan="2">
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="mb-0">Grand Total:</label>
                        <span className="badge badge-primary p-2">
                          <strong>0.00</strong>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: "35px" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="mb-0">Service Charge (%):</label>
                        <input
                          type="text"
                          style={{ width: "60px", height: "25px" }}
                          className="form-control text-right"
                          defaultValue="0"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-8 text-right d-flex align-items-center justify-content-end">
              <div
                className="d-flex align-items-center me-3"
                style={{ width: "180px" }}
              ></div>
              <button
                className="btn btn-primary cusbtn mx-1"
                onClick={() => setShowCalculator(true)}
              >
                <i className="fa fa-calculator" aria-hidden="true"></i>
              </button>

              <button className="btn btn-danger cusbtn mx-1">Cancel</button>
              <button className="btn btn-primary cusbtn mx-1">Quick Order</button>
              <button className="btn btn-success cusbtn mx-1">Place Order</button>
            </div>
          </div>
        </div>
        <CalculatorCall
          show={calculatorShow}
          onHide={() => setShowCalculator(false)}
        />

        <WaiterModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default NewOrder;
