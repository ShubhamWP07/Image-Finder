import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    setImages(results);
  };

  return (
    <div className="Main-container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
