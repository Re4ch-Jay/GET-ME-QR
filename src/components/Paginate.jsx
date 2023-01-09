import React from 'react'
import { Link } from 'react-router-dom'

function Paginate() {
  return (
    <div className='flex gap-12 justify-center items-center flex-wrap' >
        <Link to="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
            QR Code Generator
        </Link>

        <Link to="/scan" className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
          QR Code Scanner
        </Link>

        <Link to="/password" className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"> 
            Password Generator
        </Link>

       
    </div>
  )
}

export default Paginate