import { useState, useEffect } from 'react';
import './App.css';

import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function SearchBar() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([]);

  const searchQuery = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchQuery, setSearchQuery] = useState('');
    const handleExplore = (input) => {
      setSearchQuery(input);
      console.log('click')
    };
  
    return { searchQuery, handleExplore };
  };
  
 
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://omrivolk-autocomplete-v1.p.rapidapi.com/complete',
      params: {s: input, size: '5', misspell: 'true'},
      headers: {
        // 'x-rapidapi-key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
        'x-rapidapi-host': 'omrivolk-autocomplete-v1.p.rapidapi.com'
      }
    };

//  const fetchData = async () => {
//   axios.get(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete`, config)
//   .then(res => {
//       console.log(res.data);
//       //setSearchResults(res.data.data.Typeahead_autocomplete.results);
//       //console.log("abc: " + JSON.stringify(searchResults));  
      
//       setList([
//         { label: 'The Shawshank Redemption1', year: 19941 },
//         { label: 'The Shawshank Redemption2', year: 19941 },
//         { label: 'The Shawshank Redemption3', year: 19941 },
//       ])
//   })
//   .catch(error => {
//     console.error(`Error: ${error}`)
//   });
// };

    axios.request(options).then(function (response) {
      setList(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [input]);

  const { handleExplore } = searchQuery();

  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 className='title'>
            Need A Travel Buddy To Plan Your Trip?
          </h1>
          <p className='subTitle'>
            The world is waiting for you!
          </p>
          <div className="MuiStack-root searchbar">
            <div className="MuiAutocomplete-root">
              <Autocomplete 
                freeSolo
                options={list}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    onChange={(event) => setInput(event.target.value)}
                  />
                )}
              />
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary" onClick={handleExplore(input)}>
              Explore
          </button>
        </div>
      </div>
    </section>
  )
//  const config = {
//   params: {
//     query: 'canada', lang: 'en_US', units: 'km'
//   },
//   headers: {
//     'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// }

// const handleInput = (e) => {
//   console.log(e.target.value)
//   //setList(e.target.value.toLowerCase())
//   fetchData();
// }

// //  useEffect(() => {
// //     SearchResult.fetchData()
// //      .then(res => setList(res))
// //  }, [])
// =======
//  const handleInput = (e) => {
//    console.log(e.target.value)
//    setInput(e.target.value.toLowerCase())
//  }

//  useEffect(() => {
//    fetchData()
//      .then(res => setList(res))
//  }, [])


//  return (
//    <Box className="App"
//      sx={{
//        width: 400,
//        height: 660,
//        margin: '100px auto',
//        display: 'flex',
//        flexDirection: 'column',
//        justifyContent: 'space-evenly'
//      }}>
//      <Typography variant='h4' component={'h1'}>Search Bar</Typography>
//      <Autocomplete
//        disablePortal
//        id="combo-box-demo"

//        options={list}
// onChange={handleInput}
//        renderInput={(params) => <TextField {...params}
//          label="Search For Places"
         

//        options={list.map(item => item.title)}

//        renderInput={(params) => <TextField {...params}
//          label="Search For Places"
//          onSelect={handleInput}

//          sx={{
//            width: 350,
//            margin: '10px auto',
//          }} />}
//      />



//      {/* <FilterProducts searchstring={input} list={list} /> */}
//      {/* <SearchResult input={input}/> */}
//    </Box>

}

export default SearchBar;

