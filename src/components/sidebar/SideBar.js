import React from "react";
import classes from "./SideBar.module.css";
import SideBarButton from "./SideBarButton";
const SideBar = (props) => {
  return (
    <div className={`${classes.sidebar} ${classes["slide-to-right"]}`}>
      <SideBarButton
        style={{ width: "100%", position: "sticky" }}
        toggleSideBar={props.toggleSideBar}
      />
      <p>SideBar</p>
    </div>
  );
};

export default SideBar;
