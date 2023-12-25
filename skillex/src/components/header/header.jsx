import React, { useState, useEffect } from "react";
import "./header.scss";
import MainLogo from "../../assets/skillex-logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".main-nav");
      const headerHeight = header.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle class to body to disable scrolling when menu is open
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header className={`header ${isSticky ? "main-nav--sticky" : ""}`}>
      <nav className='main-nav'>
        <div className="main-nav__logo">
          <a href="/">
            {" "}
            <img src={MainLogo} alt="Logo" />
          </a>
        </div>
        <div className="main-nav__toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className={`main-nav__links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" className="main-nav__link-item">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link-item">
                Works For
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link-item">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="main-nav__link-item">
                Resources
              </a>
            </li>
            <li>
              <a href="/about" className="main-nav__link-item">
                About
              </a>
            </li>
          </ul>
          <div className="main-nav__user">
            <a href="" className="main-nav__signup">
              Sign up
            </a>
            <a href="" className="main-nav__login">
              Log In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
