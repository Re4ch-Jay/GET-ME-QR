import { useState } from "react"

function AboutSecure() {
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
            <button type="button" onClick={handleClickAccordion1} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
            <span>Why this this password generator is secure?</span>
            <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
    {accordion1 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Because we generate with random characters, which provide more secure and protection.
            </p>
            </div>
        </div>
    }
  

    <h2>
        <button type="button" onClick={handleClickAccordion2} className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
        <span>What is the option of generating password</span>
        <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </h2>
    {accordion2 && 
        <div>
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
                Currently, we have 4 options for customer to choose like, like lowercase or uppercase letters, symbols, and numbers.
            </p>
          
            </div>
        </div>
    }
    </div>

  )
}

export default AboutSecure