import  { useState, useEffect } from "react";
import axios from "axios";

const config = {
  params: {
    query: 'canada', lang: 'en_US', units: 'km'
  },
  headers: {
    // 'X-RapidAPI-Key': '',
    // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}


const SearchResult = () => {
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
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetchData()
    })
    
  };



  
// const SearchResultCard = ({ searchResult }) => {
//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">{searchResult.result_object.name}</h5>
//         <p className="card-text">{searchResult.result_object.location_string}</p>
//         <a href={searchResult.result_object.website} className="btn btn-primary">Visit website</a>
//       </div>
//     </div>
//   );
// };

//   const rows = [];

//   for (let i = 0; i < searchResults.length; i += 3) {
//     const row = (
//       <div className="row">
//         <div className="col-md-4">
//           {searchResults[i] && <SearchResultCard searchResult={searchResults[i]} />}
//         </div>
//         <div className="col-md-4">
//           {searchResults[i + 1] && <SearchResultCard searchResult={searchResults[i + 1]} />}
//         </div>
//         <div className="col-md-4">
//           {searchResults[i + 2] && <SearchResultCard searchResult={searchResults[i + 2]} />}
//         </div>
//       </div>
//     );
//     rows.push(row);
//   }

//   return (
//     <div className="container">
//       {rows}
//     </div>
//   );
};


export default SearchResult;
//   return (
//     <div>
//       <h2>Search Results:</h2>
//       <div className="grid-container">
//         {searchResults.map((results) => (
//           <div key={index} className="card">
//             {/* <h3>{results[0].buCategory}</h3>
//             <p>{result[0].description}</p>
//             <img src={results.image} alt={results.title} /> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };






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