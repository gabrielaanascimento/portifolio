import React from 'react'
import NavBar from '../NavBar'
import AboutResume from '../AboutResume'

const Header = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '400px',
        backgroundImage: "url('/header-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <NavBar />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '14rem'
      }}>
        <AboutResume />
      </div>

    </div>
  )
}

export default Header
