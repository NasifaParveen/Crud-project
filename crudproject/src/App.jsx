import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TopBar from './components/TopBar'
import DataTable from './components/DataTable'
import AddForm from './components/AddForm'
import { Route, Routes } from 'react-router-dom'
import EditForm from './components/EditForm'

function App() {

  return (
    <>
      <TopBar></TopBar>
      <Routes>
        <Route path='/' element={<DataTable/>}> </Route>
        <Route path='/Register' element={<AddForm/>}></Route>
        <Route path='/edit/:id' element={<EditForm/>}></Route>
        </Routes>
    </>
  )
}

export default App
