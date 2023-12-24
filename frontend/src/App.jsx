import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FamilyTreePage from './pages/FamilyTreePage/FamilyTreePage'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/family-tree" element={<FamilyTreePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
