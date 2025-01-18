import { Popconfirm } from "antd";
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function InstallmentLoanList(){
    const item = true
    return (
        <div className="row m-1 mx-lg-4">
            <div className="col-xl-12">
            <div className="card mt-4">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0"><i class="fa-solid fa-house"></i> Loan</h4>
                        <div>
                            <Link className="btn btn-primary btn-sm m-1" to="/addinstallmentloan"  role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-plus"></i> Add Installment</Link>
                            <Link className="btn btn-primary btn-sm m-1"  role="button" aria-controls="offcanvasExample">Manage Installment</Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption p-1">
                                <div className="heading mb-0 align-items-center d-flex gap-1">
                                    <span>display</span>
                                    <select style={{height : "30px", width: "65px"}} className="form-select shadow">
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                    <span>records per pages</span>
                                </div>
                                <div className="d-flex gap-1">
                                    <div ><input className="form-control" type="search" placeholder="Search" style={{height : "30px"}} /></div>
                                    <Link className="btn btn-success btn-sm my-1" role="button" aria-controls="offcanvasExample">Excel</Link>
                                    <Link className="btn btn-primary btn-sm my-1"  role="button" aria-controls="offcanvasExample">PDF</Link>
                                    <Link className="btn btn-info btn-sm m-1" role="button" aria-controls="offcanvasExample">Print</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Sl
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Name
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                         Employee Id
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Installment Amount 
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Payment
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                       Date
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Receiver
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Install No
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Note
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd" >
                                        <td>
                                        1
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                        2
                                        </td>
                                        <td>
                                        35$
                                        </td>
                                        <td>
                                        35$
                                        </td>
                                        <td>
                                        2021-02-17
                                        </td>
                                        <td>
                                        
                                        </td>
                                        <td>
                                        1
                                        </td>
                                        <td>35</td>
                                    </tr>
                                </tbody>
                            </table>
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    {/* Total {totalCount} entries */}
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange=""
                                        total=""
                                    />
                                </div>
                            </div>
                            {/* <button className="btn btn-primary m-0 mt-2" type="button">Approve Selected Employee Leave</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}