import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/cards/logo.png'
import search_icon from '../../assets/cards/search_icon.png'
import bell_icon from '../../assets/cards/bell_icon.png'
import profile_img from '../../assets/cards/profile_img.png'
import caret_img from '../../assets/cards/caret_img.png'
import { logout } from '../../firebase'

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  // change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          {/* <li>Trending</li> */}
          <li>Playlist</li>
          <li>Search</li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* <img src={search_icon} alt="" className='icons'/>
        <p>Kids</p> */}
        {/* <img src={bell_icon} alt="" className='icons'/> */}
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_img} alt="" className='caret'/>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Log out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
