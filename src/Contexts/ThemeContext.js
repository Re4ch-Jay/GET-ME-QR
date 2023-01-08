import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({children}) {

    const [toggleMode, setToggleMode] = useState(JSON.parse(localStorage.getItem('dark')));

    const handleClickDarkMode = () => {
        setToggleMode(!toggleMode)
        localStorage.setItem('dark', !toggleMode)
    }

  return (
    <ThemeContext.Provider value={{toggleMode, setToggleMode, handleClickDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider