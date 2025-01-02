import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popconfirm, Pagination } from 'antd';

function InboxCard() {
  // Example data
  const [data, setData] = useState([
    {
      _id: '1',
      slNo: '1',
      senderName: 'gghjb',
      subject: '__',
      message: '--',
      date: '05 ',
      status: '',
    },
    {
      _id: '1',
      slNo: '2',
      senderName: 'hghghjb',
      subject: '__',
      message: '--',
      date: '25 Oct',
      status: '',
    },
    {
      _id: '1',
      slNo: '3',
      senderName: 'lokmk',
      subject: '__',
      message: '--',
      date: '19',
      status: '',
    },
  ]);
  
  const totalCount = data.length;

  const handleDelete = (id) => {
    // Add logic to delete the item, for example calling an API
    console.log('Delete item with ID:', id);
  };

  return (
    <div className="row my-2 mx-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <table
                id="empoloyees-tblwrapper"
                className="table dataTable no-footer"
                role="grid"
                aria-describedby="empoloyees-tblwrapper_info"
              >
                <thead>
                  <tr role="row">
                    <th>SL No.</th>
                    <th>Sender Name</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, index) => (
                      <tr key={item._id || index} role="row" className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td>{item.slNo || 'Not Available'}</td>
                        <td>{item.senderName || 'Not Available'}</td>
                        <td>{item.subject || 'Not Available'}</td>
                        <td>{item.message || 'Not Available'}</td>
                        <td>{item.date || 'Not Available'}</td>
                        <td>{item.actions || 'Not Available'}</td>
                        <td>
                          <div className="d-flex">
                            <Link
                              to={`/newvblock/${item?._id}`}
                              className="btn btn-primary shadow btn-xs sharp me-1"
                            >
                              <i className="fa fa-pencil" />
                            </Link>
                            <Popconfirm
                              title="Delete Block!"
                              description="Are you sure to delete?"
                              onConfirm={() => handleDelete(item?._id)}
                              onCancel={() => console.log('Delete canceled')}
                              okText="Yes"
                              cancelText="No"
                            >
                              <button className="btn btn-danger shadow btn-xs sharp">
                                <i className="fa fa-trash" />
                              </button>
                            </Popconfirm>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                <Pagination
                  defaultCurrent={1}
                  total={totalCount}
                  onChange={(page) => console.log(`Page changed to ${page}`)}
                  pageSize={10} // You can adjust page size
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxCard;
