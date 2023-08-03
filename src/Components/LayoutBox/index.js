import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Slider from "react-slick";

const LayoutBox = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Slider {...settings}>
          <div  style={{color:"white", background:"red",height:"100px"}}>
            <h3>1</h3>
          </div>
          <div style={{color:"white"}}>
            <h3>2</h3>
          </div>
          <div style={{color:"white"}}>
            <h3>3</h3>
          </div>
          <div style={{color:"white"}}>
            <h3>4</h3>
          </div>
          <div style={{color:"white"}}>
            <h3>5</h3>
          </div>
          <div style={{color:"white"}}>
            <h3>6</h3>
          </div>
        </Slider> */}
    </>
  );
};

export default LayoutBox;
