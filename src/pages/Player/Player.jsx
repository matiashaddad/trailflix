import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  // 3. En el useEffect, buscar pelicula por id
  const {id} = useParams();
  const navigate = useNavigate();

  // 2. guardar la respuesta del json en un/a variable/objeto
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWFlNjhjMDkwMDliODQ2NWVkZjhjOTVlMmNlZjUzZiIsIm5iZiI6MTcyMTA5MjA4My40NjE5MTIsInN1YiI6IjY2OGY1NDY4OTI4N2NjOGJjY2E3MDFkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a3kq0xxhOUJRghsEf9b2_jPG1e9dbMUCQZ0lx7I2ON8'
    }
  };
  
  // 1. se agrega el fetch en el arrow function
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>window.history.back()}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
