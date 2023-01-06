import React from 'react'

function Card({children}) {
  return (
    <div className="my-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {children}
    </div>
  )
}

export default Card