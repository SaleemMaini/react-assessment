import React from "react";
import classes from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <div className={classes.textarea}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <span>{props.maxLength}/{props.value.length}</span>
    </div>
  );
};

export default TextArea;
