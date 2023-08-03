import { UserOutlined } from "@ant-design/icons";
import { Card, Col, message, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import Selector from "../../Components/Selector";
import { Cards } from "../../Components/Cards";

const TvShows = () => {
  return (
    <div className="movies_section">
      <div className="movies_features">
        <div className="movies_text">
          <h3>Explore TvShows</h3>
        </div>
        <div className="movies_dropdown">
        <Selector/>
        </div>
      </div>
      <div className="movies_cards">
      <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
           <Cards/>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
          <Cards/>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
          <Cards/>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
          <Cards/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TvShows;
