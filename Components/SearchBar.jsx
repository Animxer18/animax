"use client";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleInput} />
      <img src="/icons/search.svg" alt="search-icon" />
    </div>
  );
};

export default SearchBar;
