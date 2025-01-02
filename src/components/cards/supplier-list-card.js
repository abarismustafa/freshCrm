import React from 'react';

const SupplierTable = () => {
  const suppliers = [
    { id: 1, name: 'A supplier testing', email: 'supplier@gmail.com', mobile: '41641414141', address: '3622 dufferin street', balance: 0 },
    { id: 2, name: 'test canada supplier', email: 'adam@ikotj.ca', mobile: '899899098', address: '899898909', balance: 0 },
    { id: 3, name: 'Alhadji Musa', email: 'musa@gmail.com', mobile: '678550319', address: 'Akwa', balance: 124 },
    { id: 4, name: 'Coca Cola', email: 'cocacola@gmail.com', mobile: '71345465', address: 'Karo house', balance: 5000 },
    { id: 5, name: 'vanessa', email: 'as@gmail.com', mobile: '899669559', address: 'kanyosha gisyo', balance: 0 },
    { id: 6, name: 'dsvsd', email: 'afsdaf@gmail.com', mobile: '71838838', address: 'kanyosha gisyo', balance: 0 },
    { id: 7, name: 'hgf', email: 'vanessa@gmail.com', mobile: '71838838', address: 'kanyosha gisyo', balance: 0 },
    // Add more supplier data here
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Supplier List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Supplier Name</th>
            <th>Email Address</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={supplier.id}>
              <td>{index + 1}</td>
              <td>{supplier.name}</td>
              <td>{supplier.email}</td>
              <td>{supplier.mobile}</td>
              <td>{supplier.address}</td>
              <td>{supplier.balance}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierTable;
