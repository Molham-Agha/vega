import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../images/img/logo.jpg"

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <img  decoding="async"
                src= {logo2}
                alt="" ></img>
            </div>
            <div className="open-nav-menu">
              <span />
            </div>
            <div className="menu-overlay" />
            <nav className="nav-menu">
              <div className="close-nav-menu">
               <i class="fa-solid fa-xmark"></i>
              </div>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/">Home</NavLink>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link href="#i" data-toggle="sub-menu">
                    Products <i className="plus" />
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <NavLink onClick={handleClick} to="/Forman">for man</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink onClick={handleClick} to="/Forwoman">for woman</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/About">About</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/Contact">Contact</NavLink>
                </li>
                <li className="menu-item menu-item-has-children" id="lan">
                  <Link href="#i" data-toggle="sub-menu">
                    Languages <i className="plus" />
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item" id="ar">
                      <Link href="#i">Arabic</Link>
                    </li>
                    <li className="menu-item" id="tu">
                      <Link href="#i">Turkish</Link>
                    </li>
                    <li className="menu-item" id="en">
                      <Link href="#i">English</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
