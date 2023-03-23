import React, { useCallback, useState, memo } from "react";
import "../styles/navbar.scss";


import { MdMenu } from "react-icons/md";

const Navbar = memo(({ handleScroll }) => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">Phu's Portfolio </div>
          <a style={{
            color: "gray",
            fontSize: "15px",
            position: "relative",
            left: "6.5%",
          }} target="_blank"
            href="https://drive.google.com/file/d/1-wTDTyXrhGw2qIIkHMPOTkdBp1eknANd/view?usp=sharing">
            Resume
          </a>

          <ul className="navbar__menu">
            <li>
              <button onClick={() => handleScroll("about")}>About me</button>
            </li>
            <li>
              <button onClick={() => handleScroll("skills")}>Skills</button>
            </li>
            <li>
              <button onClick={() => handleScroll("portfolio")}>
                Portfolio
              </button>
            </li>
          </ul>

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {active && (
        <div className="toggle__menu">
          <ul>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  click();
                }}
              >
                About me
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("skills");
                  click();
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("portfolio");
                  click();
                }}
              >
                Portfolio
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Navbar;
