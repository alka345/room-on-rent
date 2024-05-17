
//         <header className="sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="/login"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="/register"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Register
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" :"text-gray-700" 
//                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/availability"
//                                     className={({isActive}) =>
                          
//                                     `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" :"text-gray-700" 
//                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Availability
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" :"text-gray-700" 
//                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/review"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" :"text-gray-700" 
//                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Review
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/faq"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700" :"text-gray-700" 
//                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     FAQ
//                                 </NavLink>
//                             </li>
                            
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }


import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
import Container from '../components/container/Container'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name : 'Home',
      slug : '/',
      active : true
    },
    {
      name : 'Login',
      slug : '/login',
      active : !authStatus,
    },
    {
      name : 'SignUp',
      slug : '/register',
      active : !authStatus,
    },
    {
      name : 'Availability',
      slug : '/availability',
      active : authStatus
    },
    {
      name : 'Contact',
      slug : '/contact',
      active : authStatus
    },
    {
      name : 'Review',
      slug : '/review',
      active : authStatus
    },
    {
      name : 'FAQ',
      slug : '/faq',
      active : authStatus
    },
  ]

  
  return (
    <header className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 '>

      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
                LOGO
              {/* <Logo width='70px'/> */}
              
            </Link>
          </div>
          <ul className='flex ml-auto'>
           {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
              onClick={() => navigate(item.slug)}
              className='inline-block px-6 py-2 duration-200 hover:text-emerald-700 rounded-full'
              >{item.name}</button>
            </li>
          ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
