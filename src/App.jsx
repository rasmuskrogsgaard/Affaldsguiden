import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { Frontpage } from '../src/pages/Frontpage/Frontpage'
import Sortering from './pages/Sortering/Sortering'
import { Genbrug } from '../src/pages/Genbrugspage/Genbrug'
import { Bestilling } from '../src/pages/Bestilling/Bestilling'
import { Login } from '../src/pages/Login/Login'
import { Layout } from '../src/layout/Layout'
import Details from './pages/Details/Details'
function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Frontpage/>} />
      <Route path='/sortering' element={<Sortering/>} />
      <Route path="/section/:id" element={<Details />} />
      <Route path='/genbrugsstationer' element={<Genbrug/>} />
      <Route path='/bestil' element={<Bestilling/>} />
      <Route path='/login' element={<Login/>} />
      </Route>
     </Routes>
    </>
  )
}

export default App
