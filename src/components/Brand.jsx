import React from 'react'
import { Link } from 'react-router-dom'

function Brand() {
  return (
    <Link to="/" class="flex flex-col items-center">
        <img src="images/logo.png" class="h-50 mr-3 sm:h-30" alt="Get Me QR Logo" />
    </Link>
  )
}

export default Brand