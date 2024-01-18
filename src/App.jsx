import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home'
import RoomPage from './pages/room'
import './App.css'
import Mentee from './pages/Signin/Mentee'
import Mentor from './pages/Signin/Mentor'
import Home1 from './pages/Home1'
import Payment from './pages/Payment'
import Test from './components/Test'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/Mentor' element={<Mentor/>}/>
        <Route path='/Mentee' element={<Mentee/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>} />
        <Route  path='/home1' element={<Home1/>}/>
        <Route  path='/payment' element={<Payment/>}/>
        <Route  path='/Admin' element={<Test/>}/>
      </Routes>
    </>
  )
}

export default App
