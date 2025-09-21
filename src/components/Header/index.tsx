import React from 'react'
import './styles.css'
import NavBar from '../NavBar'
import Main from '../Main'


const Header = () => {
  return (
    <div className='header-container'>
        <NavBar />
        <Main />
    </div>
  )
}

export default Header