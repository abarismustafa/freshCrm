import React from 'react';

function AddFilters() {
    return (
        <div>
            <h5 className="border-bottom">New Sales Return Details</h5>
            <form className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"

                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Supplier
                    </label>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"

                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Resturant
                    </label>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"

                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Kitchen
                    </label>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <label for="exampleFormControlInput1" class="form-label">Resturant: </label>
                    <select className='form-control'>
                        <option className='' value="--all--">--All--</option>
                        <option className='' value="">Cafe</option>
                        <option className='' value=""></option>
                    </select>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <label for="exampleFormControlInput1" class="form-label">Credit Note: </label>
                    <select className='form-control'>
                        <option className='' value="--all--">--All--</option>
                        <option className='' value="">Cafe</option>
                        <option className='' value=""></option>
                    </select>
                </div>
               
            </form>
        </div>
    );
}

export default AddFilters;
