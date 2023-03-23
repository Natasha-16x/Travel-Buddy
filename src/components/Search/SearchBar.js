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
}

export default SearchBar;

