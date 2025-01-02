import { Popconfirm } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PurchaseCard = () => {
  const data = [
    { id: 1, receiver: "John Maria", subject: "please report", message: "where is your favourite food?", date: "13 Feb 2021 08:11:31 am", status: "seen" },
    { id: 2, receiver: "asd asd", subject: "fg", message: "fefefé", date: "28 Jan 2021 10:38:05 am", status: "not seen" },
    // Add more rows here...
  ];

  // Define handleDelete function if needed
  const handleDelete = (id) => {
    console.log("Deleted block with id:", id);
    // Add your delete logic here
  };

  return (
    <div className="row my-2 mx-4">
      <div className="col-xl-12">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Invoice No</th>
              <th>Supplier Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.invoiceNo}</td>
                <td>{row.supplierName}</td>
                <td>{row.date}</td>
                <td>{row.price}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      to={`/newvblock/${row.id}`}  // Use row.id instead of item._id
                      className="btn btn-primary shadow btn-xs sharp me-1"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                    <Popconfirm
                      title="Delete Block!"
                      description="Are you sure to delete?"
                      onConfirm={() => handleDelete(row.id)}  // Use row.id instead of item._id
                      onCancel={() => console.log('Delete canceled')}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="btn btn-danger shadow btn-xs sharp">
                        <i className="fa fa-trash" />
                      </button>
                    </Popconfirm>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseCard;
