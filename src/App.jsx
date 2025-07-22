import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  

  
  // console.log(apiKey)
  return (
    <>
    <div className="fixed top-0 left-0 w-full min-h-screen -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar/>
        {/* {first.map((first, index) => (
  <div key={index} className="sanction-card">
    <h2>{first.caption}</h2>
    <p><strong>Type:</strong> {first.schema}</p>
    <p><strong>Score:</strong> {first.score}</p>
    <p><strong>First Seen:</strong> {new Date(first.first_seen).toLocaleDateString()}</p>
    <p><strong>Last Seen:</strong> {new Date(first.last_seen).toLocaleDateString()}</p>

    {first.properties.birthDate && (
      <p><strong>Birth Date:</strong> {first.properties.birthDate.join(', ')}</p>
    )}
    {first.properties.citizenship && (
      <p><strong>Citizenship:</strong> {first.properties.citizenship.join(', ')}</p>
    )}
    {first.datasets && (
      <details>
        <summary><strong>Datasets:</strong></summary>
        <ul>
          {first.datasets.map((ds, i) => <li key={i}>{ds}</li>)}
        </ul>
      </details>
    )}
    <hr />
  </div>
))} */}


      
<Outlet/>
    </>
  )
}

export default App
