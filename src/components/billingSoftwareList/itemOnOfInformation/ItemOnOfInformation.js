import React from "react";
import ItemOnOfHeader from "./ItemOnOfHeader";
import ItemOnoffTab from "./ItemOnoffTab";

const ItemOnOfInformation = () => {
  return (
    <div className="card m-2">
      <h3 className="bg-black p-2 text-white fs-4">Item on Of</h3>
      <ItemOnOfHeader />
      <ItemOnoffTab />
    </div>
  );
};

export default ItemOnOfInformation;
