import React from 'react'

function Card({children, maxWidth, margin}) {
  return (
    <div className="my-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" style={{maxWidth: maxWidth, margin: margin}}>
        {children}
    </div>
  )
}

export default Card