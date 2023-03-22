import  React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {Col, Row} from 'react-bootstrap';
import CardUI from "../cardUI/card";

const config = {
  params: {
    query: 'canada', lang: 'en_US', units: 'km'
  },
  headers: {
    'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}


const SearchResult = ({input}) => {
  const [searchResults, setSearchResults] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const fetchData = async () => {
    axios.get(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete`, config)
    .then(res => {
        console.log(res.data);
        setSearchResults(res.data.data.Typeahead_autocomplete.results);
        console.log("abc: " + JSON.stringify(searchResults));  
    })
    .catch(error => {
      console.error(`Error: ${error}`)
    });
  };
  
  useEffect(() => {
    console.log("input: " + input);
    fetchData();
  },[input]);



  return <Fragment>
    <Row>
      {searchResults.map((result) => (
        <Col sm={12} md={6} lg ={4} key ={result.documentId}>
          <CardUI >
            
          </CardUI>
        </Col>
      ))
      }
    </Row>
  </Fragment>
};


export default SearchResult;