import { Select } from "antd";
import React from "react";

const Selector = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className="dropdown_section">
      <Select
        showSearch
        placeholder="Select geners"
        className="Selectitm"
        bordered={false}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "action",
            label: "Action",
          },
          {
            value: "adventure",
            label: "Adventure",
          },
          {
            value: "animation",
            label: "Animation",
          },
          {
            value: "comedy",
            label: "Comedy",
          },
          {
            value: "crime",
            label: "Crime",
          },
          {
            value: "documentry",
            label: "Documentry",
          },
          {
            value: "drama",
            label: "Drama",
          },
          {
            value: "family",
            label: "Family",
          },
          {
            value: "fantasy",
            label: "Fantasy",
          },
          {
            value: "horror",
            label: "Horror",
          },
          {
            value: "history",
            label: "History",
          },
          {
            value: "mystery",
            label: "Mystery",
          },
          {
            value: "romance",
            label: "Romance",
          },
          {
            value: "science fiction",
            label: "Science Fiction",
          },
          {
            value: "tv movie",
            label: "TV Movie",
          },
          {
            value: "thriller",
            label: "Thriller",
          },
          {
            value: "war",
            label: "War",
          },
          {
            value: "western",
            label: "Western",
          },
        ]}
      />
      <Select
        showSearch
        placeholder="Sort by"
        className="Selectitm"
        bordered={false}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "popularity descending",
            label: "Popularity Descending",
          },
          {
            value: "popularity ascending",
            label: "Popularity Ascending ",
          },
          {
            value: "rating descending",
            label: "Rating Descending",
          },
          {
            value: "rating ascending",
            label: "Rating Ascending",
          },
          {
            value: "release date descending",
            label: "Release Date Descending",
          },
          {
            value: "release date ascending",
            label: "Release Date Ascending",
          },
          {
            value: "title(a-z)",
            label: "Title(A-Z)",
          },
        ]}
      />
    </div>
  );
};

export default Selector;
