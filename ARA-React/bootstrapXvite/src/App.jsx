import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj1 = {
    name:'AbdulRehman',
    age:21
  }
  return (
    <>
      <Card name={obj1.name} age='15' />
      <Card name='Ammar'/>
    </>
  )
}

export default App
