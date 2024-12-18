import React from 'react'
import Container from './Components/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
