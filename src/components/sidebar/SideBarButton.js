import React from "react";
import classes from "./SideBarButton.module.css";
const SideBarButton = (props) => {
  return (
    <button
      type="button"
      className={classes.floatBtn}
      onClick={props.toggleSideBar}
      style={props.style}
    >
      Side Bar
    </button>
  );
};

export default SideBarButton;
