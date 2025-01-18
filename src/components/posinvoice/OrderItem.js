import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrderItem({ order, handleorderClose }) {

    return (
        <>
            <Modal show={order} onHide={handleorderClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row m-2'>
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Item Information</th>
                                    <th>Size</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Bangla Set Menu Rice Boarta</td>
                                    <td>
                                        <select className='form-select shadow' style={{height: "30px" , width : "100px"}}>
                                            <option>1:2</option>
                                            <option>1:3</option>
                                        </select>
                                    </td>
                                    <td><input type='number' className='form-control' style={{height: "30px" , width : "100px"}} /></td>
                                    <td>24.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='m-0 p-0'>
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th>Add-ons Name</th>
                                    <th>Addons Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td><input type='checkbox'/></td>
                                    <td>
                                    souc
                                    </td>
                                    <td><input type='number' className='form-control' style={{height: "30px" , width : "100px"}} /></td>
                                    <td>5.00</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleorderClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleorderClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrderItem;