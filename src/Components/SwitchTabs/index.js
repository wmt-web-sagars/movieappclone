// import { Tabs } from 'antd'
import TabPane from "antd/es/tabs/TabPane";
import React, { useState } from "react";
import { Radio, Tabs } from "antd";
import './SwitchTabs.scss'

const SwitchTabs = () => {
  return (
    <div className="switchtabs">
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
      </Radio.Group>
      {/* <Tabs
        defaultActiveKey="1"
        size={size}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of tab ${id}`,
          };
        })}
      /> */}
    </div>
  );
};

export default SwitchTabs;
