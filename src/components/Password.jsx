import React, { useState } from 'react'
import Hero from './Hero'
import Paginate from './Paginate'
import Card from './Card'
import Button from './Button'
import { specialCharacters, upperCaseLetters, lowerCaseLetters, numbers} from '../utils/characters'
import VerifyPassword from './VerifyPassword'

function Password() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(null)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeSymbol, setIncludeSymbol] = useState(false)
  const [includeNumber, setIncludeNumber] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = () => {
    setError('')

    if(!includeLowercase && !includeSymbol && !includeUppercase && !includeSymbol) {
      setError("Please select one option")
    }
    if(passwordLength < 8) {
      setError("Password must be atleast 8 characters")
    }else{
      let characterList = ''
      if(includeLowercase) {
        characterList = characterList + lowerCaseLetters;
      }
      if(includeUppercase) {
        characterList = characterList + upperCaseLetters;
      }
      if(includeSymbol) {
        characterList = characterList + specialCharacters;
      }
      if(includeNumber) {
        characterList = characterList + numbers;
      }

      setPassword(createPassword(characterList))
    }
  }
  
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }


  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  return (
    <div>
        <Hero />
        <Paginate />
          <Card id="get-started" maxWidth={'500px'} margin={"80px auto"}>
            <h3 className='mb-10 text-white text-center scale-800 font-extrabold'>Generate your password</h3>
              <textarea id="comment" rows="4" className="w-full px-0 text-sm bg-white border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400" placeholder="Generate password" value={password} disabled></textarea>
              
                    <input type="number" 
                        className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Password length"
                        onChange={e => setPasswordLength(e.target.value)}
                        min='8'
                        max='30'
                        value={passwordLength}
                    />
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="vue-checkbox-list" type="checkbox" value={includeUppercase} onChange={e => setIncludeUppercase(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"/>
                                <label for="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300">Uppercase</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="react-checkbox-list" type="checkbox" value={includeLowercase} onChange={e => setIncludeLowercase(e.target.checked)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"/>
                                <label for="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300">Lowercase</label>
                            </div>
                        </li>
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="angular-checkbox-list" type="checkbox" value={includeNumber} onChange={e => setIncludeNumber(e.target.checked)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"/>
                                <label for="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300">Number</label>
                            </div>
                        </li>
                        <li className="w-full border-gray-600">
                            <div className="flex items-center pl-3">
                                <input id="laravel-checkbox-list" type="checkbox" value={includeSymbol} onChange={e => setIncludeSymbol(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"/>
                                <label for="laravel-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300">Symbol</label>
                            </div>
                        </li>
                    </ul>
                    {error && <div className='text-red-400 my-5'>{error}</div>}
              <Button type={'submit'} title={"Generate"} handleGenerate={handleGenerate}/>
              {password && <Button copyToClipboard={copyToClipboard()} title="Copy" />}
          </Card>
          
          <VerifyPassword />
    </div>

  )
}

export default Password