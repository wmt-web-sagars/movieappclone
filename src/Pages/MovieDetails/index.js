import React from "react";
import avatar from "../../assets/img/avatar.jpg";
import { Avatar, Card, Col, Progress, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const MovieDetails = () => {
  return (
    <>
      <Row className="moviedetails_content">
        <Col span={8}>
          <div className="card_img">
            <Card
              hoverable
              style={{
                width: 340,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            ></Card>
          </div>
        </Col>
        <Col span={16}>
          <div className="card_details">
            <h1>Fast X(Year) </h1>
            <p>The end of the road begins.</p>
            <div className="movie_type">
              <span className="action_genere">Action</span>
              <span className="crime_genere">Crime</span>
              <span className="thriller_genere">Thriller</span>
            </div>
            <div className="progress_bar">
              <Space wrap>
                <Progress type="circle" percent={100} size={80} />
              </Space>

              {/* <Space wrap>
                <Progress type="circle" percent={100} size={80} />
              </Space> */}
              <span>watch trailer</span>
            </div>
            <div className="card_content">
              <h2>Overview</h2>
              <p>
                Ethan Hunt and his IMF team embark on their most dangerous
                mission yet: To track down a terrifying new weapon that
                threatens all of humanity before it falls into the wrong hands.
                With control of the future and the world's fate at stake and
                dark forces from Ethan's past closing in, a deadly race around
                the globe begins. Confronted by a mysterious, all-powerful
                enemy, Ethan must consider that nothing can matter more than his
                mission—not even the lives of those he cares about most.
              </p>
            </div>
            <div className="movie">
              <div className="movie_status">
                <span className="main_text">Status:</span>
                <span className="status_text">Released</span>
                <span className="main_text">Release Date:</span>
                <span className="status_text">May 17, 2023</span>
                <span className="main_text">Runtime:</span>
                <span className="status_text">2h 22m</span>
              </div>
              <div className="director">
                <span className="main_text">Director:</span>
                <span className="status_text">Louis Leterrier</span>
              </div>
              <div className="writer">
                <span className="main_text">Writer:</span>
                <span className="status_text">Justin Lin, Dan Mazeau,</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="topcast_section">
            <h3>Top Cast</h3>
               <Row>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                <Col xs={24} md={4}>
                <div className="cast_detail">
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                </div>
                </Col>
                
               </Row>
                

                  {/* <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names"> Dominic Toretto</span>
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span>
                  <Avatar size={180} icon={<UserOutlined />} src={avatar} />
                  <span className="real_names"> Vin Diesel</span>
                  <span className="cast_names">Dominic Toretto</span> */}
             
          </div>
        </Col>
      </Row>
    </>
  );
};

// </div>

export default MovieDetails;
