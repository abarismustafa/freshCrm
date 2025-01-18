import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AcceptOrder from './AcceptOrder';

function OrderZemoto({show , handleClose}) {
  
  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Zomato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AcceptOrder />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderZemoto;