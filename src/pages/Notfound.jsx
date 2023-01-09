import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../components/Brand'

function Notfound() {
  return (
    <section class="bg-white bg-gray-900 flex">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Sorry :( Cannot find that page</h1>
              
              <Link to="/" class="my-12 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                  Home
              </Link> 
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Brand />
          </div>                
      </div>
  </section>
  )
}

export default Notfound