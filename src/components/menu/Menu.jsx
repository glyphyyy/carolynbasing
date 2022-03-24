import "./menu.scss"
import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink className="nav" to= "/" activeClassName="active-link">Home</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink className="nav" to= "/about" activeClassName="active-link">About</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink className="nav" to= "/gallery" activeClassName="active-link">Gallery</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <NavLink className="nav" to= "/contact" activeClassName="active-link">Contact</NavLink>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="https://www.instagram.com/carolynbasing/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
            </ul>
        </div>
    )
}