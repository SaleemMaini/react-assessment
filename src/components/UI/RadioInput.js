import React from "react";
import classes from "./RadioInput.module.css";
const RadioInput = (props) => {
  return (
    <div className={classes["radio-input"]}>
      <input type="radio" {...props.input} />
      <label htmlFor={props.input.id}>{props.label}</label>
    </div>
  );
};

export default RadioInput;
