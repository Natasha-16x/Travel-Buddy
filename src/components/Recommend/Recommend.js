import './Recommend.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

const Recommend = () => {
  const [attractions, setAttractions] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
        params: {
          longitude: position.coords.longitude,
          latitude:  position.coords.latitude,
          limit: '6'},
        headers: {
          'X-RapidAPI-Key': '386e9f68cbmsh8084ffcb2a03606p12b177jsn3a93e4fd226a',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
      };

      axios
        .request(options)
        .then(function (response) {          
          setAttractions(
            response.data.data.map((attraction) => ({
              ids: attraction.name,
              idDisplay: attraction.parent_display_name, 
              name: attraction.location_string, 
              description: attraction.description, 
              ranking: attraction.ranking, 
              img: attraction.photo?.images?.medium?.url,
            }))
          );
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  }, []);

  const handleSlideLeft = () => {
    setSlideIndex(slideIndex - 1);
    // console.log("left")
  };

  const handleSlideRight = () => {
    setSlideIndex(slideIndex + 1);
  };

  
  const startIndex = Math.max(slideIndex * 3, 0);
  const endIndex = Math.min((slideIndex + 1) * 3, attractions.length);

  return (
    <section className='recommended section container'>
      <div className='secContainer'>
        <h1>Recommended Attractions</h1>
        <div className='iconsDiv flex'>
          <HiArrowCircleLeft className='icon' onClick={handleSlideLeft} />
          <HiArrowCircleRight className='icon' onClick={handleSlideRight} />
        </div>
        <div className='mainContent grid'>
          {attractions.slice(startIndex, endIndex).map((attraction) => (
            <div className='singleCard' key={attraction.id}>
              <div className='cardImage'>
                <img src={attraction.img} alt={attraction.ids} />

                <div className='overLayInfo'>
                  <h3>{attraction.idDisplay}</h3> 
                  <h4>{attraction.category}</h4> 
                  <p>{attraction.description}</p>
                </div>
              </div>
              <div className='cardFooter'>
                 <div className='number'>{attraction.ids}</div> 
                <div className='cardText flex'>
                  <h6>{attraction.ranking}</h6> 
                  <p>{attraction.name}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommend;
