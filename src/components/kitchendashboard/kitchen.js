import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import OrderCard from './OrderCard';


const KitchenDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('Bangla');

  const categories = ['Bangla', 'Beverage', 'Chinese', 'Common', 'French', 'Indian', 'Italian', 'MAIN', 'Mexican'];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <ButtonGroup>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? 'success' : 'outline-success'}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
            <div className={activeCategory ===  "Bangla" ? 'd-block' : 'd-none'}>
              <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Beverage" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Chinese" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Common" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "French" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Indian" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Italian" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "MAIN" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
            <div className={activeCategory === "Mexican" ? 'd-block' : 'd-none'}>
            <div className='row'>
                <div className='col-4'>
                  <OrderCard />
                </div>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KitchenDashboard;
