import React, { useState } from "react";
import "./Header.css";
import { Link,NavLink } from "react-router-dom";


function Header() {
  const [click, setClick] = useState(false);
  // const [navmenu, setNavmenu] = useState(false);

  const handleClick = () => setClick(false);


  return (
    <>
      <header className="header">
          <div className="header-main">
            <div className="logo">
              <img  decoding="async"
                src="https://res.cloudinary.com/dag9fwtvk/image/upload/v1693359337/img/logo_osuq9q.jpg"
                alt="" 
                >
                </img>
            </div>
            <div className="open-nav-menu"  onClick={() => setClick(true)}>
              <span />
            </div>
            <div className="menu-overlay" style={{visibility:click ? "visible" : "hidden"  }}/>
            <nav className="nav-menu" style={{right:click ? 0  : "-100%" } }>
              <div className="close-nav-menu" onClick={handleClick}>
               <i class="fa-solid fa-xmark"></i>
              </div>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/">Home</NavLink>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#i">
                    Products <i className="plus" />
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <NavLink onClick={handleClick} to="/man">Man</NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink onClick={handleClick} to="/woman">Woman</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/About">About</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink onClick={handleClick} to="/Contact">Contact</NavLink>
                </li>
                {/* <li className="menu-item menu-item-has-children" id="lan">
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
                </li> */}
              </ul>
            </nav>
          </div>
      </header>
    </>
  );
}

export default Header;
