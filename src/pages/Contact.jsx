import React, { useRef, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import QRAccordion from '../components/Accordion/QR Code/QRAccordion'
import PasswordAccordion from '../components/Accordion/Password/PasswordAccordion'
import Social from '../components/Social'
import emailjs from '@emailjs/browser';
import Message from '../components/Message'

function Contact() {
  const [faq, setFaq] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const form = useRef()

  const handleClick = () => {
    setFaq(faq => !faq)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbr6i0s', 'template_ja62v9o', form.current, 'c_u6-urCZFihNSh8B')
      .then((result) => {
          console.log(result.text);
          setMessage("Message send successfully! Thank you for your message. We will reply to you as soon as possible")
      }, (error) => {
          console.log(error.text);
          setError("Sorry!!! Message send failed! Try again later.")
      });
      e.target.reset();
  };

  return (
    <div className='my-10'>
    <Card maxWidth={'1000px'} margin={'0 auto'}>
      <h1 className='text-white font-extrabold'>Contact Us</h1>
      <p className='text-gray-400'>If you have any questions or concerns, please fill out the form below and our team will reach out to you within a few hours.</p>
      
      <form onSubmit={sendEmail} ref={form}>
          <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white">First Name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John" required name='firstname'/>
          </div>
          <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Last Name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Smith" required name='lastname'/>
          </div>
          
        <div className="my-6">
        
          <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Your email</label>
          <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="example@email.com" required name='email'/>
        </div>
        
        <div className="my-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 text-white" >Message</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required name='message'></textarea>

        </div>
        <Social />

        {message && (
          <Message message={message} setMessage={setMessage} />
        )}

        {error && (
          <Message error={error} setError={setError}/>
        )}

        <Button type={'submit'} title={'Send Message'} /> 
        <Button title={'FAQ'} handleGenerate={handleClick} /> 
        
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