import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import QuestionsSection from "../components/QuestionSection/QuestionsSection";
import SideBarButton from "../components/SideBar/SideBarButton";
import MainSection from "../components/MainSection/MainSection";
import classes from "./Home.module.css";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(false);

  const toggleSideBarHandler = () => {
    setSideBarIsVisible((prevState) => !prevState);
  };

  return (
    <Layout>
      <div className={classes["main-container"]}>
        <QuestionsSection />
        <MainSection />
        <SideBarButton toggleSideBar={toggleSideBarHandler} />
        <SideBar
          toggleSideBar={toggleSideBarHandler}
          sideBarIsVisible={sideBarIsVisible}
        />
      </div>
    </Layout>
  );
};

export default Home;
