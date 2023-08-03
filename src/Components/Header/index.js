import React from "react";
import movixlogo from "../../assets/img/movixlogo.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { home, movies, signin, signup, tvshows } from "../../constants";

const Header = () => {
  return (
    <div className="header_section">
      <div className="header_content">
        <div className="logo">
          <NavLink to={home}>   
          <img src={movixlogo} alt="logo-image" />
          </NavLink>
        </div>

        <ul className="navbar_items">
          <NavLink to={movies}> 
          <li className="navbar_item">Movies</li>
          </NavLink>
          <NavLink to={tvshows}>   
          <li className="navbar_item">Tv Shows</li>
          </NavLink> 

          <li className="navbar_item">
            <SearchOutlined />
          </li>
          <NavLink to={signup}>   
          <Button type="primary" htmlType="submit" danger>
            <span>SignUp</span>
          </Button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
