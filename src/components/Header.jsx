import { useState, useEffect } from "react";
import Nav from "./Nav";
import { animateHamburger } from "../utils/hamburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
      // Use the hamburger animation when the component mounts
      animateHamburger();
    }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>

      <div id="b3" className="box" onClick={toggleMenu}>
        <svg id="i3" className="icon" viewBox="0 0 100 100">
          <path id="top-line-3" d="M30,37 L70,37 Z"></path>
          <path id="middle-line-3" d="M30,50 L70,50 Z"></path>
          <path id="bottom-line-3" d="M30,63 L70,63 Z"></path>
        </svg>
      </div>

      <div className={isMenuOpen? "nav-container show" : "nav-container"}>
        <Nav />
      </div>
      

    </header>
  );
};

export default Header;
