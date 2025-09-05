import React from 'react'
import NavBar from '../NavBar'
import AboutResume from '../AboutResume'

const Header = () => {
  return (
    <div
      className="w-full h-96 md:h-[400px] bg-cover bg-center backdrop-blur-md flex flex-col items-center relative gap-3"
      style={{ backgroundImage: "url('/header-bg.png')" }}
    >
      <div className="w-full flex justify-center items-center pt-5">
        <NavBar />
      </div>
      <div className="w-full flex justify-center mt-auto md:mt-12 mb-20">
        <AboutResume />
      </div>
    </div>
  )
}

export default Header