import './Recommend.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

const Recommend = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
        params: {
          longitude: position.coords.longitude,
          latitude:  position.coords.latitude,
          limit: '5'},
        headers: {
          'X-RapidAPI-Key': '0586ce2981msh0c6ede4dfb0d4d1p110fe6jsndf745b79a66f',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
         
        
      };

      axios
        .request(options)
        .then(function (response) {
          setAttractions(
            response.data.data.map((attraction) => ({
              id: attraction.parent_display_name, //Nha Trang
              name: attraction.location_string, //Nha Trang, Khanh Hoa Province"
              description: attraction.name, //Adrenaline & Extreme Tours
              ranking: attraction.subcategory.name, //Outdoor Activities
              img: attraction.photo.images.medium.url,
            }))
          );
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  }, []);

  return (
    <section className='recommended section container'>
      <div className='secContainer'>
        <h1>Recommended Attractions</h1>
        <div className='iconsDiv flex'>
          <HiArrowCircleLeft className='icon' />
          <HiArrowCircleRight className='icon' />
        </div>
        <div className='mainContent grid'>
          {attractions.map((attraction) => (
            <div className='singleCard' key={attraction.id}>
              <div className='cardImage'>
                <img src={attraction.img} alt={attraction.name} />

                <div className='overLayInfo'>
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                </div>
              </div>
              <div className='cardFooter'>
                <div className='number'>{attraction.id}</div>
                <div className='cardText flex'>
                  <h6>{attraction.ranking}</h6>
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
