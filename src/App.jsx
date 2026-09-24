import React from 'react'
import TopBar from './Compnents/Topbar'
import Navbar from './Compnents/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Compnents/routes/app.routes'
import Footer from './Compnents/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <Navbar/>
    
    <AppRoutes/>
    <Footer/>
    </BrowserRouter>

    
    
    
    
  )
}

export default App