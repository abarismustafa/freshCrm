import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState('Classic');

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="purchaseKey" className="form-label">
            Purchase Key
          </label>
          <input
            type="text"
            id="purchaseKey"
            className="form-control"
            placeholder="Purchase Key"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="uploadTheme" className="form-label">
            Upload Theme
          </label>
          <div className="d-flex">
            <input type="file" id="uploadTheme" className="form-control me-2" />
            <button className="btn btn-primary">Upload Theme</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div
            className={`card ${selectedTheme === 'Classic' ? 'border-success' : ''}`}
            onClick={() => handleThemeChange('Classic')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="path/to/classic-image.jpg"
              className="card-img-top"
              alt="Classic Theme"
            />
            <div className="card-body">
              <h5 className="card-title">Classic</h5>
              {selectedTheme === 'Classic' && (
                <span className="badge bg-success">Activated</span>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`card ${selectedTheme === 'Default' ? 'border-success' : ''}`}
            onClick={() => handleThemeChange('Default')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="path/to/default-image.jpg"
              className="card-img-top"
              alt="Default Theme"
            />
            <div className="card-body">
              <h5 className="card-title">Defaults</h5>
              {selectedTheme === 'Default' && (
                <span className="badge bg-success">Activated</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button className="btn btn-success">Download</button>
      </div>
    </div>
  );
};

export default ThemeSelector;
