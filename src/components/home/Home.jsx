import "./home.scss";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.svg"
import gallery from "../../assets/gallery.svg"
import contact from "../../assets/mail.svg"

function useWindowSize() { //Window resize function, checks height of browser and resizes height appropriately
  const [size, setSize] = useState([window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight]);
    };
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize")
    };
  }, []);
  return size;
}

export default function Home() {
  const height = useWindowSize();
  const appHeight = () => document.documentElement.style.setProperty('--app-height', `${height}px`);
  appHeight();
  return (
    <div className="home">
        <div className="logo-container">
          <h1>CAROLYN</h1>
          <h2>BASING</h2>
          <h3>Contemporary Glass Artist <span>and Designer</span></h3>
        </div>
        <div className="button-container">
          <ul>
            <li id="instagram"><a href="https://www.instagram.com/carolynbasing/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram"/></a></li>
            <li id="gallery"><Link to="/gallery"><img src={gallery} alt="Gallery"/></Link></li>
            <li id="contact"><Link to="/contact"><img src={contact} alt="Contact"/></Link></li>
          </ul>
        </div>
        <footer>
          <h4>Carolyn Basing &copy; 2022</h4>
        </footer>
    </div>
  )
}
