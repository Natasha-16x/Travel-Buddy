import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("API_URL");
      setSearchResults(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Search Results:</h2>
      <div className="grid-container">
        {searchResults.map((result, index) => (
          <div key={index} className="card">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
            <img src={result.image} alt={result.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
