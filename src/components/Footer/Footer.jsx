import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>Privacy</li>
        <li>Legal</li>
        <li>Contact</li>
        <li>About us</li>
      </ul>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <p className='copyright-text'>© TrailFlix Ltd 2024</p>
    </div>
  )
}

export default Footer
