import React from 'react'

function ButtonDownload({onImageDownload, type, value}) {
  return (
    <input type="button" value={value} onClick={() => onImageDownload(type)}  className="my-10 cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" />
  )
}

export default ButtonDownload