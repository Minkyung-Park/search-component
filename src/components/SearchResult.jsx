import React from "react";
import "../styles/searchresult.css";

const SearchResult = ({ result, searchQuery }) => {
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="search-result"
      onClick={(e) => alert(`${result.name}를 클릭하셨습니다`)}
    >
      {highlightText(result.name, searchQuery)}
    </div>
  );
};

export default SearchResult;
