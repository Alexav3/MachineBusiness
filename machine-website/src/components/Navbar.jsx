import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <h1 className="logo">A&V Precise Manufacturing</h1>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#/" onClick={closeMenu}>
            Home
          </a>
          <a href="#/services" onClick={closeMenu}>
            Services
          </a>
          <a href="#/gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#/about" onClick={closeMenu}>
            About
          </a>
          <a href="#/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;
