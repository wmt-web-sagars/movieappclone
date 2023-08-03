import React from "react";
import HeroBanner from "./heroBanner";
import Slickslider from "../../Components/Slider";

import { Card, Col, Row } from "antd";
import SwitchTabs from "../../Components/SwitchTabs";

// import Slider from "react-slick";
// import Meta from "antd/es/card/Meta";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="homepage_section">
        <h3>Trending </h3>
        <span className="tabbtn">
        <SwitchTabs />
        </span>
       <Slickslider />
      </div>
      <div className="homepage_section">
        <h3>What's Popular</h3> 
        <span className="tabbtn">
        <SwitchTabs />
        </span>
        <Slickslider />
      </div>
      <div className="homepage_section">
        <h3>Top Rated</h3>
        <span className="tabbtn">
        <SwitchTabs />
        </span>
        <Slickslider />
      </div>
    </>
  );
};

export default Home;
