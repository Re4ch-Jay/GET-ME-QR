import React from 'react'
import Social from './Social'

function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 bg-gray-900">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                    <img src="images/logo.png" className="h-8 mr-3" alt="Get Me QR Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Get Me QR</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Follow us</h2>
                    <ul className="text-gray-600 text-gray-400">
                        <li className="mb-4">
                            <a href="https://github.com/Re4ch-Jay" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100063924045559" className="hover:underline">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Visit Us</h2>
                    <ul className="text-gray-600 text-gray-400">
                        <li className="mb-4">
                            <a href="/#" className="hover:underline">Get Me QR</a>
                        </li>
                        {/* <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li> */}
                    </ul>
                </div>
                {/* <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Legal</h2>
                    <ul className="text-gray-600 text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <Social/>
    </footer>

  )
}

export default Footer