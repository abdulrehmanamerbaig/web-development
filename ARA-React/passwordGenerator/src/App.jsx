import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
    if (numberAllowed){
      str.push("0123456789")
    } 
    if (characterAllowed) {
      str.push("!@#$%^&*()_+-={}[]|:;'<>,.?/")
    }

    // console.log(str)
    for (let i = 1; i < length; i++) {
      const array_index = Math.floor(Math.random() * str.length)
      const ch = Math.floor(Math.random() * str[array_index].length);
      pass += str[array_index].charAt(ch)

      
    }

    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='bg-warning'>
        <input 
        type="text"
        value = {password}
        placeholder='Your Password'
        className='border-0 outline-none w-50'
        readOnly
        ref={passwordRef}
         />
         <button 
         className='btn btn-primary'
         onClick={copyPasswordToClipboard}>Copy</button>
         <br />
         <input 
         type="range" 
         min={5}
         max={50}
         value={length}
          onChange={(e) => setLength(e.target.value)}
         />
         <p>Length: {length}</p>

         <input 
         type="checkbox"
         value={numberAllowed}
         onChange={() => setNumberAllowed(prevStatus =>  !prevStatus)}
          />
          <label>Numbers</label>

          <input 
         type="checkbox"
         value={characterAllowed}
         onChange={ () => setCharacterAllowed(prevStatus =>  !prevStatus)}
          />
          <label>Characters</label>

         
      </div>
    </>
  )
}

export default App
