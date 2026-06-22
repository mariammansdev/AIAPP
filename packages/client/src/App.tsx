import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    debugger
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error))
  }, [])

  return (
    <p style={{fontSize: "60px"}}>{message || 'Loading...'}</p>
  )
}

export default App
