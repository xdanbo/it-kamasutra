import React from "react";
import { Field } from "redux-form";
import classes from "./FormControls.module.scss";
import { required } from "../../../utils/validators/validators.js";

const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={
        classes["form-control"] + " " + (hasError ? classes.error : "")
      }
    >
      <div>
        <Element {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = Element("textarea");

export const Input = Element("input");

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    />
  </div>
);
