import React from "react";

const TextArea = ({ name, label, error, value, ...rest }) => {
  return (
    <div className="form-group mb-3">
      <textarea
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        className="form-control"
        defaultValue={value || ""}
        rows={10}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
