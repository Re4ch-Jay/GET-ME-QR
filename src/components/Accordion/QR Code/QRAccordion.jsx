import React, { useContext, useState } from 'react'
import Basic from './Basic'
import Design from './Design'
import Download from './Download'
import Card from '../../Card'
import { ThemeContext } from '../../../Contexts/ThemeContext'

function QRAccordion() {
    const {toggleMode} = useContext(ThemeContext)
    const [aboutChoice, setAboutChoice] = useState(<Basic/>)

    const handleClickAboutBasics = () => {
      setAboutChoice(<Basic />)
    }
  
    const handleClickAboutDownload= () => {
      setAboutChoice(<Download />)
    }
  
    const handleClickAboutDesign= () => {
      setAboutChoice(<Design />)
    }

  return (
    <>
    <div className='flex justify-center items-center text-center my-10'>
        <h6 className={toggleMode ? "max-w-21xl mb-4 text-4xl font-bold md:text-1xl xl:text-3xl text-white" : "max-w-21xl mb-4 text-4xl font-bold md:text-1xl xl:text-3xl" }>Basic information about QR Code generator</h6>
    </div>
        <div className='flex gap-12 justify-center items-center flex-wrap' >
        <button onClick={handleClickAboutBasics} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
            Basics
        </button>

        <button onClick={handleClickAboutDesign} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
            Design QR Code
        </button>

        <button onClick={handleClickAboutDownload} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
            Download QR code
        </button>
        </div>
        <div className='my-10'/>
    <Card margin={"0 auto"} maxWidth={'800px'}>
        
        {aboutChoice}
    </Card>
    </>
  )
}

export default QRAccordion