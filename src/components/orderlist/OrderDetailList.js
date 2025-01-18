import { Popconfirm } from "antd";
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function OrderDetailList() {
    const item = true
    return (
        <div className="row m-1 mx-lg-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Item</th>
                                        <th>Size</th>
                                        <th>Unit price</th>
                                        <th>Qty</th>
                                        <th>Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bangla Set Menu Rice Boarta</td>
                                        <td>1:2</td>
                                        <td>24.000</td>
                                        <td>1</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>Chicken Dumpling</td>
                                        <td>1:3</td>
                                        <td>800.000</td>
                                        <td>1</td>
                                        <td>800</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4} className="text-end">Subtotal</th>
                                        <td>2374</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4} className="text-end">Discount ()</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4} className="text-end">Service Charge(0%)</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4} className="text-end">Vat (%)</th>
                                        <td>356.1</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4} className="text-end">Grand total	</th>
                                        <td>2730.1</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="text-end">Total due</td>
                                        <td>2730.10</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4} className="text-end">Change due</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}