import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('black')

  const changeColor = (clr) =>{
    setColor(clr)
  }

  return (

      <div className='bg_body ' style={{backgroundColor: color}}>
        <div className="row clr-tray  bg-white rounded">
          <div className="d-flex flex-wrap text-white text-center align-items-center justify-content-between">
            <div onClick={() => changeColor("#ffc107")} className="col-md-2 col-lg-2 rounded bg-warning text-black">Yellow</div>
            <div onClick={() => changeColor("#0d6efd")} className="col-md-2 col-lg-2    rounded bg-primary">Blue</div>
            <div onClick={() => changeColor("black")} className="col-md-2 col-lg-2    rounded bg-black ">Black</div>
            <div onClick={() => changeColor("#dc3545")} className="col-md-2 col-lg-2    rounded bg-danger">Red</div>
            <div onClick={() => changeColor("grey")} className="col-md-2 col-lg-2    rounded bg-secondary">Grey</div>
            <div onClick={() => changeColor("aqua")} className="col-md-2 col-lg-2    rounded text-black" style={{backgroundColor:"aqua"}}>Aqua</div>
          </div>
          

        </div>
      </div>
  )
}

export default App
