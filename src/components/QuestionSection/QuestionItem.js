import React from "react";
import Card from "../UI/Card";
import classes from "./QuestionItem.module.css";
const QuestionItem = ({ title, children }) => {
  return (
    <Card className={classes["question-item"]}>
      <h2>{title}</h2>
      {children}
    </Card>
  );
};

export default QuestionItem;
