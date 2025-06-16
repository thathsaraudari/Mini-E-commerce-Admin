import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./" alt="Logo" className="logo" />
        <h1 className="brand-name">MyWebsite</h1>
      </div>
    </nav>
  )
}

export default App
