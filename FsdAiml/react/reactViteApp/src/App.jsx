import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile1 from "./components/Profile1";


function App() {
 

  return (
    <div className='container'>
      <h2>Welcome to React App</h2>
      <div>
        {/* <Profile /> */}
        <Profile1 />
      </div>
    </div>
  )
}

export default App