import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleClick = () => setIsOpen(false); // Close dropdown after selection

  return (
    <>
      <nav className="navbar">
          <div className="navbar-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              ☰
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                <a onClick={handleClick}>About</a>
                <a onClick={handleClick}>Blog</a>
                <a href="#services" onClick={handleClick}>
                  Services
                </a>
                <a href="#benefits" onClick={handleClick}>
                  Benefits
                </a>
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </div>
            )}
          </div>
          <div className="navbar-links">
            <a>About</a>
            <a>Blog</a>
            <a href="#services">Services</a>
            <a href="#benefits">Benefits</a>
            <a href="#contact">Contact</a>
          </div>
      </nav>
    </>
  );
}

export default NavBar;
