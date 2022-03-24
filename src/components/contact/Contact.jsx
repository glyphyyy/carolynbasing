import "./contact.scss";
import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import arrow from "../../assets/arrow.svg"
import instagram from "../../assets/instagram.svg"
import contact from "../../assets/mail.svg"

function useWindowSize() {
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

export default function Contact() {
  const height = useWindowSize();
  const appHeight = () => document.documentElement.style.setProperty('--app-height', `${height}px`);
  appHeight();
  return (
    <div className="contact">
        <div className="hero">
          <Link to="#content"><img src={arrow} alt="Arrow"/></Link>
        </div>
        <div className="content" id="content">
          <div className="top-container">
            <h1>Contact</h1>
            <p>
              Please feel free to contact me using any of these methods:
            </p>
            <div className="social-container">
              <div className="wrapper"><img src={contact} alt="email"/></div>
              <a href="mailto:enquiries@carolynbasing.uk" target="_blank" rel="noopener noreferrer">enquiries@carolynbasing.uk</a>
            </div>
            <div className="social-container">
              <div className="wrapper"><img src={instagram} alt="Instagram"/></div>
              <a href="https://www.instagram.com/carolynbasing/" target="_blank" rel="noopener noreferrer">@carolynbasing</a>
            </div>
          </div>
          <div className="bottom-container">
            <div className="bottom-image" alt="Contact image"/>
          </div>
        </div>
    </div>
  )
}
