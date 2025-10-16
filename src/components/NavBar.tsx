import { useState } from "react";
import { Link } from "react-router";

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
              <Link to="about" onClick={handleClick}>
                About
              </Link>
              <Link to="blog" onClick={handleClick}>
                Blog
              </Link>
              <Link to="services" onClick={handleClick}>
                Services
              </Link>
              <Link to="contact" onClick={handleClick}>
                Contact
              </Link>
            </div>
          )}
        </div>
        <div className="navbar-links">
          <Link to="about">About</Link>
          <Link to="blog">Blog</Link>
          <Link to="services">Services</Link>
          <Link to="contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
