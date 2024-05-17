// import React from 'react'
// import Header from './pages/Header'
// import Footer from './pages/Footer'
// import { Outlet } from 'react-router-dom'

// function Layout() {
//   return (
//     <>
//     <Header/>
//     <Outlet/>
//     <Footer/>
//     </>
//   )
// }

// export default Layout

import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch();

useEffect(() => {
authService.getCurrentUser()
.then((userData) => {
  if (userData) {
    dispatch(login({userData}))
  }else{
    dispatch(logout())
  }
})
.finally(() => setLoading(false))
},[])

  return !loading ? (
    <>

    <Header/>
    <main>
    <Outlet/>
      {/* Get from react-router-Dom  */}
    </main>
    <Footer/>

  </>
    ) : null
  
}

export default App
