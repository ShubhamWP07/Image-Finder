import React from "react";
import { useState } from "react";
import logo from "../plogo.png";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(search);
  };

  const handleClick = () => {
    onSubmit(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="searchbar-section">
      <div className="left-section">
        <img src={logo} alt={logo} className="logo" />
      </div>
      <div className="right-section">
        <div>
          <form onSubmit={handleFormSubmit}>
            <input
              className="input-field"
              placeholder="Search For Free Images"
              value={search}
              onChange={handleChange}
            />
          </form>
        </div>
        <div>
          <button className="search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
