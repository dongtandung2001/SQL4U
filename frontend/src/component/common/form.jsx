import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Select from "./select";
import Radio from "./radio";
import TextArea from "./textarea";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = this.schema.validate(this.state.data, {
      abortEarly: false,
    });
    const { error } = result;
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object({
      [name]: this.schema._ids._byKey.get(name).schema,
    });

    const { error } = schema.validate(obj);

    if (!error) return null;
    return error.details[0].message;
  };

  handleSumbit = (e) => {
    e.preventDefault();

    // validation
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary rounded-pill custom-transition"
      >
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderTextArea(name, label) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderRadio(name, inputs) {
    const { data, errors } = this.state;
    return (
      <Radio
        name={name}
        value={data[name]}
        error={errors[name]}
        inputs={inputs}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
