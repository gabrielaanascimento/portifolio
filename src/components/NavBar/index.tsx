// src/components/NavBar/index.tsx
"use client"
import React, { useState } from 'react'
import './styles.css'
import { ShimmerButton } from "@/components/ui/shimmer-button";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo"><img src="/logo.png" alt="logo" className='w-20 h-20' /></div>
        
        {/* Botão Hambúrguer para mobile */}
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/" onClick={toggleMenu}>Início</a></li>
          <li><a href="/about" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="/projects" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="/login" onClick={toggleMenu}>Login</a></li>

          <li><a href="/contact">
            <ShimmerButton className="shadow-2xl" onClick={toggleMenu}>
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