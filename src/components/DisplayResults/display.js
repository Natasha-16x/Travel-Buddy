import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import CardUI from "../cardUI/card";
// import SearchBar from './components/Search/SearchBar';

function SearchResult([searchQuery , setSearchQuery]) {
  const [searchResults, setSearchResults] = useState([]);
  const [SearchBar] = searchQuery['']

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/locations/search",
      params: {
        query: searchQuery,
        limit: "12",
        offset: "0",
        units: "km",
        sort: "relevance",
      },
      headers: {
        "X-RapidAPI-Key": "386e9f68cbmsh8084ffcb2a03606p12b177jsn3a93e4fd226a",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSearchResults(
          response.data.data.map((result) => ({
            id: result.result_object.location_id,
            name: result.result_object.name,
            locationZone: result.result_object.time_zone,
            description: result.result_object.geo_description,
            img: result.result_object.photo.images.medium.url,
          }))
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar setSearchQuery={handleSearchQueryChange} />
      <Row>
        {searchResults.map((result) => (
          <Col key={result.id} md={3}>
            <CardUI
              title={result.name}
              img={result.img}
              text={result.description}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default SearchResult;
