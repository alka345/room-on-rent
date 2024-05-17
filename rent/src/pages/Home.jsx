import React from 'react'
import ReactDOM from 'react-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <div>
      <div className='mt-11'>
      <h2>Your Safe Haven : Where <br /> Quality Living Meets <span className='text-emerald-700'> Community <br /> Harmony </span></h2>
      <p className='mt-6'>Welcome to our heaven,where  safety,community, and outdoor enjoyment <br /> come together seamlessly.Our rooms prioritize  your security with top-notch features <br /> for peace of mind. We handpick tenants to foster a harmonious community , <br />where good neightbours are guaranteed.</p>
      </div>
    <div className='flex justify-center mb-11 mt-10'>
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Availability</button>
      <button type="button" class="text-gray-900 bg-white border flex border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
</svg>
Contact</button>
    </div>

    <div className='flex justify-evenly mt-11'>
          <div>Home</div>
          <div>Safety</div>
          <div>People</div>
      </div>
    </div>
  )
}

export default Home
