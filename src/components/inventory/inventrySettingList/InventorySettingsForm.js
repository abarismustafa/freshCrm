import React, { useState } from "react";
import { Select } from "antd";
import { settingsConfig } from "./InventorySettingsConfig";

const InventorySettingsForm = () => {
  const [settings, setSettings] = useState(
    settingsConfig.reduce((acc, setting) => {
      console.log("acc", acc)
      console.log("setting", setting)
      acc[setting.key] = setting.defaultValue;
      return acc;
    }, {})
  );

  const handleInputChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Settings Submitted: ", settings);
  };

  // Reusable Render Function
  const renderInputField = (setting) => {
    switch (setting.type) {
      case "radio":
        return (
          <div className="d-flex gap-3 align-items-center">
            {setting.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name={setting.key}
                    value={option}
                    checked={settings[setting.key] === option}
                    onChange={() => handleInputChange(setting.key, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case "multi-select":
        return (
          <Select
            mode="multiple"
            options={setting.options}
            value={settings[setting.key]}
            onChange={(selected) => handleInputChange(setting.key, selected)}
            style={{ width: "100%" }}
          />
        );
      case "text":
        return (
          <input
            type="text"
            className="form-control"
            placeholder={setting.placeholder}
            value={settings[setting.key]}
            onChange={(e) => handleInputChange(setting.key, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-light">
      <div className="bg-black m-2 p-2">
        <h1 className="text-light fs-4">Inventory Settings</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row my-2 mx-0">
          {settingsConfig.map((setting) => (
            <div key={setting.key} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card p-3 mb-3" style={{ height: "150px", overflow: "auto" }}>
                <label className="fw-semibold">{setting.label}</label>
                {renderInputField(setting)}
                {setting.note && <p className="text-muted">{setting.note}</p>}
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary px-5 m-3 fw-semibold">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default InventorySettingsForm;
