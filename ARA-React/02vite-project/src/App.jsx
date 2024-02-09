import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const increase_val = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  const decrease_val = () => {
    if (counter == 0){
      setCounter(counter)
    }
    else{
      setCounter(counter - 1)

    }
  }

  return (
    <>
      <h1>My Name is ARA</h1>
      <h3>Counter: {counter}</h3>

      <button onClick={increase_val }>Increase Value</button>
      <button onClick={decrease_val}>Decrease Value</button>
    </>
  )
}

// function check(){
//   console.log('Button is clicked!', Math.random());
// }

export default App
