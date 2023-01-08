import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import QRAccordion from '../components/Accordion/QR Code/QRAccordion'
import PasswordAccordion from '../components/Accordion/Password/PasswordAccordion'

function Contact() {
  const [faq, setFaq] = useState(false)

  const handleClick = () => {
    setFaq(faq => !faq)
  }
  return (
    <div className='my-10'>
    <Card maxWidth={'1000px'} margin={'0 auto'}>
      <h1 className='text-white font-extrabold'>Contact Us</h1>
      <p className='text-gray-400'>If you have any questions or concerns, please fill out the form below and our team will reach out to you within a few hours.</p>
      
      <form>
          <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
          </div>
          <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smith" required/>
          </div>
          
        <div className="my-6">
        
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@email.com" required/>
        </div>
        
        <div className="my-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </div>
       
        <Button type={'Send Message'} /> 
        <Button type={'FAQ'} handleGenerate={handleClick} /> 
      </form>
    </Card>
    {faq && (
      <>
        <QRAccordion/>
        <PasswordAccordion/>
      </>
    )}
    </div>
  )
}

export default Contact