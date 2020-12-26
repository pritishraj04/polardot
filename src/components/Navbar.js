import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Button } from "./Button";
import { IconContext } from "react-icons";

// <--  Icons import Start -->
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
// <--  Icons import End -->

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src="images/logo.svg"
              alt="PolarDot"
              onClick={closeMobileMenu}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <IconContext.Provider value={{ className: "fa-bars" }}>
                <div>
                  <ImCross />
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ className: "fa-times" }}>
                <div>
                  <GiHamburgerMenu />
                </div>
              </IconContext.Provider>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn-outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
