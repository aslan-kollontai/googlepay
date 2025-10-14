import { useEffect, useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleClick = () => setIsOpen(false); // Close dropdown after selection

  const screenWidth = useWindowSize().width!;
  const responsive = screenWidth <= 500;
  return (
    <>
      <nav className="navbar">
        {responsive ? (
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
        ) : (
          <div className="navbar-links">
            <a>About</a>
            <a>Blog</a>
            <a href="#services">Services</a>
            <a href="#benefits">Benefits</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}

function useWindowSize() {
  type Size = {
    width: number | undefined;
    height: number | undefined;
  };

  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default NavBar;
