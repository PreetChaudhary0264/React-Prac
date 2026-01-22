import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UserContextProvider from './context/UserContextProvider.jsx'
import { ThemeProvider } from './context/themeContext.js'

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank_'
//     },
//     Children:'Google link'
// }
const user = "Mai hu Don"

const reactElement = React.createElement(
   'a',
   {href:'https://www.google.com', target:'_blank'},
   'Google Link',
    user
)

const anotherElement = (
  <a href='www.google.com' target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <UserContextProvider> */}
    {/* <ThemeProvider value={{themeMode,darkTheme,lightTheme}}> */}
   <App />
   {/* </ThemeProvider> */}
  {/* </UserContextProvider> */}
  </BrowserRouter>
  
)

//ye jo darktheme methods hai inme hum functionaly add kaise kre?
//same name se function bna lo and jo functionality usme likhoge wo khud inme chli jaygi

// reactElement,
  // anotherElement,  //jab ye chl rha hai to react element kyu nhi chl rha?  bcoz ho skta hai ki keya ke name alag likhe ho wha function me
  //ye bina fragments ke kaise chl gya bcoz ye object me convert to hoga hi and objects ke liye call nhi krna pdta
    {/* App()  atTheEnd wo ek function hai to ye bhi valid hai*/}
