import { useState } from 'react'
import './App.css'
import Navbar from "./Navbar.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
