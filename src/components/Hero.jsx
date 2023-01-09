import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import { ThemeContext } from '../Contexts/ThemeContext'

function Hero() {
    const {toggleMode} = useContext(ThemeContext)
  return (
    <section className={!toggleMode ? "bg-gray-900" : "bg-white"}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className={!toggleMode ? "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white" : "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"}>Software tool to generate your
                </h1>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-600">               
                 <Typical
                    steps={['QR Code', 2000, 'QR Scanner', 2000, 'Password', 2000]}
                    loop={Infinity}
                    wrapper="h1"
                />
                </h1>

                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-400">Get Me QR is one of the most popular free online qr code generators with millions of already created QR codes. The high resolution of the QR codes and the powerful design options make it one of the best free QR code generators on the web that can be used for commercial and print purposes.</p>
                <a href="#get-started" className={!toggleMode ? "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900" : "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900"}>
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <Link to="/about" className={!toggleMode ? "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800" : "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-4 focus:ring-gray-100 text-dark border-gray-700 focus:ring-gray-800"}>
                    About Dev
                </Link> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="images/logo.png" alt="mockup"/>
                {/* https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png */}
            </div>                
        </div>
    </section>
  )
}

export default Hero