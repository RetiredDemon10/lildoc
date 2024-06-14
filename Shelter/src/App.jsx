import React from "react"
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Pages/Home/Home"
import Contact from "./Components/Pages/Contact/Contact"
import About from "./Components/Pages/About/About"
import Navbar from "./Components/common/Navbar"
import Dashboard from "./Components/Dashboard/Dashboard"
import ListingPage from "./Components/Pages/ListingPage/ListingPage"
import Services from "./Components/Pages/Services/Services";
import Register from "./Components/Authorization/Register/Register";
import Login from "./Components/Authorization/Login/Login";










function App() {
 
  return (
    <Router>
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listing" element={<ListingPage />} /> 
          <Route path="/contact" element={<Contact />} />    
          <Route path="/services" element={<Services />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
    
          

        </Routes>
      </main>
      {/* <Searchbar/>

      <Hero/>
     <Featured/>
     <Listing/>
     <Cta/>
      <Testimonial/>
      <Footer/> */}


    
    </div>
  </Router>
    // <div className="App">
    //   <Searchbar/>
    //   <Hero />
    //   <Featured />
    //   <Listing />
    //   <Cta/>
    //   <Testimonial/>
    //   <Footer/>
    // </div>
  )
}

export default App
