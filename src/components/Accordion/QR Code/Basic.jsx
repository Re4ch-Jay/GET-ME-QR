import { useState } from "react"

function Basic() {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    

    const handleClickAccordion1 = (id) => {
        setAccordion1(() => 
            !accordion1
        )

        setAccordion2(false);
        setAccordion3(false)
    }

    const handleClickAccordion2 = () => {
        setAccordion2(() => 
            !accordion2
        )
        setAccordion1(false);
        setAccordion3(false)
    }

    const handleClickAccordion3 = () => {
        setAccordion3(() => 
            !accordion3
        )
        setAccordion2(false);
        setAccordion1(false)
    }
   
  return (
    <div>
        <h2>
            <button type="button" onClick={handleClickAccordion1} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 border-gray-700 text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span>What is QR Code generator?</span>
            <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </h2>
    {accordion1 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 border-gray-700">
            <p className="mb-2 text-gray-500 text-gray-400">
            A QR code generator is software that can be used to create customized QR codes that store specific data. Anyone who scans the code can then access content and platforms, such as websites, restaurant menus, PDF files, videos, Wi-Fi networks or social media channels.
            </p>
            </div>
        </div>
    }
  

    <h2>
        <button type="button" onClick={handleClickAccordion2} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 border-gray-700 text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>Is Get Me Qr free?</span>
        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </h2>
    {accordion2 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 border-gray-700">
            <p className="mb-2 text-gray-500 text-gray-400">
            Some basic QR code generators are free to use, but they have limitations. You may not be able to edit content or track QR code performance on free versions. The most effective QR code tools enable you to customize the code, track results and link to nearly any digital content.
            </p>
          
            </div>
        </div>
    }
    
    <h2>
        <button type="button" onClick={handleClickAccordion3} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 border-gray-700 text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>Do QR code expired?</span>
        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </h2>
    {accordion3 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 border-gray-700">
            <p className="mb-2 text-gray-500 text-gray-400">
                No. QR codes do not have an expiration date. Each QR code is programmed with a link to digital content. It is possible to “pause” this link, but as long as it is active, the QR code will work. MyQRCode keeps your QR code active for as long as you need it.
            </p>
            
            </div>
        </div>
    }
    </div>

  )
}

export default Basic