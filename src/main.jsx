import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import SearchResult from './SearchResults.jsx'
import Rent from './Rent .jsx'
import MySearches from './MySearches.jsx'
import SignUp from './SignUp.jsx'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const paths = createBrowserRouter (
  [{
    path: '/',
    element: <App/>
  },
  {
    path: '/Nav',
    element: <Nav/>},
        {
      path: '/Footer',
      element: <Footer/>
    },
    {
      path: '/SearchResult',
      element: <SearchResult/>
    },
    {
      path: '/Rent',
      element: <Rent/>
    },
    {
      path: '/MySearches',
      element: <MySearches/>
    },
{ path:'/SignUp',
element: <SignUp/>

}

  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
