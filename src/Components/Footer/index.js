import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="footer_section">
      <ul className="footer_items">
        <li className="footer_item">Terms of use</li>
        <li className="footer_item">Privacy policy</li>

        <li className="footer_item">About</li>
        <li className="footer_item">Blog</li>
        <li className="footer_item">FAQ</li>
      </ul>

      <div className="paragrph_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="social_icons">
        <span>
          <FacebookOutlined />
        </span>
        <span>
          <InstagramOutlined />
        </span>

        <span>
          <TwitterOutlined />
        </span>

        <span>
          <LinkedinOutlined />
        </span>
      </div>
    </div>
  );
};

export default Footer;
