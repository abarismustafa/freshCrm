import { Link } from "react-router-dom";

function OrderDetailSum() {

    return (
        <div className="row m-2 m-lg-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption p-1">
                            <h4 className="heading mb-0"><i class="fa-solid fa-house"></i> Order</h4>
                            <div className="d-flex gap-1">
                                <Link className="btn btn-primary btn-sm m-1" role="button" aria-controls="offcanvasExample"><i class="fa-regular fa-file-pdf"></i></Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="mt-2">
                                <button className="btn m-0 my-2 btn-outline-success p-1">Billing From</button>
                                <div className="mt-2">
                                    <h1 className="fs-5">Dhaka Restaurant</h1>
                                    <p className="fs-6 text-start">98 Green Road, Farmgate, Dhaka-1215. <br />
                                        Mobile  0123456789 <br />
                                        Email Address: bdtask@gmail.com</p>
                                </div>
                            </div>
                            <div style={{width: "350px"}}>
                                <div className="mt-2">
                                    <h1 className="fs-4 my-2">Invoice</h1>
                                    <div>Invoice No: 0025 <br/>
                                        Order Status: Pending order <br/>
                                        Billing date : 2025-01-03</div>
                                    <button className="btn m-0 my-2 btn-outline-success p-1">Billing From</button>
                                    <div className="mt-2">
                                        <h1 className="fs-5">Walkin</h1>
                                        <p className="fs-6 text-start">Address : dhaka <br />
                                            Mobile :8801717426371 <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailSum;