import { useNavigate } from "react-router-dom"; 
import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaArrowLeft } from "react-icons/fa";


const ExpensiveListing = () => {
  const navigate = useNavigate(); 

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">

        <Col>
          <h3>Expense Listing</h3>
        </Col>
      
        <Col className="text-end">
          <Button
            variant="primary"
            className="me-2"
            onClick={() => navigate("/expensemanagement")} 
          >
            <FaPlus className="me-2" />
            Add Expensive
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft className="me-2" />
            Back
          </Button>
        </Col>
      </Row>

    
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body className="text-center">
              <p className="text-muted">Record is Not Available</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ExpensiveListing;
