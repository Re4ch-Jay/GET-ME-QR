import Accordion from '../components/Accordion'
import React from 'react'
import Card from '../components/Card'

function About() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="images/logo.png" alt="mockup"/>
              </div>                
          </div>
      </section>
      <div className='flex justify-center items-center text-center my-10'>
        <h6 className="max-w-21xl mb-4 text-4xl font-bold md:text-1xl xl:text-3xl dark:text-white">Basic information about us</h6>
      </div>
      <Card margin={"0 auto"} maxWidth={'800px'}>
        <Accordion/>
      </Card>
    </div>
  )
}

export default About