import React from 'react'
import { Link } from 'react-router-dom'
const Landingpage = () => {
  return (
    <div>
      <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sanction Check
        <br className="hidden lg:inline-block"/>Instantly Flag Risky Entities
      </h1>
      <p className="mb-8 leading-relaxed">Screen entities in seconds using smart global sanctions matching. Sanction Guard helps you identify high-risk individuals and organizations with precision, speed, and transparency. Easily screen individuals and organizations against global sanctions lists using OpenSanctions API fast, accurate, and secure</p>
      <div className="flex justify-center">
        <Link to="/search">
        <button className="inline-flex text-white border-1 border-white py-2 px-6 bg-transparent appearance-none transition-all duration-300 hover:shadow-2xl hover:border-white hover:shadow-white rounded text-lg">Let's Go</button></Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
      <img className="object-cover object-center rounded" alt="hero" width={300} src="logo.svg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Landingpage
