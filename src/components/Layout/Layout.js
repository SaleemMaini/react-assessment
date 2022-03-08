import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainSection from "./MainSection";
import QuestionsSection from "./QuestionsSection";
import classes from "./Layout.module.css";
import SideBarButton from "../sidebar/SideBarButton";
const Layout = () => {
  return (
    <div className={classes["page-container"]}>
      <Header />
        <div className={classes["main-container"]}>
          <QuestionsSection />
          <MainSection />
          <SideBarButton />
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
