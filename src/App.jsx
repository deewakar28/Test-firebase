import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home'
import RoomPage from './pages/room'
import './App.css'
import Mentee from './pages/Signin/Mentee'
import Mentor from './pages/Signin/Mentor'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/Mentor' element={<Mentor/>}/>
        <Route path='/Mentee' element={<Mentee/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>} />
      </Routes>
    </>
  )
}

export default App
