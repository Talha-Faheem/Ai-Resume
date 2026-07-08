import { useState } from 'react'
import './App.css'
import MainLayout from './Layout/mainLayout/mainLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full">
      <MainLayout/>
    </div>
  )
}

export default App
