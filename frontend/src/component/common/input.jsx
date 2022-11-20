import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group my-2'>
      <input
        {...rest}
        name={name}
        id={name}
        placeholder={label}
        className='form-control rounded-pill pl-3 pr-3 pd-2 pb-2'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
