import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('setColor')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
      
      <button onClick={()=>setColor('Red')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Red'}}> Red </button>


      <button onClick={()=>setColor('Green')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Green'}}> Green </button>
      
      <button onClick={()=>setColor('Black')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Black'}}> Black </button>
      
      <button onClick={()=>setColor('Blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Blue'}}> Blue </button>
      
      <button onClick={()=>setColor('Violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Violet'}}> Violet </button>
      
      <button onClick={()=>setColor('Indigo')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
      style={{backgroundColor :'Indigo'}}> Indigo </button>
        </div>
      </div>
      </div>
      </>
  )
}

export default App
