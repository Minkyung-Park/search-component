import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/searchbar.css";
import SearchResultsList from "./SearchResultsList";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="검색어를 입력해 주세요."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <SearchResultsList results={results} searchQuery={input} />
    </div>
  );
};

export default SearchBar;
