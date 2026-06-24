import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button } from '../@/components/ui/button'

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <p className="text-4xl text-cyan-500">{message || 'Loading...'}</p>
      <Button variant="default" size="default">Click Me</Button>
    </div>
   
  )
}

export default App
