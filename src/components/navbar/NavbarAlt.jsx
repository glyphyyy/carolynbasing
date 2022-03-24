import "./navbarAlt.scss";
import React from 'react'

export default function NavbarAlt({ menuOpen, setMenuOpen }) {
 return (
    <div className={"navbar-alt " + (menuOpen && "active")}>
        <div className="logo-container">
            <h1>CAROLYN</h1>
            <h2>BASING</h2>
        </div>
        <div className="wrapper">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}
