import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={classes["page-container"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
