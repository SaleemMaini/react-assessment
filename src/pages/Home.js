import React from "react";
import Layout from "../components/Layout/Layout";
import QuestionsSection from "../components/QuestionSection/QuestionsSection";
import SideBarButton from "../components/SideBar/SideBarButton";
import MainSection from "../components/MainSection/MainSection";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={classes["main-container"]}>
        <QuestionsSection />
        <MainSection />
        <SideBarButton />
      </div>
    </Layout>
  );
};

export default Home;
