import './app.scss';
import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import NavbarAlt from "./components/navbar/NavbarAlt";
import Menu from "./components/menu/Menu";
import MenuAlt from "./components/menu/MenuAlt";
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Admin from "./components/admin/Admin";
import { UserAuthContextProvider } from './contexts/UserAuthContext';
import Gallery from './components/gallery/Gallery';
import GalleryModal from './components/galleryModal/GalleryModal';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/admin" element={<><ProtectedRoute><NavbarAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Admin/></ProtectedRoute></>} />
        <Route path="/login" element={<><NavbarAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Login/></>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/></>} />
        <Route path="/about" element={<><NavbarAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <About/></>} />
        <Route path="/contact" element={<><NavbarAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Contact/></>} />
        <Route path="/gallery" element={<><NavbarAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuAlt menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Gallery setSelectedImg={setSelectedImg} />
        {selectedImg && <GalleryModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}</>} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
