import './Recommend.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'

const Recommend = () => {
  const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
            params: {location_id: '298571', limit: '6', sort: 'recommended'},
            headers: {
                // 'X-RapidAPI-Key': '0586ce2981msh0c6ede4dfb0d4d1p110fe6jsndf745b79a66f',
                // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
             }  
    };
  
    axios.request(options).then(function (response) {
        setAttractions(response.data.data.map((attraction) => ({
            name: attraction.name,
            description: attraction.description,
            ranking: attraction.ranking,
            img: attraction.photo.images.medium.url
          })));
        console(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <section className='recommended section container'>
      <div className='secContainer'>
        <h1>Recommended Attractions</h1>
        <div className='iconsDiv flex'>
          <HiArrowCircleLeft className='icon'/>
          <HiArrowCircleRight className='icon'/>
        </div>
{/* 
          {attractions.map((attraction) => (
              <li key={attraction.location_id}>
                  <h2>{attraction.name}</h2>
                  <p>{attraction.description}</p>
                  <p>Ranking: {attraction.ranking}</p>
                  <img src={attraction.img} alt={attraction.name} />
              </li>
          ))} */}
             
        
        <div className='mainContent grid'>
        {attractions.map((attraction) => (
     
           <div className="singleCard" key={attraction.id}>
            <div className="cardImage">

            <img src={attraction.img} alt={attraction.name} />
              
              {/* <img src={pic} alt="Image title" /> */}

              <img src={attractions.img} alt={attractions.name} />

              <div className="overLayInfo">
                <h3>{attraction.name}</h3>
                <p>
                {attraction.description}
                  {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum commodi itaque illo aliquid magnam repudiandae, sapiente minus eius totam fugit maxime nobis pariatur, vero aut aperiam perferendis! Soluta, commodi est? */}
                </p>
              </div>
            </div>
            <div className='cardFooter'>
              <div className='number'>
                {attraction.location_id}
              </div>
              <div className='cardText flex'>
                <h6>{attraction.ranking}</h6>
                {/* <span className='flex'>
                  <span className='dot'>
                    some text
                  </span>
                </span> */}

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
