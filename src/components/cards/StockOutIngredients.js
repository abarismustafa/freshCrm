import React from 'react';

const StockOut = () => {
  const suppliers = [
    { id: 1, ingredients: 'A supplier testing', qnty: 'supplier@gmail.com', },
    { id: 2, ingredients: 'test canada supplier', qnty: 'adam@ikotj.ca', }   // Add more supplier data here
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Dhaka Restaurant
      </h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Ingredients</th>
            <th>Qnty</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={supplier.id}>
              <td>{index + 1}</td>
              <td>{supplier.ingredients}</td>
              <td>{supplier.qnty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockOut;
