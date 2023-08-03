import React, { useEffect } from "react";
import { fetchDataFromApi } from "../../../api/api";
import Search from "antd/es/input/Search";

const HeroBanner = () => {
  // useEffect(()=>{
  //   apiTesting()
  //   },[])

  // const apiTesting=()=>{
  //   fetchDataFromApi('/movie/popular').then((res)=>{
  //     console.log(res);
  //   })
  const onSearch = (value) => console.log(value);

  return (
    <div className="herobanner_section">
      <h1>Welcome.</h1>
      <p>Millions of movies, TV shows and people to discover</p>
      <div className="search_bar">
        <Search
          placeholder="Search for a movie or a tv show"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
