import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import Mainlayout from './component/Mainlayout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mainlayout" element={<Mainlayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
  

