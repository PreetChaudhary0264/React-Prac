import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const login = () => {
    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
       <h1> Login</h1>
       <input type='text' placeholder='UserName'
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
       />
       <input type='text' placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       />
       <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default login
