import React from "react";

const Select = ({ name, label, error, options, value, ...rest }) => {
  return (
    <div className="form-group my-2">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-select"
        aria-label="Default select example"
        value={value}
        defaultValue={value || ""}
        {...rest}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
