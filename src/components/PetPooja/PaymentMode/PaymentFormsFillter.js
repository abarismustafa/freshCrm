import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PaymentFormsFillter({ handleClose, show }) {
    // State for the start date
    const [startDate, setStartDate] = useState('');

    // Set today's date when the component mounts
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];  // Get today's date in 'YYYY-MM-DD' format
        setStartDate(today);
    }, []);

    return (
        <Modal show={show} size="lg" centered onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="border-bottom p-2 fw-normal">Payment Type</Modal.Title>
            </Modal.Header>
            <div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
                <form className='row'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Paid
                        </label>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Paid Amount: </label>
                        <select className='form-control'>
                            <option value="--all--">--All--</option>
                            <option value="">cash</option>
                            <option value="">Supplier</option>
                        </select>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <label htmlFor="start" className="form-label mb-0">Start Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            className="form-control" 
                            value={startDate} 
                            onChange={(e) => setStartDate(e.target.value)} 
                        />
                    </div>
                    <h5 className='border-bottom'>Payment Mode</h5>
                    <div className="form-check col-lg-3 col-md-6 col-12">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Cash 
                        </label>
                    </div>
                    <div className="form-check col-lg-3 col-md-6 col-12">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Card
                        </label>
                    </div>
                    <div className="form-check col-lg-3 col-md-6 col-12">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Cheque
                        </label>
                    </div>
                    <div className="form-check col-lg-3 col-md-6 col-12">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Online
                        </label>
                    </div>
                    <div className="form-check col-lg-3 col-md-6 col-12">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Others
                        </label>
                    </div>
                </form>
            </div>
            <Modal.Body>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PaymentFormsFillter;
