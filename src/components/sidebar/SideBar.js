import React from "react";
import classes from "./SideBar.module.css";
import { CSSTransition } from "react-transition-group";
const SideBar = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.sideBarIsVisible}
      timeout={600}
      classNames={{
        enterActive: classes["slide-enter-active"],
        exitActive: classes["slide-exit-active"],
      }}
    >
      <div className={`${classes.sidebar} ${classes["slide-to-right"]}`}>
        <div className={classes["sidebar-header"]}>
          <h2>الملحق</h2>
          <button type="button" onClick={props.toggleSideBar}>
            ×
          </button>
        </div>
        <div className={classes["sidebar-body"]}>
          <ul>
            <li>
              الملحق 1 <button type="button">+</button>
            </li>
            <li>
              الملحق 2 <button type="button">+</button>
            </li>
            <li>
              الملحق 3 <button type="button">+</button>
            </li>
            <li>
              الملحق 4 <button type="button">+</button>
            </li>
            <li>
              الملحق 5 <button type="button">+</button>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SideBar;
