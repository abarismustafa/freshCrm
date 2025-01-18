import { Popconfirm } from "antd";
import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export function YourOrder(){
    const item = true
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card p-0">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                    Item
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                        Variant Name
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Price
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Qty </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                        Total </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd" >
                                        <th style={{textWrap : "nowrap"}}>
                                        Bangla Set Menu Rice Boarta
                                        </th>
                                        <td>
                                        1:2
                                        </td>
                                        <td>
                                        24
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            24
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Popconfirm
                                                    title="Delete Block!"
                                                    description="Are you sure to delete ?"
                                                    onConfirm=""
                                                    onCancel=""
                                                    okText="Yes"
                                                    cancelText="No"
                                                >
                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                </Popconfirm>
                                            </div>
                                        </td>
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
        </div>
    )
}