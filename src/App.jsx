import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ManageBooking from './components/ManageBooking/ManageBooking'
import BusHireForm from './components/BusHireForm/BusHireForm'
import TrackCargo from './components/TrackCargo/TrackCargo'
import Pagenot from './components/Pagenot/Pagenot'

function App() {


  return (
    <>
  <BrowserRouter>
   <Header/>

   <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/manage-booking' element={<ManageBooking/>}></Route>
    <Route path='/bus-hire' element={<BusHireForm/>}></Route>
    <Route path='/track-cargo' element={<TrackCargo/>}></Route>
    <Route path='/*' element={<Pagenot/>}></Route>
   </Routes>
  
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
