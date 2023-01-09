import { useState } from "react"

function Design() {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);

    const handleClickAccordion1 = (id) => {
        setAccordion1(() => 
            !accordion1
        )

        setAccordion2(false);
        
    }

    const handleClickAccordion2 = () => {
        setAccordion2(() => 
            !accordion2
        )
        setAccordion1(false);
       
    }

   
  return (
    <div>
        <h2>
            <button type="button" onClick={handleClickAccordion1} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 border-gray-700 text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span>Can I customize my QR</span>
            <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </h2>
    {accordion1 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 border-gray-700">
            <p className="mb-2 text-gray-500 text-gray-400">
            Yes. Dynamic QR codes can be edited. You can change the destination link of the code and the content at that destination. You can also edit the appearance of the QR code while maintaining the same functionality.
            </p>
            </div>
        </div>
    }
  

    <h2>
        <button type="button" onClick={handleClickAccordion2} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 border-gray-700 text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>Is there limit to design and creating QR?</span>
        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </h2>
    {accordion2 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 border-gray-700">
            <p className="mb-2 text-gray-500 text-gray-400">
            No, there is no limit. You can create as many QR codes as you like. If you run a business with thousands of products in stock, you can generate a unique QR code for each and every item. This is how QR codes can help with inventory tracking.
            </p>
          
            </div>
        </div>
    }
    </div>

  )
}

export default Design