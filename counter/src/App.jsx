import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)

  const addvalue=()=>{
    //counter++
    //setCounter(counter)
    if(counter<20){
      setCounter(counter++)
    }
    else{
      setCounter(counter=20)
    }
  }
  const decreaseValue=()=>{
    //counter--
    //setCounter(counter)
    if(counter<0){
      setCounter(counter=0)
    }
    else{
      setCounter(counter--)
    }
  }
  
 // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}> increment</button>
      <button onClick={decreaseValue}>decrement</button>
    </>
  )
}

export default App
