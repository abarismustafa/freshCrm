import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VersionInfo = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-column align-items-center p-4 border rounded">
        <div
          className="bg-success text-white px-4 py-2 rounded mb-3"
          style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          Current version<br />
          V-2.9
        </div>
        <div className="text-primary" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
          No Update available
        </div>
      </div>
    </div>
  );
};

export default VersionInfo;
