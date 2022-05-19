import "./about.scss";
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import arrow from "../../assets/arrow.svg"

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

export default function About() {
  const height = useWindowSize();
  const appHeight = () => document.documentElement.style.setProperty('--app-height', `${height}px`);
  appHeight();
  return (
    <div className="about">
        <div className="hero">
          <Link to="#content"><img src={arrow} alt="Arrow"/></Link>
        </div>
        <div className="content" id="content">
          <h1>About</h1>
          <p>
            I am a glass artist and designer maker. After graduation with MA Glass in 2016 I was lucky enough to rent 
            a studio at The National Glass Centre, Sunderland, giving me the opportunity to feed my fascination with this material. 
            I use glass to create form and imagery using mainly mould making, kiln casting, cold working techniques and photography. 
            I am seeking the otherness of glass, its ability to gather light and to encapsulate and distort imagery.
            <span/>
            My latest pieces are a continuation of a body of work entitled “Signa Vitae”, focussing on the ambiguity and ubiquity of 
            natural forms and temporal relationship between glass making and photographic imagery; two creative fields linked by the 
            manipulation a singular material, light.
            <span/>
            If you would like to know more about my practice, please follow the <a href="https://scottishglasssociety.com/resources/sgsgatgas1/">link.</a>
            <span/>
            I also accept private commissions, please contact me using the link on the <NavLink className="nav" to= "/contact" activeClassName="active-link">contacts page.</NavLink>
          </p>
        </div>
        <div className="highlight">
          <h1>Highlights</h1>
          <p>
            2021 Life Forms, Contemporary Glass Society Exhibition, Pyramid Gallery, York, UK
            <span/>
            2020 <a href="https://scottishglasssociety.com/resources/sgsgatgas1/">20:20 Vision – Sottish Glass Society at Glass Arts Society online presentation</a>
            <span/>
            2019 On the Edge, Scottish Glass Society Touring Exhibition North Lands Creative, Glasgow Trades Hall Lybster and Glasgow, UK
            <span/>
            2019 Identity Competition Finalist Exhibition (Handmade in Britain) Ashmolean Museum, Oxford, UK
            <span/>
            2019 Glorious Glass, Contemporary Glass Society Exhibition The World of Glass St Helens, Liverpool, UK
            <span/>
            2019 Glorious Glass, Contemporary Glass Society Exhibition Bucks County Museum Aylesbury United Kingdom 2018 Glorious Glass, Scottish Glass Society Trades Hall Glasgow, UK
            <span/>
            2018 Mackies' Workshop, Installation and Public Engagement Mackies' Workshop, Sunderland, UK
            <span/>
            2018 Glassheap Challenge, Installation, Roker Pier Lighthouse, Sunderland, UK
            <span/>
            2016 Glasshaus XI Exhibition, Pardon Mill, Harlow, UK
            <span/>
            2016 New Designers Exhibition, Islington Business Centre, London, UK
            <span/>
            2016 Material Matters, MA Graduation Show, National Glass Centre, Sunderland, UK
          </p>
        </div>
    </div>
  )
}
