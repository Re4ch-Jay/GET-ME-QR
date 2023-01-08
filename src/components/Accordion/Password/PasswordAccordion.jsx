import React, { useState } from 'react'
import Card from '../../Card'
import AboutGenerator from './AboutGenerator'
import AboutSecure from './AboutSecure'

function PasswordAccordion() {

    const [aboutChoice, setAboutChoice] = useState(<AboutSecure/>)

    const handleClickAboutBasics= () => {
      setAboutChoice(<AboutGenerator />)
    }

    const handleClickAboutSecure = () => {
        setAboutChoice(<AboutSecure />)
      }

  return (
    <>
    <div className='flex justify-center items-center text-center my-10'>
        <h6 className="max-w-21xl mb-4 text-4xl font-bold md:text-1xl xl:text-3xl dark:text-white">Basic information about Password generator</h6>
    </div>
        <div className='flex gap-12 justify-center items-center flex-wrap' >
        <button onClick={handleClickAboutBasics} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Basics
        </button>

        <button onClick={handleClickAboutSecure} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Secure
        </button>
        </div>
        <div className='my-10'/>
    <Card margin={"0 auto"} maxWidth={'800px'}>
        {aboutChoice}
    </Card>
    </>
  )
}

export default PasswordAccordion