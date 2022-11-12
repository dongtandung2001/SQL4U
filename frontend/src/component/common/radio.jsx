import React from "react";

const Radio = ({ name, error, inputs, ...rest }) => {
  return (
    <div className='text-start mb-3 ms-3'>
      {inputs.map((input) => (
        <div key={input.name} className='form-check'>
          <input
            {...rest}
            className='form-check-input'
            name={name}
            id={name}
            value={input.name}
            type='radio'
          />
          <label>{input.label}</label>
          {error && <div className='alert alert-danger'>{error}</div>}
        </div>
      ))}
    </div>
  );
};

export default Radio;
