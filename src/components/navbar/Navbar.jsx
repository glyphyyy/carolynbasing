import "./navbar.scss";
import React from 'react'

export default function Navbar({ menuOpen, setMenuOpen }) {
 return (
    <div className={"navbar " + (menuOpen && "active")}>
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
