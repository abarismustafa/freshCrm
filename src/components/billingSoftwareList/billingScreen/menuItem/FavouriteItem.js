import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const favoriteItems = [
  { name: "Kebab Platter", borderColor: "border-success" },
  { name: "Apple Pie", borderColor: "border-warning" },
  { name: "Soda", borderColor: "border-success" },
  { name: "Thandai", borderColor: "border-warning" },
  { name: "Coke", borderColor: "border-success" },
  { name: "Bhaaji Pau", borderColor: "border-success" },
];

function FavouriteItem() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> Samir Khan Favourite Items</Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-wrap gap-3">
            {favoriteItems.map((item, index) => (
              <div
                key={index}
                className="bg-light"
                style={{ width: "150px" }}
              >
                <div className={`border-start ${item.borderColor} border-5 `}>
                <span className="d-flex justify-content-end text-danger fs-5 pe-3">&#9829;</span>
                  <div className="d-flex align-items-center p-2">
                    <p className="mb-0 fw-semibold text-black">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FavouriteItem;
