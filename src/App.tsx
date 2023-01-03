import { useState } from 'react'
import './App.css'
import { list } from './constants';

function App() {
  const [name, setName] = useState('')

  const handleClick = () => {
    const random = Math.floor(Math.random() * list.length);
    setName(list[random])
  }

  return (
    <div className="App">
      <div className='block'>
        <button className='button' onClick={handleClick}>
          Generate Sprint Name
        </button>
        <h2 className='title'>{name}</h2>
      </div>
    </div>
  )
}

export default App
