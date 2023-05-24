import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/services" element={<Services />}/>
         <Route path="/reviews" element={<Reviews />}/>
         <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App