import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCustomer({show, handleClose}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-12'>
                    <div>
                        <label className='form-label'>Customer name <span  className="text-red">*</span></label>
                        <input className='form-control' type='text'/>
                    </div>
                </div>
                <div className='col-12'>
                    <div>
                        <label className='form-label'>Email Address <span  className="text-red">*</span></label>
                        <input className='form-control' type='email'/>
                    </div>
                </div>
                <div className='col-12'>
                    <div>
                        <label className='form-label'>Mobile <span  className="text-red">*</span></label>
                        <input className='form-control' type='number'/>
                    </div>
                </div>
                <div className='col-12'>
                    <div>
                        <label className='form-label'>Address</label>
                        <textarea className='form-control' type='number'/>
                    </div>
                </div>
                <div className='col-12'>
                    <div>
                        <label className='form-label'>Favourite Address</label>
                        <textarea className='form-control' type='number'/>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;