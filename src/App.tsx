import React from "react"
import Navbar from "./components/Navbar"

import { Route, BrowserRouter as Router, Routes  } from "react-router-dom"


import Home from './pages/Home';
import Footer from "./components/footer/footer";

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/"  Component={Home}  />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
