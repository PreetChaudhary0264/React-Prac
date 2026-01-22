import React, { useState, useCallback,useEffect, useRef} from 'react'

const Copy = () => {
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [char, setChar] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(
        () => {
           let pass = ""
           let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
           if(number)str += "0123456789";
           if(char)str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

           for(let i = 0; i < length; i++){
            let idx = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(idx);
           }
           setPassword(pass);
        },
        [char,number,length],
      )

      const copyToClipboard = ()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,3)
        window.navigator.clipboard.writeText(password)
      }

      useEffect(()=>{
        passwordGenerator()
      },[length,number,char])

  return (
    <>
      <h1 className='text-center'>Password Generator</h1>
      <div>
        <input type='text'
        value = {password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />

      </div>
      <button>Copy</button>
      <div>
        <input type='range'
         min={6}
         max={20}
         value={length}
         onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>

      <div>
        <input type='checkbox'
        checked={number}
        id='numberInput'
        onChange={()=>{setNumber(prev => !prev)}}
        />
        <label>Number</label>
      </div>
      <div>
        <input type='checkbox'
        checked={char}
        id='charInput'
        onChange={()=>{setChar(prev => !prev)}}
        />
        <label>Character</label>
      </div>
      <button className='border-2 bg-amber-950 text-white p-2 rounded-3xl'
      onClick={copyToClipboard}
      >Copy</button>
    </>
  )
}

export default Copy