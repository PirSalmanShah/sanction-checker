import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Landingpage from './components/Landingpage.jsx'
import About from './components/About.jsx'
import Search from './components/Search.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This includes Navbar, Footer, etc.
    children: [
      {
        index:true,
        element:<Landingpage/>
      },
      {
        path:"search",
        element:<Search/>
      },
      {
        path: "about",
        element: <About />,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router={router} />
  </StrictMode>,
)
