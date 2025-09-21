import React from 'react'
import './styles.css'
import { ShimmerButton } from "@/components/ui/shimmer-button";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"><img src="/logo.png" alt="logo" className='w-20 h-20' /></div>
        <ul className="navbar-links">
          <li><a href="/">Início</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/projects">Projetos</a></li>
          <li><a href="/login">Login</a></li>

          <li><a href="/contact">
            <ShimmerButton className="shadow-2xl">
              <span >
                Contato
              </span>
            </ShimmerButton>
          </a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar