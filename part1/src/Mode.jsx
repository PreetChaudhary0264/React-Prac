import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './context/themeContext'

const Mode = () => {
    const[themeMode,setThemeMode] = useState("light")
    // const {themeMode,darkTheme,lightTheme} = useContext(ThemeContext)

    useEffect(()=>{
        document.querySelector('html').classList.remove("dark","light")
        document.querySelector('html').classList.add(themeMode)
    },[])

    const darkTheme = ()=>{
        setThemeMode("dark")    //basically 2 files ka kaam mane ek me hi kr diya...ye alag alag hoga
    }
    const lightTheme = ()=>{
        setThemeMode("light")
    }
    //yha tak ka kaam dusri file me hoga ye uper wala
    const Handle = (e)=>{
        const modeStataus = e.currentTarget.checked
        if(modeStataus){
            darkTheme()
        }else{
            lightTheme()
        }
    }
  return (
    <div>
      <input type='checkbox'
      checked={themeMode === 'dark'}
      onChange={Handle}
      />
    </div>
  )
}

export default Mode
