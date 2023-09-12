import React from 'react'
import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import EmployeesList from './components/EmployeesList'
import Dropdown from './components/Dropdown'
// import Home from './components/Home'
// import Create from './components/Create'

function App() {
  

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/employeeslist/:id' element={<Create/>}></Route>
      <Route path="/employeeslist"  element={<EmployeesList/>} />
      <Route path="/employeeslist/:id"   />
      <Route path='/dropdown'  element={<Dropdown/>}  />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
