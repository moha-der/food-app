import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}  />
        <Route path='/foods' element={<AllFoods/>}  />
    </Routes>
  )
}

export default Routers;


