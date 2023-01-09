import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../Contexts/ThemeContext'

function Navbar() {
  const {handleClickDarkMode, toggleMode} = useContext(ThemeContext)
  const location = useLocation()
  
  useEffect(() => {
    if(location.pathname === '/') {
      document.title = "Get Me QR | Home";
    }else if(location.pathname === '/about'){
      document.title = "Get Me QR | About";
    }else if(location.pathname === '/contact') {
      document.title = "Get Me QR | Contact";
    }else if(location.pathname === '/password') {
      document.title = "Get Me QR | Home";
    }else if(location.pathname === '/scan') {
      document.title = "Get Me QR | Home";
    }else{
      document.title = "Get Me QR | 404";
    }
  }, [location])

  console.log(location.pathname)
  return (
    <nav className="border-gray-200 px-2 sm:px-4 pt-20 pb-2.5 rounded bg-gray-900">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div className='flex justify-between items-center'>
        <Link to="/" className="flex items-center">
            <img src="images/logo.png" className="h-6 mr-3 sm:h-9" alt="Get Me QR Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Get Me QR</span>
        </Link>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
            <Link to="/" className={location.pathname === '/' || location.pathname === "/scan" || location.pathname === '/password' ? `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-700` : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'} aria-current="page">Home</Link>
            </li>
            <li>
            <Link to="/about" className={location.pathname === '/about' ? `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-700` : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'}>About Dev</Link>
            </li>
            <li>
            <Link to="/contact" className={location.pathname === '/contact' ? `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-700` : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent'}>Contact</Link>
            </li>

            <label className="relative inline-flex items-center cursor-pointer">
              {toggleMode ? <input type="checkbox" checked value={toggleMode} className="sr-only peer" onClick={handleClickDarkMode}/> : <input type="checkbox" value={toggleMode} className="sr-only peer" onClick={handleClickDarkMode} /> }
              {
                toggleMode ? <i className="fa-solid fa-moon mx-1 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent" style={{fontSize: '18px'}}></i> :
                <i className="fa-solid fa-sun mx-1 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"style={{fontSize: '18px'}}></i>
              } 
            </label>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar