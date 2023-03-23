import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import CardUI from "../cardUI/card";

function SearchResult() {
  // eslint-disable-next-line no-use-before-define
  const { searchQuery } = searchQuery();
  const [searchResults, setSearchResults] = useState([]);

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
            id: result.name, // Pattaya
            longid: result.location_string,
            locationZone: result.timezone, //asia/Bangkok"
            description: result.geo_description,
            img: result.photo.images.medium.url,
          }))
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [searchQuery]);

  return (
    <Row>
      {searchResults.map((result) => (
        <Col key={result.id} md={3}>
          <CardUI
            title={result.id}
            img={result.img}
            text={result.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default SearchResult;
