import React from "react";

const Input = ({ name, label, error, value, ...rest }) => {
  return (
    <div className="form-group my-2 w-100">
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        defaultValue={value || ""}
        className="form-control rounded-pill pl-3 pr-3 pt-2 pb-2 fs-5"
      />
      {error && <div className="text-break"  style={{color: "red", fontSize: "1rem", marginTop:"0.5rem"}}>{error}</div>}
    </div>
  );
};

export default Input;
