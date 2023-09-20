import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const niz = ["jedan", "dva", "tri"]
    return(
      <>
      {
        niz.map(stringBroj => <li>{stringBroj}</li>)
      }
      </>
  )
}

export default App
