import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <main className='outer-container'>
      <div className='inner-container'>
        <Card/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
