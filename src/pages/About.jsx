import { useContext } from "react"
import PasswordAccordion from "../components/Accordion/Password/PasswordAccordion"
import QRAccordion from "../components/Accordion/QR Code/QRAccordion"
import { ThemeContext } from "../Contexts/ThemeContext"

function About() {
  const {toggleMode} = useContext(ThemeContext)
  return (
    <div>
      <section className={toggleMode ? "bg-gray-900" : "bg-white "}>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className={toggleMode ? "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white" : "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray"}>Co-Founder<br />Get Me QR</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-400">Get Me QR we want to make a tool to help you generate your QR in a more elegant way and clean. <br />I am Reach a Software Developer, who want to make a big impact to the world in a more efficient way</p>
              </div>
              <div className="lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="images/reach.jpg" alt="co founders" className='class="w-50 h-50 p-1 rounded-full ring-2 ring-gray-300 ring-gray-500"' />
              </div>                
          </div>
      </section>
      <QRAccordion />
      <PasswordAccordion/>
      <div className="mb-10"></div>
    </div>
  )
}

export default About