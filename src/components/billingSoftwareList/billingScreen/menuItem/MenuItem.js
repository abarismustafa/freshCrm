import React, { useState } from "react";
import ChooseItem from "./ChooseItem";
import FavouriteItem from "./FavouriteItem";

const items = [
  { name: "Apple Pie", borderColor: "border-warning" },
  { name: "Cheesecake", borderColor: "border-success" },
  { name: "Choco Cake", borderColor: "border-success" },
  { name: "Cupcakes (3)", borderColor: "border-success" },
  { name: "Waffles", borderColor: "border-warning" },
];

const MenuItem = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)

  const handleClose = () => setShow(false);

  function handleShow(OrderItem) {
    setSelectedItem(OrderItem)
    setShow(true);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-12 mt-3">
          <input
            type="text"
            placeholder="Search Item"
            className="form-control w-full"
          />
        </div>
        <div className="col-md-6 col-12 mt-3">
          <input
            type="text"
            placeholder="Short Code"
            className="form-control"
          />
        </div>
      </div>
      <div className="mt-3">
      <FavouriteItem />
      </div>
        <div className="d-flex flex-wrap gap-3 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white"
            style={{ width: "150px", cursor: "pointer" }}
            onClick={() => handleShow(item.name)}
          >
            <div className={`border-start ${item.borderColor} border-5 `}>
              <div className="d-flex align-items-center p-2 py-4">
                <p className="mb-0 fw-semibold text-black">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ChooseItem show={show} handleClose={handleClose} selectedItem={selectedItem} />
    </>
  );
};

export default MenuItem;
