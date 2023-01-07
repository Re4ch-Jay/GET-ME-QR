import React from 'react'

function Button({type}) {
  return (
    <button type="button" className="my-10 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" disabled>Download {type}</button>
  )
}

export default Button