import { useState, useEffect } from 'react';
import './App.css';

import axios from "axios";
import { Typography, Box, TextField, Autocomplete } from '@mui/material'
import SearchResult from '../DisplayResults/display';




function SearchBar() {
 const [input, setInput] = useState('')
 const [list, setList] = useState([]);


 const fetchData = async () => {
  axios.get(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete`, config)
  .then(res => {
      console.log(res.data);
      //setSearchResults(res.data.data.Typeahead_autocomplete.results);
      //console.log("abc: " + JSON.stringify(searchResults));  
      
      setList([
        { label: 'The Shawshank Redemption1', year: 19941 },
        { label: 'The Shawshank Redemption2', year: 19941 },
        { label: 'The Shawshank Redemption3', year: 19941 },
      ])
  })
  .catch(error => {
    console.error(`Error: ${error}`)
  });
};



 const config = {
  params: {
    query: 'canada', lang: 'en_US', units: 'km'
  },
  headers: {
    'X-RapidAPI-Key': '016665576cmsh8970194c21e154ep1f788djsn2184cb3e8d08',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
}

const handleInput = (e) => {
  console.log(e.target.value)
  //setList(e.target.value.toLowerCase())
  fetchData();
}

//  useEffect(() => {
//     SearchResult.fetchData()
//      .then(res => setList(res))
//  }, [])
=======
 const handleInput = (e) => {
   console.log(e.target.value)
   setInput(e.target.value.toLowerCase())
 }

 useEffect(() => {
   fetchData()
     .then(res => setList(res))
 }, [])


 return (
   <Box className="App"
     sx={{
       width: 400,
       height: 660,
       margin: '100px auto',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-evenly'
     }}>
     <Typography variant='h4' component={'h1'}>Search Bar</Typography>
     <Autocomplete
       disablePortal
       id="combo-box-demo"

       options={list}
onChange={handleInput}
       renderInput={(params) => <TextField {...params}
         label="Search For Places"
         

       options={list.map(item => item.title)}

       renderInput={(params) => <TextField {...params}
         label="Search For Places"
         onSelect={handleInput}

         sx={{
           width: 350,
           margin: '10px auto',
         }} />}
     />



     {/* <FilterProducts searchstring={input} list={list} /> */}
     {/* <SearchResult input={input}/> */}
   </Box>
 );
}

export default SearchBar;
