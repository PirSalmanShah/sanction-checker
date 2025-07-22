import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src="logo.svg" alt="" />
      <span className="ml-3 text-xl">SanctionCheck</span>
    </NavLink>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to="/search" className="mr-5 hover:text-white">Sreach</NavLink>
      <NavLink to="/about" className="mr-5 hover:text-white">About Me</NavLink>
      
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar
