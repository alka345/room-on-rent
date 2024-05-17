import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
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
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { Provider } from 'react-redux'
import AuthLayout from './AuthLayout.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/> }>
//     <Route path='' element={<Home/> }/>
//     <Route path='login' element={<Login/> }/>
//     <Route path='register' element={<Signup/> }/>
//     <Route path='availability' element={<Availability/>}/>
//     <Route path='contact' element={<Contact/>}/>
//     <Route path='review' element={<Review/>}/>
//     <Route path='faq' element={<FAQ/>}/>
// </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/register",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
      
        {
            path: "/availability",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Availability/>
                </AuthLayout>
            ),
        },
        {
            path: "/contact",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Contact />
                </AuthLayout>
            ),
        },
        {
            path: "/review",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Review />
                </AuthLayout>
            ),
        },
        {
            path: "/faq",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <FAQ />
                </AuthLayout>
            ),
        },

    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
