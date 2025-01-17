import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}
