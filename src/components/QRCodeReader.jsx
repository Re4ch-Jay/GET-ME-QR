import React, { useState } from 'react'
import Card from './Card'
import Hero from './Hero'
import Paginate from './Paginate'
import QrScanner from 'qr-scanner'
import validator from 'validator'
function QRCodeReader() {
    const [data, setData] = useState('')
    const [error, setError] = useState('')
    const readQR = (e) => {
        setData('')
        setError('')
        const file = e.target.files[0]

        if(!file) {
            setError('Please choose your QR code file')
        }

        QrScanner.scanImage(file, {returnDetailedScanResult: true})
        .then(res => setData(res.data))
        .catch(() => setError("Cannot scan this file"))
    }
  return (
    <div>
        <Hero />
        <Paginate />
        
        <Card maxWidth={'800px'} margin={'50px auto'}>
                      
            <label className="block mb-5 text-sm font-medium font-bold text-lg text-gray-900 text-white">Upload file</label>
            <p className="mt-1 text-sm text-gray-500 text-gray-300 mb-5" id="file_input_help">Upload your QR code file to scan. Not QR code image will be cause an error and cannnot scan and see the output</p>
            <input className="block mb-5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"  onChange={e => readQR(e)}/>
            <p className="mt-1 text-sm text-gray-500 text-gray-300 mb-5" id="file_input_help">SVG, PNG, JPG or GIF.</p>

            {error && <div className='block mb-5 text-sm font-medium text-red-500 my-5'>{error}</div>}
            {validator.isURL(data) ? <a href={data} target="_blank" className='mt-1 text-sm text-gray-500 text-gray-300 underline'>{data}</a> : data && <p className='mt-1 text-sm text-gray-500 text-gray-300'>Result: {data}</p>}
        </Card>
        
    </div>
  )
}

export default QRCodeReader