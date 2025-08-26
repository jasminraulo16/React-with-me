import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <h1 className='text-4xl'>Password Generator</h1>
     <div className=' max-w-lg mx-auto px-4 py-3 bg-amber-300 my-8 rounded-2xl'>
      <div className='w-full flex max-w-lg mx-auto px-4 py-3 bg-amber-300 my-8 rounded-2xl'>
        <input 
        type="text"
        value={password}
        className='bg-amber-50 px-6 py-2 rounded-2xl w-full'
        placeholder='password'
        ref={passwordRef} />
        <button className='bg-amber-800 text-white px-3 py-2 rounded-xl outline-none shrink-0'
        onClick={copyPassToClip}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=>{
                setNumAllowed((prev) => !prev)
              }} />
              <label>Number</label>
          </div>
          <div>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={()=>{
                setCharAllowed((prev) => !prev)
              }} />
              <label>Character</label>
          </div>
      </div>
     </div>
    </>
  )
}

export default App
