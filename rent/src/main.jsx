import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements ,
  Route
  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Availability from './pages/Availability.jsx'
import Contact from './pages/Contact.jsx'
import Review from './pages/Review.jsx'
import FAQ from './pages/FAQ.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/> }>
    <Route path='' element={<Home/> }/>
    <Route path='availability' element={<Availability/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='review' element={<Review/>}/>
    <Route path='faq' element={<FAQ/>}/>
</Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
