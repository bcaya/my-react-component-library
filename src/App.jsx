import { useState } from 'react'
import Button from './components/Button/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button size="lg">BUtttonnn</Button>
        <p>
          Youre components go here! 
        </p>
      </div>
    </>
  )
}

export default App
