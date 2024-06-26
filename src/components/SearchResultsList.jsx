import React from "react";
import "../styles/searchresultslist.css";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results, searchQuery }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <SearchResult result={result} searchQuery={searchQuery} key={id} />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
