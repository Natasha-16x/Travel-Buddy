import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: 'https://travel-places.p.rapidapi.com/',
      headers: {
        "X-RapidAPI-Key": "0586ce2981msh0c6ede4dfb0d4d1p110fe6jsndf745b79a66f",
        "X-RapidAPI-Host": "travel-places.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search for City or Country"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;