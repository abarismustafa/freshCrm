import React from "react";
import TableInformationView from "./TableInformationView";
import DeliveryCalls from "./deliveryCalls/DeliveryCalls";
import TableViewHeader from "./TableViewHeader";

const TableViewList = () => {
  return (
    <div className="card m-2">
      <DeliveryCalls />
      <TableViewHeader />
      <TableInformationView />
    </div>
  );
};

export default TableViewList;
