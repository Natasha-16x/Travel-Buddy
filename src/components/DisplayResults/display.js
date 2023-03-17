

import React, { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete', 
  // params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
  headers: {
    'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08', 
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(options);
      console.log(response)
      // setSearchResults(response.data.results);
      setSearchResults(response.data[0]);
    };
    fetchData();
  }, []);

  // return (
  //   <div>
  //     <h2>Search Results:</h2>
  //     <div className="grid-container">
  //       {searchResults.map((result, index) => (
  //         <div key={index} className="card">
  //           <h3>{result.title}</h3>
  //           <p>{result.description}</p>
  //           <img src={result.image} alt={result.title} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default SearchResult;




// import React from "react";
// import axios from "axios";

// class SearchResult extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchResults: [],
//     };
//   }

//   const axios = require("axios");

//   const options = {
//     method: 'GET',
//     url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//     params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
//     headers: {
//       'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
//       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
//   };
//   // const options = {
//   //   method: 'GET',
//   //   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
//   //   params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
//   //   headers: {
//   //     'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
//   //     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   //   }
//   // };

//   componentDidMount() {
//     axios.get(this.options).then((response) => {
//       this.setState({ searchResults: response.data.results });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Search Results:</h2>
//         <div className="grid-container">
//           {this.state.searchResults.map((result, index) => (
//             <div key={index} className="card">
//               <h3>{result.title}</h3>
//               <p>{result.description}</p>
//               <img src={result.image} alt={result.title} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchResult;