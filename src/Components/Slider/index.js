import React from "react";
import "./Slider.scss";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Slider from "react-slick";
import { Cards } from "../Cards";

const Slickslider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 200000000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="card_slider">
      <Slider {...settings}>
        <div className="cards">
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
      </Slider>
    </div>
  );
};

export default Slickslider;
