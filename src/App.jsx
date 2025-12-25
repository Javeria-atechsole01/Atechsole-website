import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './component/Navbar.jsx'
import FloatingNav from './component/FloatingNav.jsx'
import ContactModal from './component/ContactModal.jsx'
import CustomCursor from './component/CustomCursor.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Blog from './component/Blog.jsx'
import Portfolio from './component/Portfolio.jsx'
import Events from './component/Events.jsx'
import Photos from './component/Photos.jsx'
import Videos from './component/Videos.jsx'
import FloatingContact from './component/FloatingContact.jsx'

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const isNavbarHidden = ['/about', '/blog', '/portfolio', '/events', '/gallery/photos', '/gallery/videos'].includes(location.pathname);

  return (
    <div>
      <CustomCursor />
      {!isNavbarHidden && <Navbar onContactClick={openContact} />}
      
      <Routes>
        <Route path="/" element={<Home openContact={openContact} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery/photos" element={<Photos />} />
        <Route path="/gallery/videos" element={<Videos />} />
      </Routes>

      <FloatingNav />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <FloatingContact />
     
    </div>
  )
}

export default App
