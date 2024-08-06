import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
// Carousel / Slider
import Carousel from "react-elastic-carousel"
import { Link } from 'react-router-dom'

// Carousel / Slider    (pagination: false -> para ocultar los puntos debajo de las peliculas)
const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 500, itemsToShow: 2, pagination: false },
  { width: 718, itemsToShow: 3, pagination: false },
  { width: 1150, itemsToShow: 4, pagination: false }
];

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef()

  // const handleWheel = (event)=>{
  //   event.preventDefault;
  //   cardsRef.current.scrollLeft += event.deltaY;
  // }

  // useEffect(()=>{
  //   cardsRef.current.addEventListener('wheel', handleWheel)
  // },[])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWFlNjhjMDkwMDliODQ2NWVkZjhjOTVlMmNlZjUzZiIsIm5iZiI6MTcyMDY2OTUyOC44NTA5OTEsInN1YiI6IjY2OGY1NDY4OTI4N2NjOGJjY2E3MDFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CYhMZeUS86jBITqjQSuY05imKeQ0D8lSJFKJGEvs0_0'
    }
  };

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  return (
    <div className='title-cards'>
      <h2> {title?title:"Trending on TrailFlix"} </h2>
      <div className="card-list" ref={cardsRef}>
      <Carousel breakPoints={breakPoints}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </Carousel> 
      </div>
    </div>
  )
}

export default TitleCards
