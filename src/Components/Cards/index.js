import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import"./Cards.scss"

export const Cards = () => {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 280,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        bordered={false}
        className="movieCard"
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};
