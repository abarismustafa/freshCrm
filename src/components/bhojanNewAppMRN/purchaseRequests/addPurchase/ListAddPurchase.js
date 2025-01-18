import React, { useState } from "react";

function RawMaterialDetails() {
  const [materials, setMaterials] = useState([
    { name: "Beetroot", stockQty: 10, quantity: 2, unit: "Kg", description: "" },
    { name: "Cabbage", stockQty: 10, quantity: 5, unit: "Kg", description: "" },
    { name: "Capsicum", stockQty: 10, quantity: "", unit: "Kg", description: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };

  return (
    <div className="container mt-4">
      <h4>Raw Material Details</h4>
      <form>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name *</th>
                <th>Quantity *</th>
                <th>Unit *</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material, index) => (
                <tr key={index}>
                  <td>
                    <select
                      className="form-select"
                      value={material.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                    >
                      <option value="Beetroot">Beetroot</option>
                      <option value="Cabbage">Cabbage</option>
                      <option value="Capsicum">Capsicum</option>
                    </select>
                    <small className="text-muted">
                      Stock Qty: {material.stockQty}
                    </small>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={material.quantity}
                      onChange={(e) =>
                        handleInputChange(index, "quantity", e.target.value)
                      }
                      placeholder="Enter quantity"
                    />
                  </td>
                  <td>
                    <select
                      className="form-select"
                      value={material.unit}
                      onChange={(e) =>
                        handleInputChange(index, "unit", e.target.value)
                      }
                    >
                      <option value="Kg">Kg</option>
                      <option value="g">g</option>
                      <option value="L">L</option>
                      <option value="ml">ml</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={material.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                      placeholder="Enter description"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default RawMaterialDetails;
