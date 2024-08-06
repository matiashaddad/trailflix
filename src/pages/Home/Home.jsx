import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div  className='home'>
      <Navbar/>
      
        <div className="hero">
          <img src={hero_banner} alt="" className='hero-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img'/>
            <p>On his 11th birthday, Harry Potter learns that he's a powerful wizard with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.
            </p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>

      <div className="more-cards">
        <TitleCards title={"In your area"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Best selection for you"} category={"popular"}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
