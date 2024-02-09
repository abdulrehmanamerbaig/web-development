import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true)
  const [lowercaseAllowed, setLowercaseAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let dependencies = []
    let flag = true
    if (uppercaseAllowed){
      dependencies.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    else flag = false
    if (lowercaseAllowed){
      flag = true
      dependencies.push("abcdefghijklmnopqrstuvwxyz")
    }
    if (numberAllowed){
      flag = true
      dependencies.push("0123456789")
    }
    if (characterAllowed){
      flag = true
      dependencies.push("!@#$%^&*()_+-={}[]|:;'<>,.?/")
    }
    
    if (!flag) {
      alert("At least one field need to be selected")
      dependencies.push("abcdefghijklmnopqrstuvwxyz")
      setLowercaseAllowed(true) 

      
    }
    for (let i = 0; i < length; i++) {
      const ith_dependency = Math.floor(Math.random() * dependencies.length);
      const ch = Math.floor(Math.random() * dependencies[ith_dependency].length);

      pass += dependencies[ith_dependency].charAt(ch)
      
    }

    setPassword(pass)

  }, [length, uppercaseAllowed, lowercaseAllowed, numberAllowed, characterAllowed ,setPassword])
  let passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    if (!password.length) alert("Password is Empty!") 
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, uppercaseAllowed, lowercaseAllowed, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className=" ">
          <div className='container position-absolute app_'>
            
            <Header />
            
            <div className="clipboard">
              <div className='clipboard-border p-2 d-flex justify-content-between align-items-center' style={{ minWidth: '310px', maxWidth: '510px' }}>
                  <input 
                  className='bg-white'
                  type="text"
                  readOnly
                  value={password}
                  ref = {passwordRef}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  onClick={passwordGenerator}>
                  <path d="M20.3751 13.387V11.9902C20.3751 7.36219 16.6139 3.60938 11.9751 3.60938C10.7132 3.60783 9.46721 3.89093 8.32985 4.43761C7.1925 4.98429 6.19311 5.78047 5.40607 6.76688M3.59998 10.6106V12.0075C3.59998 16.6406 7.35935 20.3906 12 20.3906C13.2583 20.3888 14.5003 20.1063 15.6356 19.5636C16.7709 19.0209 17.7708 18.2318 18.5625 17.2538" stroke="#00F0FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                  <path d="M1.5 12L3.5625 9.9375L5.71875 12M22.5 12L20.4375 14.0625L18.2812 12" stroke="#00F0FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                  </svg>
              </div>
              
              <div className="svg_decor  position-relative mt-3 pb-5" style={{ minWidth: '300px'}}>
                  <svg className='copy_button' onClick={copyPasswordToClipboard} xmlns="http://www.w3.org/2000/svg" style={{ minWidth: '250px', maxWidth: '300px' }} width="30%" height="58" viewBox="0 0 30% 64" fill="none">
                  <path d="M0 0H350V64H14.0374L0 47.5V0Z" fill="#F8EF00"/>
                </svg>
                <div className="btn-text px-3 pt-3 pb-3 position-absolute top-0  text-black svg_decor_p ">
                  <p onClick={copyPasswordToClipboard}>Copy Password_</p>
                  
                </div>
                
                <div className="s_-2">
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={copyPasswordToClipboard} width="10%" height="24" viewBox="0 0 10% 24" fill="none">
                  <path d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12H4.6875" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                  </svg>
                </div>
                </div>
              
            </div>
          
          <div className="slider_ mt-5 d-flex gap-2 align-items-center">
            <input 
              type="range"
              min={3}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              style={{ minWidth: '210px', maxWidth: '500px' }}
              
              />
            <label>
              {length}
            </label>
          </div>

          <div className="row mt-2 mb-1">
            <div className="col-lg-6 col-md-5 col-12 d-flex gap-2 align-items-center" style={{ minWidth: '280px'}}>
              <input 
            type="checkbox"
            value={uppercaseAllowed}
            onChange={() => setUppercaseAllowed(prev => !prev)}
            checked = {uppercaseAllowed}
            />
            <label>
              Uppercase letters
            </label>
            </div>

            <div className="col-lg-6 col-md-5 col-12 d-flex gap-2 align-items-center" style={{ minWidth: '280px'}}>
            <input 
          type="checkbox"
          value={lowercaseAllowed}
          onChange={() => setLowercaseAllowed(prev => !prev)}
          checked={lowercaseAllowed}
          />
          <label>
            Lowercase letters
          </label>
            </div>
          </div>
          
          <div className="row">
          <div className="col-md-5 col-lg-6 col-12 d-flex gap-2" style={{ minWidth: '280px'}}>
            <input 
          type="checkbox"
          value={numberAllowed}
          onChange={() => setNumberAllowed(prev => !prev)}
          checked={numberAllowed}
          />
          <label>
            Numbers
          </label>
            </div>
            <div className="col-md-5 col-lg-6 col-12 d-flex gap-2" style={{ minWidth: '280px'}}>
            <input 
          type="checkbox"
          value={characterAllowed}
          onChange={() => setCharacterAllowed(prev => !prev)}
          checked={characterAllowed}
          />
          <label>
            Symbols
          </label>
            </div>
          </div>
          
          </div>
      </div>
      
      
    </>
  )
}

export default App
